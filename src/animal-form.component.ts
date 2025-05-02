import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnimalService } from "./animal.service";

@Component({
    selector: 'app-animal-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent{
    animalName=''

    constructor(private animalService: AnimalService){}

    addAnimal(event:Event){
        event.preventDefault
        if(this.animalName.trim()){
            this.animalService.addAnimal(this.animalName.trim())
            this.animalName = ''
        }
    }
}