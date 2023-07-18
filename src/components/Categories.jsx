import React, { useState } from "react";
import { Element } from "react-scroll";
import dataInfo from "./Data";
import dummyInfo from "./Dummy";

const SearchBar = () => {
  const [inputData, setInputData] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

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
    
      <div className="flex mt-32 md:mt-10 flex-col h-auto">
        <Element name="Search">
        {/* Search div */}
        <div className="hidden mb:block p-10">.</div>
        <div className="flex flex-col w-full">
          <h2 className="font-extrabold text-purple-500 mb-5">
            Search for a career path and connect to professional counselor{" "}
            <em className="text-red-500">
              (for example.. Teacher, Banker, Lawyer)
            </em>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  md:flex-row items-center justify-center mx-4 md:mx-0 mr-2"
          >
            <div className="md:flex md:justify-center mb-2 md:mb-0 md:mr-2 w-full">
              <input
                value={inputData}
                onChange={handleInputChange}
                type="text"
                className="input input-bordered input-primary md:w-[500px]"
                placeholder="Search for career..."
              />
              {/* Search suggestions */}

              {suggestions.length > 0 && (
                <ul className="suggestions h-auto max-h-40 flex flex-row overflow-auto absolute p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
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
              <div className="indicator">
                <button className="btn btn-primary ">Search</button>
              </div>
            </div>
          </form>

          {/* Cards */}
          <div className="h-full grid grid-rows md:grid-cols-2 mt-10 mb-10 md:mt-20 gap-20">
            {results.map((data, index) => (
              <div key={index} className="card card-side bg-base-100 shadow-xl">
                <figure className="flex flex-col justify-start items-start p-2 md:p-4 bg-[#3f093f5b]">
                  <img
                    className="rounded-full self-start mb-32"
                    src={data.image}
                    alt="image"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-xs md:text-lg">{data.name}</h2>
                  <p className="text-xs md:text-sm">
                    {data.description} <strong>{data.career}</strong>.
                  </p>
                  <div className="card-actions justify-start">
                    {/* Open dropdown */}
                    <div className="dropdown">
                      <label tabIndex={0} className="btn m-1">
                        Book a session
                      </label>
                      {!popUp ? (
                        <div
                          tabIndex={0}
                          className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
                        >
                          <div className="card-body">
                            <h3 className="card-title">
                              Connect with {data.name}
                            </h3>
                            <p>
                              send your email and get a booking inbox from them
                            </p>

                            <form
                              className="flex flex-col justify-center"
                              action=""
                            >
                              <input
                                required
                                type="email"
                                className="input font-extrabold"
                                placeholder="johndoe@email.com"
                              />
                              <button
                                onClick={handlePopUp}
                                className="btn bg-success w-full mt-2 "
                              >
                                submit
                              </button>
                            </form>
                          </div>
                        </div>
                      ) : (
                        <div
                          tabIndex={0}
                          className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
                        >
                          <div className="card-body">
                            <h3 className="card-title">
                              You are succefully booked. Wait for an email from
                              counselor
                            </h3>
                            <button
                              onClick={handlePopUp}
                              className="btn bg-error w-full mt-2 "
                            >
                              Cancel booking
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Element>
      </div>
  );
};

export default SearchBar;
