import React from 'react'
import './App.css';

const App = () => {
  return (
    <>
      <div className='wrapper'>
         {/* global msg */}
      <section className='global'>

      <div className='container'>
            Welcome
        <div className='icons'> 
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-square-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        
        
        </div>
        
       </div>
              </section>


 
         {/* top nav bar */}
 
 <header className='header'>
 helllo
    <div className='container'>
      <div className='logo'>
      
      <div>LOGO </div> 
      </div>
       <ul>
        <li>Home </li>
        <li>Contact</li>
        <li>About</li>


       </ul>
    </div>


 </header>
 
 
 
          {/* hero section */}
      <section className='hero'>
        <div className='hero-content'>
          <h1>Welcome to my travel blog</h1>
          <hr />

          <p>You rone stop getway information</p>
        </div>
      </section>
      
         
         {/* leatest */}
<section className='container'>
   <h2>Latest Posts</h2>
   <hr />

   <main className='main'>
    <div className='articles'>
      <article>
        <div className='art-img'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVU9sd0iNpqA-P4_w98jVDjQXwV6cANSDgURkGtxbQWtg5qypAk-7UA4EO_khAmZ6pYI&usqp=CAU' alt='laptop'  style={{width: '100%'}}/>
        </div>

        <div className='title'>
        <p>
          
         How to write code in the VS Code as per calender.
         </p>
        
        <i class="fa-solid fa-calendar-days"></i>
        <small>20-20-2023</small>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex vel velit efficitur
        </p>

        <button className='btn'>Read more</button>
        </div>

      </article>


    </div>

    <aside className='side-links'>Reft
    <div className='country'>
      <h3>Read by country</h3>
      <ul>
        <li>
          <a href='' >Australia</a>
        </li>

        <li>
          <a href='' >Nepal</a>
        </li>
        <li>
          <a href='' >INDIA</a>
        </li>
        <li>
          <a href='' >USA</a>
        </li>
        <li>
          <a href=""> UK</a>
        </li>
        <li>
          <a href='' >Austira</a>
        </li>
      </ul>
    </div>
    
    </aside>

    
   </main>

</section>

         
      



   {/* Recommendation */}
       <section className='recc'>
       <div className='conatiner'>
        <h2>Recommendation Dectination</h2>

        <hr />


        <div className='card-list'>
          <div className='card'>
            <img src='https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg' style={{width: '100%'}} />
            <div className='container'>
              <h3>Lorem of Rambo</h3>
                 <p>Hello its me rambo how r u ? </p>
                 <button className='btn'> Read More..</button>
            </div>
          </div>

          <div className='card'>
            <img src='https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg' style={{width: '100%'}} />
            <div className='container'>
              <h3>Lorem of Rambo</h3>
                 <p>Hello its me rambo how r u ? </p>
                 <button className='btn'> Read More..</button>
            </div>
          </div>
          <div className='card'>
            <img src='https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg' style={{width: '100%'}} />
            <div className='container'>
              <h3>Lorem of Rambo</h3>
                 <p>Hello its me rambo how r u ? </p>
                 <button className='btn'> Read More..</button>
            </div>
          </div>
          <div className='card'>
            <img src='https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg' style={{width: '100%'}} />
            <div className='container'>
              <h3>Lorem of Rambo</h3>
                 <p>Hello its me rambo how r u ? </p>
                 <button className='btn'> Read More..</button>
            </div>
          </div>
        </div>
       </div>

       </section>




         {/*  subscribe form  */}
      
<section className='subs'>
<h2> Subscribe to recieve latest article and news</h2>
<form action=''>
  <input type='text' />
  <input type='email' />
  <input type='submit' className='btn'/>

</form>

</section>

      {/* Foooter */}
         <footer className='footer'>
          &copy; Copy right all reserved. made by me with Rajiv_Gupta😊
         </footer>
      
      
  
      
      </div>

    

    
      {/* <Forms/> */}
    </>
  )
}

export default App