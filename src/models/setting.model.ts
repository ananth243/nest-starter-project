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
} from 'sequelize-typescript';
import Account from 'src/models/account.model';

@Table({
  indexes: [{ fields: ['account_id', 'name'], unique: true }],
})
export default class Setting extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  data_type: string;

  @AllowNull(false)
  @Column
  value: string;

  @ForeignKey(() => Account)
  @Column
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  @Column
  deletedAt: Date;
}
