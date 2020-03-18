import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  prepositions = [
    "of",
    "the",
    "by",
    "near"
  ];

  transform(value: string, ...args: any[]) {
    if (!value) return null;

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let currentWord = words[i]
      if (i > 0 && this.isPreposition(currentWord))
      words[i] = currentWord.toLowerCase();
      else
      words[i] = this.toTileCase(currentWord);
    }

    return words.join(' ');
  }

  private toTileCase(word: string): string {
    return word.substr(0, 1).toUpperCase() 
    + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    return this.prepositions.includes(word.toLowerCase());
  }
}
