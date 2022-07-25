import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}
  private url = 'Student';

  public getSupereditStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateeditStudent(hero: Student): Observable<Student[]> {
    return this.http.put<Student[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createStudent(hero: Student): Observable<Student[]> {
    return this.http.post<Student[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteStudent(hero: Student): Observable<Student[]> {
    return this.http.delete<Student[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
