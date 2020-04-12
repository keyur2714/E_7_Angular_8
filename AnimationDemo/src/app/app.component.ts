import { Component, HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple.animation';
import { ON_OFF_ANIMATION } from './animations/start-stop.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    STATE_ANIMATION,
    ON_OFF_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ],
  providers :[]
})
export class AppComponent {
  title = 'AnimationDemo';
  state : string = 'start';
  onOffState : string = 'on';

  studentNames  : string[] = ["keyur","denish","vinit","hiren","ravi"];

  toggleState():void{
    this.state = this.state === 'start' ? 'stop' : 'start';
    this.onOffState = this.onOffState === 'on' ? 'off' : 'on';  
  }

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute';

}
