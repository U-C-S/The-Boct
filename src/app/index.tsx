import React, { Suspense } from "react";
import { Loading } from "../components";
//const TheBoct = React.lazy(() => import("./theboct"));
//https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
const TheBoct = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./theboct"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  return moduleExports;
});

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
