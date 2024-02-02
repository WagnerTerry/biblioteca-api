import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      console.log('Error getUsers: ', error);
      throw new BadRequestException(
        'An error occurred when searching for users',
      );
    }
  }
}