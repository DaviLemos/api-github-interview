// * React * //
import React, { useState } from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';

function App() {
  const [user, setUser] = useState();
  const handleInput = (e) => {
    setUser(e.target.value);
  };
  const handleSearch = () => {
    console.log(user);
  };
  return (
    <div>
      <Input
        text="Username"
        size="medium"
        margin="20px"
        radius="30px"
        onChange={handleInput}
        onBlur={handleSearch}
      />
      <Button
        background="#4ffff2"
        text="Repository"
        size="medium"
        margin="10px"
        radius="10px"
      />
      <Button
        background="#744343"
        text="Starred"
        size="medium"
        margin="10px"
        radius="10px"
      />
    </div>
  );
}

export default App;
