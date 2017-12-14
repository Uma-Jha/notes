import { Data } from './../../data';
import { DataService } from './../../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPlayerComponent implements OnInit {
  newPlayer: Data = new Data();
  playerList: Data[] = [];
  constructor(private _dataService: DataService) { }
  
  ngOnInit() {
    this._dataService.playersObserver.subscribe(
      tasks => this.playerList = tasks
    );
    this._dataService.retrieveAll();
  }
  onSubmit() {
    this._dataService.createTask(this.newPlayer);
    this.newPlayer = new Data();
  }

}
  

  

  



