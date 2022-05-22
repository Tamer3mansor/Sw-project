import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";

const FlightApp = () => {
  // handle event
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
            <div className="h-24 flex justify-center items-center shadow ">
              <p className="uppercase font-bold text-4xl text-center">
                FLIGHT BOOKING APP
              </p>
            </div>

            {/* body section */}
            <div>
              <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                <div>
                  <div className="flex space-x-8 mt-5">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="round trip"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-xl font-bold uppercase">Round trip</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="one way"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-xl font-bold uppercase">one way</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tripType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="multy-city"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-xl font-bold uppercase">multy-city</p>
                    </div>
                  </div>
                  <div>
                    {errors.tripType && (
                      <span className="text-sm text-red-500">
                        {errors.tripType.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* departure section */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">flying from</p>
                      <select
                        className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                          errors.departure &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("departure", {
                          required: {
                            value: true,
                            message: "Departure is required",
                          },
                        })}
                      >
                        <option value="" selected disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                      <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
                    </div>
                    <div>
                      {errors.departure && (
                        <span className="text-sm text-red-500">
                          {errors.departure.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* arrival section */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">flying to</p>
                      <select 
                      className={`w-full h-16 text-2xl pl-20 rounded-lg ${
                        errors.arrival &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("arrival", {
                        required: {
                          value: true,
                          message: "Arrival is required",
                        },
                      })}
                      >
                        <option value="" selected disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                      <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
                    </div>
                    <div>
                    {errors.arrival && (
                        <span className="text-sm text-red-500">
                          {errors.arrival.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* date section */}
                <div className="flex space-x-2">
                  {/* departure section */}
                  <div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          departure date
                        </p>
                        <input
                          type="date"
                          className={`w-full h-16 text-2xl rounded-lg ${errors.departureDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                          {...register("departureDate", {
                            required: {
                              value: true,
                              message: "Departure date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.departureDate && (
                        <span className="text-sm text-red-500">
                          {errors.departureDate.message}
                        </span>
                      )}
                      </div>
                    </div>
                  </div>

                  {/* return section */}
                  <div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          return date
                        </p>
                        <input
                          type="date"
                          className={`w-full h-16 text-2xl rounded-lg ${errors.returnDate &&
                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                          {...register("returnDate", {
                            required: {
                              value: true,
                              message: "Return date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.returnDate && (
                        <span className="text-sm text-red-500">
                          {errors.returnDate.message}
                        </span>
                      )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* passenger section */}
                <div className="flex space-x-2">
                  {/* adult section */}
                  <div className="w-full">
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          {" "}
                          adults (18+)
                        </p>
                        <select 
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("adult", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <GiPerson className="text-4xl absolute left-5 top-10 " />
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>

                  {/* children section */}
                  <div className="w-full">
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          {" "}
                          children (0-17)
                        </p>
                        <select 
                        className="w-full h-16 rounded-lg text-2xl pl-20"
                        {...register("children", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <FaChild className="text-4xl absolute left-5 top-10 " />
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>
                </div>

                {/* class and price section */}
                <div className="flex space-x-2">
                  {/* class section */}
                  <div className="w-full">
                    <div>
                      <div>
                        <p className="font-bold text-xl uppercase"> class</p>
                        <select
                         className="w-full h-16 rounded-lg text-2xl pl-20"
                         {...register("class", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>Economy</option>
                          <option>Business</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>

                  {/* price section */}
                  <div className="w-full">
                    <div>
                      <div>
                        <p className="font-bold text-xl uppercase"> price</p>
                        <select
                         className="w-full h-16 rounded-lg text-2xl pl-20"
                         {...register("price", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>All Prices</option>
                          <option>$ 1000</option>
                          <option>$ 2000</option>
                          <option>$ 3000</option>
                          <option>$ 4000</option>
                          <option>$ 5000</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>
                </div>

                {/* btn section */}
                <div>
                  <input
                    type="submit"
                    value="Find flight"
                    className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default FlightApp;
