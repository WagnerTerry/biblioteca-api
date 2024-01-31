import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async create(book: Book): Promise<Book> {
    const response = await this.bookModel.create(book);
    return response;
  }
}
