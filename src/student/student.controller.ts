import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  StudentModelDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): StudentModelDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): StudentModelDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentModelDto {
    return this.studentService.createStudent(body);
  }

  @Patch('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return `Update Student : ${studentId} with  ${JSON.stringify(body)}`;
  }
}
