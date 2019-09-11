import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@todo-app/shared/shared.module';
import { TodoListCompletedComponent } from '@todo-app/todo-list-completed/todo-list-completed.component';
import { TodoListCompletedRoutingModule } from './todo-list-completed.routing';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		TodoListCompletedRoutingModule,
		SharedModule,
	],
	declarations: [TodoListCompletedComponent],
})
export class TodoListCompletedModule {}
