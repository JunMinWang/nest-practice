import { Controller, Get, Post, Patch } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Get Teacher By Id';
  }

  @Get('/:teacherId/students')
  getStudents() {
    return 'Get Student';
  }

  @Patch('/:teacherId/students/:studentId')
  updateStudentTeacher() {
    return 'Update Teacher';
  }
}
