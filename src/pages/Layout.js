import React from 'react';

export default ({children, ...rest}) => {
  return (
    <div className='page'>
      <div className='main'>{children}</div>
    </div>
  )
}