import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString({ message: 'El brand debe ser un String' })
    readonly brand: string; 

    @IsString({ message: 'El model debe ser un String' })
    readonly model: string;
}