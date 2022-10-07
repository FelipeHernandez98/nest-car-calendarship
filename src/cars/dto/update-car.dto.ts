import {  IsUUID, IsString, IsOptional } from 'class-validator'

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly uuid?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}