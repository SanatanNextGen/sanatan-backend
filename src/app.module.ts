import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/SDS'), 
        UserModule,
        HomeModule,
    ],
})
export class AppModule {}
