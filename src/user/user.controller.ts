import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() { email, name, password }: CreateUserDTO) {
    return { email, name, password };
  }
}
