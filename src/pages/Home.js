// src/pages/Home.js
import React, { useState } from 'react';
import '../App.css';

function Home() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const timer = setTimeout(() => {
      setName('');
      setDate('');
      setEmail('');
      setService('');
      setTime('');
      setSubmit(false);
    }, 3000);


    return () => clearTimeout(timer);
  }





  return (
    <div >
      <h1 className="text-center">Welcome</h1>


      <h1>Book Your Appointment</h1>

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label className='form-label'>Name:<input type='text' value={name} className='form-control' onChange={e => { setName(e.target.value) }} /></label>
        </div>
        <div>
          <label className='form-label'>Email:<input type='email' value={email} className='form-control' onChange={e => { setEmail(e.target.value) }} /></label>
        </div>
        <label className='form-label' style={{ marginRight: '20px' }}>Date: <input type='date' value={date} className='form-control' onChange={e => { setDate(e.target.value) }} /></label>

        <label className='form-label'>Time: <input type='time' value={time} className='form-control' onChange={e => { setTime(e.target.value) }} /></label>


        <div >
          <label className='form-label'>Select an option: </label>
          <select className='form-control' onChange={e => { setService(e.target.value) }}>
            <option value="">--Select Service--</option>
            <option value='Vax'>Vax</option>
            <option value='Facial'>Facial</option>
            <option value='EyeBrow'>EyeBrow</option>
          </select>
        </div>
    
        <div className='appSubmit'>
          <button className='btn btn-success'>Submit</button>
        </div>

      </form>



      <div >
        {submit ? (<div className='BookedMsg'>Appointment is booked by name : {name} at date: {date}  at time : {time} for service : {service} _____please stay tuned we will contact you on you email : {email}</div>) : (<p>please enter details</p>)}
      </div>





    </div>
  );
}

export default Home;
