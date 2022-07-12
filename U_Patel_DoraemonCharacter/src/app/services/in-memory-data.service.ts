import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import {Content} from '../models/content';
import { DEFAULTCHARACTERCONTENT, DORAEMONCHARACTERS } from '../data/mock-doraemonCharacters';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const doraemon: Content[] = DORAEMONCHARACTERS;
    return {
      doraemon: doraemon
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
}
