import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from '../shared'; 

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {
  tareas: Tarea[];
  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.tareas= this.listarTodos();
   
  }

listarTodos():Tarea[]{
  return this.tareaService.listarTodos();
}

remover($event: any, tarea: Tarea): void {
  $event.preventDefault();

  if(confirm('Desea remover la tarea "'+tarea.nombre + '"? '))
    {
      this.tareaService.remover(tarea.id);
      this.tareas= this.tareaService.listarTodos();
    }
}

}
