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
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDTO,
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  @Patch(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDTO,
  ): Promise<Book> {
    return this.bookService.updateBookById(id, book);
  }

  // para fins de estudo
  // async updatePartial(
  //   @Body() { image, isbn, title, category, price }: UpdateBookDTO,
  //   @Param('id', ParseIntPipe) id: number,
  // ) {
  //   return { isbn, image, title, category, price, id };
  // }

  @Delete(':id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  // @Delete(':id')
  // async deleteBook(
  //   @Param('id')
  //   id: string,
  // ): Promise<Book> {
  //   return this.bookService.deleteById(id);
  // }
}
