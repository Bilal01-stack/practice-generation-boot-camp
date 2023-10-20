import React from 'react'

export default function New() {
    let usersData = {
        name: 'bilal',
        email:'bilal@gamil.com'
    }

    localStorage.setItem('user', JSON.stringify(usersData));
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    console.log(user)

  return (
    <div>
      
    </div>
  )
}
