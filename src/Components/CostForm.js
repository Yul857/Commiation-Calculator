import React, { useState, useEffect } from "react";
import TagsMultiSelect from "./TagsMultiSelect";
import { useSelector} from 'react-redux'

export default function CostForm() {
  const [laborDay, setlaborDay] = useState(0);
  const [airTicket, setAirTicket] = useState(0);
  const [airPeople, setAirPeople] = useState(0)
  const [hotel, setHotel] = useState(0);
  const [car, setCar] = useState(0);
  const [meal, setMeal] = useState(0);
  const [gas, setGas] = useState(0);
  const [milage, setMilage] = useState(0);
  const [extra, setExtra] = useState(0);

  const laborTotal = useSelector((state)=> state.counter.value)
  let estimatedTotal = laborTotal*laborDay

  

  useEffect(() => {
    console.log(
      `the total price of the cost is ${laborTotal*laborDay}`
    );
  }, [laborDay]);

  return (
    <div className="m-40 p-4">
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900 text-center ">
                Cost Estimation
              </h3>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="labor"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Labor
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 flex">
                  <div className="m-2">
                    <TagsMultiSelect />
                  </div>
                  <div>
                  <input
                    onChange={(event) => {
                      setlaborDay(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter how many days"
                    type="number"
                    name="labor"
                    id="labor"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>         
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="air-ticket"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Air ticket
                </label>
                <div className="mt-1 sm:mt-0 flex bg-green-200 justify-between">
                  <div className="w-60 ">
                  <input
                    onChange={(event) => {
                      setAirTicket(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the price of the Air ticket"
                    type="number"
                    name="air-ticket"
                    id="air-ticket"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>
                  <div className="w-60">
                  <input
                    onChange={(event) => {
                      setAirTicket(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the price of the Air ticket"
                    type="number"
                    name="air-ticket"
                    id="air-ticket"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                  </div>
                  
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="hotel"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Hotel
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setHotel(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the price of the hotel"
                    id="hotel"
                    name="hotel"
                    type="number"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="rent-car"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Rent Car
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setCar(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the price of the hotel"
                    id="rent-car"
                    name="rent-car"
                    type="number"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="meal"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Meal
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setMeal(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter how many people"
                    type="number"
                    name="meal"
                    id="meal"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="gas"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Gas
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setGas(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the gas price"
                    type="number"
                    name="gas"
                    id="gas"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="milage"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Milage
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setMilage(event.target.valueAsNumber);
                    }}
                    placeholder=" Please enter the Milage of the trip"
                    type="number"
                    name="milage"
                    id="milage"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="extra"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Extra
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    onChange={(event) => {
                      setExtra(event.target.valueAsNumber);
                    }}
                    placeholder="Please enter the entra cost"
                    type="number"
                    name="extra"
                    id="extra"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <h1>The Total is ${estimatedTotal}</h1>
      </div>
    </div>
  );
}
