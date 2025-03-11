import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useEffect, useState } from "react";
import { getTaskStats } from "../api/tasks";
import { ClipboardCheck, ClipboardList, ListTodo } from "lucide-react";

export function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getTaskStats();
        setStats(response);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: ClipboardList,
      color: "text-blue-500",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: ClipboardCheck,
      color: "text-green-500",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: ListTodo,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={cn("h-4 w-4", card.color)} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
