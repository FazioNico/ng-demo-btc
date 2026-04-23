import { Pipe, PipeTransform } from '@angular/core';

type TextColor = 'red' | 'black';

@Pipe({
  name: 'hasWord',
})
export class HasWordPipe implements PipeTransform {
  transform(value: string, wordToFind: string): TextColor {
    return value.toLocaleLowerCase().includes(wordToFind.toLocaleLowerCase()) ? 'red' : 'black'
  }
}
