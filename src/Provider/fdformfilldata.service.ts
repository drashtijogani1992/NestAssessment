import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { fd_form_fill_data } from 'src/entity/fd_form_fill_data.entity';
import { Repository } from 'typeorm';
import { fd_form_fill_data_interface } from 'src/Interface/fd_form_fill_data.interface';

@Injectable()
export class fdformsfilldataervice {
  constructor(
    @InjectRepository(fd_form_fill_data)
    private userformRepository: Repository<fd_form_fill_data_interface>,
  ) {}
create(todo: fd_form_fill_data_interface): Promise<fd_form_fill_data_interface> {
  
    return this.userformRepository.save(
      this.userformRepository.create(todo)
    );
  }
findAll(): Promise<fd_form_fill_data_interface[]> {
    return this.userformRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .update()
    .set({
      form_entry_id: data.form_entry_id,
      form_field_id:data.form_field_id,
      value:data.value
    })
    .where('id = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.userformRepository
    .createQueryBuilder()
    .delete()
    .from(fd_form_fill_data)
    .where('id = :id', { id })
    .execute()
  }
}