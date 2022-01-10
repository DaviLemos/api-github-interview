// * React * //
import React, { useState, Fragment } from 'react';
// * GlobalStyle * //
import { GlobalStyle } from './assets/GlobalStyle';
// * Screens * //
import Search from './screens/search';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Search />
    </Fragment>
  );
}

export default App;
