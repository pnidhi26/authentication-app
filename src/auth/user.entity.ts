import { Entity, Column } from 'typeorm';

@Entity()
export class UserR {

  @Column()
  name: string;

  @Column()
  email: string;

}