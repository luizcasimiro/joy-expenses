import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonNEW() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className=" bg-yellow-400 border border-yellow-800 rounded-xl py-5 px-16 font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-500"
        id="button-add"
        type="button"
        onClick={() => navigate('/new')}
      >
        NEW EXPENSE
      </button>
    </div>
  )
}

export default ButtonNEW;