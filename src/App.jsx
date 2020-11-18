import React from 'react';
import { AuthContextProvider } from 'contexts/AuthContext';
import AppRoutes from 'routes/AppRoutes';

const App = () => (
  <AuthContextProvider>
    <AppRoutes />
  </AuthContextProvider>
);

export default App;
