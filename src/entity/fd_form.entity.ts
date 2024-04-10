import { Entity, Column, PrimaryColumn } from 'typeorm';
 
@Entity('fd_form')
export class fd_form  {
  @PrimaryColumn()
  id:string;

  @Column()
  title: string;
 
  
}