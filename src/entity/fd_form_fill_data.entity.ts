import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('fd_form_fill_data')
export class fd_form_fill_data  {
 @PrimaryColumn()
  id:number;

  @Column()
  form_entry_id: number;

  @Column()
  form_field_id:number;
  
  @Column()
  value:string;
}