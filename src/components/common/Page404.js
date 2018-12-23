import React, {Component} from 'react';
import {withRouter} from "react-router-dom";


class Page404 extends Component {
    render() {
        return (
           <h1>{this.props.history.location.pathname + ' 404'}</h1>
        );
    }
}

export default withRouter(Page404);
