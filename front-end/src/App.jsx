import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <div className="bg-blue_gray_900 flex flex-col font-pretendard items-center justify-start mx-auto w-full select-none">
      <div className="flex flex-col items-center justify-start w-full">
        <Routes />
      </div>
    </div>
  );
}

export default App;
