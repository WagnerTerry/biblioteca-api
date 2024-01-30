import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';

export class CreateBookDTO {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsNumber()
  price: number;

  @IsString()
  category: Category;
}
