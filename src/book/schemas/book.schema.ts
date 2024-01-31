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
  @Prop({ required: false })
  isbn?: string;
  @Prop({ required: false })
  title?: string;
  @Prop({ required: false })
  image?: string;
  @Prop({ required: false })
  price?: number;
  @Prop({ type: String, enum: Object.values(Category), required: false })
  category?: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
