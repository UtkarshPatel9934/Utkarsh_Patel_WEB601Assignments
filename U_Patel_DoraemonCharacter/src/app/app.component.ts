import { Component } from '@angular/core';
import {Content} from './models/content';
import {List} from './models/list.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'U_Patel_DoraemonCharacter';

  Author = 'Utkarsh Patel';

  firstContentItem: Content;
  secondContentItem: Content;
  thirdContentItem: Content;
  fourthContentItem: Content;
  fifthContentItem: Content;


  
  listOfContent: List = new List;

  constructor() {
    this.firstContentItem = {
      id: 0,
      title: 'Doraemon',
      body: '#MS-903 "Doraemon" or simply Doraemon is the main, titular character of all Doraemon media (including, but not limited to the original manga, the anime (1973, 1979, and 2005), video games, and movies).',
      author: 'Doraemon Fandom',
      imageLink: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/05/Doraemon-Smiling-Fujko-Fujio.jpg',
      type: 'Robot',
      hashtags: ['jhgj']
    }
    this.secondContentItem = {
      id: 1,
      title: 'Nobita',
      body: 'Nobita Nobi (野比 のび太 Nobi Nobita), known simply as Noby in the English dub, is the protagonist of the Doraemon series. His birthday is on 7th August (Leo).',
      author: 'Doraemon Fandom',
      imageLink: 'https://wallpaperaccess.com/full/5584404.jpg',
      type: 'Men',
      hashtags: ['kjdsgfkj']
    }
    this.thirdContentItem = {
      id: 2,
      title: 'Shizuka',
      body: 'Shizuka Minamoto (源 静香 Minamoto Shizuka), or Sue in the English dub, (born 8th May) is one of the main characters in the series, being the main female character. In the future after marrying Nobita, she is also known as Shizuka Nobi or Mrs. Nobi.',
      author: 'Doraemon Fandom',
      imageLink: 'https://i.pinimg.com/originals/ba/38/ef/ba38efec0069a0c939d8957d8d12eafa.jpg',
      type: 'Women',
      hashtags: ['scxnv']
    }
    this.fourthContentItem = {
      id: 3,
      title: 'Takeshi Gouda',
      body: 'Takeshi Gouda (Japanese Kanji: 剛田 武, born June 15th), more commonly known by his nickname Gian (Japanese: ジャイアン, translation of the English term Giant), is one of the main characters in the Doraemon series. In the English dub, he is known as Big G.',
      author: 'Doraemon Fandom',
      imageLink: 'https://m.media-amazon.com/images/M/MV5BYzZlOWRhMjItNzE2NC00MWU2LTg3OGMtN2YxMzk4M2MyNTYzXkEyXkFqcGdeQXVyNjIzMjgxMDY@._V1_.jpg',
      type: 'Men',
      hashtags: ['scxnv']
    }
    this.fifthContentItem = {
      id: 4,
      title: 'Suneo Honekawa',
      body: 'Suneo Honekawa (骨川スネ夫 Honekawa Suneo) (also known as Sneech in the English episodes) is a spoiled rich kid who likes to show off his cool stuff to his friends to make them jealous. ',
      author: 'Doraemon Fandom',
      imageLink: 'https://i.pinimg.com/originals/37/2a/7b/372a7b74086e6d196cb96e678e7f7055.jpg',
      type: 'Men',
      hashtags: ['scxnv']
    }


   
      
    
        // Populate the content to the empyty array.
        this.listOfContent.addContent(this.firstContentItem);
        this.listOfContent.addContent(this.secondContentItem);
        this.listOfContent.addContent(this.thirdContentItem);
        this.listOfContent.addContent(this.fourthContentItem);
        this.listOfContent.addContent(this.fifthContentItem);
  }

}
