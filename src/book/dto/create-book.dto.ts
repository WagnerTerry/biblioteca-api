import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsNumber()
  price: number;
}
