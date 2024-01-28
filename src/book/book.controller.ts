import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  @Get()
  async showBooks() {
    return { books: [] };
  }

  @Get(':id')
  async findOneBook(@Param() params) {
    return { book: {}, params };
  }

  @Post()
  async create(@Body() { image, isbn, name, price }: CreateBookDTO) {
    return { image, isbn, name, price };
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return { body, params };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return { body, params };
  }
}
