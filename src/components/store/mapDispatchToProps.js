import { bindActionCreators } from 'redux';
import { changeVisibleComponent, changeSidebarState } from "./actions.js";

export default function mapDispatchToProps(component) { 
    switch(component) {
        case "SideBar": {
            return function (dispatch) {
                return {
                    changeSidbarState: bindActionCreators(changeSidebarState, dispatch)
                };
            }
        };
        case "Header": {
            return function(dispatch) {
                return {
                    changeSidbarState: bindActionCreators(changeSidebarState, dispatch)
                };
            }
        }
        case "Nav": return function(dispatch) {
            return {
                changeVisibleComponent: bindActionCreators(changeVisibleComponent, dispatch)
            }
        }
    }
}