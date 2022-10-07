import { Body, Controller, Get, Param, Post, Patch, Delete, ParseUUIDPipe, /* UsePipes, ValidationPipe */ } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes( ValidationPipe ) -----> Se puede usar el validator Pipe a nivel de Clase
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe ) id: string  ){
        return this.carService.findById( id ); 
    }

    @Post()
    //@UsePipes( ValidationPipe ) ------> Se puede utilizar el validator Pipe a nivel de metodo
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carService.create( createCarDto );
    }

    @Patch('id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto: UpdateCarDto )
    {
        return this.carService.update(id, updateCarDto);
    }

    @Delete()
    deleteCar(  @Param('id', ParseUUIDPipe) id: string ){

        this.carService.delete(id)

        return {
            msg: `El carro con id ${ id } se elimino con exito!`
        }
    }
    
}

