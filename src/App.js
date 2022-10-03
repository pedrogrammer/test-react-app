import { useState } from 'react';

import Home from './routes/Home';
import Cards from './routes/Cards';
import Chart from './routes/Chart';
import Quiz from './routes/Quiz';

import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import FloatingMenuBtn from './components/FloatingMenuBtn';
import DropShadow from './components/DropShadow';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const [sideMenuDisplay, setSideMenuDisplay] = useState(false);

    const sideMenuDisplayHandler = stat => setSideMenuDisplay(stat);

    return (
        <Router>
            <FloatingMenuBtn sideMenuDisplayHandler={sideMenuDisplayHandler} />
            <DropShadow
                sideMenuDisplayHandler={sideMenuDisplayHandler}
                stat={sideMenuDisplay}
            />
            <main id="app-main">
                <SideMenu
                    sideMenuDisplayHandler={sideMenuDisplayHandler}
                    stat={sideMenuDisplay}
                />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/cards">
                        <Cards />
                    </Route>
                    <Route path="/chart">
                        <Chart />
                    </Route>
                    <Route path="/quiz">
                        <Quiz />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
