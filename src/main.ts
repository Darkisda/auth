import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://pbgtsdso:gsY-iq5vkBr804ghtNneQ4bwO8nx-nR8@hornet.rmq.cloudamqp.com/pbgtsdso',
        ],
        noAck: false,
        queue: 'auth',
      },
    },
  );

  await app.listen();
}
bootstrap();
