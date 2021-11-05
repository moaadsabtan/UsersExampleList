import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectAllUsers,
  selectIsLoading,
  getUsers,
  getMoreUsers,
} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  isloading$: Observable<boolean> | undefined;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(selectAllUsers));
    this.isloading$ = this.store.pipe(select(selectIsLoading));

    this.store.dispatch(getUsers());

    // ADD THIS
    window.onscroll = () => {
      debugger;
      const scrollHeight = document.body.scrollHeight;
      const totalHeight = window.scrollY + window.innerHeight;

      if (totalHeight >= scrollHeight) {
        this.store.dispatch(getMoreUsers());
      }
    };
  }
}
export interface User {
  id: string;
  value: string;
}

export interface UserFilter {
  skip?: number;
  take?: number;
}
