import React from 'react'
import './Home.css'
export default function Home() {
  return (
  <div>
    <section id="sidebar"> 
    <div class="white-label"></div> 
    <div id="sidebar-nav">   
      <ul>
        <li class="active"><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li><a href="#"><i class="fa fa-desktop"></i> My Website</a></li>
        <li><a href="#"><i class="fa fa-usd"></i> Ecommerce</a></li>
        <li><a href="#"><i class="fa fa-pencil-square-o"></i> My Blog</a></li>
        <li><a href="#"><i class="fa fa-sitemap"></i> SEO Tools</a></li>
        <li><a href="#"><i class="fa fa-line-chart"></i> Reporting</a></li>
        <li><a href="#"><i class="fa fa-comments-o"></i>Social Marketing</a></li>
        <li><a href="#"><i class="fa fa-map-marker"></i> Get Traffic</a></li>     
        <li><a href="#"><i class="fa fa-users"></i> Employees</a></li>
        <li><a href="#"><i class="fa fa-calendar-o"></i> Reservations</a></li>
        <li><a href="#"><i class="fa fa-calendar"></i> Calendar</a></li>
      </ul>
    </div>
  </section>
  <section id="content">
    <div id="header">
      <div class="header-nav">
        <div class="menu-button">
          <i class="fa fa-navicon"></i>
        </div>
        <div class="nav">
          <ul>
            <li class="nav-settings">
              <div class="font-icon"><i class="fa fa-tasks"></i></div>
            </li>
            <li class="nav-mail">
              <div class="font-icon"><i class="fa fa-envelope-o"></i></div>
            </li>
            <li class="nav-calendar">
              <div class="font-icon"><i class="fa fa-calendar"></i></div>
            </li>
            <li class="nav-chat">
              <div class="font-icon"><i class="fa fa-comments-o"></i></div>
            </li>
            <li class="nav-profile">
              <div class="nav-profile-image">
                <img src="https://skynet.marketecture.com/user_avatars/258800/Hayley-Helsten.jpg" alt="profile image"/>
                <div class="nav-profile-name">Jane Smith<i class="fa fa-caret-down"></i></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h1>Dashboard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="widget-box sample-widget">
        <div class="widget-header">
          <h2>Widget Header</h2>
          <i class="fa fa-cog"></i>
        </div>
        <div class="widget-content">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"/>
        </div>
      </div>
      <div class="widget-box sample-widget">
        <div class="widget-header">
          <h2>Widget Header</h2>
          <i class="fa fa-cog"></i>
        </div>
        <div class="widget-content">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"/>
        </div>
      </div>
      <div class="widget-box sample-widget">
        <div class="widget-header">
          <h2>Widget Header</h2>
          <i class="fa fa-cog"></i>
        </div>
        <div class="widget-content">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"/>
        </div>
      </div>
        <div class="widget-box sample-widget">
        <div class="widget-header">
          <h2>Widget Header</h2>
          <i class="fa fa-cog"></i>
        </div>
        <div class="widget-content">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"/>
        </div>
      </div>  
    </div>
  </section>
            </div>
            )
        }
        