import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //----> Remueve toda la data basura que me envian por el Body y no necesito
      forbidNonWhitelisted: true, //----> Genera errores si envian data basuda en el Body
    }), 
    //Se pueden agregar mas Pipes separados por comas
  )
  await app.listen(3000);
}
bootstrap();
