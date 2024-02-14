import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Backup route for when a specific route is not found
  // { path: '**', redirectTo: 'ruta-de-fallback' }
  // Static or fallback routes here
  // { path: '**', component: NotFoundComponent } // Ruta de 404, por ejemplo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
