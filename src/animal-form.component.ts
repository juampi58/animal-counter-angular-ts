import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AnimalService } from "./animal.service";

@Component({
    selector: 'app-animal-form',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent{
    animalName=''
    showMessage= false
    constructor(private animalService: AnimalService){}

    addAnimal(event:Event){
        event.preventDefault
        if(this.animalName.trim()){
            this.animalService.addAnimal(this.animalName.trim())
            this.animalName = ''
            this.showMessage = true
            setTimeout(()=>this.showMessage=false, 2000)
        }
    }
}