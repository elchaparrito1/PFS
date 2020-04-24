import React, {useState, useEffect} from 'react';
// import Navbar from './Navbar';
import './styles.css';


/* NavBar.jsx */
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('white');
  
    const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menu.map((val, index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={() => setMenuOpen(false)}>{val}</MenuItem>)
    });
    
    return(
      <div>
        <div className="wrapper">
          <div className="main-container">
            {/* <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} color='white'/> */}
            <div className="menu-button-container"
                onClick={() => setOpen(!open)}>
                  <div className="media-button-line line-top" style={open ? {transform: 'rotate(45deg)'} : {transform: 'none'}}/>
                  <div className="media-button-line" style={open ? {opacity: 0, transform: 'translateX(-16px)'} : {opacity: 1, transform: 'none'}}/>
                  <div className="media-button-line line-bottom" style={open ? {transform: 'translateX(-1px) rotate(-45deg)'} : {transform: 'none'}}/>
            </div>
            <div className="logo">Logo</div>
          </div>
          <div className="menu-container" style={open ? {height: '100%'} : {height: '0'}}>
          {
            open 
              ?
              <div className="menu-list">
                {menuItems}
              </div>
              :
              null
          }
          </div>
        </div>

        <style jsx>{`
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 100vh;
            filter:  ${menuOpen ? `blur(2px)` : null};
            transition: filter 0.5s ease;
          }

          .wrapper {
            display: flex;
            flexDirection: column;
            alignItems: center;
            height: 100vh;
          }

          .main-container {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
            opacity: 0.9;
            display:flex;
            align-items:center;
            background: black;
            width: 100%;
            color: white;
            font-family: Lobster;
          }

          .logo {
            margin: 0 auto;
          }

          .menu-container {
            position: absolute;
            top: 0;
            left: 0;
            
            width: 100vw;
            display: flex;
            flex-direction: column;
            background: black;
            opacity: 0.95;
            color: #fafafa;
            transition: height 0.3s ease;
            z-index: 2;
          }

          .menu-list {
            padding-top: 3rem;
          }

          media-button-container {
            height: 32px;
            width: 32px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 4px;
          }

          .media-button-line {
            height: 2px;
            width: 20px;
            background: ${color};
            transition: all 0.2s ease;
          }

          .line-top {
            transform-origin: top left;
            margin-bottom: 5px;
          }

          .line-bottom {
            transform-origin: top left;
            margin-top: 5px;
          }

        `}</style>
      </div>
    )
}

/* MenuItem.jsx*/
const MenuItem = (props) => {
  const [hover, setHover] = useState(false);
  
    return(
      <div className="menu-item-container">
        <div 
          className="menu-item" 
          onMouseEnter={() => setHover(!hover)} 
          onMouseLeave={() => setHover(!hover)}
          onClick={props.onClick}
        >
          {props.children}  
        </div>
      <div className="line"/>
      <style jsx>{`
      .menu-item-container {
        opacity: 0;
        animation: '1s appear forwards';
        animation-delay: this.props.delay;
      }

      .menu-item {
        font-size: '1.2rem';
        padding: '1rem 0';
        margin: '0 5%';
        cursor: 'pointer';
        color: this.state.hover? 'gray':'#fafafa';
        transition: 'color 0.2s ease-in-out';
        animation: '0.5s slideIn forwards';
        animation-delay:this.props.delay;
      }

      .line {
        width: '90%';
        height: '1px';
        background: 'gray';
        margin: '0 auto';
        animation: '0.5s shrink forwards';
        animation-delay: this.props.delay;
        
      }
      `}</style>
    </div>  
    )
}

export default NavBar;
