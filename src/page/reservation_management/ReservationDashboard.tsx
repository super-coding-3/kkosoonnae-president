import Layout from "components/common/Layout/Layout";
import ReservationCount from "components/reservation_dashboard/ReservationCount";
import ReservationGraph from "components/reservation_dashboard/ReservationGraph";
import ReservationRegular from "components/reservation_dashboard/ReservationRegular";
import React from "react";

const ReservationDashboard: React.FC = () => {
  const reservationGraphData = [
    { month: "1월", count: 30 },
    { month: "2월", count: 45 },
    { month: "3월", count: 40 },
    { month: "4월", count: 60 },
    { month: "5월", count: 70 },
    { month: "6월", count: 90 },
  ];

  const reservationRegularData = [
    {
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      customerName: "홍길동",
      reservationCount: 10,
    },
    {
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      customerName: "김길동",
      reservationCount: 8,
    },
    {
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      customerName: "최길동",
      reservationCount: 6,
    },
    {
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      customerName: "제갈길동",
      reservationCount: 4,
    },
    {
      customerImg:
        "https://cdn.discordapp.com/avatars/745996602560348160/055f94406a145ffa6b7ecf3b6e518fc3.webp?size=80",
      customerName: "남궁길동",
      reservationCount: 2,
    },
  ];

  return (
    <Layout>
      <section className="flex gap-5 h-40">
        <ReservationCount title="일일 예약 건수" count={30} variance={6.3} />
        <ReservationCount
          title="이번 주 예약 건수"
          count={126}
          variance={5.3}
        />
        <ReservationCount
          title="이번 달 예약 건수"
          count={1006}
          variance={-4.0}
        />
      </section>
      <section className="flex gap-5 mt-5">
        <ReservationGraph graphInfo={reservationGraphData} />
        <ReservationRegular customerData={reservationRegularData} />
      </section>
    </Layout>
  );
};

export default ReservationDashboard;
