import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './../../data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Data[] = [];
  constructor(private _dataService: DataService) { 
  }
  
  ngOnInit() {
    this._dataService.playersObserver.subscribe(
      tasks => this.players = tasks
    );
    this._dataService.retrieveAll();
  }
  deletePlayer(task : Data) {
    this._dataService.deleteTask(task);
  }
  updatePlayer(task : Data) {
    this._dataService.updateTask(task);
  }

}


 

