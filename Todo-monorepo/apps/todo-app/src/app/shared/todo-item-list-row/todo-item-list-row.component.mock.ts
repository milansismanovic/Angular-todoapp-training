import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TODOItem } from '@todo-app/shared/models/todo-item';
import { TodoItemListRowComponent } from './todo-item-list-row.component';

@Component({
	selector: 'app-todo-item-list-row',
	template: '',
})
// tslint:disable-next-line:component-class-suffix
export class TodoItemListRowComponentMock implements TodoItemListRowComponent {
	@Input() public todoItem: TODOItem;
	@Input() public readOnlyTODO: boolean;
	@Output() public todoDelete = new EventEmitter();
	@Output() public todoEdit = new EventEmitter();
	@Output() public todoCompleteToggled: EventEmitter<string>;

	public completeClick() {
		this.todoItem.completed = !this.todoItem.completed;
	}

	public deleteClick() {
		this.todoDelete.emit(this.todoItem.id);
	}

	public editClick() {
		this.todoEdit.emit(this.todoItem);
	}
}
