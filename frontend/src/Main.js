import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Datapage from './Pages/Datapage';
import Homepage from './Pages/Homepage';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Homepage}></Route>
            <Route exact path='/datapage' component={Datapage}></Route>
        </Switch>
    );
}

export default Main;