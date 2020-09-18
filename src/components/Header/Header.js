import React from 'react';
import './style.css';

function Header(){ 
return(
  <div>
    <div className = 'mainHeader'>
      <div className = 'logo'>
        <img src="../assets/Logo.svg"/>
      </div> 
        <div className = 'divisorHeader'></div> 
        <div className="btn-left">
          <button>
            <img src="../assets/security.svg"/>
          </button>
        
          <button>
            <img src="../assets/user.svg"/>
          </button>
        </div>
          
    </div>
  </div>
 )
}
export default Header;