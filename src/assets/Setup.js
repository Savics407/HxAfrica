// import { useState } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { appendErrors } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Setup({ formData, setFormData }) {
  const navigate = useNavigate();
  async function create(e) {
    e.preventDefault();
    // console.log(formData);
    const setupLoad = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state_id: formData.state,
      dob: formData.dob,
    };

    // const cors = require("cors");
    // app.use(cors());

    // const token = JSON.parse(sessionStorage.getItem("data"));
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/setup`,
      {
        method: "POST",
        body: JSON.stringify(setupLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();

    console.log(result?.status);
    if (result?.status === "success") {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/select-avater");
    } else {
      if (result.status === "error") {
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 300,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  // const [st, setSt] = useState([]);
  // useEffect(() => {
  //   const getState = async () => {
  //     const responseSt = await fetch(`${process.env.REACT_APP_MY_API_ENDPOINT}states", {
  //       method: "POST",
  //       // body: JSON.stringify(setupLoad),
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Accept: "application/json",
  //         // Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const getSt = await responseSt.json();
  //     setSt(await getSt);
  //   };
  //   getState();
  // }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-12 rule  setup relative text-base">
        <div className="tabs">
          <span className="indicator pl-2.5 !pt-2 text-green border-green ">
            <FaCheck className="" />
          </span>
          <p>Create Account</p>
        </div>
        <div className="tabs">
          <span className="indicator pl-2.5 !pt-2 text-green border-green ">
            <FaCheck className="" />
          </span>
          <p className="">OTP Verification</p>
        </div>
        <div className="tabs">
          <span className="indicator">3</span>
          <p className="">Account Setup</p>
        </div>
      </div>
      <form className="form" onSubmit={create}>
        <div>
          <h1 className="page-text">Account Setup</h1>
          <p className="description">
            Kindly provide accurate details and fill every required field below
          </p>
        </div>
        <div className="input">
          <label className="">Full Name </label>
          <input
            required
            type="text"
            placeholder="enter full name"
            className="box"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </div>

        <div className="input">
          <label>Phone Number</label>
          <input
            required
            type="tel"
            placeholder="enter phone number"
            className="box"
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
        </div>
        <div className="input">
          <label>State</label>
          {/* <input required type="option" placeholder="Choose State" className="box"/> */}
          {/* <h1>{formData.state}</h1> */}
          <select
            className="box text-green"
            value={formData.state}
            onChange={(event) =>
              setFormData({ ...formData, state: event.target.value })
            }
          >
            {/* <option value="" className='text-grey'>--Choose State--</option> */}
            <option selected>--Choose State--</option>
            {/* {st.map((responseSt) => (
              <option key={responseSt.states.id}>
                {responseSt.states.name}
              </option>
            ))} */}
            <option value="303">Abia</option>
            <option value="320">Adamawa</option>
            <option value="304">Akwa Ibom</option>
            <option value="315">Anambra</option>
            <option value="312">Bauchi</option>
            <option value="305">Bayelsa</option>
            <option value="291">Benue</option>
            <option value="307">Borno</option>
            <option value="314">Cross River</option>
            <option value="316">Delta</option>
            <option value="311">Ebonyi</option>
            <option value="318">Edo</option>
            <option value="309">Ekiti</option>
            <option value="289">Enugu</option>
            <option value="293">Federal Capital Territory</option>
            <option value="310">Gombe</option>
            <option value="308">Imo</option>
            <option value="288">Jigawa</option>
            <option value="294">Kaduna</option>
            <option value="300">Kano</option>
            <option value="313">Katsina</option>
            <option value="290">Kebbi</option>
            <option value="298">Kogi</option>
            <option value="295">Kwara</option>
            <option value="306">Lagos</option>
            <option value="301">Nasarawa</option>
            <option value="317">Niger</option>
            <option value="323">Ogun</option>
            <option value="321">Ondo</option>
            <option value="322">Osun</option>
            <option value="296">Oyo</option>
            <option value="302">Plateau</option>
            <option value="100">Rivers</option>
            <option value="292">Sokoto</option>
            <option value="319">Taraba</option>
            <option value="297">Yobe</option>
            <option value="299">Zamfara</option>
          </select>
        </div>
        <div className="input">
          <label>City</label>
          <input
            required
            type="text"
            placeholder="enter city"
            className="box"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
        </div>
        <div className="input">
          <label>Address</label>
          <input
            required
            type="text"
            placeholder="enter home address"
            className="box"
            value={formData.address}
            onChange={(event) =>
              setFormData({ ...formData, address: event.target.value })
            }
          />
        </div>
        <div className="input">
          <label>Date Of Birth</label>
          <input
            required
            type="date"
            placeholder=""
            className="box text-grey"
            value={formData.dob}
            onChange={(event) =>
              setFormData({ ...formData, dob: event.target.value })
            }
            max="2022-02-01"
          />
        </div>
        <div>
          <input
            className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium cursor-pointer"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
    </>
  );
}

export default Setup;
