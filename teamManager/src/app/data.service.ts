import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Data } from './data';

@Injectable()
export class DataService {
  playersObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    console.log("INSIDE RETRIEVEALL");
    this._http.get('/players').subscribe(
      (tasks) => {
        console.log(tasks);
        this.playersObserver.next(tasks.json())
      },
      errorResponse => console.log(errorResponse)
    );
  }

  createTask(player: Data) {
    console.log("Inside CREATE PLAYER");
    this._http.post('/players', player).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }
  deleteTask(player : Data) {
    console.log("Inside DELETE PLAYER");
    this._http.post('/players/delete', player).subscribe(
      res=> this.retrieveAll(),
      err => console.log("Error occured "+ err)
    );
  }
  updateTask(player: Data) {
    console.log("INSIDE UPDATE");
    this._http.post('/players/update', player).subscribe(
      res => this.retrieveAll(),
      err => console.log("Error occured "+err)
    );
  }

}
