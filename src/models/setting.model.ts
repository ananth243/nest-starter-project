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
import Account from 'src/models/account.model';

@Table({
  indexes: [{ fields: ['account_id', 'name'], unique: true }],
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
  data_type: 'number' | 'string' | 'object' | 'boolean';

  @AllowNull(false)
  @Column(DataType.TEXT)
  value: string;

  @ForeignKey(() => Account)
  @Column(DataType.INTEGER)
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
