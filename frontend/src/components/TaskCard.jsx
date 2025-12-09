import React from 'react';

export default function TaskCard({ task, onDelete, onOpen }) {
  function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
  }

  return (
    <div
      className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition cursor-grab"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {task.desc || 'No description'}
          </p>
        </div>

        <button
          className="text-xs text-red-500 hover:underline"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>{task.assignee || 'Unassigned'}</span>
        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600">
          {task.priority || 'medium'}
        </span>
      </div>

      <button
        className="mt-3 text-xs text-blue-600 hover:underline"
        onClick={() => onOpen(task)}
      >
        View details
      </button>
    </div>
  );
}
