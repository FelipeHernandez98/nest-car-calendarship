import { PartialType } from '@nestjs/mapped-types';//El partial type hace que se extienda del create y sus atributos se hacen opcionales
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
