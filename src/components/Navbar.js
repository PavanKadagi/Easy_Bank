import React from 'react'

export default function NavBar() {

    const handleButton = ()=>{
        let close_img = "./images/icon-close.svg"
        let menu_img = "./images/icon-hamburger.svg"
        let menu = document.querySelector(".menu");  
        let menu_list = document.querySelector(".menu-list");  
        if (menu.alt==1) {
            menu_list.style.display = "none"
            menu.src = menu_img;
            menu.alt = 0;
        }
        else if (menu.alt == 0) {
            menu_list.style.display = "block";
            menu.src = close_img;
             menu.alt = 1;
        }
      }

  return (
    <>
        <div className="top-header">
       
       <header className="header">
         <div className="Header-Container">
           <img src="./images/logo.svg" alt='logo' />
           <ul  className="Header-list">
           <li><a href='/#' >Home</a></li>
               <li><a href='/#'>About</a></li>
               <li><a href='/#'>Contact</a></li>
               <li><a href='/#'>Blog</a></li>
               <li><a href='/#'>Careers</a></li>
             </ul>
             <button className="Request-Button" type="button">Request Invite</button>
             <button id="Hanberger" className="menu-button" onClick={handleButton}  >
             <img className="menu" src="./images/icon-hamburger.svg" alt="0" />
             </button>
         </div>
       </header>
     </div>
 
     <div className="menu-list">
         <ul>
              <li><a href='/#' >Home</a></li>
               <li><a href='/#'>About</a></li>
               <li><a href='/#'>Contact</a></li>
               <li><a href='/#'>Blog</a></li>
               <li><a href='/#'>Careers</a></li>
         </ul>
     </div>
    </>
  )
}
