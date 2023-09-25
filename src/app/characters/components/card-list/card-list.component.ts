import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../dto/character.dto';
import { CharactersService } from '../../services/characters.service';
import { first, tap } from 'rxjs';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent implements OnInit {
  public charList: Character[] = [];

  constructor(private charService: CharactersService) { }

  ngOnInit(): void {
    this.charService.getCharacters().pipe(
      first(),
      tap(e => {
        this.charList = e
      })
    )
      .subscribe()
  }

}
