import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AnimalService } from "../../animal.service";
import { RouterOutlet } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import './animal-form.component.css'
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-animal-form',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterOutlet, MatFormFieldModule, MatInputModule, MatButtonModule,  ReactiveFormsModule],
    templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent{
    animalName= new FormControl('', {nonNullable: true, validators: [Validators.required]})
    showMessage= false
    constructor(private animalService: AnimalService){}
    animalForm = new FormGroup({
        name: this.animalName
      });
    addAnimal(event:Event){
        event.preventDefault
        if(this.animalForm.invalid) return
        const name = this.animalName.value.trim()
        if(name){
            this.animalService.addAnimal(name)
            this.animalName.setValue('')
            this.showMessage = true
            setTimeout(()=>this.showMessage=false, 2000)
        }
    }
}