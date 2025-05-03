import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalService } from "./animal.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
@Component({
    selector:'app-animal-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './animal-list.component.html'
})

export class AnimalListComponent implements OnInit, OnDestroy{
    private intervalId: any
    private seconds: number = 0
    filter : string | null = null
    constructor(
        private animalService: AnimalService,
        private route: ActivatedRoute
    ){}
    ngOnInit(): void {
        this.route.paramMap.subscribe(params=>{
            const type= params.get('type')
            this.filter = type
        })
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
        const all = this.animalService.getAnimals()
        return this.filter? all.filter(a=>a.name === this.filter): all
    }
    clear(){
        this.animalService.clearAnimals()
    }
}