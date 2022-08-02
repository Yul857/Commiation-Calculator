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
      <div className="m-4 p-4 bg-gray-50 content-center w-3/5">
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 className="text-3xl leading-6 font-medium text-gray-900 text-center">
                  Cost Estimation
                </h3>
              </div>
              <div className="space-y-6 sm:space-y-5 px-4 mx-4 ">
                <div className="flex justify-between ">
                  <div>
                    <label
                      htmlFor="laborDay"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Labor
                    </label>
                  </div>

                  <div className="mt-1 flex">
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
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <label
                      htmlFor="air-Price"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Air ticket
                    </label>
                  </div>

                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setAirPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Please enter Price"
                        type="number"
                        name="air-Price"
                        id="air-Price"
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <label
                      htmlFor="hotelPrice"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Hotel
                    </label>
                  </div>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setHotelPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Hotel Price"
                        type="number"
                        name="hotelPrice"
                        id="hotelPrice"
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="rent-car"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Rent Car
                  </label>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setCarPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Rent car Price"
                        type="number"
                        name="carPrice"
                        id="carPrice"
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="meal"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Meal
                  </label>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setMealNumber(event.target.valueAsNumber);
                        }}
                        placeholder=" Meals per day"
                        type="number"
                        name="mealNumber"
                        id="mealNumber"
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-40 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="gas"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Gas
                  </label>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setGasPrice(event.target.valueAsNumber);
                        }}
                        placeholder=" Gas price per week"
                        type="number"
                        name="gasPrice"
                        id="gasPrice"
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
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
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="milage"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Milage
                  </label>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setMilage(event.target.valueAsNumber);
                        }}
                        placeholder=" Milage of trip"
                        type="number"
                        name="milage"
                        id="milage"
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="extra"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Extra
                  </label>
                  <div className="mt-1 sm:mt-0 flex justify-between">
                    <div>
                      <input
                        onChange={(event) => {
                          setExtra(event.target.valueAsNumber);
                        }}
                        placeholder=" Extra Cost"
                        type="number"
                        name="extra"
                        id="extra"
                        className="w-60 h-10 rounded-md m-2 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="m-4 font-bold text-3xl text-center">
          <h1>The Estimated Total is ${estimatedTotal}</h1>
        </div>
      </div>
    </div>
  );
}
