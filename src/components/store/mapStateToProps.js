export default function mapStateToProps(component) {
    switch(component) {
        case "MainContent": {
            return function (state) {
                return { 
                    visibleComponent: state.visibleComponent 
                };
            }
        };
        case "SideBar": {
            return function(state) {
                return {
                    isOpen: state.isOpenSidebar
                }
            }
        }
        case "Header": {
            return function(state) {
                return {
                    isOpen: state.isOpenSidebar
                }
            }
        }
        case "Nav": {
            return function(state) {
                return {
                    visibleComponent: state.visibleComponent
                }
            }
        }
        case "OperationsBottom": {
            return function(state) {
                return {
                    visibleComponent: state.visibleComponent
                }
            }
        }
    }
}