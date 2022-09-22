import React from 'react'
import './navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AppsIcon from '@mui/icons-material/Apps';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search-bar">
            <input type="text" className="search" placeholder='Search...' />
            <SearchOutlinedIcon />
        </div>
        <div className="navbar-icons">
            <ul>
              <li>
              <LanguageIcon className='icon' />
              <span>English</span>
              </li>

              <li>
              <ModeNightIcon className='icon'/>
              
              </li>

              <li>
              <AppsIcon className='icon'/>
              
              </li>

              <li>
               
              <EditNotificationsOutlinedIcon className='icon'/>
              <span className="noti-badge">
                  1
                </span>
              
              </li>

              <li>
              <ChatBubbleOutlineOutlinedIcon className='icon' />
              <span className="noti-badge">
                  1
                </span>
              </li>

              <li>
              <DragHandleOutlinedIcon  className='icon'/>
              
              </li>
              
              <li>
                <img src='https://media.istockphoto.com/id/524727042/photo/teen-girl-on-sea-promenade.webp?s=612x612&w=is&k=20&c=rffUEa_YHwhD0I_e60uzuGRm-WIt1Hf_4idz6RpaPi8='  alt='gg'/>
              </li>
            </ul>
          
        

        </div>
      </div>
    </div>
  )
}

export default Navbar