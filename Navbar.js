
import {useState} from 'react';
import database from './firebase';
import logo from './logo.svg';
import './Navbar.css';
import Home from './Home';
import Hacks from './Hacks';
import Recipes from './Recipes';
import Commands from './Commands';
import Guide from './Guide';
import Contact from './Contact';
import SignUp from './SignUp';
import Games from './Games';
import Topservers from './Topservers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";  

function Navbar() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {    
   if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)    
   }  
};

  window.addEventListener('scroll', checkScrollTop)
  const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};
  return (
      <>
      
      <div className="navbar-list">
      <ul className="navbar-ul" id="head-noob">
      
      <Router>
         <Link to="/"><i><h1 className="logo">AncientCraft</h1></i></Link>
          <li title="Home Page"><Link to="/">Home</Link></li>
          <li><Link to="/hacks" title="Minecraft Hacks">Hacks <span id="don" class="material-icons">
expand_more
</span></Link></li>
          <li><Link to="/recipes" title="All minecraft Recipes">Recipes</Link></li>
          <li title="A full guide of Minecraft Surival"><Link to="/guide">Survival Guide</Link></li>
          <li><Link to="/games" title="All minecraft Games">Games <span id="don" class="material-icons">

expand_more
</span></Link></li>

          <li><Link to="/commands" title="All minecraft Commands">Commands</Link></li>
          <li><Link to="/contact-us" title="Contact Us">Contact Us</Link></li>
          

          
          <a href="https://www.minecraft.net/en-us/get-minecraft" target="_blank" title="Buy Official Minecraft"><span id="account" class="material-icons">
paid
</span></a>
          &nbsp;
          &nbsp;
          

          <span id="dark-mode" class="material-icons">
dark_mode
</span>

      
      
      
      <Route exact path="/">
      <Home />
      </Route>
  
      <Route exact path="/hacks">
      <Hacks />
      </Route>

      <Route exact path="/recipes">
      <Recipes />
      </Route>
 
      <Route exact path="/guide">
      <Guide />
      </Route>

      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/games">
        <Games />
      </Route>
      <Route exact path="/contact-us">
        <Contact />
      </Route>
      <Route exact path="/minecraft-servers">
        <Topservers />
      </Route>
      <Route exact path="/commands">
        <Commands />
      </Route>
      </Router>
      
     </ul>
     </div>

     <div className="scrollTop">
     <span id="up-arrow" onClick={scrollTop} title="Scroll all your way to " class="material-icons">expand_less</span>
  </div>


      
      </>
  );
}

export default Navbar;
