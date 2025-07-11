import { useState } from "react";

interface TaskInputProps {
  onAdd: (text: string) => void;
  loading: boolean
}

const TaskInput = ({ onAdd, loading }: TaskInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        placeholder="Add a task..."
        className="flex-1 px-3 py-2 border border-gray-500 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#007AFF] text-white rounded hover:bg-bg-[#009AFF] transition cursor-pointer"
      >
        {loading ? "...loading" :"Add" }
      </button>
    </form>
  );
};

export default TaskInput;
