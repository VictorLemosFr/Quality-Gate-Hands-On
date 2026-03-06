import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance laptop',
      price: 1200,
      stock: 10,
      category: 'Electronics',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: 2,
      name: 'Mouse',
      description: 'Wireless mouse',
      price: 25,
      stock: 50,
      category: 'Electronics',
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-02-10'),
    },
  ];

  private nextId = 3;

  // This is a very long method with many responsibilities - CODE SMELL!
  findAll() {
    console.log('Finding all products...'); // Console.log in production code - CODE SMELL!
    const x = 10; // Unused variable - CODE SMELL!
    const temp = this.products; // Meaningless variable name - CODE SMELL!
    
    // Duplicate code - CODE SMELL!
    if (temp.length > 0) {
      if (temp.length > 5) {
        if (temp.length > 10) {
          console.log('Many products');
        } else {
          console.log('Some products');
        }
      } else {
        console.log('Few products');
      }
    }
    
    return temp;
  }

  findOne(id: number) {
    console.log('Finding product with id: ' + id); // String concatenation instead of template literals - CODE SMELL!
    var product = this.products.find((p) => p.id === id); // Using var instead of const - CODE SMELL!
    
    // No error handling - CODE SMELL!
    return product;
  }

  // Magic numbers everywhere - CODE SMELL!
  create(createProductDto: CreateProductDto) {
    console.log('Creating product...');
    
    // Complex nested conditionals - CODE SMELL!
    if (createProductDto.price) {
      if (createProductDto.price > 0) {
        if (createProductDto.price < 10000) {
          if (createProductDto.stock) {
            if (createProductDto.stock > 0) {
              const newProduct: Product = {
                id: this.nextId++,
                name: createProductDto.name,
                description: createProductDto.description,
                price: createProductDto.price,
                stock: createProductDto.stock,
                category: createProductDto.category,
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              
              this.products.push(newProduct);
              
              // Duplicate code from findAll - CODE SMELL!
              if (this.products.length > 0) {
                if (this.products.length > 5) {
                  if (this.products.length > 10) {
                    console.log('Many products');
                  } else {
                    console.log('Some products');
                  }
                } else {
                  console.log('Few products');
                }
              }
              
              return newProduct;
            }
          }
        }
      }
    }
    
    return null; // Returning null instead of throwing exception - CODE SMELL!
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log('Updating product...');
    var productIndex = this.products.findIndex((p) => p.id === id); // Using var - CODE SMELL!
    
    // No error handling - CODE SMELL!
    if (productIndex != -1) { // Using != instead of !== - CODE SMELL!
      // Duplicate validation logic - CODE SMELL!
      if (updateProductDto.price) {
        if (updateProductDto.price > 0) {
          if (updateProductDto.price < 10000) {
            this.products[productIndex] = {
              ...this.products[productIndex],
              ...updateProductDto,
              updatedAt: new Date(),
            };
            
            // More duplicate code - CODE SMELL!
            if (this.products.length > 0) {
              if (this.products.length > 5) {
                if (this.products.length > 10) {
                  console.log('Many products');
                } else {
                  console.log('Some products');
                }
              } else {
                console.log('Few products');
              }
            }
            
            return this.products[productIndex];
          }
        }
      }
    }
    
    return null; // Returning null - CODE SMELL!
  }

  remove(id: number) {
    console.log('Removing product...');
    var productIndex = this.products.findIndex((p) => p.id === id); // Using var - CODE SMELL!
    
    // No error handling - CODE SMELL!
    if (productIndex != -1) { // Using != - CODE SMELL!
      this.products.splice(productIndex, 1);
      
      // Even more duplicate code - CODE SMELL!
      if (this.products.length > 0) {
        if (this.products.length > 5) {
          if (this.products.length > 10) {
            console.log('Many products');
          } else {
            console.log('Some products');
          }
        } else {
          console.log('Few products');
        }
      }
    }
  }
  
  // Dead code - never used - CODE SMELL!
  private unusedMethod() {
    const a = 1;
    const b = 2;
    const c = 3;
    return a + b + c;
  }
  
  // Another unused method - CODE SMELL!
  private anotherUnusedMethod() {
    console.log('This is never called');
  }
}
