import React from 'react'

export default function LatestArticles() {
  return (
    <>
        <main className="third-main">
         <section className="third-section">
             <p className="latest-articles">Latest Articles</p>
             <div className="img-card">
                 <li>
                     <img src="./images/image-currency.jpg" alt='currency' />
                     <div className="card-data">
                         <p className="Claire"> By Claire Robinson</p>
                         <span> Receive money in any currency with no fees</span>
                         <p className="the-world"> The world is getting smaller and we’re becoming more mobile. So why should you be
                         forced to only receive money in a single …</p>
                     </div>
                 </li>
                 <li>
                     <img src="./images/image-restaurant.jpg" alt='restaurant' /> 
                     <div className="card-data">
                         <p className="Claire"> By Wilson Hutton</p>
                         <span>  Treat yourself without worrying about money</span>
                         <p className="the-world"> Our simple budgeting feature allows you to separate out your spending and set
                          realistic limits each month. That means you …</p>
                     </div>
                 </li>
                 <li>
                     <img src="./images/image-plane.jpg" alt='plane' />
                     <div className="card-data">
                         <p className="Claire"> By Wilson Hutton</p>
                         <span>  Take your Easybank card wherever you go</span>
                         <p className="the-world">We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                               while you’re abroad. We’ll even show you …</p>
                     </div>
                 </li>
                 <li>
                     <img src="./images/image-confetti.jpg" alt='confetti' /> 
                     <div className="card-data">
                             <p className="Claire"> By Claire Robinson</p>
                             <span> Our invite-only Beta accounts are now live!</span>
                             <p className="the-world">After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                               It’s easy to request an invite through the site ...</p>
                         </div>
                 </li>
             </div>
         </section>
     </main>
    </>
  )
}
