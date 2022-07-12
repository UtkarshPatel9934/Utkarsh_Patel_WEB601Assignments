import {FormGroup, FormControl} from '@angular/forms' 
import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import { DoraemonCharacterService } from '../services/doraemon-character.service';
@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {


  contentItem: Content = {
    title: '',
    body: '',
    author: '',
    type: ''
  };
  tempTags: string = '';
  



  constructor(private contentService: DoraemonCharacterService) { }

  ngOnInit(): void {
    
  }

  clearForm()
  {
  
    (document.getElementById("title") as HTMLInputElement).value = "";
    (document.getElementById("body") as HTMLInputElement).value = "";
    (document.getElementById("author") as HTMLInputElement).value = "";
    (document.getElementById("imageLink") as HTMLInputElement).value = "";
    (document.getElementById("type") as HTMLInputElement).value = "";
    (document.getElementById("hashtags") as HTMLInputElement).value = "";
  }

  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    console.log(this.contentItem.hashtags);
    this.contentService.addDoraemonCharacters(this.contentItem)
    .subscribe(newContentFromServer =>
      console.log("Success! New content added", newContentFromServer)
      );
      this.clearForm();
  }

}

