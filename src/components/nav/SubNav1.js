import React, { Component } from 'react';

class SubNav1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'Nav组件SubNav1'
         };
    }
    render() {
        return (
            <div className="user">               
                Nav组件SubNav1
            </div>
        );
    }
}

export default SubNav1;
