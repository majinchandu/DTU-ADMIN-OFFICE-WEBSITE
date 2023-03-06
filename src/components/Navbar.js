import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar  navbar-dark bg-dark nav justify-content-center">
        <div class="container-fluid">
          <Link class="navbar-brand " to="/">
            <img
              className="dtulogo rounded-circle navbar-brand"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_woUCV14NEn0QrHZzzlfyfksjXqDVpWUgDUjbjRqf&s"
              alt="DTU LOGO"
            />
            Delhi Technological University
          </Link>
          <h1 className="heading ">General Admin Office</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/Download">
                  Downloads
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee Corner
                </Link>
                <div className="chandu">
                  <ul class="dropdown-menu ">
                    <li className="dropdownAdmin mx-3">
                      <Link class="dropdown-item " to="#">
                        Administrator
                      </Link>
                    </li>

                    <li className="dropdownDealingAss">
                      <Link class="dropdown-item " to="#">
                        Dealing Assistant
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* <nav class="navbar bg-body-tertiary navbar-dark bg-dark nav justify-content-center " data-bs-theme="dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_woUCV14NEn0QrHZzzlfyfksjXqDVpWUgDUjbjRqf&s"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Delhi Technological University
          </Link>
        </div>
      </nav> */}
      {/* <Carousel/> */}
    </div>
  );
}
