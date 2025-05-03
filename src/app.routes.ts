import { Routes } from "@angular/router";
import { AnimalFormComponent } from "./components/animal-form/animal-form.component";
import { AnimalListComponent } from "./components/animal-list/animal-list.component";
import { HomeComponent } from "./components/home/home.component";

export const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'animals',
        component: AnimalFormComponent,
        children: [
            {
                path: '',
                component: AnimalListComponent
            },
            {
                path: ':type',
                component: AnimalListComponent
            }
        ]
    }
]