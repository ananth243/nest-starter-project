import { IsNotEmpty } from 'class-validator';

export class CreateSettingDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  data_type: string;

  @IsNotEmpty()
  account_id: string;

  @IsNotEmpty()
  value: string | number | boolean | object;
}
