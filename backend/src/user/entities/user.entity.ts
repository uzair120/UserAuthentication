import { ObjectId } from 'mongoose';
import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ database: 'mongo' })
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
