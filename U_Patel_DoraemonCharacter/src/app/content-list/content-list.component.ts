import { Component, OnInit, Injectable } from '@angular/core';
import {Content} from '../models/content';
import { DORAEMONCHARACTERS } from '../data/mock-doraemonCharacters';
import { DoraemonCharacterService } from '../services/doraemon-character.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ContentList} from './content-list.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  doraemonCharacters: Content[];




  constructor(private contentService : DoraemonCharacterService) { 
      this.doraemonCharacters = [];
  }

  
  displayValue = '';
  getValue(input:string):any
  {
    let inputBox = (<HTMLInputElement>document.querySelector('input'));
    let buttonSelector = (<HTMLButtonElement>document.querySelector('button'));

    for (let index = 0; index < this.doraemonCharacters.length; index++) {
      if(this.doraemonCharacters[index].author === input)
      {
        inputBox.style.color = "blue";
        buttonSelector.style.color = "blue";
        buttonSelector.disabled = true;
        this.displayValue = `Content item exists with the Author Name: "${input}"`;
      }
      if(this.displayValue === '')
      {
        this.displayValue = "";
        inputBox.style.color = "gray";
        inputBox.style.color = "gray";
        buttonSelector.disabled = true;
        this.displayValue = `Content item doesn't exists with the Author Name: "${input}"`;
      } 
    }
    
  }

  disabledMsg = ""
  getDisabledMessage()
        {
          this.disabledMsg = `Note: Try to reload a page after clicking the Button one time!
          it's automatically Disabled on just 1st Click!`
          return this.disabledMsg;
        };

  unBlockBtn()
        {
          let buttonSelector = (<HTMLButtonElement>document.querySelector('button'));
          buttonSelector.disabled = false;
        }


        valueToPipe = '';
  provideInputValueToPipe(input:string):string
  {
    this.valueToPipe = input
      return this.valueToPipe;
  }


  foundContentMsg = ""
  foundMsg()
  {
    this.foundContentMsg = `Below is Content with same Author, which you are looking for:`
    return this.foundContentMsg;
  }



  setDoraemonCharacter: Content = {
    id: 7,
    title: 'sample title',
    body: 'sample body',
    author: 'sample author',
    imageLink: '',
    type: '',
    hashtags: ['sample']
  }
  updateDoraemonCharacter: Content = {
    id: 6,
    title: "tamako nobi Update",
    body: 'tamako nobi Update',
    author: 'tamako nobi Update',
    imageLink: 'https://pbs.twimg.com/media/EzfjrVXXIAkw8XG.jpg',
    type: 'Women',
    hashtags: ['tamako nobi', 'Update']
  }
  
  
  ngOnInit(): void {


    // get all the doraemon characters
    this.contentService.getDoraemonCahractersContent().subscribe((contentArrayFromService: Content[]) => {
      this.doraemonCharacters = contentArrayFromService;
  })


  // get the doraemon characters based on the input 
    /* this.contentService.getDoraemonCharactersFromInput(6).subscribe(fetchedContent => {
      alert(`the content you want to fetch is :

      ${JSON.stringify(fetchedContent)}`);
    }); */
    


    this.contentService.addDoraemonCharacters(this.setDoraemonCharacter);

    this.contentService.updateDoraemonCharactersContent(this.updateDoraemonCharacter);

    this.contentService.deleteDoraemonCharacters(3);
};

}
