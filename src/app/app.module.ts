import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/components/card/card.component";
import { DatePipe } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
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
        FormsModule
    ]
})
export class AppModule { }