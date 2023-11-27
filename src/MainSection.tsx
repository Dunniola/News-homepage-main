
 import  GamingGrowth  from './assets/images/image-web-3-desktop.jpg'
import './App.css'
import Retro  from "./assets/images/image-retro-pcs.jpg";
import  Laptops  from "./assets/images/image-top-laptops.jpg";
import  Gaming  from "./assets/images/image-gaming-growth.jpg";


function MainSection() {
  return (
    <>


    <section>
    <div>
    <div>
        
       <img src={GamingGrowth} alt=""  className='Home'/>
    </div>
    <div className='flex'>
    <div className='Popular'>
        <h1>The Bright Future of Web 3.0?</h1>

    </div>

    <div className='Trending'>
        <p>We dive into the next evolution of the web that clams to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button className='button'>READ MORE</button>
        </div>
    </div>
    </div>
    

    <div className='New'>
        <div>
        <h1>New</h1>
        <div className='first'>
        <span>Hydrogen VS Electric Car</span>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className='second'>
            <span>The Downsides of Al Artistry</span>
            <p>
            what are the possible adverse effects of on-demand Al image generation?</p>
        </div>

        <div className='third'>
            <span>Is VC Funding Drying Up?</span>
            <p>Private funding by VC firms is down 50% YOY.we take a look at what that means.</p>
        </div>
    </div>

    </div>
        

</section>

  <div className="Categories">

<div className="Retro">
<img src={Retro} alt="" />
<div className='one'>
<span>01</span>
<h4>Reviving Retro PCs</h4>
<p>What happens when old PCs are given modern upgrades?</p>
</div>
</div>



<div className="laptops">
<img src={Laptops} alt="" />
<div className='two'>
<span>02</span>
<h4>Top 10 LAptops of 2022</h4>
<p>Our best picks for various needs and budgets.</p>
</div>


</div>

<div className="Growth">
<img src={Gaming} alt="" />
<div className='three'>
<span> 03 </span>
<h4>The Growth of Gaming</h4>
<p>How the pandemic has sparked fresh opportunities.</p>
</div>

</div>
</div>
<div className='footer'>
    <p>Challenge by <a href ='https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl'>Frontend Mentor</a></p>
    <span>Coded by <a href ='https://github.com/Dunniola'> Dunniola</a></span>
</div>




   
    </>
  )
}

export default MainSection
