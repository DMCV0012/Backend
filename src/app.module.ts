import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { SubjectModule } from './modules/subject/subject.module';
import { CourseModule } from './modules/course/course.module';
import { ClassModule } from './modules/class/class.module';
import { EnrollmentsModule } from './modules/enrollment/enrollments.module';
import { GradeModule } from './modules/grade/grade.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot(typeOrmConfig()),
    UserModule,
    StudentModule,
    TeacherModule,
    SubjectModule,
    CourseModule,
    ClassModule,
    EnrollmentsModule,
    GradeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
