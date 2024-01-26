import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BibliotecaModule } from './biblioteca/biblioteca.module';
// import { BibliotecaController } from './biblioteca-controller/biblioteca-controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
