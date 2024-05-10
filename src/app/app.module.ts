import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component'; // Import Task List component
import { TasksFormComponent } from './components/task-form/task-form.component'; // Corrected import

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent, // Add Task List component
    TasksFormComponent // Add Task Form component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
