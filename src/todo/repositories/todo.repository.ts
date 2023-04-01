import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../models/todo.model';
import { CreateTodoDto } from '../dtos/create-todo.dto';

@Injectable()
export class TodoRepository {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) { }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const createdTodo = new this.todoModel(createTodoDto);
        return createdTodo.save();
    }

    async findAll(): Promise<Todo[]> {
        return this.todoModel.find().exec();
    }

    async findById(id: string): Promise<Todo> {
        return this.todoModel.findById(id).exec();
    }

    async update(id: string, createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todoModel.findByIdAndUpdate(id, createTodoDto, { new: true }).exec();
    }

    async delete(id: string): Promise<Todo> {
        return this.todoModel.findByIdAndDelete(id).exec();
    }
}