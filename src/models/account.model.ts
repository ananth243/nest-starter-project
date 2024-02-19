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
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export default class Account extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Unique({
    name: 'UniqueException',
    msg: 'Account with this name already exists',
  })
  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @HasMany(() => Setting)
  settings: Setting[];
}
