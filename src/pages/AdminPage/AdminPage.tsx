import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { Role } from '../../interfaces/User';
import store from '../../stores/store';
import userStore from '../../stores/userStore'
import Dashboard from '../AdminPage/AdminDashboard/Dashboard'

const AdminPage = () => {
  
  const [role, setRole] = useState<[]>([]);
  const {isLoggedIn} = userStore;

   useEffect(() => {
      if(store.token !== null && role !== null) {
        fetch('http://localhost:5235/api/account/getrole', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + store.token,
          }
        }).then(res => res.json())
          .then(data => setRole(data));
      }
    
      console.log(JSON.stringify(role));
  }, [role.length])
  return (

    <div>
      {
        role.map((userRole) => {
          if(userRole === 'Admin' && store.token !== null && isLoggedIn) {
            return <Dashboard/>
          }
          else if(!isLoggedIn) {
            <div>You are not permitted to be here</div>
          }
          else {
            return <div>You are not permitted to be here</div>
          }
        })
      }
    </div>
  )
}

export default observer(AdminPage);
