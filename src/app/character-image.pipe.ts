import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './characters/dto/character.dto';

@Pipe({
  name: 'characterImage',
  standalone: true,
})
export class CharacterImagePipe implements PipeTransform {
  transform(character: Character): string {
    if (!character) return '';

    // Determine the image URL based on race and sex
    if (character.race === 0 && character.sex === 0) return 'assets/maleHuman.jpg';
    if (character.race === 0 && character.sex === 1) return 'assets/femaleHuman.jpg';


    if (character.race === 1 && character.sex === 0) return 'assets/maleElf.jpg';
    if (character.race === 1 && character.sex === 1) return 'assets/femaleElf.jpg';

    if (character.race === 2 && character.sex === 0) return 'assets/maleDarkElf.jpg';
    if (character.race === 2 && character.sex === 1) return 'assets/femaleDarkElf.jpg';


    if (character.race === 5 && character.sex === 0) return 'assets/maleKamael.jpg';
    if (character.race === 5 && character.sex === 1) return 'assets/femaleKamael.jpg';

    if (character.race === 6 && character.sex === 0) return 'assets/maleErtheia.jpg';
    if (character.race === 6 && character.sex === 1) return 'assets/femaleErtheia.jpg';

    return ''
  }
}
