import React, { useEffect, useState } from "react";
import upload from "../images/Upload.svg";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { HiOutlinePlusSm } from "react-icons/hi";
import ScaleLoader from "react-spinners/ScaleLoader";
import { toast } from "react-toastify";

function EditMerchants({ setEdit, merchantId }) {
  const [loading, setLoading] = useState(true);
  const [merchants, setMerchants] = useState();
  async function fetchMerchants() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_merchants`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setMerchants(result?.data);
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMerchants();
  }, []);

  const [create, setCreate] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const [details, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });
  console.log(image);
  console.log(preview);
  async function updateMerchant(e) {
    const token = localStorage.getItem("user-token");
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", merchantId);
    formData.append("image", image);
    // formData.append("name", details.name);
    formData.append("phone", details.phone);
    formData.append("address", details.address);
    // formData.append("email", details.email);
    formData.append("state_id", details.state);
    formData.append("city", details.city);

    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_merchant`,
      {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    if (result?.errors) {
      toast.error(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (result?.message) {
        toast(`${result.message}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  return (
    <div>
      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.5,
            },
          }}
          className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay  backdrop-blur-sm z-10"
        ></motion.div>
        <div className="absolute py-36 top-0 right-0 left-0 bottom-0 z-10">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.5,
              },
            }}
            className="bg-white rounded-xl border w-2/5 m-auto z-10"
          >
            <div className="border-b border-stroke capitalize font-inter px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
              <h1>Edit Merchant</h1>
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  setEdit(false);
                }}
              />
            </div>
            {loading ? (
              <div className="text-center px-20 py-40">
                <ScaleLoader color="#008E10" height={50} width={6} />
              </div>
            ) : (
              <>
                {merchants
                  ?.filter((post) => post.id === merchantId)
                  .map((post) => (
                    <div className="px-10 py-5">
                      <div className="merchant">
                        <label>Name</label>
                        <input
                          required
                          type="text"
                          placeholder="enter merchant name"
                          className="box"
                          defaultValue={post.name}
                          onChange={(event) =>
                            setFormData({
                              ...details,
                              name: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="merchant">
                        <label>Email</label>
                        <input
                          required
                          type="email"
                          placeholder="enter merchant email"
                          className="box"
                          defaultValue={post.email}
                          onChange={(event) =>
                            setFormData({
                              ...details,
                              email: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="merchant">
                        <label>Phone</label>
                        <input
                          required
                          type="tel"
                          placeholder="+234 |"
                          className="box"
                          defaultValue={post.phone}
                          onChange={(event) =>
                            setFormData({
                              ...details,
                              phone: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="merchant">
                        <label>Address</label>
                        <input
                          required
                          type="text"
                          placeholder="enter address"
                          className="box"
                          defaultValue={post.address}
                          onChange={(event) =>
                            setFormData({
                              ...details,
                              address: event.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="merchant w-per">
                          <label>State</label>
                          <select
                            className="box"
                            defaultValue={post.state.name}
                            onChange={(event) =>
                              setFormData({
                                ...details,
                                state: event.target.value,
                              })
                            }
                          >
                            {/* <option value="" className='text-grey'>--Choose State--</option> */}
                            <option>{post.state.name}</option>

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
                            <option value="293">
                              Federal Capital Territory
                            </option>
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
                        <div className="merchant w-per">
                          <label>City</label>

                          <input
                            required
                            type="text"
                            placeholder="enter city"
                            className="box"
                            defaultValue={post.city}
                            onChange={(event) =>
                              setFormData({
                                ...details,
                                city: event.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      {image === null ? (
                        <div className="border bg-file rounded-lg border-dashed flex flex-col items-center p-10">
                          <img src={upload} alt="Upload Icon" />
                          <label
                            for="file"
                            className="cursor-pointer border rounded bg-white font-normal text-xs py-1.5 px-3 mt-2"
                          >
                            Add Image
                          </label>
                          <h1 className="text-product font-normal text-tiny">
                            Upload Merchant Logo
                          </h1>
                          <input
                            type="file"
                            id="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                setImage(file);
                              } else {
                                setImage(null);
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className="border bg-cover bg-top rounded-lg h-40 w-full relative"
                        // style={{ backgroundImage: `url(${preview})` }}
                        >
                          <img
                            src={preview === null ? post.logo_path : preview}
                            // src={post.logo_path}
                            alt="product"
                            className="object-cover w-full h-full rounded-lg"
                          />
                          <span
                            className="text-dark shadow bg-dashbg text-xs p-2 absolute left-2 rounded cursor-pointer bottom-2"
                            onClick={() => {
                              setImage(null);
                              // alert(preview);
                            }}
                          >
                            change image
                          </span>
                        </div>
                      )}

                      <div className="text-white flex justify-end items-center w-full mt-10 font-medium">
                        <input
                          type="submit"
                          className=" cursor-pointer bg-green py-3 px-8 outline-none rounded-full"
                          value="Update merchant"
                          onClick={updateMerchant}
                        />
                      </div>
                    </div>
                  ))}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default EditMerchants;
