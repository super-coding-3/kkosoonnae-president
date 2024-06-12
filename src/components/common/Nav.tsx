import React from "react";
import { IoStorefront } from "react-icons/io5";
import { PiPawPrintFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shard_ui/accordion";

const Nav: React.FC = () => {
  return (
    <nav className="bg-MAIN_LIGHT_COLOR w-60 h-screen flex flex-col items-center">
      <img className="w-20 my-10" src="\img\logo\logo.svg" />
      <Accordion type="single" collapsible className=" text-white">
        <AccordionItem value="store">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <IoStorefront />
              상점관리
            </p>
          </AccordionTrigger>
          <AccordionContent>내 상점정보</AccordionContent>
          <AccordionContent>컷 스타일</AccordionContent>
        </AccordionItem>
        <AccordionItem value="customer">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <PiPawPrintFill />
              고객관리
            </p>
          </AccordionTrigger>
          <AccordionContent>고객목록</AccordionContent>
          <AccordionContent>예약관리</AccordionContent>
          <AccordionContent>리뷰관리</AccordionContent>
        </AccordionItem>
        <AccordionItem value="mypage">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <ImProfile />
              마이페이지
            </p>
          </AccordionTrigger>
          <AccordionContent>회원정보 수정</AccordionContent>
          <AccordionContent>비밀번호 변경</AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export default Nav;
