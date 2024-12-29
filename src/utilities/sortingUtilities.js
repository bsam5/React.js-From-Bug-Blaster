export const sortTickets = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.priority - a.priority); // Assuming priority is a number
    case "Low to High":
      return [...tickets].sort((a, b) => a.priority - b.priority); // Assuming priority is a number
    default:
      return tickets;
  }
};
