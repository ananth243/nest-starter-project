import Setting from './setting.model';
import {
  Column,
  Model,
  Table,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  HasMany,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

@Table
export default class Account extends Model {
  @Unique({
    name: 'UniqueException',
    msg: 'Account with this name already exists',
  })
  @AllowNull(false)
  @Column
  name: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;

  @HasMany(() => Setting)
  settings: Setting[];
}
