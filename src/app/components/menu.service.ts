import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  /**
   * @ngdoc function
   * @name getAll
   * @description This method initialize app menu list
   */
  getAll() {
    let formData = {
      sessionId: localStorage.getItem('access_token'),
    };
    return this.http.post<Menu>(`${environment.MenuListUrl}`, formData);
  }
}
