import { Injectable } from '@nestjs/common';
import { CreateStudentDto, StudentModelDto, UpdateStudentDto } from './dto/student.dto';
import { students } from '../db';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): StudentModelDto[] {
    return this.students;
  }

  getStudentById(studentId: string): StudentModelDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentModelDto {
    const newStudent = {
      ...payload,
      id: uuid(),
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string): StudentModelDto {
    let studentDto = UpdateStudentDto;
    const studentList = this.students.map((student) => {
      if(student.id === studentId) {
        studentDto = {
          id: studentId,
          ...payload,
        }
      } else {
        return student;
      }
    });

    this.students = studentList;
  }
}
