import React from "react";
import { Link } from "react-router-dom";
import './components/index.css';

function App() {
  return (
    <div className={'container'}>
      <div className={'menucon'}>
<Link to='/Home'> <div className={'menu'}>
  <p>Home</p>
</div>
</Link>
<Link to='/Tours'><div className={'menu'}>
  <p>Tours</p>
</div>
</Link>
<Link to='/Hotel'><div className={'menu'}>
  <p>Hotel</p>
</div>
</Link>
<Link to='/Gallary'><div className={'menu'}>
  <p>Gallery</p>
</div>
</Link>
<Link to='/Pages'><div className={'menu'}>
  <p>Pages</p>
</div>
</Link>
<Link to='/Blog'><div className={'menu'}>
  <p>Blog</p>
</div>
</Link>
<Link to='/Contact'><div className={'menu'}>
  <p>Contact</p>
</div>
</Link>
<Link to='/Login'><div className={'menu'}>
  <p>Login</p>
</div>
</Link>
</div>
<button>Sign Up</button>
    </div>
   
  );
}

export default App;
