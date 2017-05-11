/* Importing angular core */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

/* Importing Services */
import { TaskService } from './service/task.service';

/* Importing Component */
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChildTaskComponent } from './tasks/child-task/child-task.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ChildTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
