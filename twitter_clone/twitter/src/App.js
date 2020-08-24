import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="grid-item one">
      <img className="logo" src="twitter-logo.png"></img>
          <div className="content">
            <p><i class="fas fa-search"></i>Follow your interests.</p>
            <p><i class="fas fa-user-friends"></i>Hear what people are talking about.</p>
            <p><i class="far fa-comment"></i>Join the conversation.</p>
          </div>
      </div>
      <div className="grid-item two">
      <div className="content-2">
        <form className="signin"> 
              <label className="email">
                <input type="text" name="email" placeholder="Phone, email, or username" />
              </label>    
              <label className="password">
                <input type="text" name="password" placeholder="Password"/>
              </label>
              <input className="btn top" type="submit" value="Log in" />
        </form>
       
          <img className="logo-2" src="twitter-logo.png"></img>
          <h2 className="header-text">See what’s happening in the world right now</h2>
          <p className="header-btn">Join Twitter today.</p>
          <a className="btn first" href="#">Sign up</a>
          <a className="btn second" href="#">Log in</a>
        </div>
      </div>
      <div className="nav">
        <a>About</a>
        <a>Help center</a>
        <a>Terms</a>
        <a>Privacy policy</a>
        <a>Cookies</a>
        <a>Ads info</a>
        <a>Blog</a>
        <a>Status</a>
        <a>Jobs</a>
        <a>Brand</a>
        <a>Advertise</a>
        <a>Marketing</a>
        <a>Businesses</a>
        <a>Developers</a>
        <a>Directory</a>
        <a>Settings</a>
        <p>© 2020 Twitter, Inc.</p>
      </div>
    </div>
  );
}

export default App;
