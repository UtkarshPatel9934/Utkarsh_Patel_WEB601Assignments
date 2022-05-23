import { Component, Input, OnInit } from '@angular/core';
import {Content} from '../models/content'
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() charactersContent?: Content;


  constructor() { }

  ngOnInit(): void {
    if (this.charactersContent) {

      // Cross check if I can get data or not
      console.log(this.charactersContent.id);
      console.log(this.charactersContent.body);
      console.log(this.charactersContent.author);
    }
  }

}

