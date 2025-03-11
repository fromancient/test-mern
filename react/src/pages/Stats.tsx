import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { getTaskStats } from "../api/tasks";
import { useToast } from "../hooks/useToast";

export function Stats() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getTaskStats();
        setStats(response);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch statistics",
        });
      }
    };
    fetchStats();
  }, []);

  const completionRate = stats.total
    ? ((stats.completed / stats.total) * 100).toFixed(1)
    : "0";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <div className="text-sm font-medium">Completion Rate</div>
            <div className="mt-2 text-3xl font-bold">{completionRate}%</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-sm font-medium">Task Distribution</div>
            <div className="mt-2">
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span className="font-medium">{stats.completed}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pending</span>
                <span className="font-medium">{stats.pending}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
