import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dto';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOneBook(@Param() params) {
    return { book: {}, params };
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDTO,
  ): Promise<Book> {
    console.log('Book object received:', book);
    return this.bookService.create(book);
  }

  @Patch(':id')
  async updatePartial(
    @Body() { image, isbn, title, category, price }: UpdateBookDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { isbn, image, title, category, price, id };
  }

  @Delete(':id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
