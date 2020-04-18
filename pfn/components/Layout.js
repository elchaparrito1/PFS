import React from 'react';
import globalStyles from '../global/styles'

const Layout = (props) => (
  <>
    <div>
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  </>
)

export default Layout;