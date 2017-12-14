import { NgModule } from '@angular/core';
import { PlayerComponent} from './player/player.component';
import { AddPlayerComponent} from './player/add-player/add-player.component';
import { ListComponent} from './player/list/list.component';
import { PlayerStatusComponent} from './player-status/player-status.component';
import { GameComponent} from './player-status/game/game.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PlayerComponent, 
    children: [ { path: 'list', component: ListComponent},{ path: 'addPlayer', component: AddPlayerComponent }] },
  { path: 'status/game', component: PlayerStatusComponent, 
  children: [ { path: ':id', component: GameComponent }]  
    },
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
