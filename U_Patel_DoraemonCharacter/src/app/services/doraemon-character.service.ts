import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from '@angular/core';
import {Content} from '../models/content';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DEFAULTCHARACTERCONTENT, DORAEMONCHARACTERS } from '../data/mock-doraemonCharacters';

@Injectable({
  providedIn: 'root'
})
export class DoraemonCharacterService {

  // Added
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  }
 

  // Removed
  // constructor() { }
  // Added
  constructor(private http: HttpClient) { }


  // return the content array from the file in the data folder
  getDoraemonCahractersContent(): Observable<Content[]> {
    // return of(DORAEMONCHARACTERS);
    return this.http.get<Content[]>("/api/doraemon/");
  }


  // a method that accepts a number and returns the content item in the array that contains the same id as the number parameter
  // getDoraemonCharactersFromInput(getInputedNumberbyUser: number): Observable<Content[]> {
  //   return of (DORAEMONCHARACTERS.filter(dorarmonCharcter => {
  //     return  getInputedNumberbyUser === dorarmonCharcter.id;
  //   }));
  // }
  getDoraemonCharactersFromInput(getInputedNumberbyUser: number): Observable<Content> {
    return this.http.get<Content>("/api/doraemon/" + getInputedNumberbyUser);
  }


  // getDoraemonCharacterDetails(getInputedNumberbyUser: number): Observable<Content> {
  //   for (var i = 0; i < DORAEMONCHARACTERS.length; i++) // iterate through each chess champion
  //   {
  //     if (DORAEMONCHARACTERS[i].id === getInputedNumberbyUser) { // found the item
  //       return of(DORAEMONCHARACTERS[i]);
  //     }
  //   }
  //   return of(DEFAULTCHARACTERCONTENT); // need to return something if the content isn't there
  // }
  getDoraemonCharacterDetails(getInputedNumberbyUser: number): Observable<Content> {
    return this.http.get<Content>("/api/doraemon/" + getInputedNumberbyUser);
  }


  // A method that accepts a Content item as an input, adds the item to the array, and returns the array after the item is added

  // Removed
  // addDoraemonCharacters(getInputedContentbyUser:Content): Observable<Content[]>{
  addDoraemonCharacters(getInputedContentbyUser:Content): Observable<Content>{
    // alert(`the content you recently added is :
      
    //   id: ${getInputedContentbyUser.id},
    //   title: ${getInputedContentbyUser.title},
    //   body: ${getInputedContentbyUser.body},
    //   author: ${getInputedContentbyUser.author},
    //   imageLink: ${getInputedContentbyUser.imageLink},
    //   type: ${getInputedContentbyUser.type},
    //   hashtags: ${getInputedContentbyUser.hashtags?.join(', ')}
    //   `);

    // Removed
   /*  DORAEMONCHARACTERS.push(getInputedContentbyUser);
    return of (DORAEMONCHARACTERS) */
    console.log("Added Works: ");
    return this.http.post<Content>("/api/doraemon", getInputedContentbyUser, this.httpOptions)
  }
  
  
  // A method that accepts a Content item as an input, updates an existing item in the array that has the same id as the input parameter, and returns the array after the item is updated
  
  // Removed
  /* updateDoraemonCharactersContent(getInputedContentbyUser:Content): Observable<Content[]>{
    
    // fetch and save the types:
    let saveID = getInputedContentbyUser.id;
    let saveTitle = getInputedContentbyUser.title;
    let saveBody = getInputedContentbyUser.body;
    let saveAuthor = getInputedContentbyUser.author;
    let saveImageLink = getInputedContentbyUser.imageLink;
    let saveType = getInputedContentbyUser.type;
    let saveHashtags = getInputedContentbyUser.hashtags;
    
    
    // get the index at which the changes will take place
    let elementIndex = DORAEMONCHARACTERS.findIndex((obj => obj.id == saveID));


    // prints alert before updating content 
  //   alert(`You wants to update the content at ID: ${saveID}, 

  //   THE OLD CONTENT IS:
  //   id: ${DORAEMONCHARACTERS[elementIndex].id},
  //   title: ${DORAEMONCHARACTERS[elementIndex].title},
  //   body: ${DORAEMONCHARACTERS[elementIndex].body},
  //   author: ${DORAEMONCHARACTERS[elementIndex].author},
  //   imageLink: ${DORAEMONCHARACTERS[elementIndex].imageLink},
  //   type: ${DORAEMONCHARACTERS[elementIndex].type},
  //   hashtags: ${DORAEMONCHARACTERS[elementIndex].hashtags}

  //   PRESS OK TO UPDATE THE DORAEMON CHARACTER CONTENT AS:
  //   id: ${saveID},
  //   title: ${saveTitle},
  //   body: ${saveBody},
  //   author: ${saveAuthor},
  //   imageLink: ${saveImageLink},
  //   type: ${saveType},
  //   hashtags: ${saveHashtags?.join(', ')}
  // `);
    
  // Updates the content according to input!
  if(elementIndex)
  {
    DORAEMONCHARACTERS[elementIndex].title = saveTitle;
    DORAEMONCHARACTERS[elementIndex].body = saveBody;
    DORAEMONCHARACTERS[elementIndex].author = saveAuthor;
    DORAEMONCHARACTERS[elementIndex].imageLink = saveImageLink;
    DORAEMONCHARACTERS[elementIndex].type = saveType;
    DORAEMONCHARACTERS[elementIndex].hashtags = saveHashtags;
    // prints alert after updating content 
    // alert(`Congrats, the content sucessfully updated....`);
    return of (DORAEMONCHARACTERS);
  }
  else{
     // prints alert after updating content 
    //  alert(`Opps, the content was not updated....
    //  CHECK SOME MISTAKES :()`);
     return of (DORAEMONCHARACTERS);
  }


  } */


  // updateDoraemonCharactersContent(getInputedContentbyUser: Content): Observable<any>{
  //   return this.http.put<any>("/api/doraemon/" + getInputedContentbyUser, this.httpOptions);
  // }
  updateCharacter(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/doraemon/", contentItem, this.httpOptions);
  }

  // updateCharacterContent(getInputedContentbyUser: Content): Observable<any>{
  //   return this.http.put<any>("api/doraemon")
  // }


  // A method that accepts a number, removes the item from the array that has the same id as the number parameter, and returns the Content item that was removed

  // Removed
  // deleteDoraemonCharacters(getInputedNumberbyUser: number): Observable<Content[]>{

  //   let index = 1;
  //   var save:any;
  //   DORAEMONCHARACTERS.forEach(findIndex => {
  //     if(findIndex.id === getInputedNumberbyUser)
  //     {   
  //       // saveDeletedArray.push(this.getDoraemonCharactersFromInput(getInputedNumberbyUser));
  //       save = DORAEMONCHARACTERS.splice(getInputedNumberbyUser , index);
  //       // alert(`Deleted doraemon Character from Array is : 

  //       // ${JSON.stringify(save)}
  //       // `);
  //     }   
  //   })
  //   return save;
  // }
  
  deleteDoraemonCharacters(getInputedNumberbyUser: number): Observable<Content[]>{
    var save:any;
  this.http.delete("/api/doraemon/" + getInputedNumberbyUser).subscribe(data => {
    save = data
  });
  return save;

    // let index = 1;
    // var save:any;
    // DORAEMONCHARACTERS.forEach(findIndex => {
    //   if(findIndex.id === getInputedNumberbyUser)
    //   {   
    //     // saveDeletedArray.push(this.getDoraemonCharactersFromInput(getInputedNumberbyUser));
    //     save = DORAEMONCHARACTERS.splice(getInputedNumberbyUser , index);
    //     // alert(`Deleted doraemon Character from Array is : 

    //     // ${JSON.stringify(save)}
    //     // `);
    //   }   
    // })
    // return save;
  }
  

  


}
