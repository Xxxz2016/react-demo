import React, { Component } from 'react';

class SubNav2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'Nav组件SubNav2'
         };
    }
    render() {
        return (
            <div className="user">
                Nav组件SubNav2
            </div>
        );
    }
}

export default SubNav2;
