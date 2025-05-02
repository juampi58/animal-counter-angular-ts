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
}