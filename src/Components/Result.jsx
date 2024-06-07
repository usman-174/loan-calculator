import React from 'react'

const Result = ({ results }) => {

    const valuesExist = Object.values(results).some((value) => !!value);

    return (
        <div className="container mb-5 w-3/4 md:w-1/2 mt-6  mx-auto p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow">
            {valuesExist ? <>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">Results</h2>

                <div className="flex flex-wrap items-center justify-center">
                    <div className="p-4  rounded-md text-center ">
                        <p className="text-lg font-semibold mb-2">Monthly Payment</p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">${results.monthlyPayment}</p>
                    </div>
                    <div className="p-4  rounded-md  text-center">
                        <p className="text-lg font-semibold mb-2">Total Payment</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">${results.totalPayment}</p>
                    </div>
                    <div className="p-4  rounded-md  text-center">
                        <p className="text-lg font-semibold mb-2">Total Interest</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">${results.totalInterest}</p>
                    </div>
                </div> </> :
                <p className="text-center text-lg font-semibold text-red-500 dark:text-red-600">Please fill in the form to get the results</p>
            }
        </div>

    )
}

export default Result