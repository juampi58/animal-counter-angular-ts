import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule, MatCardModule, MatButtonModule, RouterLink],
    templateUrl: './home.component.html'
})
export class HomeComponent{}