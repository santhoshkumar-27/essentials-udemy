import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./taskM/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./taskM/task/task.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./taskM/new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./taskM/task.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        TasksModule,
    ]
})
export class AppModule { }