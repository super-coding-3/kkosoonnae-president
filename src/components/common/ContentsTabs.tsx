import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../shard_ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../shard_ui/breadcrumb";

const ContentsTabs: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab-1">회원목록 수정</TabsTrigger>
          <TabsTrigger value="tab-2">비밀번호 변경</TabsTrigger>
        </TabsList>
      </Tabs>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>마이페이지</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>회원정보 수정</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default ContentsTabs;
