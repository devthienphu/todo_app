import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserTask } from "../api/userApi";

import Header from "../components/header";
import PendingTask from "../components/pendingTask";
import DoneTask from "../components/doneTask";
import Loading from "../components/loading";
let tempList = [];
// let count = 0
const User = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  function sortTasks(t1, t2) {
    return t1.completed - t2.completed;
  }

  function updateTaskList(task) {
    let index = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tempList[i].id === task.id) {
        index = i;
      }
    }

    tempList.splice(index, 1);
    task.completed = true;
    tempList.push(task);
    setTasks(tempList);

    let tmp = 0;
    for (let item of tempList) {
      if (item.completed === true) {
        tmp++;
      }
    }
    setCount(tmp);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      setTasks(await getUserTask(id));
      tempList = await getUserTask(id);
      tempList.sort(sortTasks);
      setTasks(tempList);
      let tmp = 0;
      for (let item of tempList) {
        if (item.completed === true) {
          tmp++;
        }
      }
      setCount(tmp);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      <div className="flex flex-row">
        <Header id={id} />

        <div className="w-screen bg-[#a18aff] pl-32 pt-16 rounded-xl">
          <p className="font-bold text-4xl text-white">Focus your tasks</p>

          {loading ? <Loading /> : <></>}

          {/* task */}
          <div className="relative pt-8">
            <div className="flex flex-col gap-y-4 overflow-hidden overflow-y-auto max-h-[530px]">
              {tasks.map((task, key) => (
                <div className="">
                  {task.completed === false ? (
                    <PendingTask
                      task={task}
                      updateTaskList={updateTaskList}
                      key={key}
                    />
                  ) : (
                    <DoneTask task={task} key={key} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-white font-semibold pt-4">
              Done {count}/{tasks.length} tasks
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
