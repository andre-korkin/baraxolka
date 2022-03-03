import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Login from './pages/login'
import Panel from './pages/panel'


function App() {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route path='/panel' component={Panel} />
            <Route path='/:catLabel?/:goodArticle?/:goodEdit?' render={(props => <Home {...props} />)} />
        </Switch>
    )
}

export default App
