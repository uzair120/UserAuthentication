import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto');
    const user = this.userRepository.create(createUserDto);
    console.log('createUserDto1');
    const sss = await this.userRepository.save(user);
    console.log(sss);
    return;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { _id: id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.update({ _id: id }, updateUserDto);
    return task;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
