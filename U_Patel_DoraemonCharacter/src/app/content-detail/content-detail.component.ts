import { Component, OnInit } from '@angular/core';
import { DoraemonCharacterService } from '../services/doraemon-character.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Content} from '../models/content';
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;


  idForPrevious?: number;
  charactersContent?: Content;

  printDataOnConsole()
  {
    console.log(`Content's id is "${this.charactersContent?.id}" and Author is "${this.charactersContent?.author}"`);
  }


  constructor(private router: Router,
    private route: ActivatedRoute,
    private contentService: DoraemonCharacterService) {
      
     }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      if(this.id !== 0)
      {
        this.idForPrevious = this.id -1;
      }
      else{
        this.idForPrevious = 0;
      }

      this.contentService.getDoraemonCharacterDetails(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.charactersContent = singleItem;
        }
        else {
          this.router.navigate(['/list']);
        }
      });
    });
  }

}
