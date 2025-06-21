export type Payment = {
  id: string;
  tenantName: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  date: string; // ISO format
};

export const payments: Payment[] = [
  {
    id: "1",
    tenantName: "Alice Johnson",
    amount: 1200,
    status: "Paid",
    date: "2024-06-01",
  },
  {
    id: "2",
    tenantName: "Bob Smith",
    amount: 950,
    status: "Pending",
    date: "2024-06-10",
  },
  {
    id: "3",
    tenantName: "Clara Thompson",
    amount: 1100,
    status: "Paid",
    date: "2024-05-22",
  },
  {
    id: "4",
    tenantName: "David Lee",
    amount: 1300,
    status: "Failed",
    date: "2024-06-05",
  },
  {
    id: "5",
    tenantName: "Eleanor West",
    amount: 980,
    status: "Paid",
    date: "2024-06-12",
  },
  // Add more if needed
];
