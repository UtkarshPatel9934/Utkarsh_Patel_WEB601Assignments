import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {Content} from './models/content';
import { OnInit, Injectable } from '@angular/core';
import { DORAEMONCHARACTERS } from './data/mock-doraemonCharacters';
import { DoraemonCharacterService } from './services/doraemon-character.service';


// import {List} from './models/list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'U_Patel_DoraemonCharacter';

  Author = 'Utkarsh Patel';

  singleContent: Content[];
  
 

  constructor(private contentService : DoraemonCharacterService) {
    this.singleContent = [];
  }



  ngOnInit(): void {
   this.contentService.getDoraemonCharactersFromInput(0).subscribe((contentArrayFromService: Content[]) => {
      this.singleContent = contentArrayFromService;
    })
  }
}
