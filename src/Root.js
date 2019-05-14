import React from "react";
import { Provider } from "react-redux";
import App from "./App";

const Root = ({ store }) => {
  const { editors } = store.getState().janther.editors;
  return (
    <Provider store={store}>
      <App editors={editors} />
    </Provider>
  );
};

export default Root;
