import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AssetsController } from './assets.controller';
@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../../..', 'assets'),
            renderPath: '/assets/',
        }),
    ],
    controllers: [AssetsController],
    providers: [],
})
export class AssetsModule {}
