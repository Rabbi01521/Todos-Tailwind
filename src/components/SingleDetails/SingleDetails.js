import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [todo, settodo] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => settodo(data));
  }, [id]);

  return (
    <div className=" w-80 my-11 mx-auto h-96">
      <div className="card text-center shadow-2xl lg:card-side bg-accent text-accent-content">
        <div className="card-body">
          <p>{todo.title}</p>
          <div className="justify-center card-actions">
            <button className="btn btn-accent">Start now</button>
            <Link to="/home">
              <button className="btn btn-accent">Later</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
