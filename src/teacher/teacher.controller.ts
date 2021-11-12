import { Controller, Get, Param } from '@nestjs/common';
import { TeacherModel } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): TeacherModel[] {
    return [
      {
        id: '1',
        name: 'Annie',
      },
      {
        id: '2',
        name: 'Mike',
      },
    ];
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string): TeacherModel {
    return {
      id: '1',
      name: 'Annie',
    };
  }
}
