import React from "react";

import InputText from "components/common/FormGroup/InputText";
import Layout from "components/common/Layout/Layout";
import InputDatePicker from "components/common/FormGroup/InputDatePicker";
import InputSelect from "components/common/FormGroup/InputSelect";
import BtnRervationDateChange from "components/reservation_detail/BtnRervationDateChange";
import TextArea from "components/common/FormGroup/TextArea";
import BtnSubmit from "components/common/FormGroup/BtnSubmit";

const ReservationDetail: React.FC = () => {
  const reservationDetailData = {
    reservationNo: 1,
    customerName: "홍길동",
    reservationDate: "2024년 04월 21일",
    reservationTime: "14:00",
    style: "샤기컷",
    type: "치와와",
    petName: "김띵똥",
    weight: 5,
    feature: "얌전하고 귀여워요",
    status: "예약 완료",
  };

  const reservationTimeItem = ["10:00", "11:00", "12:00", "13:00", "14:00"];

  return (
    <Layout>
      <form className="flex justify-between">
        <div className="flex flex-col gap-3">
          <InputText
            label="예약상태"
            type="text"
            placeholder={reservationDetailData.status}
            disable={true}
          />
          <InputText
            label="예약번호"
            type="text"
            placeholder={String(reservationDetailData.reservationNo)}
            disable={true}
          />
          <InputText
            label="고객명"
            type="text"
            placeholder={reservationDetailData.customerName}
            disable={true}
          />
          <InputDatePicker
            label="예약날짜"
            placeholder={reservationDetailData.reservationDate}
          />
          <InputSelect
            label="예약시간"
            placeholder={reservationDetailData.reservationTime}
            selectItem={reservationTimeItem}
          />
          <BtnRervationDateChange />
          <InputText
            label="스타일"
            type="text"
            placeholder={reservationDetailData.style}
            disable={true}
          />
          <InputText
            label="견종/묘종"
            type="text"
            placeholder={reservationDetailData.type}
            disable={true}
          />
          <InputText
            label="펫이름"
            type="text"
            placeholder={reservationDetailData.petName}
            disable={true}
          />
          <InputText
            label="몸무게"
            type="text"
            placeholder={String(reservationDetailData.weight)}
            disable={true}
          />
          <TextArea label="특징" value={reservationDetailData.feature} />
        </div>
        <div className="flex items-end">
          <BtnSubmit type="submit" value="예약취소" />
        </div>
      </form>
    </Layout>
  );
};

export default ReservationDetail;
