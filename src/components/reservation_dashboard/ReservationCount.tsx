import React from "react";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { NUMBER_COMMA } from "constants/constants";

interface ReservationCountProps {
  title: string;
  count: number;
  variance: number;
}

const ReservationCount: React.FC<ReservationCountProps> = (props) => {
  return (
    <article className="flex flex-col justify-center gap-3 border border-COMMONN_BORDER_GRAY rounded-md w-1/3 h-full p-5">
      <header className="text-MAIN_LIGHT_COLOR text-xl">{props.title}</header>
      <main className="w-full text-right text-6xl">
        {props.count.toString().replace(NUMBER_COMMA, ",")}
      </main>
      <footer
        className={`flex gap-2 ${
          Math.sign(props.variance) === -1 ? "text-red-400" : "text-green-400"
        }`}
      >
        {Math.sign(props.variance) === -1 ? <ArrowBigDown /> : <ArrowBigUp />}
        <p>{props.variance}%</p>
      </footer>
    </article>
  );
};

export default ReservationCount;
