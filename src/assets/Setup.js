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
      state: formData.state,
      dob: formData.dob,
    };
    // const token = JSON.parse(sessionStorage.getItem("data"));
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/setup",
      {
        method: "POST",
        body: JSON.stringify(setupLoad),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();

    console.log(result?.status);
    if (result?.status === "success") {
      navigate("/login");
    } else {
      if (result.status === "error") {
        // setError(result.data);
        console.log(result.data);
        alert(result.data);
      }
    }
  }

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
            Kindly provide accurate details and fill every requires below
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
            disabled
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
        </div>
        <div className="input">
          <label>State</label>
          {/* <input required type="option" placeholder="Choose State" className="box"/> */}
          <select className="box text-green">
            {/* <option value="" className='text-grey'>--Choose State--</option> */}
            <option disabled defaultValue="selected" hidden>
              --Choose State--
            </option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT">Federal Capital Territory</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
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
