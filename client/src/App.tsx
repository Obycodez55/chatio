import React, { useEffect } from "react";
import Login from "./pages/login/Login";

function App(): React.ReactElement {
  return (
    <div className="p-4 h-screen flex  items-center justify-center">
      <Login />
    </div>
  );
}

export default App;
