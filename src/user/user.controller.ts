import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<User> {
    return this.userService.create(user);
  }

  @Patch(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.delete(id);
  }
}
