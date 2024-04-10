import { TypeOrmModule } from '@nestjs/typeorm';
import { fd_form } from 'src/entity/fd_form.entity';
import { fd_form_field } from 'src/entity/fd_form_field.entity';
import { fd_form_fill_data } from 'src/entity/fd_form_fill_data.entity';
// import { user_form } from 'src/entity/userform.entity';
export const devConfig: TypeOrmModule = {
    type: 'mysql',
    host: '10.102.32.196',
    port: 3306,
    username: 'development',
    password: 'Admin@123',
    database: 'test',
    entities: [fd_form,fd_form_field,fd_form_fill_data],
    synchronize: false,
}