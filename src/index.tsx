import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Loading } from "./components/";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const currentThemeCokie = localStorage.getItem("theme");
if (currentThemeCokie) {
  document.documentElement.setAttribute("data-theme", currentThemeCokie);
}

const Boct = React.lazy(async () => {
  const [boctModuleImport] = await Promise.all([
    import("./boct"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  return boctModuleImport;
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Boct />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("Main")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

//https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
