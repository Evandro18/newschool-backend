import { ApiModelProperty } from '@nestjs/swagger';
import { Part } from '../entity';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class PartUpdateDTO {
    @IsString()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: String })
    title: Part['title'];

    @IsString()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: String })
    description: Part['description'];

    @IsString()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: String })
    vimeoUrl: Part['vimeoUrl'];

    @IsString()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: String })
    youtubeUrl: Part['youtubeUrl'];

    @IsString()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: String })
    lesson: Part['lesson'];

    @IsNumber()
    @Expose()
    @IsNotEmpty()
    @ApiModelProperty({ type: Number })
    sequenceNumber: Part['sequenceNumber'];
}