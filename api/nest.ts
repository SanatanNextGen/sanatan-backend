import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module'; 
// import { createServer } from '@nestjs/platform-express';

const handler = async (req, res) => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Optional: Set global prefix for routes
  await app.init();

  // Handle the request
  return app.getHttpAdapter().getInstance().handle(req, res);
};

export default handler;
