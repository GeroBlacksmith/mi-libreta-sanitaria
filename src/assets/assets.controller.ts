import { Controller, Get, Post, UseInterceptors, UploadedFile, Req,Put, UploadedFiles, Param, Res } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import * as fs from 'fs'
import { editFileName, imageFileFilter } from '../utils/file-upload.utils';
@Controller('assets')
export class AssetsController {
    // tslint:disable-next-line: no-empty
    constructor() {
    }
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './assets' });
    }
    @Get()
    getFile() {
        
        let files:any;
        fs.readdir('./assets',(error: NodeJS.ErrnoException | null, filenames: string[]) => {
            if (error) {
                files= error
                console.error("error",error);
            } else {
                files = filenames;
                console.log(filenames);
            }
        },);
        return files;
    }
    // one file
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
    // multiple files
    @Post('uploads')
    @UseInterceptors(
        FilesInterceptor('file', 20, {
                storage: diskStorage({
                destination: './assets',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }))
    uploadFiles(@UploadedFiles() files) {
        const response = [];
        files.forEach(file => {
          const fileReponse = {
            originalname: file.originalname,
            filename: file.filename,
          };
          response.push(fileReponse);
        });
        return response;
    }
}
