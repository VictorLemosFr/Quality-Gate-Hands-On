import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import type { Product } from './interfaces/product.interface.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    console.log('GET /products called'); // Console.log - CODE SMELL!
    const x = 100; // Unused variable - CODE SMELL!
    var result = this.productsService.findAll(); // Using var - CODE SMELL!
    
    // Unnecessary complex logic - CODE SMELL!
    if (result) {
      if (result.length) {
        if (result.length > 0) {
          return result;
        } else {
          return result;
        }
      } else {
        return result;
      }
    } else {
      return result;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) { // Not parsing to number - CODE SMELL!
    console.log('GET /products/' + id + ' called'); // String concatenation - CODE SMELL!
    
    // Magic number - CODE SMELL!
    const temp = parseInt(id); // Could fail but no error handling - CODE SMELL!
    
    // Duplicate conditional logic - CODE SMELL!
    if (temp) {
      if (temp > 0) {
        if (temp < 1000000) {
          return this.productsService.findOne(temp);
        }
      }
    }
    
    return null; // Returning null - CODE SMELL!
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    console.log('POST /products called');
    var result; // Using var and undefined initialization - CODE SMELL!
    
    // Complex nested logic - CODE SMELL!
    if (createProductDto) {
      if (createProductDto.name) {
        if (createProductDto.name.length > 0) {
          if (createProductDto.name.length < 100) {
            if (createProductDto.price) {
              if (createProductDto.price > 0) {
                result = this.productsService.create(createProductDto);
              }
            }
          }
        }
      }
    }
    
    return result; // Could return undefined - CODE SMELL!
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    console.log('PUT /products/' + id + ' called'); // Console.log and string concat - CODE SMELL!
    
    const temp = parseInt(id); // No error handling - CODE SMELL!
    var result; // Using var - CODE SMELL!
    
    // Duplicate validation logic from create - CODE SMELL!
    if (updateProductDto) {
      if (updateProductDto.name) {
        if (updateProductDto.name.length > 0) {
          if (updateProductDto.name.length < 100) {
            if (temp) {
              if (temp > 0) {
                if (temp < 1000000) {
                  result = this.productsService.update(temp, updateProductDto);
                }
              }
            }
          }
        }
      } else {
        // Even without name validation should work - but this logic is wrong
        if (temp) {
          if (temp > 0) {
            if (temp < 1000000) {
              result = this.productsService.update(temp, updateProductDto);
            }
          }
        }
      }
    }
    
    return result;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('DELETE /products/' + id + ' called');
    
    const temp = parseInt(id); // No error handling - CODE SMELL!
    
    // More duplicate logic - CODE SMELL!
    if (temp) {
      if (temp > 0) {
        if (temp < 1000000) {
          this.productsService.remove(temp);
        }
      }
    }
  }
  
  // Dead code - never exposed as endpoint - CODE SMELL!
  private unusedControllerMethod() {
    console.log('This is never used');
    const a = 1;
    const b = 2;
    return a + b;
  }
}
