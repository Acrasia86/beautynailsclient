import React, { useEffect, useState } from 'react'
import store from '../../stores/store';
import userStore from '../../stores/userStore'

export const AdminPage = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    fetch('http://localhost:5235/api/account/getrole', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + store.token,
      }
    }).then(res => res.json())
    .then(data => console.log(data));
    
    console.log(role);
  }, [])
  return (

    <div>
      <div>Admin page</div>
    </div>
  )
}
