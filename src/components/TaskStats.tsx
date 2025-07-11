import { useMemo } from "react";
import type { Task } from "../types";

interface TaskStatsProps {
  tasks: Task[];
}

const TaskStats = ({ tasks }: TaskStatsProps) => {
  const completedCount = useMemo(()=> tasks.filter((t) => t.completed).length,[tasks])


  return (
    <div className="text-sm text-gray-600">
      ✅ {completedCount} of {tasks.length} tasks complete
    </div>
  );
};

export default TaskStats;
