import React, { Suspense } from "react";
import Loading from "../components/loadingScreen";
const TheBoct = React.lazy(() => import("./theboct"));

class What extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <TheBoct />
      </Suspense>
    );
  }
}

export default What;
