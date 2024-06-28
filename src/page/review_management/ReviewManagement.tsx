import React from "react";

import Layout from "components/common/Layout/Layout";
import DateInputTableFilter from "components/common/Table/DateInputTabeFilter";
import SelectInputTableFilter from "components/common/Table/SelectInputTableFilter";
import TextInputTableFilter from "components/common/Table/TextInputTableFilter";
import BtnTableFilter from "components/common/FormGroup/BtnTableFilter";
import CardReview from "components/review_management/CardReview";

const ReviewManagement: React.FC = () => {
  const reviewState = ["전체", "미답변", "답변완료"];
  const reviewList = [
    {
      status: "미답변 상태",
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      custorerName: "홍길동",
      score: 4,
      contents:
        "지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스안 받는거 같아서 너무좋네요",
    },
    {
      status: "미답변 상태",
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      custorerName: "홍길동",
      score: 4,
      contents:
        "지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스안 받는거 같아서 너무좋네요",
    },
    {
      status: "미답변 상태",
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      custorerName: "홍길동",
      score: 4,
      contents:
        "지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스안 받는거 같아서 너무좋네요",
    },
    {
      status: "답변완료",
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      custorerName: "홍길동",
      score: 4,
      contents:
        "지인 추천으로 가게됬는데 미용도 예쁘게 잘해주시고 너무 친절해요 무엇보다 미용맡기면 아기들이 스트레스안 받는거 같아서 너무좋네요",
      reply: "방문해주셔서 감사합니다ㅎㅎ 다음에 또 오세요!",
    },
  ];
  return (
    <Layout>
      <div className="flex gap-2">
        <TextInputTableFilter label="고객명" placeholder="전체" />
        <DateInputTableFilter label="등록날짜" />
        <SelectInputTableFilter
          label="리뷰상태"
          selectItem={reviewState}
          placeholder="전체"
        />
        <BtnTableFilter />
      </div>
      <div className="flex flex-col gap-5 mt-7">
        {reviewList.map((item) => (
          <CardReview
            status={item.status}
            customerImg={item.customerImg}
            custorerName={item.custorerName}
            score={item.score}
            contents={item.contents}
            reply={item.reply}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ReviewManagement;
