import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Loading } from "./components/";
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

//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//serviceWorkerRegistration.registerX();

//https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
