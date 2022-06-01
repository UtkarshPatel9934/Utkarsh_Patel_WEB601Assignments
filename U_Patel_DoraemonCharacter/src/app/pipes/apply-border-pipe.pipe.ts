import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';
@Pipe({
  name: 'applyBorderPipe'
})
export class ApplyBorderPipePipe implements PipeTransform {

  transform(charactersContent:Content[],inputValue?: string): Content[] {
    return charactersContent.filter(doraemonCharacters => {
      return doraemonCharacters.author === inputValue;
  });
}

}
