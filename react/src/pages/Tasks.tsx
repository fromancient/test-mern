import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { getTasks, createTask, updateTask } from "../api/tasks";
import { useToast } from "../hooks/useToast";

type Task = {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

type NewTaskForm = {
  title: string;
};

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<NewTaskForm>();

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.tasks);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch tasks",
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onSubmit = async (data: NewTaskForm) => {
    try {
      setLoading(true);
      await createTask(data);
      toast({
        title: "Success",
        description: "Task created successfully",
      });
      reset();
      fetchTasks();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create task",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTask = async (taskId: string, completed: boolean) => {
    try {
      await updateTask(taskId, { completed });
      fetchTasks();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update task",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6 flex gap-2">
          <Input
            placeholder="Add a new task..."
            {...register("title", { required: true })}
          />
          <Button type="submit" disabled={loading}>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </form>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex items-center gap-2 rounded-lg border p-4"
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={(checked) =>
                  handleToggleTask(task._id, checked as boolean)
                }
              />
              <span
                className={cn(
                  "flex-1",
                  task.completed && "text-muted-foreground line-through"
                )}
              >
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
