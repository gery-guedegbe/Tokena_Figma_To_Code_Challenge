import {
  House,
  ChartNoAxesColumn,
  Newspaper,
  CreditCard,
  ClipboardList,
  Bell,
  Wallet,
  SquareDashedBottom,
  Headphones,
  Settings,
} from "lucide-react";

export const sideLinks = [
  { id: 1, path: "/", name: "Dashboard", icon: <House /> },
  { id: 2, path: "/news", name: "News", icon: <Newspaper /> },
  {
    id: 3,
    path: "/activities",
    name: "Activities",
    icon: <ChartNoAxesColumn />,
  },
  { id: 4, path: "/card", name: "Card", icon: <CreditCard /> },
  { id: 5, path: "/reports", name: "Reports", icon: <ClipboardList /> },
  { id: 6, path: "/notifications", name: "Notifications", icon: <Bell /> },
  { id: 7, path: "/billing", name: "Billing", icon: <Wallet /> },
  { id: 8, path: "/invoices", name: "Invoices", icon: <SquareDashedBottom /> },
  { id: 9, path: "/help-center", name: "Help center", icon: <Headphones /> },
  { id: 10, path: "/settings", name: "Settings", icon: <Settings /> },
];
