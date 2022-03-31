import React from 'react'

export const Footer = () => {
  let footerStyle ={
    position: "fixed",
    bottom:"0",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-1' style={footerStyle} >
      <p className="text-center">
        Copyright &copy; MyTodolist.com
      </p>
      </div>
  )
}
