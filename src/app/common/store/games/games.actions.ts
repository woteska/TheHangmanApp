import { createAction } from '@ngrx/store';

const prefix = '[Games]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);
