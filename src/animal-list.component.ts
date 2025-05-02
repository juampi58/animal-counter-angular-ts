import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalService } from "./animal.service";
@Component({
    selector:'app-animal-list',
    standalone: true,
    imports: [CommonModule],
    template:
        `<ul *ngFor="let animal of animals">
            <li>
                {{animal.name}}: {{animal.count}}
            </li>
        </ul>`
})

export class AnimalListComponent{
    constructor(private animalService: AnimalService){}
    get animals(){
        return this.animalService.getAnimals()
    }
}