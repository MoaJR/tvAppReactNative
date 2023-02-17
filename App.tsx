import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Login from './src/pages/Login';

const App = (): JSX.Element => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </NativeRouter>
  );
};
export default App;
