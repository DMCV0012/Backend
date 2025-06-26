import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './domain/entities/enrollment.entity';
import { EnrollmentService } from './enrollments.service';
import { EnrollmentController } from './enrollments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment])],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentsModule {}
