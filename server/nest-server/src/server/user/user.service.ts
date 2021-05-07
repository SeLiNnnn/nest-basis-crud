import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModal: Model<User>) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModal.find();
    return users;
  }

  async addOne(body: CreateUserDto): Promise<void> {
    await this.userModal.create(body);
  }
}
