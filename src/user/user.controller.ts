import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async createUser(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }

  @Patch(':id')
  async updateUser(
    @Body() { email, name, password }: UpdateUserDTO,
    @Param() params,
  ) {
    return { email, name, password, params };
  }
}
