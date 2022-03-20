import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, FilterProvider, CartProvider } from "./hooks";
import App from "./App";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
