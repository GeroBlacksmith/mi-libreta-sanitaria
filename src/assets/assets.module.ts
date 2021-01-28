import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AssetsController } from './assets.controller';
import { MulterModule } from '@nestjs/platform-express';
@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '../../..', 'assets'),
        //     renderPath: '/assets/',
        // }),
        MulterModule.register({
            dest:'./assets'
        })
    ],
    controllers: [AssetsController],
    providers: [],
})
export class AssetsModule {}
