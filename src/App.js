import React from 'react'
import CourseCard from './components/CourseCard'

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>
    PearPlanner
  </title>
  <link rel="icon" href="images/pear-half-outline-white.svg" type="image/x-icon" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/fontawesome.min.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <div className="fluid-container" style={{backgroundColor: 'whitesmoke'}}>
    <div className="row">
      {/* Sidebar Navigation */}
      <div className="col-lg-1 border-right">
        <ul className="nav nav-pills flex-column sidebar" style={{minHeight: 800, position: 'fixed'}} role="tablist">
          <li className="nav-item">
            <a className="navbar-brand" href="landingPage.html">
              <img src="images/pear_noColor.svg" alt="logo" style={{width: 40, marginLeft: 20, marginRight: 10, marginBottom: 15, marginTop: 25}} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#Classes">
              <svg width="3em" height="4em" viewBox="0 0 16 16" className="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#ToDo">
              <svg width="3em" height="4em" viewBox="0 0 16 16" className="bi bi-card-checklist" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path fillRule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#Scheduler">
              <svg width="3em" height="4em" viewBox="0 0 16 16" className="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path fillRule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#Contacts">
              <svg width="3em" height="4em" viewBox="0 0 16 16" className="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#Settings">
              <svg width="3em" height="4em" viewBox="0 0 16 16" className="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* Main Page Body Content */}
      <div className="col-lg-11" style={{minHeight: 800}}>
        <div className="tab-content">
          {/* Classes Page */}
          <div id="Classes" className="container tab-pane active"><br />
            <h3>Classes</h3>
            <div className="card flex-row flex-wrap course-card">
              <a className="card-block stretched-link text-decoration-none" data-toggle="collapse" href="#collapseExample1" />
              <div className="card-header" style={{backgroundColor: 'var(--red)', width: '15%'}} />
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">CSC 308</h4>
                <p className="card-text">Software Engineering I</p>
              </div>
            </div>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                <h4>Resources</h4>
                <ul className="class-resources-list">
                  <li><a href="#">Zoom Link</a></li>
                  <li><a href="#">Syllabus</a></li>
                  <li><a href="#">Course Outline</a></li>          
                </ul>
              </div>
            </div>
            <div className="card flex-row flex-wrap course-card">
              <a className="card-block stretched-link text-decoration-none" data-toggle="collapse" href="#collapseExample2" />
              <div className="card-header" style={{backgroundColor: 'var(--orange)', width: '15%'}} />
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">IME 314</h4>
                <p className="card-text">Engineering Economics</p>
              </div>
            </div>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Zoom Link</a></li>
                  <li><a href="#">Syllabus</a></li>
                  <li><a href="#">Course Outline</a></li>          
                </ul>
              </div>
            </div>
            <div className="card flex-row flex-wrap course-card">
              <a className="card-block stretched-link text-decoration-none" data-toggle="collapse" href="#collapseExample3" />
              <div className="card-header" style={{backgroundColor: 'var(--green)', width: '15%'}} />
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">BIO 213</h4>
                <p className="card-text">Life Science for Engineers</p>
              </div>
            </div>
            <div className="collapse" id="collapseExample3">
              <div className="card card-body">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Zoom Link</a></li>
                  <li><a href="#">Syllabus</a></li>
                  <li><a href="#">Course Outline</a></li>          
                </ul>
              </div>
            </div>
            <div className="card flex-row flex-wrap course-card">
              <a className="card-block stretched-link text-decoration-none" data-toggle="collapse" href="#collapseExample4" />
              <div className="card-header" style={{backgroundColor: 'var(--purple)', width: '15%'}} />
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">PSY 350</h4>
                <p className="card-text">Teamwork</p>
              </div>
            </div>
            <div className="collapse" id="collapseExample4">
              <div className="card card-body">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Zoom Link</a></li>
                  <li><a href="#">Syllabus</a></li>
                  <li><a href="#">Course Outline</a></li>          
                </ul>
              </div>
            </div>
          </div>
          
          {/* To Do Page */}
          <div id="ToDo" className="container tab-pane fade"><br />
            <h3>To Do</h3>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--red)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">Sprint #2 Presentation</h4>
                <p className="card-text">CSC 308</p>
              </div>
            </div>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--green)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">Prosthetic Software Assignment</h4>
                <p className="card-text">BIO 213</p>
              </div>
            </div>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--purple)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">How to Avoid Toxic People</h4>
                <p className="card-text">PSY 350</p>
              </div>
            </div>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--orange)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">How to do... Industrial... Stuff</h4>
                <p className="card-text">IME 314</p>
              </div>
            </div>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--purple)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">Why Agile is the Best for Teams</h4>
                <p className="card-text">PSY 350</p>
              </div>
            </div>
            <p />
            <h3>Recommended Assignment</h3>
            <div className="card flex-row flex-wrap to-do-card">
              <a className="card-block stretched-link text-decoration-none" />
              <div className="card-block px-4 py-4" style={{backgroundColor: 'var(--red)', width: '5%'}}>
                <input type="checkbox" name="checkBox1" unchecked />
              </div>
              <div className="card-block px-2 py-3">
                <h4 className="card-title mb-0">Sprint #2 Presentation</h4>
                <p className="card-text">CSC 308</p>
              </div>
            </div>
          </div>
          {/* Calendar Page */}
          <div id="Scheduler" className="container tab-pane fade"><br />
            <div id="calendar" />
          </div>
          {/* Contacts Page */}
          <div id="Contacts" className="container tab-pane fade"><br />
            {/* <h3>Contacts</h3>
                  <p>Contact list here.</p> */}
          </div>
          {/* Settings Page */}
          <div id="Settings" className="container tab-pane fade"><br />
            {/* <h3>Settings</h3>
                  <p>Settings here.</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    
  );
}

export default App;
