import { NgModule } from '@angular/core';
import { 
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule } from '@angular/material'

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
})

export class MaterialModule {}
