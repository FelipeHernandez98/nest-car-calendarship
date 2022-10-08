import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CAR_SEDD } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ){}
 
  populateDB() {
    this.carsService.fillCarsWithSeedData( CAR_SEDD );
    this.brandsService.fillBrandsWithSeedData( BRANDS_SEED );

    return 'Datos cargados correctamente'
  }

  
}
