import { GameComponent } from './player-status/game/game.component';
export class Data {
    constructor(
        public name: string = '',
        public position: string = '',
        public game1: boolean = false,
        public game2: boolean = false,
        public game3: boolean = false
    ) {}
}
