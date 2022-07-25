import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  studentToEdit?: Student;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService
      .getSupereditStudents()
      .subscribe((result: Student[]) => (this.students = result));
  }

  updateHeroList(heroes: Student[]) {
    this.students = heroes;
  }

  initNewStudent() {
    this.studentToEdit = new Student();
  }

  editStudent(hero: Student) {
    this.studentToEdit = hero;
  }

}
