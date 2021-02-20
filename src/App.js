import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AssignmentList from './components/AssignmentList'
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import EventCalendar from './components/EventCalendar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import './App.css'

function Home() {
    return <h1>Home</h1>;
}

function Page() {
    return <h1>Page</h1>;
}

function App() {
    return (
        <Router>
            <Switch>
                <Route>
                    <div className="App">
                        <NavBar />
                        <div className="main">
                            <Switch>
                                <Route path="/todo">
                                    <AssignmentList />
                                </Route>
                                <Route path="/classes">
                                    <CourseList />
                                </Route>
                                <Route path="/page">
                                    <Page />
                                </Route>
                                <Route path="/calendar">
                                    <EventCalendar />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route> 
                            </Switch>
                        </div>
                        <Footer />
                    </div> 
                </Route>
                <Route exact path="/landingPage">
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;