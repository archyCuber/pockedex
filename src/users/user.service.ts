import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }
    async create(createUserDto: CreateUserDto) {
        const createUser = new this.userModel(createUserDto)
        return createUser.save()
    }
}
