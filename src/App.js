// * React * //
import React, { useState, useEffect } from 'react';
// * GlobalStyle * //
import { GlobalStyle } from './assets/GlobalStyle';
// * Router * //
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// * Screens * //
import Search from './screens/search';
import Login from './screens/login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          const user_data = {
            id: resObject.user.id,
            avatar: resObject.user.photos[0].value,
            name: resObject.user.displayName,
          };
          localStorage.setItem('user', JSON.stringify(user_data));
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/"
          element={user ? <Search /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
