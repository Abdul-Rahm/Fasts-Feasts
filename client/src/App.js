import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { app } from './config/firebase.config'; 
import {Route, Routes} from "react-router-dom";
import { Main, Login, Dashboard } from './containers';
import { getAllCartitems, validateUserJWTToken } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from './context/actions/userActions';
import { motion } from 'framer-motion';
import { fadeInOut } from './animations';
import { MainLoader, Alert, CheckOutSuccess, UsersOrder } from './components';
import { setCartItems } from './context/actions/cartAction';

const App = () => {

  const firebaseAuth = getAuth(app);
  const [isLoading, setisLoading] = useState(false)
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch();

  useEffect(() => {
    setisLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartitems(data.user_id).then((items) => {
                console.log(items);
                dispatch(setCartItems(items));
              });
            }
            dispatch(setUserDetails(data));
          });
        });
      } 
      setInterval(() => {
        setisLoading(false);
      }, 3000)
    });  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-cardOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div> 
      )}
      <Routes>
        <Route path='/*' element={<Main />}  />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/checkout-success' element={<CheckOutSuccess />} />
        <Route path='/user-orders' element={<UsersOrder />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message}/>}
    </div>
  )
}

export default App
