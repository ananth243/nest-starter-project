import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsSameTypeAs } from './validators/datatype.validator';
import { SettingsValueType } from '../settings.type';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['string', 'number', 'boolean', 'object'])
  data_type: string;

  @IsInt()
  account_id: number;

  @IsNotEmpty()
  @IsSameTypeAs('data_type', {
    message: 'value should be same type as data_type',
  })
  value: SettingsValueType;
}
