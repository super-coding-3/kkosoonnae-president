import Login from "../page/Login";
import ReservationList from "page/reservation_management/ReservationList";
import ReviewManagement from "page/review_management/ReviewManagement";
import EditUserInfo from "page/mypage/EditUserInfo";
import ChangePassword from "page/mypage/ChangePassword";
import ReservationDetail from "page/reservation_management/ReservationDetail";

// Router_infos에 object 순서 변경하면 안됨
export const ROUTER_INFOS = [
  // 로그인
  { path: "/", element: <Login /> },
  // 회원가입
  { path: "/signup", element: <Login /> },
  // 내 상점정보
  { path: "/store-info", element: <EditUserInfo /> },
  // 컷 스타일
  { path: "/store-cut-style", element: <EditUserInfo /> },
  // 고객목록
  { path: "/customer-list", element: <EditUserInfo /> },
  // 예약목록
  { path: "/customer-reservation", element: <ReservationList /> },
  // 리뷰관리
  { path: "/customer-review", element: <ReviewManagement /> },
  // 회원정보 수정
  { path: "/mypage-edit-user-info", element: <EditUserInfo /> },
  // 비밀번호 변경
  { path: "/mypage-change-password", element: <ChangePassword /> },
  // 예약 상세
  { path: "/customer-reservation-detail", element: <ReservationDetail /> },
  // 예약 통계
  { path: "/customer-reservation-statistics", element: <ReservationDetail /> },
];

export const CATEGORY_INFOS = [
  {
    id: "store",
    menu: "상점관리",
    route: [
      { name: "내 상점정보", ...ROUTER_INFOS[2] },
      { name: "컷 스타일", ...ROUTER_INFOS[3] },
    ],
  },
  {
    id: "customer",
    menu: "고객관리",
    route: [
      { name: "고객목록", ...ROUTER_INFOS[4] },
      { name: "예약관리", ...ROUTER_INFOS[5] },
      { name: "리뷰관리", ...ROUTER_INFOS[6] },
    ],
  },
  {
    id: "mypage",
    menu: "마이페이지",
    route: [
      { name: "회원정보 수정", ...ROUTER_INFOS[7] },
      { name: "비밀번호 변경", ...ROUTER_INFOS[8] },
    ],
  },
];
