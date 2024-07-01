export const ROUTER_PATH = {
  login: "/",
  signup: "/signup",
  storeInfo: "/store-info",
  cutStyle: "/store-cut-style",
  customerList: "/customer-list",
  review: "/customer-review",
  reservationList: "/reservation-list",
  reservationDetail: "/reservation-detail",
  reservationDashboard: "/reservation-dashboard",
  reservationSchedule: "/reservation-schedule",
  mypageUserInfo: "/mypage-edit-user-info",
  mypagePassword: "/mypage-change-password",
};

export const CATEGORY_INFOS = [
  {
    id: "store",
    menu: "상점관리",
    route: [
      { name: "내 상점정보", path: ROUTER_PATH.storeInfo },
      { name: "컷 스타일", path: ROUTER_PATH.cutStyle },
    ],
  },
  {
    id: "customer",
    menu: "고객관리",
    route: [
      { name: "고객목록", path: ROUTER_PATH.customerList },
      { name: "리뷰관리", path: ROUTER_PATH.review },
    ],
  },
  {
    id: "reservation",
    menu: "예약관리",
    route: [
      { name: "예약목록", path: ROUTER_PATH.reservationList },
      { name: "예약통계", path: ROUTER_PATH.reservationDashboard },
      { name: "예약스케줄", path: ROUTER_PATH.reservationSchedule },
    ],
  },
  {
    id: "mypage",
    menu: "마이페이지",
    route: [
      { name: "회원정보 수정", path: ROUTER_PATH.mypageUserInfo },
      { name: "비밀번호 변경", path: ROUTER_PATH.mypagePassword },
    ],
  },
];

export const NUMBER_COMMA = /\B(?=(\d{3})+(?!\d))/g;
