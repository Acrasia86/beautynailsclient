import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { Role } from '../../interfaces/User';
import store from '../../stores/store';
import userStore from '../../stores/userStore'

const AdminPage = () => {
  
  //const [role, setRole] = useState<Role>();
  const {role, setRole} = userStore;
   useEffect(() => {
   
      fetch('http://localhost:5235/api/account/getrole', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + store.token,
        }
      }).then(res => res.json())
        .then(data => setRole(data));

      console.log(role);
  }, [])
  return (

    <div>
      <div>Admin page</div>
      <div>{role}</div>
    </div>
  )
}

export default observer(AdminPage);
