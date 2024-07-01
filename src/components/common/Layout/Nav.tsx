import React from "react";
import { Store } from "lucide-react";
import { PawPrint } from "lucide-react";
import { UserRoundCog } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/shard_ui/accordion";
import { CATEGORY_INFOS } from "constants/constants";

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  const getDefaultAccordionItem = (): string => {
    if (pathname.includes("store")) {
      return "store";
    } else if (pathname.includes("customer")) {
      return "customer";
    } else if (pathname.includes("reservation")) {
      return "reservation";
    } else {
      return "mypage";
    }
  };

  const renderNavLink = (to: string, item: string, key: string) => {
    const isCurrentPath = pathname === to ? true : false;
    return (
      <Link to={to} key={key}>
        <AccordionContent
          className={isCurrentPath ? "font-semibold opacity-100" : "opacity-50"}
        >
          {item}
        </AccordionContent>
      </Link>
    );
  };

  const renderMenuIcon = (value: string) => {
    if (value === "store") {
      return <Store size="17px" />;
    } else if (value === "customer") {
      return <PawPrint size="17px" />;
    } else if (value === "reservation") {
      return <CalendarCheck size="17px" />;
    } else {
      return <UserRoundCog size="17px" />;
    }
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
        {CATEGORY_INFOS.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>
              <p className="flex items-center gap-2">
                {renderMenuIcon(item.id)}
                {item.menu}
              </p>
            </AccordionTrigger>
            {item.route.map((item) =>
              renderNavLink(item.path, item.name, item.path)
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

export default Nav;
