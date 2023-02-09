import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const ThankYou = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
        <div>
        <TaskAltIcon style={{fontSize: '300px'}} fontSize='inherit' color='success'/>
        <h1 style={{marginLeft: '30px'}}>Tack för din bokning!</h1>
        </div>
    </div>
  )
}

export default ThankYou;
