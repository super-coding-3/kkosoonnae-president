import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Tabs, TabsList, TabsTrigger } from "../shard_ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../shard_ui/breadcrumb";
import { CATEGORY_INFOS } from "constants/constants";

const ContentsTabs: React.FC = () => {
  const { pathname } = useLocation();
  const tabsInfo = CATEGORY_INFOS.find((x) => pathname.includes(x.id));
  const menuName = tabsInfo?.menu;
  const currentTabInfo = tabsInfo?.route.find((x) => pathname === x.path);
  const currentTabName = currentTabInfo?.name;

  return (
    <div className="flex justify-between">
      <Tabs value={currentTabName}>
        <TabsList>
          {tabsInfo?.route.map((item) => (
            <Link to={item.path} key={item.path}>
              <TabsTrigger value={item.name} className="w-32">
                {item.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{menuName}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentTabName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default ContentsTabs;
