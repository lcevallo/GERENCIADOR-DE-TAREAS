
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaRoutes } from './tareas';

export const routes: Routes =[
                
        {
                       path: '',
                       redirectTo: '/tareas/listar',
                       pathMatch: 'full'
        },               
               ...TareaRoutes
];

@NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
})
export class AppRoutingModule {}