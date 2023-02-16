import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { Employee, EmployeeDocument } from '../schema/employee.schema';

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(Employee.name);
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeDocument> {
    this.logger.log(`Creating post with title: ${createEmployeeDto.Email}`);

    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

  async findAll(): Promise<EmployeeDocument[]> {
    this.logger.log('Returning all posts');
    return this.employeeModel.find().exec();
  }

  async findOne(id: string) {
    this.logger.log(`Returning post with id: ${id}`);
    return this.employeeModel.findById(id);
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeDocument> {
    this.logger.log(`Updating post with id: ${id}`);
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    this.logger.log(`Deleting post with id: ${id}`);
    return this.employeeModel.findByIdAndRemove(id);
  }
}
