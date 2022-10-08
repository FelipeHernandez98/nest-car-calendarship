/* import { PartialType } from '@nestjs/mapped-types';//El partial type hace que se extienda del create y sus atributos se hacen opcionales
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {} 
////////////////////////////////////////////////////////////////////////////////////////////////////////
// EN ESTE CASO NO ES RECOMENDABLE USAR PARTIALTYPE PORQUE SOLO EXITE UN ATRIBUTO EN EL CreateBrandDto//
// ENTONCES SI O SI LO QUE SE VA A ACTUALIZAR ES EL NAME POR ESE CASO NO PUEDE SER OPCIONAL           //
////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    name: string;
}
