import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalService } from "../../animal.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { signal } from '@angular/core';

@Component({
    selector:'app-animal-list',
    standalone: true,
    imports: [CommonModule, RouterLink, MatCardModule],
    templateUrl: './animal-list.component.html'
})

export class AnimalListComponent implements OnInit, OnDestroy{
    private intervalId: any
    seconds = signal(0)
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
            this.seconds.update(n=>n+1)
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