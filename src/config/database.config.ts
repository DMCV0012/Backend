import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/user/domain/entities/user.entity';
import { Student } from '../modules/student/domain/entities/student.entity';
import { Teacher } from '../modules/teacher/domain/entities/teacher.entity';
import { Subject } from '../modules/subject/domain/entities/subject.entity';
import { Course } from '../modules/course/domain/entities/course.entity';
import { Class } from '../modules/class/domain/entities/class.entity';
import { Enrollment } from '../modules/enrollment/domain/entities/enrollment.entity';
import { Grade } from '../modules/grade/domain/entities/grade.entity';

export function typeOrmConfig(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        entities: [
            User,
            Teacher,
            Subject,
            Student,
            Class,
            Course,
            Enrollment,
            Grade,
        ],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
    };
}