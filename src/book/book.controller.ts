import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dto';

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

  @Patch(':id')
  async updatePartial(
    @Body() { image, isbn, name, price }: UpdateBookDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { isbn, image, name, price, id };
  }
}
