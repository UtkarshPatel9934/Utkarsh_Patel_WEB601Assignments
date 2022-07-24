import { ApplicationRef, Component, OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';
 import { SwUpdate } from '@angular/service-worker';
 import { concat, first, interval } from 'rxjs';


// import {List} from './models/list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'U_Patel_DoraemonCharacter';

  Author = 'Utkarsh Patel';


  
 
  constructor(
    private logService: LogUpdateService,
    private appRef: ApplicationRef,
    // so we can check stability
    private updates: SwUpdate
  ) // so we can check for updates
  {}


  ngOnInit(): void {
    this.logService.init();


     // Allow the app to stabilize first
     // then poll for updates with interval()
     const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
    everyHourOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());


  }
}
