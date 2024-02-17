import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingsInterceptor } from './settings.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@UseInterceptors(SettingsInterceptor)
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  async create(@Body() createSettingDto: CreateSettingDto) {
    try {
      return await this.settingsService.create(createSettingDto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new BadRequestException(`Setting for the account exists`);
      }
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.settingsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSettingDto: UpdateSettingDto,
  ) {
    try {
      return await this.settingsService.update(id, updateSettingDto);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new BadRequestException('Setting for the account exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.settingsService.remove(id);
  }
}
