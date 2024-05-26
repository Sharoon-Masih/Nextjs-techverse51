import React from 'react'

const ContactCard = ({name,phoneNo,email}:any) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{phoneNo}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default ContactCard