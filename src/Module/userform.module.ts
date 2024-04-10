import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_form } from 'src/entity/userform.entity';
// import { userformController } from '../controller/userform.controller';
// import { userformservice } from '../provider/userform.service';
import { fdformController } from 'src/Controller/fdform.controller';
import { fdformservice } from 'src/Provider/fdform.service';
import { fd_form } from 'src/entity/fd_form.entity';
import { fdformfieldservice } from 'src/Provider/fdformfield.service';
import { fd_form_field } from 'src/entity/fd_form_field.entity';
import { fdformsfilldataervice } from 'src/Provider/fdformfilldata.service';
import { fd_form_fill_data } from 'src/entity/fd_form_fill_data.entity';
@Module({
  imports: [TypeOrmModule.forFeature([user_form,fd_form,fd_form_field,fd_form_fill_data])],
  controllers: [fdformController],
  providers: [fdformservice,fdformfieldservice,fdformsfilldataervice],
})
export class TodosModule {}