import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalService } from "./animal.service";
@Component({
    selector:'app-animal-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './animal-list.component.html'
})

export class AnimalListComponent implements OnInit, OnDestroy{
    private intervalId: any
    private seconds: number = 0
    constructor(private animalService: AnimalService){}
    ngOnInit(): void {
        this.animalService.loadAnimalsFromFakeApi()

        this.intervalId = setInterval(()=>{
            this.seconds ++
            console.log(`animal list has bien active for ${this.seconds} seconds`)
        })
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId)
        console.log(`AnimlasListComponent  destroyed. Timer stopped`)
    }
    get animals(){
        return this.animalService.getAnimals()
    }
    clear(){
        this.animalService.clearAnimals()
    }
}