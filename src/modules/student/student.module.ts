import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './domain/entities/student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService],
})
export class StudentModule {}
