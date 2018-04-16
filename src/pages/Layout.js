import React from 'react';

export default ({children, ...rest}) => {
  return (
    <div className='page'>
      <div className='sidebar'>Sidebar here</div>
      <div className='main'>{children}</div>
    </div>
  )
}