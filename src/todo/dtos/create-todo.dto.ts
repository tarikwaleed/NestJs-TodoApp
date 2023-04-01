import { Optional } from '@nestjs/common';
import { IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
    @IsString()
    @IsOptional()
    readonly title: string;

    @IsBoolean()
    readonly completed: boolean;
}
