import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('assets')
export class AssetsController {
    // tslint:disable-next-line: no-empty
    constructor() {}

    @Get()
    getFile() {
        return 'File';
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        console.log(file);
    }
}
