import React from "react";
import RoutesApp from "./rotas";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";


const App = () => (
  <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
  </AuthProvider> 
  
);

export default App;