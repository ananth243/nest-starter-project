import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateSettingDto } from './dto/create-setting.dto';

@Injectable()
export class SettingsInterceptor implements NestInterceptor {
  validateValue(dataType: string, value: any): boolean {
    if (dataType === 'string') {
      return typeof value === 'string';
    } else if (dataType === 'boolean') {
      return value === true || value === false;
    } else if (dataType === 'number') {
    } else if (dataType === 'null' || dataType === 'undefined') {
      return dataType === value;
    }
    return false;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.method === 'PATCH' || request.method === 'POST') {
      const { data_type, value } = request.body as CreateSettingDto;
      if (!this.validateValue(data_type, value))
        throw new BadRequestException(
          'Inconsistent type between value and data_type',
        );
    }
    return next.handle();
  }
}
