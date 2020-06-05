import React, {useState, useEffect} from 'react';


/* Navbar.jsx */
const Navbar = () => {
  const [notScrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

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
  
    const menu = ['Bundesliga','Football Organizations','Domestic Club Competitions','Fantasy Leagues','Players']
    const menuItems = menu.map((val, index)=>{
      console.log(typeof `#${val}`)
      return (
        <a href={`#${val}`} key={index}>
          <MenuItem 
            delay={`${index * 0.2}s`} 
            onClick={() => setMenuOpen(false)}>{val}
          </MenuItem>
        </a>
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
              <img src="/pfn_transparent.png" alt="company logo" className=" not-scrolled logo-img" />
            </div>
          </div>
          <div className="menu-container" style={open ? {height: '450px'} : {height: '0'}}>
          {
            open 
              ?
              <div style={{paddingTop: '9rem'}}>
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
              <img src="/pfn-logo.png" alt="company logo" className="scrolled logo-img" />
            </div>
          </div>
          <div className="menu-container-scroll" style={open ? {height: '400px'} : {height: '0'}}>
          {
            open 
              ?
              <div style={{paddingTop: '5rem'}}>
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
const MenuItem = React.forwardRef((props, ref) => {
  const [hover, setHover] = useState(true);
  
    return (
        <div ref={ref} className="menu-item-container" style={{animationDelay: `${props.delay}`}}>
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
})

export default Navbar;

