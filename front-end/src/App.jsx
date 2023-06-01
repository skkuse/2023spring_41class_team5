import React, { useEffect } from "react";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "store/reducer";
import { API_BASE_URL } from "api";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      axios
        .get(`${API_BASE_URL}/user`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then(({ data }) => {
          dispatch(login(data));
        })
        .catch((err) => console.log(err));
    }
  }, [token, dispatch]);

  return (
    <div className="bg-blue_gray_900 flex flex-col font-pretendard items-center justify-start mx-auto w-full select-none">
      <div className="flex flex-col items-center justify-start w-full">
        <Routes />
      </div>
    </div>
  );
}

export default App;
