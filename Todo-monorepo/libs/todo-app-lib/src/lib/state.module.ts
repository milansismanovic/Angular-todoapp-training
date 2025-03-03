import { CommonModule } from '@angular/common';
import {
	ModuleWithProviders,
	NgModule,
	Optional,
	SkipSelf,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@todo-app/environments/environment';
import { todoAppReducers } from './todo-app.reducers';
import { TodoListEffects } from './todo-list/state/todo-list.effects';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forRoot(todoAppReducers),
		EffectsModule.forRoot([TodoListEffects]),
		StoreDevtoolsModule.instrument({
			name: 'NgRx Testing Store DevTools',
			logOnly: environment.production,
		}),
	],
	declarations: [],
})
export class StateModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule?: StateModule,
	) {
		if (parentModule) {
			throw new Error(
				'StateModule is already loaded. Import it in the AppModule only',
			);
		}
	}
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: StateModule,
		};
	}
}
