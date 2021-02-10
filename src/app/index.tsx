import React, { Suspense } from "react";
import { Loading } from "../components";
const TheBoct = React.lazy(() => import("./theboct"));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <TheBoct />
      </Suspense>
    );
  }
}

export default App;
