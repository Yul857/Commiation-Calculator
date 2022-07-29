/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function CostForm() {
  return (
    <div className="m-4 p-4 bg-red-400">
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
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
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    placeholder=" Please enter how many days"
                    type="number"
                    name="labor"
                    id="labor"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="air-ticket"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Air ticket
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                  placeholder=" Please enter the price of the Air ticket"
                    type="number"
                    name="air-ticket"
                    id="air-ticket"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
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
    </div>
  );
}
