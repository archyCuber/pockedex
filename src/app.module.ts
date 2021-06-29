import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FacebookStrategy} from "./facebook.strategy";
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./users/user.module";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://pockedexDB:solo322solo322@cluster0.hzbw6.mongodb.net/pocke?retryWrites=true&w=majority', {
    connectionName: 'users'
  }), UserModule],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {}
