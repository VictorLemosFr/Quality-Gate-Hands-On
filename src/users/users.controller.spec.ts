import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', () => {
      const result = controller.findAll();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(3);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const result = controller.findOne(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
      expect(result.name).toBe('Alice Johnson');
    });

    it('should throw NotFoundException for invalid id', () => {
      expect(() => controller.findOne(999)).toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return a new user', () => {
      const dto = { name: 'Dan Brown', email: 'dan@example.com', age: 40 };
      const result = controller.create(dto);
      expect(result).toBeDefined();
      expect(result.name).toBe('Dan Brown');
      expect(result.email).toBe('dan@example.com');
      expect(result.id).toBeDefined();
    });
  });

  describe('update', () => {
    it('should update and return the user', () => {
      const dto = { name: 'Alice Updated' };
      const result = controller.update(1, dto);
      expect(result.name).toBe('Alice Updated');
      expect(result.id).toBe(1);
    });

    it('should throw NotFoundException for invalid id', () => {
      expect(() => controller.update(999, { name: 'Test' })).toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove a user without error', () => {
      const initialLength = service.findAll().length;
      controller.remove(1);
      expect(service.findAll().length).toBe(initialLength - 1);
    });

    it('should throw NotFoundException for invalid id', () => {
      expect(() => controller.remove(999)).toThrow(NotFoundException);
    });
  });
});
