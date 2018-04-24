import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchmenuComponent } from './searchmenu/searchmenu.component';
import { SearchserviceService } from './services/searchservice.service';
import { DetailspageComponent } from './detailspage/detailspage.component';
const appRoutes: Routes = [
{path:'',component:SearchmenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchmenuComponent,
    DetailspageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [SearchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
