import { Controller, Get, Post, Patch } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'all students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get student by id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }

  @Patch()
  updateStudent() {
    return 'Update Student';
  }
}
