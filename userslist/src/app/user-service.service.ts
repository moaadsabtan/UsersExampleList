import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserFilter } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {}

  getAllUsers(filterDto?: UserFilter) {
    const url = 'https://localhost:44334/api/user';
    const filter = this.turnFilterIntoUrl(filterDto);

    return this.http.get<User[]>(`${url}${filter}`);
  }

  private turnFilterIntoUrl(filterDto?: UserFilter) {
    if (!filterDto) {
      return '';
    }

    if (!Object.entries(filterDto).length) {
      return '';
    }

    let urlFilter = '?';

    for (const [key, value] of Object.entries(filterDto)) {
      urlFilter += `${key}=${value}&`;
    }

    return urlFilter.substring(0, urlFilter.length - 1);
  }

}
