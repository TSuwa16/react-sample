import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Parent from "./components/ContainerSample";
import Page from "./components/ContextSample";
import CounterSample from "./components/CounterSample";
import CounterReducerSample from "./components/CounterReducerSample";
import { UseMemoSample } from "./components/UseMemoSample";
import UseCallbackSample from "./components/UseCallbackSample";
import ImageUploader from "./components/useRefSample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<CounterSample initValue={0} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
