import React, { useState } from 'react'
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

function CreateBooking() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName]=useState("");
    const [hp, setHp]=useState("");
    const [email, setEmail]=useState("");
    const [pax, setPax]=useState("");
    const [date, setDate]=useState("");
    const [time, setTime]=useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    //make modal
    const ModalOpen = () => {
        setModalIsOpen(true);
      };
    
    const handleCreate = async (event) => {
        event.preventDefault();
        setModalIsOpen(false);
        navigate("/Booking");
        const info = { name, hp, email, pax, date, time }; //this is the part i don't know
    
        try {
          const response = await fetch("/api/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
          });
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          setMsg("something went wrong");
        }
      };
    

  return (
    <div>
    <button onClick={ModalOpen}>Create Booking</button>
    <ReactModal
      className="modalregister"
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    >
    <form onSubmit={handleCreate}>
              Name:
              <input 
              type="text" 
              value={name}
              onChange={(event) => setName(event.target.value)}/>
              <br />
              HP:
              <input 
              type="number" 
              value={hp}
              onChange={(event) => setHp(event.target.value)} />
              <br />
              Email:
              <input 
              type="email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} />
              <br />
              Pax:
              <input 
              type="number" 
              value={pax}
              onChange={(event) => setPax(event.target.value)} />
              <br />
              Date:
              <input 
              type="text" 
              value={date} 
              onChange={(event) => setDate(event.target.value)}/>
              <br />
              Time:
              <input 
              type="text" 
              value={time} 
              onChange={(event) => setTime(event.target.value)}/>
              <br />
              <button>Submit</button>
              <p>{msg}</p>
            </form>
            </ReactModal>
            </div>
  )
}

export default CreateBooking;