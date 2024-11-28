import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HuaconPsicologiaComponent } from "./huacon-psicologia/huacon-psicologia.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HuaconPsicologiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moduloPsicologia';
}
