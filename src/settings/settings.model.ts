import {  NonAttribute } from 'sequelize';
import {
  BelongsTo,
  Column,
  Model,
  Table,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  AllowNull,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import Account from 'src/accounts/account.model';

@Table({
  tableName: 'settings',
  indexes: [{ fields: ['account_id', 'name'], unique: true }],
  defaultScope: {
    attributes: { exclude: ['deleted_at'] },
  },
})
export default class Setting extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @AllowNull(false)
  @Column({ type: DataType.ENUM('number', 'string', 'object', 'boolean') })
  data_type: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  value: string;

  @ForeignKey(() => Account)
  @Column(DataType.INTEGER)
  account_id: number;

  @BelongsTo(() => Account)
  account: NonAttribute<Account>;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
