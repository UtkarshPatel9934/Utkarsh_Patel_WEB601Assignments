import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
// import {ContentList} from './content-list.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  doraemonCharacters: Content[];

  constructor() { 
      this.doraemonCharacters = [{
        id: 0,
        title: 'Doraemon',
        body: '#MS-903 "Doraemon" or simply Doraemon is the main, titular character of all Doraemon media (including, but not limited to the original manga, the anime (1973, 1979, and 2005), video games, and movies).',
        author: 'Doraemon Fandom',
        imageLink: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/05/Doraemon-Smiling-Fujko-Fujio.jpg',
        type: 'Robot',
        hashtags: ['Dora Maha Dora']
      },
      {
        id: 1,
        title: 'Nobita',
        body: 'Nobita Nobi (野比 のび太 Nobi Nobita), known simply as Noby in the English dub, is the protagonist of the Doraemon series. His birthday is on 7th August (Leo).',
        author: 'Doraemon Fandom',
        imageLink: 'https://wallpaperaccess.com/full/5584404.jpg',
        type: 'Men',
        hashtags: ['Noby']
      },
      {
        id: 2,
        title: 'Shizuka',
        body: 'Shizuka Minamoto (源 静香 Minamoto Shizuka), or Sue in the English dub, (born 8th May) is one of the main characters in the series, being the main female character. In the future after marrying Nobita, she is also known as Shizuka Nobi or Mrs. Nobi.',
        author: 'Doraemon Fandom',
        imageLink: 'https://i.pinimg.com/originals/ba/38/ef/ba38efec0069a0c939d8957d8d12eafa.jpg',
        type: 'Women',
        hashtags: ['Shizu']
      },
      {
        id: 3,
        title: 'Takeshi Gouda',
        body: 'Takeshi Gouda (Japanese Kanji: 剛田 武, born June 15th), more commonly known by his nickname Gian (Japanese: ジャイアン, translation of the English term Giant), is one of the main characters in the Doraemon series. In the English dub, he is known as Big G.',
        author: 'Doraemon Fandom',
        imageLink: 'https://m.media-amazon.com/images/M/MV5BYzZlOWRhMjItNzE2NC00MWU2LTg3OGMtN2YxMzk4M2MyNTYzXkEyXkFqcGdeQXVyNjIzMjgxMDY@._V1_.jpg',
        type: 'Men',
        hashtags: ['Giyan']
      },
      {
        id: 4,
        title: 'Suneo Honekawa',
        body: 'Suneo Honekawa (骨川スネ夫 Honekawa Suneo) (also known as Sneech in the English episodes) is a spoiled rich kid who likes to show off his cool stuff to his friends to make them jealous. ',
        author: 'Doraemon Fandom',
        imageLink: 'https://i.pinimg.com/originals/37/2a/7b/372a7b74086e6d196cb96e678e7f7055.jpg',
        type: 'Men',
        hashtags: ['Sunu']
      }
    ];
  }


  ngOnInit(): void {
  }

}
