import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    if (process.env.DB_DEV === 'dev') {
      const app = await NestFactory.create(AppModule);

      // Aplicando Validação globalmente
      app.useGlobalPipes(new ValidationPipe());

      await app.listen(3000);
      console.log('conectado ao banco MongoDB');
    } else {
      console.log('nao conectou ao bancoMongoDB');
    }
  } catch (err) {
    console.log('Ocorreu um erro ao conectar ao banco', err);
  }
}
bootstrap();
