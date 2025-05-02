import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalService } from "./animal.service";
@Component({
    selector:'app-animal-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './animal-list.component.html'
})

export class AnimalListComponent{
    constructor(private animalService: AnimalService){}
    get animals(){
        return this.animalService.getAnimals()
    }
}