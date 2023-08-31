"use client";

import store from "../../store/index";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import ToastProvider from "./ToastProvider";

let persistor = persistStore(store);

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastProvider />
        {children}
      </PersistGate>
    </Provider>
  );
};
export default Providers;
