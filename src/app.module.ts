import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@auth.uoyjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
})
export class AppModule {}
