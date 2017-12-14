import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ListComponent } from './player/list/list.component';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { GameComponent } from './player-status/game/game.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './player/list/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerStatusComponent,
    ListComponent,
    AddPlayerComponent,
    GameComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
