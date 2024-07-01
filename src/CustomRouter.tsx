import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "page/Login";
import ReservationList from "page/reservation_management/ReservationList";
import ReviewManagement from "page/review_management/ReviewManagement";
import EditUserInfo from "page/mypage/EditUserInfo";
import ChangePassword from "page/mypage/ChangePassword";
import ReservationDetail from "page/reservation_management/ReservationDetail";
import ReservationDashboard from "page/reservation_management/ReservationDashboard";
import ReservationSchedule from "page/reservation_management/ReservationSchedule";
import { ROUTER_PATH } from "constants/constants";

const CustomRouter: React.FC = () => {
  return (
    <Routes>
      // 로그인
      <Route path={ROUTER_PATH.login} element={<Login />} />
      // 회원가입
      <Route path={ROUTER_PATH.signup} element={<Login />} />
      // 내 상점정보
      <Route path={ROUTER_PATH.storeInfo} element={<EditUserInfo />} />
      // 컷 스타일
      <Route path={ROUTER_PATH.cutStyle} element={<EditUserInfo />} />
      // 고객목록
      <Route path={ROUTER_PATH.customerList} element={<EditUserInfo />} />
      // 예약목록
      <Route path={ROUTER_PATH.reservationList} element={<ReservationList />} />
      // 리뷰관리
      <Route path={ROUTER_PATH.review} element={<ReviewManagement />} />
      // 회원정보 수정
      <Route path={ROUTER_PATH.mypageUserInfo} element={<EditUserInfo />} />
      // 비밀번호 변경
      <Route path={ROUTER_PATH.mypagePassword} element={<ChangePassword />} />
      // 예약 상세
      <Route
        path={ROUTER_PATH.reservationDetail}
        element={<ReservationDetail />}
      />
      // 예약 통계
      <Route
        path={ROUTER_PATH.reservationDashboard}
        element={<ReservationDashboard />}
      />
      // 예약 스케줄
      <Route
        path={ROUTER_PATH.reservationSchedule}
        element={<ReservationSchedule />}
      />
      {/* {ROUTER_INFOS.map((info, index) => (
        <Route key={index} path={info.path} element={info.element} />
      ))} */}
    </Routes>
  );
};

export default CustomRouter;
