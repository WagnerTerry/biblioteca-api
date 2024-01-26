import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  async create(@Body() body) {
    return { body };
  }
}
