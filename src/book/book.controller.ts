import { Body, Controller, Post } from '@nestjs/common';

@Controller('books')
export class BookController {
  @Post()
  async create(@Body() body) {
    return { body };
  }
}
