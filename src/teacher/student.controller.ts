import { Controller, Get, Patch, Param } from '@nestjs/common';
import { StudentModelDto } from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get('')
  getStudents(@Param('teacherId') teacherId: string): StudentModelDto[] {
    return [
      {
        id: '1',
        name: 'Jimmy',
        teacher: 'Annie',
      },
      {
        id: '2',
        name: 'Andy',
        teacher: 'Mike',
      },
    ];
  }

  @Patch('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentModelDto {
    return {
      id: '1',
      name: 'Jimmy',
      teacher: 'Annie',
    };
  }
}
