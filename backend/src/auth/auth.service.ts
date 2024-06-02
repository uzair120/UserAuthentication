import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { EmailAlreadyExistsException } from 'src/EmailAlreadyExists.exception';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    this.logger.log(`User signup data ${JSON.stringify(signUpDto)}`);
    const { name, email, password } = signUpDto;

    const data = await this.usersRepository.find({ where: { email } });

    if (data.length > 0) {
      throw new EmailAlreadyExistsException();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    this.logger.log('User password encrypted');
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    const token = this.jwtService.sign({ id: user._id });

    this.logger.log('Signup Token created successfully');
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    this.logger.log(`User login data ${JSON.stringify(loginDto)}`);

    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    this.logger.log('Login Token created successfully');
    return { token };
  }
}
