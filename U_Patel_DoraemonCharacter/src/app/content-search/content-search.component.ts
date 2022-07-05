import { Component, OnInit } from '@angular/core';
import {DORAEMONCHARACTERS} from '../data/mock-doraemonCharacters'
import {Content} from '../models/content';
import { DoraemonCharacterService } from '../services/doraemon-character.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {

  singleContent: Content[];


  checkForErrors: Content[];
  contentSearchMessage = {
    message: "",
    found: false
  };

  constructor(private contentService : DoraemonCharacterService) {
    this.singleContent = [];
    this.checkForErrors = [];
  }

  ngOnInit(): void {

    this.contentService.getDoraemonCahractersContent().subscribe((checkForErrors) => {
      this.checkForErrors = checkForErrors;
    })   
}

checkForIdInList(idValue: string): void {
  if (this.checkForErrors.some(character => character.id == Number(idValue))) {
    this.contentSearchMessage.message = "Hurray! Character Found";
    this.contentSearchMessage.found = true;
    this.contentService.getDoraemonCharactersFromInput(Number(idValue)).subscribe((contentArrayFromService) => {
      this.singleContent = contentArrayFromService;
    }) 
  }
  else {
    this.contentSearchMessage.message = "Opps! Character Not Found";
    this.contentSearchMessage.found = false;
    this.singleContent = [];
  }
}
}