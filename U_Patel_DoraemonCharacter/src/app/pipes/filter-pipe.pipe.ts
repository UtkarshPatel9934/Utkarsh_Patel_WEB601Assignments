import { Content } from '../models/content';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  

  // comment out the default genrated Pipe Syntax
  // transform(value: unknown, ...args: unknown[]): unknown {
    //   return null;
    // }
    
    // Create new decleration for the filterPipe

    // get Access the contents ,gets the Input from the filterPipe decleration, and return the content that matched the type in the array and return it.
    transform(charactersContent:Content[],inputValue?: string): Content[] {
        return charactersContent.filter(doraemonCharacters => {
          return doraemonCharacters.type === inputValue;
      });
    }

}
