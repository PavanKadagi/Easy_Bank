import React from 'react'

export default function ChooseEasyBank() {
  return (
    <>
        <main className="second-main">
 <div className="b">
         <section className="second-section">
                 <p className="why-choose">Why choose Easybank?</p>
                 <p className="second-para">  We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
                   
                     <div className="second-list">
                     <li>
                         <img  src="./images/icon-online.svg" alt='icon' />
                         <p className="Online-Baking">  Online Banking</p>
                           <p className="Our-Modern">   Our modern web and mobile applications allow you to keep track of your finances
                          wherever you are in the world.</p>
                     </li>
                     <li>
                         <img  src="./images/icon-budgeting.svg" alt='icon' /> 
                         <p className="Online-Baking">  Simple Budgeting</p>
                           <p className="Our-Modern">    See exactly where your money goes each month. Receive notifications when you’re
                             close to hitting your limits.</p>
                     </li>
                     <li><img  src="./images/icon-onboarding.svg" alt='icon' />
                         <p className="Online-Baking">  Fast Onboarding</p>
                           <p className="Our-Modern">  We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.</p>
                         </li>
                     <li>
                         <img  src="./images/icon-api.svg" alt='icon' />
                         <p className="Online-Baking">  Open API</p>
                           <p className="Our-Modern">  Manage your savings, investments, pension, and much more from one account. Tracking
                         your money has never been easier.</p>
                     </li>
                    </div>
         </section>
 </div>
     </main>
    </>
  )
}
