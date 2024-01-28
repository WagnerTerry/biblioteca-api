import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { email, name, password, id };
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
