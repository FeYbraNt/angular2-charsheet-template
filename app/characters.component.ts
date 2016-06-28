import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterDetailComponent } from './character-detail.component';

import { CharacterService } from './character.service';

@Component({
    selector: 'my-characters',
    template:`
        <h1>{{title}}</h1>
        <h2>Mis personajes</h2>
        <ul class="heroes">
            <li *ngFor="let character of characters" 
                [class.selected]="character === selectedChar" 
                (click)="onSelect(character)">
                <span class="badge">{{character.id}}</span> {{character.name}}
            </li>
        </ul>
        <my-character-detail [character]="selectedChar"></my-character-detail>
        `,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
    directives: [CharacterDetailComponent]

})

export class CharactersComponent implements OnInit {
    title = 'Personajes';
    selectedChar: Character;
    characters: Character[];


    constructor(private characterService: CharacterService) { }

    getCharacters() {
        this.characterService.getCharacters().then(characters => this.characters = characters); //Promesa
    }

    ngOnInit() {
        this.getCharacters();
    }

    onSelect(char: Character) { this.selectedChar = char; }
}

