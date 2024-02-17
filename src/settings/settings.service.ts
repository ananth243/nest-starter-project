import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import Setting from '../models/setting.model';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting)
    private settingModel: typeof Setting,
  ) {}

  async create({ name, account_id, data_type, value }: CreateSettingDto) {
    return this.settingModel.create({ name, account_id, data_type, value });
  }

  async findOne(id: number) {
    return this.settingModel.findByPk(id);
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    return this.settingModel.update({ ...updateSettingDto }, { where: { id } });
  }

  async remove(id: number) {
    return this.settingModel.destroy({ where: { id } });
  }
}