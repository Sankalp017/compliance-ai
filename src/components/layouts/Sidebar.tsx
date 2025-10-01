import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  ShieldAlert,
  History,
  Settings,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/documents", icon: FileText, label: "Documents" },
  { to: "/gap-analysis", icon: ShieldAlert, label: "Gap Analysis" },
  { to: "/audit-trail", icon: History, label: "Audit Trail" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-background border-r">
      <div className="h-16 flex items-center px-6 border-b">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <h1 className="ml-3 text-xl font-bold text-primary">CompliAI</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `w-full flex items-center py-2 px-4 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};