import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavbarSection.css"



function NavbarSection() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light sticky-md-top">
          <button  className="navbar-brand transparent digitallync" ><img src="images/Digitallynnc logo.png" alt=""/></button>
          <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 categories">
              <li className="nav-item dropdown px-2">
                <button className="nav-link dropdown-toggle transparent fw-bold transition" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </button>
                <ul className="dropdown-menu mx-auto">
                  <li><button className="dropdown-item">DevOps</button></li>
                  <li><button className="dropdown-item">Azure</button></li>
                  <li><button className="dropdown-item">asds</button></li>
                  <li><button className="dropdown-item">Azure DevOps</button></li>
                  <li><button className="dropdown-item">Salesforce</button></li>
                  <li><button className="dropdown-item">Java</button></li>
                  <li><button className="dropdown-item">React Js</button></li>
                  <li><button className="dropdown-item">Full Stack Development</button></li>
                  <li><button className="dropdown-item">Testing</button></li>
                  <button className="btn btn-primary btn-sm mx-3 px-4">View Courses</button>
                </ul>
                
              </li>
              <li className="nav-item dropdown px-2">
                <button className="nav-link dropdown-toggle transparent fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                  Programs
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item">Salesforce Masters Program</button></li>
                  <li><button className="dropdown-item">CloudOps Masters Program</button></li>
                  <li><button className="dropdown-item">Full Stack Masters Program</button></li>
                  <li><button className="dropdown-item">Testing Program</button></li>
                  <li><button className="dropdown-item">Job Ready Program</button></li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <button className="nav-link active transparent" aria-current="page">Career Support</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" id="Getskilled">Get Skilled</button>
              </li>
            </ul>
          </div>
      </nav>
    </div>
    
  );
}

export default NavbarSection;
