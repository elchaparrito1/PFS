import React, {useState, useEffect} from 'react';


/* NavBar.jsx */
const NavBar = () => {
  const [notScrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
      setScrolled(window.pageYOffset < 20 ? true : false);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const watchScroll = () => {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      abortController.abort();
    }
  });
  
    const menu = ['Leagues','World Cup News','Shop','Tables','Players']
    const menuItems = menu.map((val, index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.2}s`} 
          onClick={() => setMenuOpen(false)}>{val}
        </MenuItem>
        )
    });
    
    return(
      <>
        {notScrolled ? 
        <div className="bod" style={menuOpen ? {filter: 'blur(2px)'} : {filter: 'null'}}>
        <div className="wrapper">
          <div className="main-container">
            <div className="media-button-container button_slide slide_right"
                onClick={() => setOpen(!open)}>
                  <div className="media-button-line line-top" style={open ? {transform: 'translate(4px) rotate(45deg)'} : {transform: 'none'}} />
                  <div className="media-button-line line-middle" style={open ? {opacity: 0, transform: 'translateX(-16px)'} : {opacity: 1, transform: 'none'}}/>
                  <div className="media-button-line line-bottom" style={open ? {transform: 'translate(3px) rotate(-45deg)'} : {transform: 'none'}}/>
            </div>
            <div className="logo">
              <img src="/pfn_transparent.png" alt="company logo" className="logo-img" />
            </div>
          </div>
          <div className="menu-container" style={open ? {height: '500px'} : {height: '0'}}>
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
      </div>
      :
      <div className="bod" style={menuOpen ? {filter: 'blur(2px)'} : {filter: 'null'}}>
        <div className="wrapper">
          <div className="main-container-scroll">
            <div className="media-button-container-scroll"
                onClick={() => setOpen(!open)}>
                  <div className="media-button-line line-top-scroll" style={open ? {transform: 'translate(4px) rotate(45deg)'} : {transform: 'none'}} />
                  <div className="media-button-line line-middle-scroll" style={open ? {opacity: 0, transform: 'translateX(-16px)'} : {opacity: 1, transform: 'none'}}/>
                  <div className="media-button-line line-bottom-scroll" style={open ? {transform: 'translate(3px) rotate(-45deg)'} : {transform: 'none'}}/>
            </div>
            <div style={{margin: "0 auto"}}>
              <img src="/pfn-logo.png" alt="company logo" className="logo-img" />
            </div>
          </div>
          <div className="menu-container-scroll" style={open ? {height: '500px'} : {height: '0'}}>
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
      </div>
      }
    </>
  )
}

/* MenuItem.jsx*/
const MenuItem = (props) => {
  const [hover, setHover] = useState(true);
  
    return(
        <div className="menu-item-container" style={{animationDelay: `${props.delay}`}}>
          <div 
            className="menu-item"
            style={hover ? {color: 'white', animationDelay: `${props.delay}`} : {color: '#fafafa', animationDelay: `${props.delay}`}}
            onMouseEnter={() => setHover(!hover)} 
            onMouseLeave={() => setHover(!hover)}
            onClick={props.onClick}
          >
              {props.children}  
            </div>
          <div className="line" style={{animationDelay: `${props.delay}`}}/>
        </div> 
    )
}

export default NavBar;

