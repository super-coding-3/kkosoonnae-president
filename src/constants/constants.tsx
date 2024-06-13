import EditUserInfo from "../page/EditUserInfo";

export const ROUTER_INFOS = [
  { path: "/mypage_edit_user_info", element: <EditUserInfo /> },
];

export const CATEGORY = {
  STORE_MANAGEMENT: {
    menu: "상점관리",
    item1: "내 상점정보",
    item2: "컷 스타일",
  },
  CUSTOM_MANAGEMENT: {
    menu: "고객관리",
    item1: "고객목록",
    item2: "예약관리",
    item3: "리뷰관리",
  },
  MYPAGE: {
    menu: "마이페이지",
    item1: "회원목록 수정",
    item2: "비밀번호 변경",
  },
};
