import React from "react";
import { Link } from "react-router-dom";

const Todo = (props) => {
  const { id, title, completed, userId } = props.todo;
  //   console.log(props);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{userId}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {completed === false ? "False" : "True"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link
          to={`todos/${id}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default Todo;

/* 

                <tbody>

                </tbody>

*/
