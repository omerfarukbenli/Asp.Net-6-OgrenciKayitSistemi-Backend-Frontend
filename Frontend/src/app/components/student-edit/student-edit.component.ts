import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {



  @Input() stu?: Student;
  @Output() heroesUpdated = new EventEmitter<Student[]>();
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }
  updateStudent(hero: Student) {
    this.studentService
      .updateeditStudent(hero)
      .subscribe((heroes: Student[]) => this.heroesUpdated.emit(heroes));
  }

  deleteStudent(hero: Student) {
    this.studentService
      .deleteStudent(hero)
      .subscribe((heroes: Student[]) => this.heroesUpdated.emit(heroes));
  }

  createStudent(hero: Student) {
    this.studentService
      .createStudent(hero)
      .subscribe((heroes: Student[]) => this.heroesUpdated.emit(heroes));
  }

}
