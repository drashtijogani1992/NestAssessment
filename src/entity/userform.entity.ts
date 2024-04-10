import { Entity, Column, PrimaryColumn } from 'typeorm';
 
@Entity('user_form')
export class user_form  {
  @PrimaryColumn()
  id:number;

  @Column()
  title: string;
 
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isGraduate: boolean;

  @Column()
  uuid: string;
}