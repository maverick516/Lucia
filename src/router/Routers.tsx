import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Buyer from "../component/Buyer";
import Login from "../component/Login";
import Main from "../component/main";
import Seller from "../component/Seller";
import SellHistory from "../component/SellHistory";
import SellList from "../component/SellList";
import TradeHistory from "../component/TradeHistory";
import { useTonConnect } from "../hooks/useTonConnect";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

function Routers() {
  // console.log('Routers start');
  // 로그인 페이지일지 메인 페이지일지 설정
  const [prevState, setPrevState] = useState<boolean>();
  const connection = useTonConnect();

  sleep(1500).then(() => {
    setPrevState(!prevState);
  });
  // 1.5초마다 연결상태 확인 후 연결 페이지 결정
  // 페이지 이동까지 총 3초 소요
  // console.log(connection);

  return (
    <Routes>
      <Route path="/Lucia-page/main" element={connection.connected ? <Main connection={connection}/> : <Navigate replace to="/Lucia-page/"/>} />
      <Route path="/Lucia-page/" element={connection.connected ? <Navigate replace to="/Lucia-page/main"/> : <Login connection={connection}/>} />
      <Route path="/Lucia-page/TradeHistory" element={<TradeHistory />} />
      <Route path="/Lucia-page/Seller" element={<Seller />} />
      <Route path="/Lucia-page/Buyer" element={<Buyer />} />
      <Route path="/Lucia-page/SellList" element={<SellList />} />
      <Route path="/Lucia-page/SellHistory" element={<SellHistory />} />
    </Routes>
  );
}

export default Routers;