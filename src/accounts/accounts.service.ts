import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import Account from './account.model';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) {}
  async create({ name }: CreateAccountDto) {
    return this.accountModel.create({ name });
  }

  async findOne(id: number) {
    return this.accountModel.findByPk(id);
  }
}
