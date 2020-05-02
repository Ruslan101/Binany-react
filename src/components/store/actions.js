export const CHANGE_VISIBLE_COMPONENT = "CHANGE_VISIBLE_COMPONENT";
export const CHANGE_SIDEBAR_STATE = "CHANGE_SIDEBAR_STATE";

// Action Creators
/**
 * Makes a sheet change visible component (in MainContent)
 * @param {number} number of component
 * @returns {Object} Object of action
 */
export function changeVisibleComponent(component) {
    return { type: CHANGE_VISIBLE_COMPONENT, component: component };
}
/**
 * Makes a sheet change state to sideBar (is open ? close : open)
 * @param {boolean} boolean current state
 * @returns {Object} Object of action
 */
export function changeSidebarState (state) {
    return { type: CHANGE_SIDEBAR_STATE, state };
}