import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

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

  async create(user: User): Promise<User> {
    try {
      const existingUser = await this.findByEmail(user.email);

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      const response = await this.userModel.create(user);
      return response;
    } catch (error) {
      if (error instanceof ConflictException) {
        // Lidar com ConflictException e retornar um código de status de conflito 409
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      } else {
        console.log('Error create: ', error);
        throw new BadRequestException(
          'An error occurred when registering users',
        );
      }
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
      });
      return updatedUser;
    } catch (error) {
      console.log('Error: update: ', error);
      if (error.name === 'CastError') {
        throw new NotFoundException('User not found');
      }
    }
  }
}
