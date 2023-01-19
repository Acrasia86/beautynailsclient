import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginForm from './features/users/LoginForm';
import Home from './pages/Home/Home';
import userStore from './stores/userStore';
import store from './stores/store';
import { observer } from 'mobx-react-lite';



function App() {
  const {token} = store;
  const {getUser} = userStore;
  
  useEffect(() => {
    if(token) {
      getUser().finally(() => store.setAppLoaded());
    } else {
      store.setAppLoaded();
    }
  }, [store, userStore])

  // if(!store.appLoaded) return <LoadingComponent />

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default observer(App);
