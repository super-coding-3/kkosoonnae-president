import React from "react";
import { Link } from "react-router-dom";
import BlockReservationRegular from "./BlockReservationRegular";

interface ReservationRegularProps {
  customerImg: string;
  customerName: string;
  reservationCount: number;
}

interface ReservationRegularComponentProps {
  customerData: ReservationRegularProps[];
}

const ReservationRegular: React.FC<ReservationRegularComponentProps> = ({
  customerData,
}) => {
  return (
    <article className="flex flex-col justify-center gap-3 border border-COMMONN_BORDER_GRAY rounded-md w-1/3 h-full p-5">
      <header className="w-full text-center text-lg font-bold">
        단골고객 TOP5
      </header>
      <main>
        {customerData.map((item, index) => (
          <BlockReservationRegular
            key={index}
            customerImg={item.customerImg}
            customerName={item.customerName}
            reservationCount={item.reservationCount}
          />
        ))}
      </main>
      <footer className="w-full text-MAIN_LIGHT_COLOR font-semibold">
        <Link to="/customer-reservation">모든 예약목록 보기 →</Link>
      </footer>
    </article>
  );
};

export default ReservationRegular;
