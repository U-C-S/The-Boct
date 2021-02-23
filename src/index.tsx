import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Loading } from "./components/";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const App = React.lazy(async () => {
  const [boctModuleImport] = await Promise.all([
    import("./app"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  return boctModuleImport;
});

const currentThemeCokie = localStorage.getItem("theme");
if (currentThemeCokie) document.documentElement.setAttribute("data-theme", currentThemeCokie);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("Main")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

//const TheBoct = React.lazy(() => import("./theboct"));
//https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
