import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.interface';
import {IResponse} from './response.interface';
import {CreateUserDto} from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get('user')
  async findAll(): Promise<IResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'success'
    };
  }

  @Post()
  async addOne(@Body() body: CreateUserDto): Promise<IResponse> {
    await this.userService.addOne(body);
    return {
      code: 200,
      message: 'success'
    };
  }
}
