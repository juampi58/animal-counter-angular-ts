import { Injectable } from "@angular/core"
import { signal } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AnimalService {
    private animals = signal<{name:string, count:number}[]>([])

    getAnimals$() {
        return this.animals.asReadonly();
        //return of(this.animals()).pipe(delay(500)); // simulate 500ms network delay
    }

    addAnimal(name:string){
        const current = this.animals()
        const existing = current.find(element=> element.name == name)
        if(existing){
            existing.count++
            this.animals.set([...current])
        } 
        else this.animals.set([...current, {name, count: 1}])
    }

    clearAnimals(){
        this.animals.set([])
    }

    loadAnimalsFromFakeApi():Promise<void>{
        return new Promise(resolve=>{
            setTimeout(()=>{
                this.animals.set([
                    {name: 'lion', count: 1},
                    {name: 'zebra', count: 1}
                ])
                resolve()
            }, 1000)
        })
    }
}