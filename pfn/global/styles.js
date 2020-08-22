import css from 'styled-jsx/css'

export default css.global`
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      background: #EBECF0;
      font-family: Inter, sans-serif;
    }

    .my-masonry-grid {
      display: -webkit-box; 
      display: -ms-flexbox; 
      display: flex;
      margin-left: -30px; 
      width: auto;
    }
    
    .my-masonry-grid_column {
      padding-left: 30px; /* gutter size */
      background-clip: padding-box;
    }
     
    .my-masonry-grid_column > div { 
      background: grey;
      margin-bottom: 50px;
    }

`