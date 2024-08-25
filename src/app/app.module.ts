import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TaskComponent,
        TasksComponent,
        NewTaskComponent
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule { }