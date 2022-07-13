import {FormGroup, FormControl} from '@angular/forms' 
import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import { DoraemonCharacterService } from '../services/doraemon-character.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

  id? : number;

  
  saveRouteURL = this.router.url;

  verify_and_refirect_Route: boolean | undefined;

  contentItem: Content = {
    title: '',
    body: '',
    author: '',
    type: ''
  };
  tempTags: string = '';
  



  constructor(private router: Router,
    private route: ActivatedRoute,private contentService: DoraemonCharacterService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); 
      this.contentItem.id = this.id;
    });
    if(this.saveRouteURL === '/addContent')
    {
      console.log("Add Content works Here....")
      this.verify_and_refirect_Route = true;
      
    }
    else
    {
      console.log("Update Content works Here....")
      this.verify_and_refirect_Route = false;
    }
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
  updateContentToServer(){
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.updateCharacter(this.contentItem).subscribe(() =>
    console.log("Content updated successfully from Update", this.contentItem)
  );
      this.clearForm();

  }

  addContentToServer(){
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.addDoraemonCharacters(this.contentItem)
    .subscribe(newContentFromServer =>
      console.log("Success! New content added", newContentFromServer)
      );
      this.clearForm();
  }

}

