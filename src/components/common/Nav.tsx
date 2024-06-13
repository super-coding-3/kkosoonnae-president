import React from "react";
import { IoStorefront } from "react-icons/io5";
import { PiPawPrintFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shard_ui/accordion";
import { CATEGORY } from "constants/constants";

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  const getDefaultAccordionItem = (): string => {
    if (pathname.includes("store")) {
      return "store";
    } else if (pathname.includes("customer")) {
      return "customger";
    } else {
      return "mypage";
    }
  };

  const navLink = (to: string, item: string) => {
    const isCurrentPath = pathname === to ? true : false;
    return (
      <Link to={to}>
        <AccordionContent
          className={isCurrentPath ? "font-semibold opacity-100" : "opacity-50"}
        >
          {item}
        </AccordionContent>
      </Link>
    );
  };

  return (
    <nav className="bg-MAIN_LIGHT_COLOR w-60 h-screen flex flex-col items-center">
      <img className="w-20 my-10" src="\img\logo\logo.svg" />
      <Accordion
        type="single"
        collapsible
        className="text-white"
        defaultValue={getDefaultAccordionItem()}
      >
        <AccordionItem value="store">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <IoStorefront />
              {CATEGORY.STORE_MANAGEMENT.menu}
            </p>
          </AccordionTrigger>
          {navLink("/", CATEGORY.STORE_MANAGEMENT.item1)}
          {navLink("/", CATEGORY.STORE_MANAGEMENT.item2)}
        </AccordionItem>
        <AccordionItem value="customer">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <PiPawPrintFill />
              {CATEGORY.CUSTOM_MANAGEMENT.menu}
            </p>
          </AccordionTrigger>
          {navLink("/", CATEGORY.CUSTOM_MANAGEMENT.item1)}
          {navLink("/", CATEGORY.CUSTOM_MANAGEMENT.item2)}
          {navLink("/", CATEGORY.CUSTOM_MANAGEMENT.item3)}
        </AccordionItem>
        <AccordionItem value="mypage">
          <AccordionTrigger>
            <p className="flex items-center gap-2">
              <ImProfile />
              {CATEGORY.MYPAGE.menu}
            </p>
          </AccordionTrigger>
          {navLink("/mypage_edit_user_info", CATEGORY.MYPAGE.item1)}
          {navLink("/", CATEGORY.MYPAGE.item2)}
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export default Nav;
