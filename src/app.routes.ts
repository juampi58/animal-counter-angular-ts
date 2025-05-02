import { Routes } from "@angular/router";
import { AnimalFormComponent } from "./animal-form.component";
import { AnimalListComponent } from "./animal-list.component";
import { HomeComponent } from "./home.component";

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
            }
        ]
    }
]