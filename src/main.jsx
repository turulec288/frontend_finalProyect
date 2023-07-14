import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextWrapper } from "./context/auth.context.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthContextWrapper>
      <Router>
        <App />
      </Router>
    </AuthContextWrapper>
  </ChakraProvider>
);
