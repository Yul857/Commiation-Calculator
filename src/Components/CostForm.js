import React, { useState, useEffect } from "react";
import TagsMultiSelect from "./TagsMultiSelect";
import { useSelector } from "react-redux";

export default function CostForm() {
  const [laborDay, setlaborDay] = useState(0);
  const [airPrice, setAirPrice] = useState(0);
  const [airPeople, setAirPeople] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(0);
  const [hotelNights, setHotelNights] = useState(0);
  const [roomQuantity, setRoomQuantity] = useState(0);
  const [carPrice, setCarPrice] = useState(0);
  const [carDay, setCarDay] = useState(0);
  const [mealNumber, setMealNumber] = useState(0);
  const [mealpeople, setMealPeople] = useState(0);
  const [mealDays, setMealDays] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [gasWeeks, setGasWeeks] = useState(1);
  const [milage, setMilage] = useState(0);
  const [extra, setExtra] = useState(0);

  const laborTotal = useSelector((state) => state.counter.value);
  let estimatedTotal =
    laborTotal * laborDay +
    airPrice * airPeople +
    hotelPrice * hotelNights * roomQuantity +
    carPrice * carDay +
    60 * mealNumber * mealpeople * mealDays +
    gasPrice * gasWeeks +
    milage +
    extra;

  useEffect(() => {
    console.log(estimatedTotal);
  }, [estimatedTotal]);

  return (
    <div className="flex justify-center">
      <div className="m-4 p-4 bg-gray-50 content-center lg:w-3/5 shadow-lg">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 className="text-2xl lg:text-3xl lg:text-left text-center leading-6 font-medium text-gray-900 px-4 mx-4">
                  Cost Estimation
                </h3>
              </div>
              <div className="space-y-6 sm:space-y-5 px-4 mx-4 ">
                <div className="justify-between items-center lg:flex">
                  <div>
                    <label
                      htmlFor="laborDay"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                    >
                      Labor
                    </label>
                  </div>

                  <div className="mt-1 lg:flex lg:mr-20">
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
                        name="laborDay"
                        id="laborDay"
                        className="w-66 lg:w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <div>
                    <label
                      htmlFor="air-Price"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                    >
                      Air ticket
                    </label>
                  </div>

                  <div className="mt-1 sm:mt-0 lg:flex justify-between lg:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setAirPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Please enter Price"
                        type="number"
                        name="air-Price"
                        id="air-Price"
                        className="w-66 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setAirPeople(event.target.valueAsNumber);
                        }}
                        placeholder=" How many people traveling"
                        type="number"
                        name="air-People"
                        id="air-People"
                        className="w-66 lg:w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <div>
                    <label
                      htmlFor="hotelPrice"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                    >
                      Hotel
                    </label>
                  </div>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between lg:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setHotelPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Hotel Price"
                        type="number"
                        name="hotelPrice"
                        id="hotelPrice"
                        className="w-66 lg:w-42 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setHotelNights(event.target.valueAsNumber);
                        }}
                        placeholder=" How many nights"
                        type="number"
                        name="hotelNights"
                        id="hotelNights"
                        className="w-66 lg:w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setRoomQuantity(event.target.valueAsNumber);
                        }}
                        placeholder=" how many rooms"
                        type="number"
                        name="roomQuantity"
                        id="RoomQuantity"
                        className="w-66 lg:w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <label
                    htmlFor="rent-car"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                  >
                    Rent Car
                  </label>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between lg:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setCarPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Rent car Price"
                        type="number"
                        name="carPrice"
                        id="carPrice"
                        className="w-66 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setCarDay(event.target.valueAsNumber);
                        }}
                        placeholder=" Please enter how many days"
                        type="number"
                        name="carDay"
                        id="carDay"
                        className="w-66 lg:w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <label
                    htmlFor="meal"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                  >
                    Meal
                  </label>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between lg:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setMealNumber(event.target.valueAsNumber);
                        }}
                        placeholder=" Meals per day"
                        type="number"
                        name="mealNumber"
                        id="mealNumber"
                        className="w-66 lg:w-42 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setMealPeople(event.target.valueAsNumber);
                        }}
                        placeholder=" People amount"
                        type="number"
                        name="mealPeople"
                        id="mealPeople"
                        className="w-66 lg:w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setMealDays(event.target.valueAsNumber);
                        }}
                        placeholder=" How many days"
                        type="number"
                        name="mealDays"
                        id="mealDays"
                        className="w-66 lg:w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <label
                    htmlFor="gas"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                  >
                    Gas
                  </label>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between md:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setGasPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Gas price per week"
                        type="number"
                        name="gasPrice"
                        id="gasPrice"
                        className="w-66 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                    <div>
                      <input
                        onChange={(event) => {
                          setGasWeeks(event.target.valueAsNumber);
                        }}
                        placeholder=" Travel period(weeks)"
                        type="number"
                        name="gasWeeks"
                        id="gasWeeks"
                        className="w-66 lg:w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <label
                    htmlFor="milage"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                  >
                    Milage
                  </label>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between md:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setMilage(event.target.valueAsNumber);
                        }}
                        placeholder=" Milage of trip"
                        type="number"
                        name="milage"
                        id="milage"
                        className="w-66 lg:w-120 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:flex justify-between items-center">
                  <label
                    htmlFor="extra"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 text-center"
                  >
                    Extra
                  </label>
                  <div className="mt-1 sm:mt-0 lg:flex justify-between md:mr-20">
                    <div>
                      <input
                        onChange={(event) => {
                          setExtra(event.target.valueAsNumber);
                        }}
                        placeholder=" Extra Cost"
                        type="number"
                        name="extra"
                        id="extra"
                        className="w-66 lg:w-120 h-10 rounded-md m-2 border-2 border-gray-300"
                        style={{textAlign: "center"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex m-4 p-4 text-center justify-between items-center border-b-2 md:mr-24">
          <div className="items-center text-gray-700 text-lg">
          <h4>The Estimated Total is </h4>
          </div>
          <div className="text-3xl font-bold pr-4 text-gray-700">
            <h1> ${estimatedTotal}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
