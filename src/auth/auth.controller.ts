import { Controller, Post, Body, HttpException, Req, UnauthorizedException, UseGuards, Get} from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import express from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt.guard';


@Controller('auth')
export class AuthController {
  
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  
  async logIn(@Req() req: express.Request) {

    
   return this.authService.login(req.user);

  }
  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: express.Request){
    console.log(req.user)
    return req.user;


  }

  
}