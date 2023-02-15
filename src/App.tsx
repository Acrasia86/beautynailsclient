import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginForm from './features/users/LoginForm';
import Home from './pages/Home/Home';
import userStore from './stores/userStore';
import store from './stores/store';
import { observer } from 'mobx-react-lite';
import ModalContainer from './common/ModalContainer';
import { Canvas, extend, useThree, ReactThreeFiber } from '@react-three/fiber';
import { OrbitControls } from 'three-orbitcontrols-ts';
import LoadingBar from './components/LoadingBar';
import Footer from './components/Footer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

function App() {
  const { token } = store;
  const { getUser } = userStore;

  useEffect(() => {
    if (token) {
      getUser().finally(() => store.setAppLoaded());
    } else {
      store.setAppLoaded();
    }
  }, [store, userStore])

  if (!store.appLoaded) return <LoadingBar />

  return (
    <div className="App">
      <ModalContainer />
      <Outlet />
    </div>
  );
}

export default observer(App);
