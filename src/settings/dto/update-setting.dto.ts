import { PartialType } from '@nestjs/mapped-types';
import { CreateSettingDto } from './create-setting.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { IsSameTypeAs } from './validators/datatype.validator';
import { SettingsValueType } from '../settings.type';

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
  @IsEnum(['string', 'object', 'boolean', 'object'])
  data_type: string;

  @IsNotEmpty()
  @IsSameTypeAs('data_type', {
    message: 'value should be same type as data_type',
  })
  value: SettingsValueType;
}
