import React from 'react'
import './LandingStyles.css'

function LandingPage() {
    return (
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./LandingStyles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
        <title>
          PearPlanner
        </title>
        <link rel="icon" href="images/pear_noColor.svg" type="image/x-icon" />
        <header className="showcase">
          <div className="content">
            <img src="images/pear-2-256.png" className="logo" alt="Pear Planner" />
            <div className="title">
              Welcome to Pear Planner
            </div>
            <div className="text">
              Planning made simple.
            </div>
            <button type="button" className="btn">login</button>
            <button type="button" className="btn">sign up</button>
          </div>
        </header>
        <section className="services">
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
          <p>PearPlanner © 2020</p>
        </footer>
      </>
      
    )
}

export default LandingPage;