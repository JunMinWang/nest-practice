import { Controller, Get, Post, Patch } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get('')
  getStudents() {
    return 'Get Students that belong to a teacher';
  }

  @Patch('/:studentId')
  updateStudentTeacher() {
    return 'Update students Teacher';
  }
}
