import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { first, tap } from 'rxjs';
import { Character } from '../../dto/character.dto';
import { CharacterImagePipe } from '../../../character-image.pipe';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CharacterImagePipe],
  providers: [],
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  public isLoaded: boolean = false;
  @Input() character!: Character;

  constructor(private charService: CharactersService) { }

  ngOnInit(): void {

  }


}
