import { LinearProgress } from "@mui/material"
import { observer } from "mobx-react"

const LoadingBar = () => {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <LinearProgress style={{height: '5px', width: '60%'}}/>
        </div>
    )
}

export default observer(LoadingBar)