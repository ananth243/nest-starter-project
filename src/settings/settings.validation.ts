import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsBodyValidation implements PipeTransform {
  validateValue(dataType: string, value: any): boolean {
    if (dataType === 'string') {
      return typeof value === 'string';
    } else if (dataType === 'boolean') {
      return value === true || value === false;
    } else if (dataType === 'number') {
      return typeof value === 'number';
    } else if (dataType === 'object') {
      return typeof value === 'object';
    }
    return false;
  }

  transform(
    body: CreateSettingDto | UpdateSettingDto,
    metadata: ArgumentMetadata,
  ) {
    if (!this.validateValue(body.data_type, body.value)) {
      throw new BadRequestException(
        `Invalid value for data type ${body.data_type}`,
      );
    }
    if (typeof body.value === 'object') body.value = JSON.stringify(body.value);
    return body;
  }
}
