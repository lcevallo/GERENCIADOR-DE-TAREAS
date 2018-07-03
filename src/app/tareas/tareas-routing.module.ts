import { Routes } from '@angular/router';
import { ListarTareasComponent } from './listar';
import { RegistrarTareaComponent } from './registrar';

export const TareaRoutes: Routes = [
    {
        path: 'tareas',
        redirectTo: 'tareas/listar'
    },
    {
        path: 'tareas/listar',
        component: ListarTareasComponent
    },
    {
        path: 'tareas/registrar',
        component: RegistrarTareaComponent
    }
]