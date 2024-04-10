import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { fd_form_field } from 'src/entity/fd_form_field.entity';
import { Repository } from 'typeorm';
import { fd_form_field_interface } from 'src/Interface/fd_form_field.interface';


@Injectable()
export class fdformfieldservice {
  constructor(
    @InjectRepository(fd_form_field)
    private userformRepository: Repository<fd_form_field_interface>,
  ) {}
create(todo: fd_form_field_interface): Promise<fd_form_field_interface> {
  
    return this.userformRepository.save(
      this.userformRepository.create(todo)
    );
   
  }
findAll(): Promise<fd_form_field_interface[]> {
    return this.userformRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .update()
    .set({
      formid: data.form_id,
      fieldname:data.field_name,
      fieldtype:data.field_type
    })
    .where('id = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .delete()
    .from(fd_form_field)
    .where('id = :id', { id })
    .execute()
  }

  findOneByformid(formid: string): Promise<fd_form_field_interface> {
    return this.userformRepository.findOne({ where: { formid } });
}
  
}