import { combineReducers } from 'redux';
import { CHANGE_VISIBLE_COMPONENT, CHANGE_SIDEBAR_STATE } from './actions.js';

export default function visibleComponent(state, action) {
    switch(action.type) {
        case CHANGE_VISIBLE_COMPONENT: return action.component;
        
        default: return 0;
    }
}
export function isOpenSidebar(state, action) {
    switch(action.type) {
        case CHANGE_SIDEBAR_STATE: return !action.state;

        default: return true;
    }
}

export const reducers = combineReducers({
    visibleComponent,
    isOpenSidebar
});