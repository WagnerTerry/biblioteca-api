import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    try {
      const books = await this.bookModel.find();
      return books;
    } catch (error) {
      console.log('Error: getAllBooks: ', error);
      throw new BadRequestException(
        'An error occurred when searching for books',
      );
    }
  }

  async getBookById(id: string): Promise<Book> {
    try {
      const book = await this.bookModel.findById(id);

      return book;
    } catch (error) {
      console.log('Error: getBookById: ', error);
      throw new NotFoundException('Book not found');
    }
  }

  async create(book: Book): Promise<Book> {
    try {
      const response = await this.bookModel.create(book);
      return response;
    } catch (error) {
      console.log('Error: create: ', error);
      throw new BadRequestException('An error occurred when registering books');
    }
  }
}
