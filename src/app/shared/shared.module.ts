import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatExpansionModule,
    ClickOutsideModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatExpansionModule,
    ClickOutsideModule
  ],
  declarations: []
})
export class SharedModule { }
