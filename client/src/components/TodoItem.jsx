import React from "react";

function TodoItem({ title, description, status, updateHandler, deleteHandler, id }) {
  const handleStatusChange = (event) => {
    updateHandler(id, event.target.value);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-4">
      <div className="bg-gray-800 text-white border border-gray-700 rounded-xl p-4 shadow-lg">
        <div>
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor={`status-${id}`}>
            Status:
          </label>
          <select
            id={`status-${id}`}
            value={status}
            onChange={handleStatusChange}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 bg-gray-200"
          >
            <option value="Pending">Pending</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => deleteHandler(id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow focus:outline-none hover:bg-red-700"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
