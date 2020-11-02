import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop()
  name: string;

  @Prop()
  url: number;

  @Prop()
  feed: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);