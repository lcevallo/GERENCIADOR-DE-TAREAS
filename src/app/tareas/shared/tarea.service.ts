
import { Injectable } from '@angular/core';
import { Tarea } from './';


@Injectable()
export class TareaService {

  constructor()   {}

    listarTodos(): Tarea[]{
      const tareas= localStorage['tareas'];
      return tareas ? JSON.parse(tareas):[];
    }

    registrar(tarea: Tarea): void{
      const tareas= this.listarTodos();
      tarea.id= new Date().getTime();
      tareas.push(tarea);
      localStorage['tareas']=JSON.stringify(tareas);
    }

    buscarPorId(id: number): Tarea {
        const tareas: Tarea[] = this.listarTodos();
        return tareas.find(tarea=> tarea.id===id);
    }
    actualizar(tarea: Tarea): void{

      const tareas: Tarea[]= this.listarTodos();

      tareas.forEach((obj, index, objs) => {
              if(tarea.id=== obj.id){
                  objs[index]=tarea;
                  
              }
      });
      localStorage['tareas']=JSON.stringify(tareas);
    }


    remover(id :number): void {
      let tareas: Tarea[] = this.listarTodos();
      tareas= tareas.filter(tarea => tarea.id!== id);
      localStorage['tareas'] = JSON.stringify(tareas);

    }
    alterarStatur(id: number): void{
      const tareas: Tarea[] = this.listarTodos();
      tareas.forEach((obj,index,objs)=>{
            if(id === obj.id){
              objs[index].concluido=!obj.concluido;
            }
      });
      localStorage['tareas']=JSON.stringify(tareas);
    }
}
