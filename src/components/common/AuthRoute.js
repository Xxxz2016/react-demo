import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: true,
    // authenticate(cb) {
    //     this.isAuthenticated = true;
    //     setTimeout(cb, 100); // fake async
    // },
    // signout(cb) {
    //     this.isAuthenticated = false;
    //     setTimeout(cb, 100);
    // }
};


function AuthRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default AuthRoute;
