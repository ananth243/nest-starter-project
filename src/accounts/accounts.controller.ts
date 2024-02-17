import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    try {
      return await this.accountsService.create(createAccountDto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError')
        throw new BadRequestException(error.message);
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const account = await this.accountsService.findOne(id);
    if (!account) throw new NotFoundException('Account does not exist');
    return account;
  }
}
