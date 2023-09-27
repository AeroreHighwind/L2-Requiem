import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './characters/dto/character.dto';

@Pipe({
  name: 'characterClass',
  standalone: true,
})
export class CharacterClassPipe implements PipeTransform {
  transform(character: Character): string {
    if (!character) return '';

    // Determine the image URL based on race and sex
    if (character.classid === 150) return `Sigel Eva's Templar`;
    if (character.classid === 157) return `Tyrr Doombringer`;
    if (character.classid === 159) return `Othell Wind Rider`;
    if (character.classid === 170) return `Feoh Soulhound`;
    if (character.classid === 171) return `Iss Hierophant`;
    if (character.classid === 181) return `Aeore Shillien Saint`;
    if (character.classid === 188) return `Eviscerator`;
    if (character.race === 0 && character.sex === 1) return 'assets/femaleHuman.jpg';

    return 'Unknown class'
  }
}
