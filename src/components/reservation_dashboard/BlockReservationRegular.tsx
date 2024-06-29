import React from "react";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface ReservationRegularProps {
  customerImg: string;
  customerName: string;
  reservationCount: number;
}

const BlockReservationRegular: React.FC<ReservationRegularProps> = (props) => {
  return (
    <li className="flex justify-between items-center mb-3 p-2 border-b border-COMMONN_BORDER_GRAY">
      <div className="flex gap-2">
        <img
          src={props.customerImg}
          className="border-2 border-MAIN_LIGHT_COLOR rounded-full size-11"
        ></img>
        <div>
          <h1>{props.customerName}</h1>
          <p className="text-gray-400 text-sm">
            총 예약건수 {props.reservationCount}건
          </p>
        </div>
      </div>
      {/* TODO: 고객상세 페이지로 수정 */}
      <Link to="/">
        <EllipsisVertical size={18} />
      </Link>
    </li>
  );
};

export default BlockReservationRegular;
