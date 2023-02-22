import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Main from "../component/main";
import { useTonConnect } from "../hooks/useTonConnect";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

function Routers() {
  // console.log('Routers start');
  // 로그인 페이지일지 메인 페이지일지 설정
  const [prevState, setPrevState] = useState<boolean>();
  const connection = useTonConnect();

  sleep(5000).then(() => {
    setPrevState(!prevState);
  });
  // 1.5초마다 연결상태 확인 후 연결 페이지 결정
  // 페이지 이동까지 총 3초 소요
  // console.log(connection);

  return (
    <Routes>
      <Route path="/Lucia-page/main" element={connection.connected ? <Main connection={connection}/> : <Navigate replace to="/Lucia-page/"/>} />
      <Route path="/Lucia-page/" element={connection.connected ? <Navigate replace to="/Lucia-page/main"/> : <Login connection={connection}/>} />
    </Routes>
  );
}

export default Routers;