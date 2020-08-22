import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { ScrolledMenu, Menu } from './styled';

/* Navbar.jsx */
const Navbar = () => {
  const [notScrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [windowWidth, setWidth] = useState(null);
  
  const useOutsideClick = (ref) => {
    useEffect(() => {
      /**
       * Close menu if clicked outside of ref
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const navref = useRef(null);
  useOutsideClick(navref);

  const handleScroll = () => {
      setScrolled(window.scrollY < 20 ? true : false);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const watchScroll = () => {
      document.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => {
      document.removeEventListener('scroll', handleScroll);
      abortController.abort();
    }
  });

  const handleWindowSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  });

  console.log(windowWidth);
  
    const menu = ['News', 'Bundesliga','Football Organizations','Domestic Club Competitions','Fantasy Leagues','Players']
    const menuItems = menu.map((val, index)=>{
      // console.log(typeof `#${val}`);
      return (
        <Link activeClass="active"
              to={val}
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500} 
              key={index}>
          <MenuItem 
            delay={`${index * 0.2}s`} 
            onClick={() => setMenuOpen(false)}>{val}
          </MenuItem>
        </Link>
        )
    });
    
    return(
      <>
        {notScrolled ? 
        <div className="bod" ref={navref} style={menuOpen ? {filter: 'blur(2px)'} : {filter: 'null'}}>
          <div className="wrapper" style={notScrolled ? {marginLeft: '10%', marginRight: '20%'} : {marginLeft: '0%', marginRight: '0%'}}>
            <div className="logo">
              <img src="/PFN-black.png" alt="company logo" className="not-scrolled logo-img" />
            </div>
          {open ? 
            <Menu opened >
              {
              open 
                ?
                <div className="padding-top">
                  {menuItems}
                </div>
                :
                null
              }
            </Menu>
           : 
            <Menu>
              {
              open 
                ?
                <div className="padding-top">
                  {menuItems}
                </div>
                :
                null
              }
            </Menu>
          } 
        </div>
      </div>
      :
      <div className="bod" ref={navref} style={menuOpen ? {filter: 'blur(2px)'} : {filter: 'null'}}>
        <div className="wrapper">
            {windowWidth > 1200 ?
              <div className="flexbox">
                <div className="col-logo">
                  <div>
                  <img src="/PFN-logo-red.png" alt="company logo" className="scrolled-desktop" />
                  </div>
                </div>
                <div className="col-middle">
                  <div></div>
                </div>
                <div className="col-menu">
                  <ul style={{listStyleType: "none"}}>
                    <li>{menuItems}</li>
                  </ul>
                </div>
              </div>
            :
            <div className="main-container-scroll">
              <div className="media-button-container-scroll"
                  onClick={() => setOpen(!open)}>
                    <div className="media-button-line line-top-scroll" style={open ? {transform: 'translate(4px) rotate(45deg)'} : {transform: 'none'}} />
                    <div className="media-button-line line-middle-scroll" style={open ? {opacity: 0, transform: 'translateX(-16px)'} : {opacity: 1, transform: 'none'}}/>
                    <div className="media-button-line line-bottom-scroll" style={open ? {transform: 'translate(3px) rotate(-45deg)'} : {transform: 'none'}}/>
              </div>
              <div style={{margin: "0 auto"}}>
                <img src="/PFN-white.png" alt="company logo" className="scrolled-not-desktop" />
              </div>
            </div>
            }
            
          {open ? 
            <ScrolledMenu opened >
              {
              open 
                ?
                <div className="padding-top-scrolled">
                  {menuItems}
                </div>
                :
                null
              }
            </ScrolledMenu>
           : 
            <ScrolledMenu>
              {
              open 
                ?
                <div className="padding-top-scrolled">
                  {menuItems}
                </div>
                :
                null
              }
            </ScrolledMenu>
          } 
          
        </div>
      </div>
      }
    </>
  )
}

/* MenuItem.jsx*/
const MenuItem = React.forwardRef((props, ref) => {
  const [hover, setHover] = useState(true);
  
    return (
        <div ref={ref} className="menu-item-container" style={{animationDelay: `${props.delay}`}}>
          <div 
            style={hover ? {color: '#9D9FA2', animationDelay: `${props.delay}`} : {color: '#E32222', animationDelay: `${props.delay}`, textDecoration: "underline"}}
            className="menu-item"
            onMouseEnter={() => setHover(!hover)} 
            onMouseLeave={() => setHover(!hover)}
            onClick={props.onClick}
          >
              {props.children}  
            </div>
          <div className="line" style={{animationDelay: `${props.delay}`}}/>
        </div> 
    )
})

export default Navbar;

