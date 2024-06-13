import EditUserInfo from "../page/EditUserInfo";

// Router_infos에 object 순서 변경하면 안됨
export const ROUTER_INFOS = [
  // 내 상점정보
  { path: "/store_info", element: <EditUserInfo /> },
  // 컷 스타일
  { path: "/store_cut_style", element: <EditUserInfo /> },
  // 고객목록
  { path: "/customer_list", element: <EditUserInfo /> },
  // 예약관리
  { path: "/customer_reservation", element: <EditUserInfo /> },
  // 리뷰관리
  { path: "/customer_review", element: <EditUserInfo /> },
  // 회원정보 수정
  { path: "/mypage_edit_user_info", element: <EditUserInfo /> },
  // 비밀번호 변경
  { path: "/mypage_change_password", element: <EditUserInfo /> },
];

export const CATEGORY_INFOS = [
  {
    id: "store",
    menu: "상점관리",
    route: [
      { name: "내 상점정보", ...ROUTER_INFOS[0] },
      { name: "컷 스타일", ...ROUTER_INFOS[1] },
    ],
  },
  {
    id: "customer",
    menu: "고객관리",
    route: [
      { name: "고객목록", ...ROUTER_INFOS[2] },
      { name: "예약관리", ...ROUTER_INFOS[3] },
      { name: "리뷰관리", ...ROUTER_INFOS[4] },
    ],
  },
  {
    id: "mypage",
    menu: "마이페이지",
    route: [
      { name: "회원정보 수정", ...ROUTER_INFOS[5] },
      { name: "비밀번호 변경", ...ROUTER_INFOS[6] },
    ],
  },
];
