import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUser } from './redux/userSlice.js';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (useremail !== '' && password !== '') {
      try {
        setLoading(true);
        const res = await axios.post('http://localhost:3000/api/user/login', {
          email: useremail,
          password: password
        });
        console.log(res.data)
        dispatch(getUser(res?.data?.user));

        if (res.data) {
          navigate(-1);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setOpen(true)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Fill in the required fields');
    }
  };


  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login </h2>
            <p className="mt-2 text-sm text-gray-600">
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              ></a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      value={useremail}
                      required
                      onChange={(e) => { setuseremail(e.target.value) }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={password}
                      required
                      onChange={(e) => { setpassword(e.target.value) }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => handleLogin(e)}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {loading ? 'Logging in...' : 'Login'} 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-screen w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://cdn1.vectorstock.com/i/1000x1000/22/80/white-heart-family-donate-blood-red-background-vector-20012280.jpg"
            alt=""
          />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Incorrect email or password
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Login;
