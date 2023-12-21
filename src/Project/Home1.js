import React from 'react'
import './Home1.css'
import SideBarTopp from './stockLogo.png'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import LocalGroceryStoreRounded from '@mui/icons-material/LocalGroceryStoreRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import Footer from './Footer';
export default function Home1() {
  return (
    <div>
      <div className='homeTop'>
        <a className='heading'>StoxTrackR</a>
        <a1><PersonIcon /> Logout</a1>
      </div>
      <div className='SideBar'>
        <img className='SideBarTop' src={SideBarTopp} alt='SideBarTop'></img>
        <ul>
          <li><a class="active" href='#'><HomeIcon />  Home</a></li>
          <li><a href='#'><PersonIcon />  Users</a></li>
          <li><a href='#'><PersonIcon />  Suppliers</a></li>
          <li><a href='#'><Inventory2Icon />  Items</a></li>
          <li><a href='#'><LocalShippingSharpIcon />  Item in</a></li>
          <li><a href='#'><LocalGroceryStoreRounded />  Item Out</a></li>
          <li><a href='#'><RestoreRoundedIcon />   BackUp and Restore</a></li>
        </ul>
      </div>
      <div className='Content'>
        <br></br>
        <hhome>Home</hhome>
        <hr></hr>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <div className='StyleIcon'>
              <PersonIcon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></PersonIcon>
            </div>
            <div className='LettersGrid'>
              Users
            </div>
          </div>
          <div class="grid-item">
            <div className='StyleIcon'>
              <PersonIcon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></PersonIcon>
            </div>
            <div className='LettersGrid'>
              Suppliers
            </div>
          </div>
          <div class="grid-item">
            <div className='StyleIcon'>
              <Inventory2Icon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></Inventory2Icon>
            </div>
            <div className='LettersGrid'>
              Items
            </div>
          </div>
          <div class="grid-item">
            <div className='StyleIcon'>
              <LocalShippingSharpIcon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></LocalShippingSharpIcon>
            </div>
            <div className='LettersGrid'>
              Item In
            </div>
          </div>
          <div class="grid-item">
            <div className='StyleIcon'>
              <LocalGroceryStoreRoundedIcon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></LocalGroceryStoreRoundedIcon>
            </div>
            <div className='LettersGrid'>
              Item Out
            </div>
          </div>
          <div class="grid-item">
            <div className='StyleIcon'>
              <RestoreRoundedIcon sx={{ fontSize: 100, color: 'rgb(74, 73, 73)' }} className='iconsGrid'></RestoreRoundedIcon>
            </div>
            <div className='LettersGrid'>
              BackUp and Restore
            </div>
          </div>
        </div>
      </div>
        <Footer></Footer>
    </div>
  )
}
