import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './characters/dto/character.dto';

@Pipe({
  name: 'characterImage',
  standalone: true,
})
export class CharacterImagePipe implements PipeTransform {
  transform(character: Character): string {
    if (!character) return '';

    let imageUrl = '';

    // Determine the image URL based on race and sex
    if (character.race === 1 && character.sex === 0) {
      imageUrl = 'assets/maleElf.jpg';
    } if (character.race === 1 && character.sex === 1) {
      return imageUrl = 'assets/femaleElf.jpg';
    }
    // Add more conditions for other races and sexes

    return imageUrl;
  }
}
