import React from "react";
import Layout from "components/common/Layout/Layout";
import TextInputTableFilter from "components/common/Table/TextInputTableFilter";
import DateInputTableFilter from "components/common/Table/DateInputTabeFilter";
import SelectInputTableFilter from "components/common/Table/SelectInputTableFilter";
import BtnTableFilter from "components/common/FormGroup/BtnTableFilter";
import { TableList } from "components/common/Table/TableList";
import {
  Reservation,
  TableColumnsReservation,
} from "components/reservation_list/TableColumnsReservation";
import PaginationTable from "components/common/Table/PaginationTable";

const ReservationList: React.FC = () => {
  const reservationState = ["전체", "예약 대기", "예약 완료", "예약 취소"];
  const reservationData: Reservation[] = [
    {
      reservationNo: 1,
      customerName: "이길동",
      reservationDate: "2024/04/21 오후 2시",
      status: "예약 완료",
    },
    {
      reservationNo: 2,
      customerName: "홍길동",
      reservationDate: "2024/01/21 오후 2시",
      status: "예약 취소",
    },
    {
      reservationNo: 3,
      customerName: "최길동",
      reservationDate: "2024/02/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 4,
      customerName: "제갈길동",
      reservationDate: "2024/06/21 오후 2시",
      status: "예약 완료",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
    {
      reservationNo: 5,
      customerName: "남궁길동",
      reservationDate: "2024/09/21 오후 2시",
      status: "예약 대기",
    },
  ];
  return (
    <Layout>
      <div className="flex gap-2">
        <TextInputTableFilter label="고객명" placeholder="전체" />
        <DateInputTableFilter label="예약날짜" />
        <SelectInputTableFilter
          label="예약상태"
          selectItem={reservationState}
          placeholder="전체"
        />
        <BtnTableFilter />
      </div>
      <div className="flex flex-col gap-5 mt-7">
        <TableList columns={TableColumnsReservation} data={reservationData} />
        {reservationData.length >= 13 && <PaginationTable />}
      </div>
    </Layout>
  );
};

export default ReservationList;
