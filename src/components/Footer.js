import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
             <section className="section-footer">
                 <aside className="footer-left">
                     <div>
                           <img className="footer-logo"  src="./images/Footer-Logo.svg" alt='footer-logo' />
                           <div className="social-logo">
                             <img className="l" src="./images/icon-facebook.svg" alt='facebook' />
                            <img src="./images/icon-youtube.svg" alt='youtube' /> 
                            <img src="./images/icon-twitter.svg" alt='twitter' />
                            <img src="./images/icon-pinterest.svg" alt='pinterest' />
                            <img src="./images/icon-instagram.svg" alt='instagram' />   
                         </div>
                     </div>
                     <div className="footer-nav">
                             <p>About Us</p>
                             <p>Contact</p>
                             <p>Blog</p>
                     </div>
                     <div className="footer-nav" >
                         <p>Careers</p>
                          <p>Support</p>
                           <p>Privacy Policy</p>
                     </div>
                 </aside>
 
                 <div className="footer-right">
                     <button className="Request-Button" type="button">Request Invite</button>
                     <p className="copy-right">© Easybank. All Rights Reserved</p>
                 </div>
                    
             </section>
     </footer>  
    </>
  )
}
