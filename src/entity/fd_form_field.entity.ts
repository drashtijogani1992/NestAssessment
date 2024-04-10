import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('fd_form_field')
export class fd_form_field  {
 @PrimaryColumn()
  id:number;

  @Column()
  formid: string;

  @Column()
  fieldname:string;

  @Column()
  fieldtype:string;
}