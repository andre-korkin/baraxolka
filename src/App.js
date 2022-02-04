import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Login from './pages/login'


function App() {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route path='/' component={Home} />
        </Switch>
    )
}

export default App
