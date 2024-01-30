import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async create(book: Book): Promise<Book> {
    console.log('book', book);
    const newBook = new this.bookModel(book); // Cria um novo documento Mongoose com os dados recebidos
    const response = await newBook.save();
    console.log('cre', response);
    return response;
  }
}
