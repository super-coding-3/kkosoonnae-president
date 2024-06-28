import Layout from "components/common/Layout/Layout";
import ReservationCount from "components/reservation_statistics/ReservationCount";
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

  return (
    <Layout>
      <section className="flex gap-5 h-48">
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
      <section></section>
    </Layout>
  );
};

export default ReservationDashboard;
