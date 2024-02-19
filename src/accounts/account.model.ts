import { NonAttribute } from 'sequelize';
import Setting from '../settings/settings.model';
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

@Table({
  tableName: 'accounts',
  indexes: [{ fields: ['name'], unique: true }],
  defaultScope: {
    attributes: { exclude: ['deleted_at'] },
  },
})
export default class Account extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Unique({
    name: 'UniqueError',
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
  settings: NonAttribute<Setting[]>;
}
