import React from "react";
import TicketItem from "./TicketItem";
export default function TicketList({ tickets, dispatch }) {
  return (
    <div>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} dispatch={dispatch} ticket={ticket} />
      ))}
    </div>
  );
}