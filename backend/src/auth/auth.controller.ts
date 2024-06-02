import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { EmailAlreadyExistsException } from 'src/EmailAlreadyExists.exception';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    try {
      return this.authService.signUp(signUpDto);
    } catch (error) {
      if (error instanceof EmailAlreadyExistsException) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    try {
      return this.authService.login(loginDto);
    } catch (error) {
      return error;
    }
  }
}
