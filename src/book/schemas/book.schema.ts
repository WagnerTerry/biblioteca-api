import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSICS = 'Classics',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;
  @Prop()
  image: string;
  @Prop()
  isbn?: string;
  @Prop()
  price: number;
  @Prop({ type: String, enum: Object.values(Category) })
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
