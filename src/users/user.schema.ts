import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop([Number])
  favorite: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);
