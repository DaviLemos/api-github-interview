// * React * //
import React, { useState } from 'react';
import Button from './components/button/Button';

function App() {
  return (
    <div>
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
