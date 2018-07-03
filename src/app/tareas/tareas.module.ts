
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TareaService } from './shared';
import { ListarTareasComponent } from './listar';
import { RegistrarTareaComponent } from './registrar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTareasComponent,
    RegistrarTareaComponent
  ],
  providers: [ 
    TareaService
  ]
})
export class TareasModule { }
