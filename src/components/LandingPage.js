import React from 'react'
import './LandingStyles.css'
import pearImageWhite from '../images/pear-half-outline-white.svg';
import LoginModal from './AuthComponents/LoginModal'
import SignUpModal from './AuthComponents/SignUpModal'

function LandingPage() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./LandingStyles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <header className="showcase">
        <LoginModal variant="danger" buttonText="Go to App >" buttonStyle="app-button"/>
            <div className="content">
            <img src={pearImageWhite} className="logo" alt="Pear Planner" />
            <div className="title" style={{color: 'white'}}>
                Welcome to PearPlanner
            </div>
            <div className="text" style={{color: 'white'}}>
                Planning made simple.
            </div>
            <LoginModal variant="primary" buttonText="Sign In"/>
            <SignUpModal />
            </div>
        </header>
        <section className="services bg-dark">
            <div className="container grid-3 center">
            <div>
                <i className="fas fa-school fa-3x" />
                <h3>Centralize</h3>
                <p>Integrate content from all of your institutions.</p>
            </div>
            <div>
                <i className="fas fa-chalkboard-teacher fa-3x" />
                <h3>Coursework</h3>
                <p>Condense your coursework access points.</p>
            </div>
            <div>
                <i className="fab fa-google fa-3x" /> 
                <h3>Google</h3>
                <p>Import your google contacts and integrate your google calendar.</p>
            </div>
            </div>
        </section>
        <section className="about bg-light">
            <div className="container">
            <div className="grid-2">
                <div className="center">
                <i className="fas fa-laptop-code fa-10x" />
                </div>
                <div>
                <h3>About Us</h3>
                <p>PearPlanner is a content integration platform for work, school and life.
                    Built by students for students, PearPlanner optimizes your workflow and helps
                    you get stuff done.
                </p>
                </div>
            </div>
            </div>
        </section>
        <footer className="center bg-dark">
            <p>PearPlanner © 2021</p>
        </footer>
        </>
    )
}

export default LandingPage;