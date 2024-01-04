import React from 'react'
import './Items.css'
import SideBarTopp from './stockLogo.png'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import LocalGroceryStoreRounded from '@mui/icons-material/LocalGroceryStoreRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import Footer from './Footer';
export default function Items() {
  return (
    <div>
    <div className='homeTop'>
      <a className='heading'>StoxTrackR</a>
      <a1><PersonIcon /> Logout</a1>
    </div>
    <div className='SideBar'>
      <img className='SideBarTop' src={SideBarTopp} alt='SideBarTop'></img>
      <ul>
        <li><a href='#'><HomeIcon />  Home</a></li>
        <li><a href='#'><PersonIcon />  Users</a></li>
        <li><a  href='#'><PersonIcon />  Suppliers</a></li>
        <li><a className='active' href='#'><Inventory2Icon />  Items</a></li>
        <li><a href='#'><LocalShippingSharpIcon />  Item in</a></li>
        <li><a href='#'><LocalGroceryStoreRounded />  Item Out</a></li>
        <li><a href='#'><RestoreRoundedIcon />   BackUp and Restore</a></li>
      </ul>
    </div>
    <div className='Content1'>
      <br></br>
      <hhome>Items</hhome>
      <hr></hr>
      <br/>
      <div>
        <table className='ItemTable'>
            <tr>
                <th>Items</th>
                <th>Category</th>
                <th>Total Items Supplied</th>
                <th>Cost</th>
            </tr>  
            <tr>
                <td>Topwear</td>
                <td>Causal Shirts</td>
                <td>40</td>
                <td>4500</td>
            </tr>  
            <tr>
                <td>Topwear</td>
                <td>Formal Shirts</td>
                <td>90</td>
                <td>2800</td>
            </tr>  
            <tr>
                <td>Topwear</td>
                <td>Hoodies</td>
                <td>30</td>
                <td>2400</td>
            </tr>  
            <tr>
                <td>Topwear</td>
                <td>Oversized Tshirts</td>
                <td>25</td>
                <td>1500</td> 
            </tr>  
            <tr>
                <td>Bottomwear</td>
                <td>Shorts</td>
                <td>90</td>
                <td>2800</td>
            </tr>  
            <tr>
                <td>Bottomwear</td>
                <td>Cargo Joggers</td>
                <td>15</td>
                <td>3000</td>
            </tr>  
            <tr>
                <td>Bottomwear</td>
                <td>Jeans</td>
                <td>30</td>
                <td>3600</td>
            </tr>  
        </table>
      </div>
    </div>
      <Footer></Footer>
    </div>
    )
}
