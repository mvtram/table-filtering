import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  MatBadgeModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatDividerModule,
  MatGridListModule,
  MatTableModule
} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class MaterialModule {

}
