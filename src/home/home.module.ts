import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { HomeSchema } from './home.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'HomePage', schema: HomeSchema }]),
    ],
    providers: [HomeService],
    controllers: [HomeController],
})
export class HomeModule {}
