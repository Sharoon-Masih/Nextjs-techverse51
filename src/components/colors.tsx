import React from 'react'

const Colors = ({ pageColor, pageName }: { pageColor: string, pageName: string }) => { //object destructuring

  return (
    <div className='h-[300px] relative'>
      {pageName === 'about' ? <div className='bg-red-500 h-full'>{pageName}</div> : pageName === "contact" ? <div className='bg-yellow-500 h-full'>{pageName}</div> : pageName === "service" ? <div className='bg-blue-500 h-full'>{pageName}</div> : <div className='bg-green-500'>its not required page</div>}

    </div>
  )
}

export default Colors;

//JSX -> javascript and XML (extensible mark-up language)
//extensible -> its means to add something

//1-rule: jsx must have one parent element.
//2-rule: every opening tag must have closing tag.

//ternary operator -> condition ? true : false
//short circuit