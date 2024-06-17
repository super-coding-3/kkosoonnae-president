import { ColumnDef } from "@tanstack/react-table";
import { Button } from "components/shard_ui/button";
import { ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

export type Reservation = {
  reservationNo: number;
  customerName: string;
  reservationDate: string;
  status: "예약 대기" | "예약 완료" | "예약 취소";
};

export const TableColumnsReservation: ColumnDef<Reservation>[] = [
  {
    accessorKey: "reservationNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full flex justify-between"
        >
          예약번호
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "customerName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full flex justify-between"
        >
          고객명
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "reservationDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full flex justify-between"
        >
          예약날짜
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full flex justify-between"
        >
          예약상태
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Link
          to="/customer-reservation-detail"
          className="underline underline-offset-2"
        >
          상세 보기
        </Link>
      );
    },
  },
];
