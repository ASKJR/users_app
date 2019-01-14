import React from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';
import UserCreate from '../components/UserCreate';
import UserUpdate from '../components/UserUpdate';
import Error from '../components/Error';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />
                    <Switch>
                        <Route path="/" component={UserList} exact/>
                        <Route path="/user/create" component={UserCreate}/>
                        <Route path="/user/update/:id" component={UserUpdate} />
                        <Route component={Error}/>
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
