import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }

    ]

    findAll(){
     return this.cars   
    }

    findById( id: string ){

        const car = this.cars.find( car => car.id === id);

        if(!car) throw new NotFoundException(`Car with id ${ id } not found`);
             
        return car;
    }

    create( createCarDto: CreateCarDto){

        const car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        this.cars.push(car);

        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ){

        let carDB = this.findById(id);

        if( updateCarDto.uuid && updateCarDto.uuid !== id){ // Para validar que el id no lo envien en el body y no se sobreescriba
            throw new BadRequestException('El id del carro no puede enviarse por el body')
        }

        this.cars = this.cars.map( car => {

            if(car.id === id){
                carDB= {
                    ...carDB, // Exparse lo que trae el carDB
                    ...updateCarDto, // Exparse lo que trae el updateCarDto y lo sobreescribe
                    id // Sobreescribe el id para asegurarse que no venga en el body
                }
                return carDB;
            }

            return car;

        })

        return carDB;
    }
}
