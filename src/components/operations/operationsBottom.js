import React from 'react';

export default class OperationsBottom extends React.Component {
    render() {
        if(this.props.visibleComponent == 2)
            return(
                <div className="operations_bottom">
                        <p>Данные отсутствуют</p>
                </div>
            );
        else
            return null;
    }
}