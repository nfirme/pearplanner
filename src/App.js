import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Our components!
import AssignmentList from './components/AssignmentList'
import NavBar from './components/NavBar'
import CourseList from './components/CourseListNew'
import EventCalendar from './components/EventCalendar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Settings from './components/SettingsNew'
import { AuthProvider } from './components/AuthComponents/AuthContext'
import PrivateRoute from './components/utils/PrivateRoute'
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
        <AuthProvider>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route component={Layout} />
            </Switch>
            <div className="main-wrapper">
                <div className="main">
                    <PrivateRoute exact path="/app" component={CourseList} />
                    <PrivateRoute exact path="/classes" component={CourseList} />
                    <PrivateRoute exact path="/todo" component={AssignmentList} />
                    <PrivateRoute exact path="/calendar" component={EventCalendar} />
                    <PrivateRoute exact path="/settings" component={Settings} />
                </div>
            </div>
        </AuthProvider>
        </div> 
        </Router>
    )
}

export default App;