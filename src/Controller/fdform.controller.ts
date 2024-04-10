import { Body, Controller, Delete, Get, Param, Post, Put, Req,BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import { fd_form_interface } from 'src/Interface/fd_form.interface';
import { fdformservice } from 'src/Provider/fdform.service';
import { fd_form_field_interface } from 'src/Interface/fd_form_field.interface';
import { fdformfieldservice } from 'src/Provider/fdformfield.service';
import { fd_form_fill_data_interface } from 'src/Interface/fd_form_fill_data.interface';
import { fdformsfilldataervice } from 'src/Provider/fdformfilldata.service';
@Controller('fdform')
export class fdformController {
    constructor(private userformService: fdformservice,private fdfieldservice:fdformfieldservice,private fdformfillservice:fdformsfilldataervice) {}
    

    @Post('/form')
  async create(@Body() body : fd_form_interface,@Req() ReqData) {
    var i=1;
   const userformInterface = JSON.parse(JSON.stringify(ReqData.body));
   
   const fdform = new fd_form_interface();
   const fdformfield= new fd_form_field_interface();
   const fdfielddata= new fd_form_fill_data_interface();
   fdform.id = userformInterface.id;
   fdform.title = userformInterface.title;

   const uuid= await this.userformService.findid(fdform.id);
   if(uuid.length)
    {
        throw new BadRequestException('uniqueid already exists');
    }
    const title= await this.userformService.findtitle(fdform.title);
    const uform = await this.userformService.create(fdform);
    if(!uform) {
      return 'error in creating user form'
    }
    
    for(var attributename in userformInterface){
        console.log(attributename+": "+userformInterface[attributename]);
        if(attributename!="title" && attributename!="id")
          {
            console.log(userformInterface[attributename]);
            fdformfield.formid=userformInterface.id;
            fdformfield.fieldname=attributename;
            fdformfield.fieldtype=userformInterface[attributename];
            const uformfield = await this.fdfieldservice.create(fdformfield);
          }
        i++;
    }
    return 'user form created successfully'
  }

  @Post('/filldata')
    InsertFormData(@Param('form_title') title: string,@Req() ReqData) {
      const userformInterface = JSON.parse(JSON.stringify(ReqData.body));
      const fdfielddata= new fd_form_fill_data_interface();
      for(var attributename in userformInterface){
        fdfielddata.id=userformInterface.id;
        fdfielddata.value=attributename;
        const uformfield = this.fdformfillservice.create(fdfielddata)
      }

      return 'user form data inserted successfully'
    }

  @Get('/filldata')
  async findAll(@Req() request: Request) {
    const uformArray: Array<fd_form_interface> = await this.userformService.findAll()
    return uformArray
  }


}