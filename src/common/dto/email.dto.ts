import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class EmailDto {
	@IsNotEmpty()
	@MaxLength(50)
	@IsEmail()
	email: string;
}
