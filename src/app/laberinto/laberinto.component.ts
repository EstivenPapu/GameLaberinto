import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-laberinto',
  templateUrl: './laberinto.component.html',
  styleUrls: ['./laberinto.component.css']
})
export class LaberintoComponent implements OnInit {

        nivelactual: number = 1;

        labeerinto: any[][];
        niveles: any[] = [];

        tipojugador: string = 'J';
        posisionjugador: {fila: number; columna: number};
        nivelcompletado: boolean = false;
        encelular: boolean;

        constructor() {
          this.definirNiveles();
          this.labeerinto = this.niveles[this.nivelactual];
          this.posisionjugador = { fila: 0, columna: 0};  
          this.encelular = this.detectardispositivomovil();   
        }

        detectardispositivomovil() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        moverjugador(fila: number, columna: number){
          const nuevafila = this.posisionjugador.fila + fila;
          const nuevacolumna = this.posisionjugador.columna + columna;

          if(this.labeerinto[nuevafila] && this.labeerinto[nuevafila][nuevacolumna] && this.labeerinto[nuevafila][nuevacolumna].tipo !== 'P' &&  this.labeerinto[nuevafila][nuevacolumna].tipo !== 'L'){

         
            this.labeerinto[this.posisionjugador.fila][this.posisionjugador.columna].tipo = 'C';
            
            
            this.posisionjugador.fila = nuevafila;
            this.posisionjugador.columna = nuevacolumna;
            this.labeerinto[nuevafila][nuevacolumna].tipo = this.tipojugador;
            
          }else if(this.labeerinto[nuevafila][nuevacolumna].tipo === 'L'){
            this.labeerinto[this.posisionjugador.fila][this.posisionjugador.columna].tipo = 'C';
           
            if(this.nivelactual <= 5){
              this.nivelactual++;
              
              if(this.nivelactual === 6){
                this.nivelactual = 0;
              }
            
              }
              
            this.labeerinto = this.niveles[this.nivelactual];
            this.posisionjugador = {fila: 0, columna:0};
            this.labeerinto[this.posisionjugador.fila][this.posisionjugador.columna] = { tipo: this.tipojugador };
          }
        } 
       

     

        
        
        reloadPage() {
          window.location.reload();
        }

        definirNiveles() {
          this.niveles = [

            [
              [1],[1]
            ],
            /* Nivel 1: Fácil */
            [
             
              [{ tipo: 'I' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }],          
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }],           
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'L' }],
            ],
            /* Nivel 2: Moderado */
            [
              
              [{ tipo: 'I' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }],            
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }],          
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'L' }],
            ],
            /* Nivel 3: Intermedio */
            [
              
              [{ tipo: 'I' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],            
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],          
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],           
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }],           
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }],           
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'L' }]
            ],
            /* Nivel 4: Difícil */
            [
            
              [{ tipo: 'I' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }],
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }],
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],            
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'L' }]          
              
            ],
            /* Nivel 5: Muy Difícil */
            [
              
              [{ tipo: 'I' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],              
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }],             
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }],             
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }],
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }],              
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }],             
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],              
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'L' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],              
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }],
              [{ tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],              
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }],             
              [{ tipo: 'P' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'C' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }, { tipo: 'P' }]
            ]
          ];
        }

        /**logica para manejar la ccion del teclado en pc y tactil en mobiles
         */
        manejarteclaprecionada(event: KeyboardEvent){
          switch (event.key) {
            case 'ArrowUp': this.moverarriba();
            break;
            case 'ArrowDown': this.moverabajo();
            break;
            case 'ArrowLeft': this.moverizquierda();
            break;
            case 'ArrowRight': this.moverderecha();
            break;
          }
        }

        moverarriba(){
          this.moverjugador(-1, 0);
        }

        moverabajo(){
          this.moverjugador(1, 0);
        }

        moverderecha(){
          this.moverjugador(0, 1);
        }

        moverizquierda(){
          this.moverjugador(0, -1);
        }

        ngOnInit(): void {
          this.labeerinto[this.posisionjugador.fila][this.posisionjugador.columna] = { tipo: this.tipojugador };
        }
}
