import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AnimalFormComponent } from './animal-form.component';
import { AnimalListComponent } from './animal-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimalFormComponent, AnimalListComponent],
  template:`
    <h1>Animal Counter</h1>
    <app-animal-form/>
    <app-animal-list/>
  `
})
class AppComponent{}
bootstrapApplication(AppComponent);
