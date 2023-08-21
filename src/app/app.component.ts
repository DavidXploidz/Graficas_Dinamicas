import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graficas_barras';
  
  public carteraVencida = [10000, 15000, 25000, 18000];
  public ingresosProyectados = [10000, 15000, 25000, 18000];
  public ingresos = [10000, 15000, 25000, 18000];
  public egresos = [10000, 15000, 25000, 18000];
  public perdidas = [10000, 15000, 25000, 18000];

}
