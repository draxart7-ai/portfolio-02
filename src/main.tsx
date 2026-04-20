import React from "react";
import ReactDOM from "react-dom/client";
import { AppMain } from "./app-main.tsx";
import "./styles/index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { ActiveElementProvider } from "./state/active-element/active-element-provider.tsx";
import { AppProvider } from "./state/app/app-provider.tsx";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ActiveElementProvider>
        <AppMain />
      </ActiveElementProvider>
    </AppProvider>
  </React.StrictMode>,
);
