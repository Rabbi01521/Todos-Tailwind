import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";

const TodoDetails = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  /*   const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  }; */
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="overflow-x-auto">
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div className="py-8">
              <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                <h2 className="text-2xl leading-tight">Todos</h2>
                <div className="text-end">
                  <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    {/*                     <div className=" relative ">
                      <input
                        onChange={handleSearch}
                        type="text"
                        id='"form-subscribe-Filter'
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="title"
                      />
                    </div> */}
                    {/*                     <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="submit"
                    >
                      Filter
                    </button> */}
                  </form>
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          UserId
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Completed
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.map((todo) => (
                        <Todo todo={todo} key={todo.id}></Todo>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
