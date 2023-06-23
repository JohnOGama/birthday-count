import BirthdayList from "./BirthdayList";
import data from "../people";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";

function Birthday() {
  const [people, setPeople] = useState(data);

  const remove = () => {
    setPeople([]);
  };

  const refresh = () => {
    setPeople(data);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <div className=" bg-white w-[430px] m-auto mt-[200px] p-5 rounded-xl shadow-2xl">
          <p className="font-bold text-2xl">Birthday Count {people.length}</p>
          <BirthdayList people={people} />
          <div className="flex my-5">
            <div className="flex-1">
              <button
                onClick={remove}
                className="border-2 border-black px-4 py-2 font-medium"
              >
                <BsFillTrashFill size={20} />
              </button>
            </div>
            <button
              onClick={refresh}
              className="bg-red-500 text-white px-4 py-2 font-medium"
            >
              <BiUndo size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Birthday;
