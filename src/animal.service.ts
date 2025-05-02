import { Injectable } from "@angular/core"
@Injectable({providedIn: 'root'})
export class AnimalService {
    private animals:{name:string, count:number}[]=[]

    getAnimals(){
        return this.animals
    }

    addAnimal(name:string){
        const existing = this.animals.find(element=> element.name == name)
        if(existing) existing.count += 1
        else this.animals.push({name, count: 1})
    }

    clearAnimals(){
        this.animals = []
    }

    loadAnimalsFromFakeApi():Promise<void>{
        return new Promise(resolve=>{
            setTimeout(()=>{
                this.animals = [
                    {name: 'lion', count: 1},
                    {name: 'zebra', count: 1}
                ]
                resolve()
            }, 1000)
        })
    }
}