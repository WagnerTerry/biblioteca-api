import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
// import { BibliotecaModule } from './biblioteca/biblioteca.module';
// import { BibliotecaController } from './biblioteca-controller/biblioteca-controller';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
