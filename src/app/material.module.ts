import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
        
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule
    ],
    providers: [],
})
export class AngularMaterialModule {}
