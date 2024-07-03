import Layout from "components/common/Layout/Layout";

import {
  Calendar,
  DateLocalizer,
  Formats,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/customReservationSchedule.css";
import { ROUTER_PATH } from "constants/constants";

const ReservationSchedule: React.FC = () => {
  const reservationData = [
    {
      id: 1,
      title: "홍길동 집사님의 띵동이",
      start: new Date(2024, 5, 20, 10, 0),
      end: new Date(2024, 5, 20, 11, 0),
      desc: "예약 확정",
    },
    {
      id: 2,
      title: "홍길동 집사님의 띵동이",
      start: new Date(2024, 5, 21, 15, 0),
      end: new Date(2024, 5, 21, 16, 0),
      desc: "예약 확정",
    },
    {
      id: 3,
      title: "홍길동 집사님의 띵동이",
      start: new Date(2024, 5, 21, 18, 0),
      end: new Date(2024, 5, 21, 19, 0),
      desc: "예약 확정",
    },
    {
      id: 4,
      title: "김길동 집사님의 띵동이",
      start: new Date(2024, 5, 21, 13, 0),
      end: new Date(2024, 5, 21, 14, 0),
      desc: "예약 확정",
    },
    {
      id: 5,
      title: "김길동 집사님의 띵동이",
      start: new Date(2024, 5, 21, 11, 0),
      end: new Date(2024, 5, 21, 12, 0),
      desc: "예약 확정",
    },
    {
      id: 6,
      title: "최길동 집사님의 띵동이",
      start: new Date(2024, 5, 22, 15, 0),
      end: new Date(2024, 5, 22, 16, 0),
      desc: "예약 확정",
    },
  ];

  const localizer: DateLocalizer = momentLocalizer(moment);
  const formats: Partial<Formats> = {
    monthHeaderFormat: (
      date: Date,
      culture?: string,
      localizer?: DateLocalizer
    ) => localizer!.format(date, "YYYY년 MMMM", culture),
    dayHeaderFormat: (date, culture, localizer) =>
      localizer!.format(date, "MMMM Do (ddd)", culture),
    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer!.format(start, "MMMM D일", culture) +
      " ~ " +
      localizer!.format(end, "MMMM D일", culture),
    agendaHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer!.format(start, "YYYY년 MMMM D일", culture) +
      " ~ " +
      localizer!.format(end, "YYYY년 MMMM D일", culture),
    agendaDateFormat: (date, culture, localizer) =>
      moment(date).format("M월 D일 (ddd)"),
    timeGutterFormat: (date, culture, localizer) =>
      localizer!.format(date, "a hh:mm", culture),
    dayFormat: (date, culture, localizer) =>
      localizer!.format(date, "MM/DD (ddd)", culture),
  };

  const messages = {
    date: "날짜",
    time: "시간",
    event: "내용",
    month: "월간",
    week: "주간",
    day: "일간",
    agenda: "일정표",
    today: "오늘",
    previous: "이전",
    next: "다음",
    noEventsInRange: "해당 기간에 예약이 없습니다.",
    showMore: (total: number) => `+ ${total}개의 예약 더 보기`,
  };

  return (
    <Layout>
      <div className="p-4 h-full">
        <Calendar
          localizer={localizer}
          events={reservationData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "70vh" }}
          formats={formats}
          messages={messages}
          onSelectEvent={(event) =>
            (window.location.href = ROUTER_PATH.reservationDetail)
          }
        />
      </div>
    </Layout>
  );
};

export default ReservationSchedule;
