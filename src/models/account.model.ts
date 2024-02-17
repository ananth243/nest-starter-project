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
} from 'sequelize-typescript';

@Table
export default class Account extends Model {
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
