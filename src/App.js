import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Our components!
import AssignmentList from './components/AssignmentList'
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import EventCalendar from './components/EventCalendar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Settings from './components/Settings'
// Import CSS!
import './App.css'

function Layout() {
    return (
        <div>
            <NavBar />
            <Footer />
        </div>
    )
}

function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route component={Layout} />
            </Switch>
            <div className="main-wrapper">
                <div className="main">
                    <Route exact path="/app" component={CourseList} />
                    <Route exact path="/classes" component={CourseList} />
                    <Route exact path="/todo" component={AssignmentList} />
                    <Route exact path="/calendar" component={EventCalendar} />
                    <Route exact path="/settings" component={Settings} />
                </div>
            </div>
        </div> 
        </Router>
    )
}

export default App;