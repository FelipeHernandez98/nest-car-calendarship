import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
    createCar(@Body() body: any){
        return body;
    }

    @Patch('id')
    updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any ){
        return body;
    }

    @Delete()
    deleteCar(  @Param('id', ParseIntPipe) id: number ){
        return {
            msg: `El carro con id ${ id } se elimino con exito!`
        }
    }
}

