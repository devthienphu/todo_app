
import { useState, useEffect } from "react";
import { getUsers,createUser } from "../api/userApi";

import Header from "../components/header";

import Loading from "../components/loading";
let tempList = [{"studentID":1,"name":"string","contact":0,"age":0},{"studentID":2,"name":"Phu","contact":123,"age":132}];
// let count = 0
const User = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    studentID: 0,
    name: "",
    contact: 0,
    age: 0
  })

  const handleChange = (event) => {
    setFormValue({
    ...formValue,
    [event.target.name]: event.target.value
    });
  }

  const addUser = async ()=>{
    const res = await createUser(formValue)
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await getUsers();
      setUsers(res)
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Header />

        <div className="w-screen md:pl-32 pt-16 rounded-xl">
          <p className="font-bold text-4xl text-center md:text-left">Students</p>

          {loading ? <Loading /> : <></>}

            <table class="table-auto border mt-8">
              <thead className="border bg-gray-200">
                <tr className="border">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody className="border">               
                {
                  tempList.map((user,index)=>(
                    <tr key={index} className="border">
                      <td className="px-4">{user.studentID}</td>
                      <td className="px-4">{user.name}</td>
                      <td className="px-4">{user.contact}</td>
                      <td className="px-4">
                      <div className="flex flex-row justify-between gap-x-4">
                        <p>{user.age}</p>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 fill-red-200 hover:fill-red-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>

                      </div>
                        

                      </td>
                    </tr>
                  ))
                }
              
              </tbody>
            </table>
              
            <button  onClick={() => setShowModal(true)} className="bg-blue-500 text-white rounded-xl p-2 mt-4">
              <p>Add Student</p>
            </button>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add student
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex flex-col min-w-[500px]">
                  <lable for="name" className="font-semibold">Student's name</lable>
                  <input onChange={handleChange} required type="text" id="name" name="name" className="border border-2 border-black rounded-lg px-2 py-1"></input>

                  <lable for="contact" className="font-semibold">Contact</lable>
                  <input onChange={handleChange} required type="number" id="contact" name="contact" className="border border-2 border-black rounded-lg px-2 py-1"></input>

                  <lable for="age" className="font-semibold">Age</lable>
                  <input onChange={handleChange} required type="number" id="age" name="age" className="border border-2 border-black rounded-lg px-2 py-1"></input>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setShowModal(false); addUser()}}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

        </div>
      </div>
    </>
  );
};

export default User;
