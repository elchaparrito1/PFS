import styled from 'styled-components';

// export const Menu = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 30vw;
//   height: ${props => (props.opened ? '500px' : '0px')};
//   display: flex;
//   flex-direction: column;
//   background: #cbced1;
//   opacity: 1;
//   color: #fafafa;
//   transition: height 0.3s ease;
//   z-index: 2;

//   @media only screen and (max-width: 320px) {
//     height: ${props => (props.opened ? '450px' : '0px')};
//     width: 100vw;
//   }

//   @media only screen and (min-width: 321px) and (max-width: 767px) {
//     width: 100vw;
//   }

//   @media only screen and (min-width: 768px) and (max-width: 1024px) {
//     width: 100vw;
//   }

//   @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
//     height: ${props => (props.opened ? '315px' : '0px')};
//     width: 40vw;
//   }

//   @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
//     height: ${props => (props.opened ? '100vh' : '0px')};
//     width: 40vw;
//   }
// `;

export const ScrolledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30vw;
  height: ${props => (props.opened ? '450px' : '0px')};
  display: flex;
  flex-direction: column;
  background: gray;
  opacity: 1;
  color: #fafafa;
  transition: height 0.3s ease;
  z-index: 2;

  @media only screen and (max-width: 320px) {
    width: 100vw;
  }

  @media only screen and (min-width: 321px) and (max-width: 767px) {
    width: 100vw;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
  }

  @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
    height: ${props => (props.opened ? '315px' : '0px')};
    width: 40vw;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    height: ${props => (props.opened ? '100vh' : '0px')};
    width: 40vw;
  }
`;