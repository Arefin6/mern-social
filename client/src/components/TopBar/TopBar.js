import React from 'react';
import  './topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons';


const TopBar = () => {
    return (
        <div className="topBarContainer">
             <div className="topBarLeft">
               <span className="logo">LamaSocial</span>
             </div>
             <div className="topBarCenter">
                <div className="searchBar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friend,post or video" className="searchInput" type="text" />
              </div> 
               
            </div>
             <div className="topBarRight">
                  <div className="topBarLinks">
                      <div className="topBarLink">HomePage</div>
                      <div className="topBarLink">TimeLine</div>
                  </div>
                  <div className="topBarIcons">
                     <div className="topBarIconItem">
                         <Person/>
                         <span className="topBarIconBadge">1</span>
                     </div>
                     <div className="topBarIconItem">
                         <Chat/>
                         <span className="topBarIconBadge">2</span>
                     </div>
                     <div className="topBarIconItem">
                         <Notifications/>
                         <span className="topBarIconBadge">1</span>
                     </div>
                  </div>
                  <img src="assets/person/1.jpeg" alt="" className="topBarImg"/>
             </div>
        </div>
    );
};

export default TopBar;