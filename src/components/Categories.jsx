import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Element } from "react-scroll";
import dataInfo from "./Data";
import dummyInfo from "./Dummy";

const SearchBar = () => {
  const [inputData, setInputData] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [modalForm, setModalForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(formData);

    setModalForm({
      fullName: "",
      email: "",
      message: "",
    });

    setSubmissionStatus(true);
  };

  const showModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
    setSubmissionStatus(false);
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputData(inputValue);

    // Filter the suggestions based on the input value
    const filteredSuggestions = dataInfo
      .map((data) => data.career)
      .filter((career) =>
        career.toLowerCase().includes(inputValue.toLowerCase())
      );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setInputData(suggestion);
    setSuggestions([]);
  };

  const handlePopUp = () => {
    setPopUp((prevPopUp) => !prevPopUp);
    console.log(popUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputData) {
      return;
    }

    const filtered = dataInfo.filter((data) =>
      data.career.toLowerCase().includes(inputData.toLowerCase())
    );

    setFilteredResults(filtered);
    setInputData("");
    console.log(filtered);
  };

  const results = filteredResults.length > 0 ? filteredResults : dummyInfo;

  return (
    <div className="flex mt-44 md:mt-10 flex-col h-auto">
      <Element name="Search">
        {/* Search div */}
        <div className="hidden mb:block p-10">.</div>
        <div className="flex flex-col w-full">
          <h1 className=" flex justify-center text-center mb-5 md:text-5xl text-3xl font-extrabold text-purple-500">
            Search For Your Desired Career
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  md:flex-row items-center justify-center mx-4 md:mx-0 mr-2"
          >
            <div className="flex md:justify-center mb-2 md:mb-0 md:mr-2 w-auto">
              <input
                value={inputData}
                onChange={handleInputChange}
                type="text"
                className="input input-bordered input-primary md:w-[500px] mx-2 rounded-none"
                placeholder="Search for career..."
              />
              {/* Search suggestions */}

              {suggestions.length > 0 && (
                <ul className="suggestions mt-12 md:mr-24 justify-start md:mt-14 h-auto max-h-40 flex flex-row overflow-auto absolute p-2 shadow menu dropdown-content z-[1] bg-base-100 w-52 md:w-[500px]">
                  {suggestions.map((suggestion, index) => (
                    <li
                      onClick={() => handleSuggestionClick(suggestion)}
                      key={index}
                      className="suggestion-item"
                    >
                      <a>{suggestion}</a>
                    </li>
                  ))}
                </ul>
              )}
              {/* search button */}
              <div className="indicator w-auto">
                <button className="btn btn-primary ">Search</button>
              </div>
            </div>
          </form>

          {/* Cards */}
          <div className="h-full grid grid-rows md:grid-cols-2 mt-10 mb-10 md:mt-20 gap-20">
            {/* FILTERING BASED ON DUMMY DATA */}
            {filteredResults.length === 0 ? (
             <>
              <h2 className="font-extrabold mb-5 justify-center">
                Search for a career path and connect to a professional counselor{" "}
                <em className="text-red-500">
                  (for example.. Teacher, Banker, Lawyer)
                </em>
                <h3 className="mt-5 text-lg"> You may be intrested in...</h3>
                </h2>

                {/* Dummy Data Render */}
                {dummyInfo.map((data, index) => (
                <div
                  key={index}
                  className="card card-side bg-base-100 shadow-xl"
                >
                  <figure className="flex flex-col justify-start items-start p-2 md:p-4 bg-[#3f093f5b]">
                    <img
                      className="rounded-full self-start mb-32"
                      src={data.image}
                      alt="image"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title text-xs md:text-lg">
                      {data.name}
                    </h2>
                    <p className="text-xs md:text-sm">
                      {data.description}{" "}
                      <strong className="text-red-500 underline">
                        {data.career}
                      </strong>
                      .
                    </p>
                    <div className="card-actions justify-start">
                      {/* Open Modal */}

                      <div>
                        <button
                          className="btn text-xs md:text-lg"
                          onClick={() => showModal()}
                        >
                          book now
                        </button>

                        {/* modal form */}

                        <dialog id="my_modal_3" className="modal">
                          <form
                            onSubmit={handleModalSubmit}
                            method="dialog"
                            className="modal-box"
                          >
                            <button
                              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                              onClick={() => closeModal()}
                            >
                              ✕
                            </button>
                            <h3 className="font-bold text-lg">Hello!</h3>

                            {/* Input fields */}
                            {submissionStatus ? (
                              // Render the popup icon upon successful submission
                              <div>
                                <p className="py-4  text-center ">
                                  You have sent a message to this counselor. Your reply would come through your email.
                                   <em className="text-blue-500"> Click the <i className="font-extrabold"> X</i> button at the top right corner to exit</em>
                                </p>
                                <div className="flex popup-icon m-1 w-full justify-center text-center align-middle ">
                                  <BsFillCheckCircleFill className=" text-success mx-5 mt-1" />
                                  <p className="font-extrabold pb-3">
                                    Submission successful!
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="py-4">
                                  Fill the form bellow and a message would be
                                  sent to you by your designated counsellor
                                </p>
                              </div>
                            )}

                            <div className="form-group">
                              <input
                                className="input border-success m-2 w-full"
                                type="text"
                                id="fullName"
                                required
                                placeholder="Enter your full name"
                                value={modalForm.fullName}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    fullName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="input border-success m-2 w-full"
                                type="email"
                                id="email"
                                required
                                placeholder="Enter your email"
                                value={modalForm.email}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                id="message"
                                className="textarea border-success m-2 w-full"
                                placeholder="Write a brief message about yourself"
                                value={modalForm.message}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    message: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>

                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn my-2 text-center w-full"
                            >
                              Submit
                            </button>
                          </form>
                        </dialog>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          }
             </>
            ) : (
              filteredResults.map((data, index) => (
                <div
                  key={index}
                  className="card card-side bg-base-100 shadow-xl"
                >
                  <figure className="flex flex-col justify-start items-start p-2 md:p-4 bg-[#3f093f5b]">
                    <img
                      className="rounded-full self-start mb-32"
                      src={data.image}
                      alt="image"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title text-xs md:text-lg">
                      {data.name}
                    </h2>
                    <p className="text-xs md:text-sm">
                      {data.description}{" "}
                      <strong className="text-red-500 underline">
                        {data.career}
                      </strong>
                      .
                    </p>
                    <div className="card-actions justify-start">
                      {/* Open Modal */}

                      <div>
                        <button
                          className="btn text-xs md:text-lg"
                          onClick={() => showModal()}
                        >
                          book now
                        </button>

                        {/* modal form */}

                        <dialog id="my_modal_3" className="modal">
                          <form
                            onSubmit={handleModalSubmit}
                            method="dialog"
                            className="modal-box"
                          >
                            <button
                              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                              onClick={() => closeModal()}
                            >
                              ✕
                            </button>
                            <h3 className="font-bold text-lg">Hello!</h3>

                            {/* Input fields */}
                            {submissionStatus ? (
                              // Render the popup icon upon successful submission
                              <div>
                                <p className="py-4  text-center ">
                                  You have sent a message to this counselor. Your reply would come through your email.
                                   <em className="text-blue-500"> Click the <i className="font-extrabold"> X</i> button at the top right corner to exit</em>
                                </p>
                                <div className="flex popup-icon m-1 w-full justify-center text-center align-middle ">
                                  <BsFillCheckCircleFill className=" text-success mx-5 mt-1" />
                                  <p className="font-extrabold pb-3">
                                    Submission successful!
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="py-4">
                                  Fill the form bellow and a message would be
                                  sent to you by your designated counsellor
                                </p>
                              </div>
                            )}

                            <div className="form-group">
                              <input
                                className="input border-success m-2 w-full"
                                type="text"
                                id="fullName"
                                required
                                placeholder="Enter your full name"
                                value={modalForm.fullName}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    fullName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="input border-success m-2 w-full"
                                type="email"
                                id="email"
                                required
                                placeholder="Enter your email"
                                value={modalForm.email}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                id="message"
                                className="textarea border-success m-2 w-full"
                                placeholder="Write a brief message about yourself"
                                value={modalForm.message}
                                onChange={(e) =>
                                  setModalForm({
                                    ...modalForm,
                                    message: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>

                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn my-2 text-center w-full"
                            >
                              Submit
                            </button>
                          </form>
                        </dialog>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default SearchBar;
