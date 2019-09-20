import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IncomesComponent } from './incomes/incomes.component';
import { IncomesService } from './incomes/incomes.service';

@NgModule({
  declarations: [AppComponent, IncomesComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [
    IncomesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
