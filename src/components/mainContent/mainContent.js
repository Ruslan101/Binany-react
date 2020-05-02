import React from 'react';
import loadable from "@loadable/component";
import Loading from '../loanding/loanding.js';
const Payment = loadable(() => import("../payment/payment.js"), { fallback: <Loading /> });
const Conclusion = loadable(() => import("../conclusionContent/conclusionContent.js"), { fallback: <Loading /> });
const Operations = loadable(() => import("../operations/operations.js"), { fallback: <Loading />  });


export default class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.components = [ <Payment />, <Conclusion />, <Operations /> ];
        this.component = this.components[this.props.visibleComponent];
    }
    shouldComponentUpdate(nextProps) {
        this.component = this.components[nextProps.visibleComponent];

        return true;
    }
    render() {
        return(
            <div className="main_content">
                {this.component}
            </div>
        );
    }
} 