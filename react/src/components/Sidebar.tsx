import { Layout, List, BarChart2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

export function Sidebar() {
  const links = [
    { to: "/", icon: Layout, label: "Dashboard" },
    { to: "/tasks", icon: List, label: "Tasks" },
    { to: "/stats", icon: BarChart2, label: "Statistics" },
  ];

  return (
    <div className="h-full w-64 border-r bg-card">
      <div className="flex h-14 items-center border-b px-6">
        <span className="text-lg font-bold">MERNTasks</span>
      </div>
      <nav className="space-y-1 p-4">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
