import React from 'react'
import './LandingStyles.css'
import pearImageWhite from '../images/pear-half-outline-white.svg';
import pearImageBlack from '../images/pear-half-outline.svg';
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
        <title>
            Welcome
        </title>
        <link rel="icon" href="images/pear-half-outline-white.svg" type="image/x-icon" />
        {/* The core Firebase JS SDK is always required and must be listed first */}
        {/* TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries */}
        <header className="showcase">
            <div className="content">
            <img src={pearImageWhite} className="logo" alt="Pear Planner" />
            <div className="title" style={{color: 'white'}}>
                Welcome to Pear Planner
            </div>
            <div className="text" style={{color: 'white'}}>
                Planning made simple.
            </div>
            {/* <button type="button" className="landing-btn" data-toggle="modal" data-target="#modalLogin">
                Login
            </button>
            <button type="button" className="landing-btn" data-toggle="modal" data-target="#modalRegister">
                Sign Up
            </button> */}
            <LoginModal />
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

        {/* <div className="modal fade" id="modalLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body text-center">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <form className="form-signin" id="modalLoginForm">
                    <img className="mb-3" src={pearImageBlack} alt width={100} height={100} />
                    <h1 className="h3 mb-3 font-weight-normal">Login to PearPlanner</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" style={{marginTop: 5, marginBottom: 15}} className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3 mt-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="btn btn-lg btn-dark btn-block" onClick="window.location.href='./index.html';" type="submit" style={{height: 45}}>Login</button>
                </form>
                </div>
            </div>
            </div>
        </div> */}

        <div className="modal fade" id="modalRegister" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body text-center">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <form className="form-signin" id="modalRegisterForm">
                    <img className="mb-3" src={pearImageBlack} alt width={100} height={100} />
                    <h1 className="h3 mb-3 font-weight-normal">Register with PearPlanner</h1>
                    <label htmlFor="inputNewEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputNewEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputNewPassword" className="sr-only">Enter Password</label>
                    <input type="password" id="inputNewPassword" style={{marginTop: 5, marginBottom: 5}} className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPasswordConfirm" className="sr-only">Confirm Password</label>
                    <input type="password" id="inputPasswordConfirm" style={{marginTop: 15, marginBottom: 15}} className="form-control" placeholder="Re-enter Password" required />
                    {/* <a href="./index.html" class="btn btn-lg btn-dark btn-block" type="submit" style="height: 45px">Register</a> */}
                    <button className="btn btn-lg btn-dark btn-block" onClick="window.location.href='./index.html';" type="submit" style={{height: 45}}>Sign Up</button>
                    {/* <p class="mt-3 mb-3 text-muted">© 2020</p> */}
                </form>
                </div>
            </div>
            </div>
        </div>
        <footer className="center bg-dark">
            <p>PearPlanner © 2020</p>
        </footer>
        {/* Required JS */}
        </>

      
    )
}

export default LandingPage;