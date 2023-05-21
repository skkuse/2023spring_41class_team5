import React from "react";
import Routes from "./Routes";
import Header from "components/Headercodedino/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="bg-blue_gray_900 flex flex-col font-pretendard items-center justify-start mx-auto w-full select-none">
      <div className="flex flex-col items-center justify-start w-full">
        <Header />
        <Routes />
        <Footer className="bg-gray_900 flex items-center justify-center mt-[111px] md:px-5 w-full" />
      </div>
    </div>
  );
}

export default App;
