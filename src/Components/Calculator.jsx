import React, { useState } from 'react';
import Input from './Input';
import toast from 'react-hot-toast';

const initialFormState = {
    amount: '',
    intrest: '',
    years: '',
};
const Calculator = ({ setResults }) => {
    const [formState, setFormState] = useState(initialFormState);
    console.log(formState);

    const [errors, setErrors] = useState({
        amount: '',
        intrest: '',
        years: '',
    });

    const validateForm = () => {
        let valid = true;
        if (formState.amount === '') {
            setErrors(e => ({
                ...e,
                amount: 'This field cannot be empty.',
            }));
            valid = false;
        }
        if (formState.intrest === '') {
            setErrors(e => ({
                ...e,
                intrest: 'This field cannot be empty.',
            }));
            valid = false;
        }
        if (formState.years === '') {
            setErrors(e => ({
                ...e,
                years: 'This field cannot be empty.',
            }));
            valid = false;
        }
        return valid;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        if (value === '') {
            setErrors({
                ...errors,
                [name]: 'This field cannot be empty.',
            });
        } else if (!/^\d*$/.test(value)) {
            setErrors({
                ...errors,
                [name]: 'Only numbers are allowed.',
            });
        } else {
            setErrors({
                ...errors,
                [name]: '', // Clear the error if input is valid
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const { amount, intrest, years } = formState;
        const principal = parseFloat(amount);
        const calculateInterest = parseFloat(intrest) / 100 / 12;
        const calculatePayments = parseFloat(years) * 12;

        // Compute monthly payment
        const x = Math.pow(1 + calculateInterest, calculatePayments);
        const monthly = (principal * x * calculateInterest) / (x - 1);
        console.log({
            x, monthly
        });
        if (!isNaN(monthly) && (monthly !== Infinity) && (monthly !== 0)) {

            const totalPayment = (monthly * calculatePayments).toFixed(2);
            const totalInterest = (totalPayment - principal).toFixed(2);
            toast.success('Loan calculated successfully');
            setResults({
                monthlyPayment: monthly.toFixed(2),
                totalPayment: totalPayment,
                totalInterest: totalInterest,
            });

        } else {
            setErrors({
                amount: !amount ? 'This field cannot be empty' : errors.amount,
                intrest: !intrest ? 'This field cannot be empty' : errors.intrest,
                years: !years ? 'This field cannot be empty' : errors.years,
            });
            if (isNaN(monthly)) {

                // if (x === Infinity) {
                toast.error('The calculated monthly payment is too large. Please enter reasonable values for the interest rate, and loan term.')
                // }
            }
        }
    };

    return (
        <div className="container mx-auto md:w-1/2">
            <h1 className="text-center my-10 text-3xl font-semibold uppercase font-mono">
                Loan Calculator
            </h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Loan Amount"
                    type="text"
                    name="amount"
                    value={formState.amount}
                    error={errors.amount} // Pass the specific error message
                    onChange={handleChange}
                    placeholder="Enter Loan Amount"
                />
                <Input
                    label="Interest Rate"
                    type="text"
                    name="intrest"
                    value={formState.intrest}
                    error={errors.intrest} // Pass the specific error message
                    onChange={handleChange}
                    placeholder="Enter Annual Interest Rate"
                />
                <Input
                    label="Loan Term"
                    type="text"
                    name="years"
                    value={formState.years}
                    error={errors.years} // Pass the specific error message
                    onChange={handleChange}
                    placeholder="Enter the number of years the loan will be repaid over."
                />
                <center>

                    <button
                        type="submit"
                        className="bg-gray-500 dark:bg-slate-100 dark:text-black hover:bg-slate-700 dark:hover:bg-slate-200 text-white font-semibold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Calculate
                    </button>
                    {/* reset form */}
                    <button
                        type="button"
                        onClick={() => {
                            setFormState(initialFormState);
                            setResults({});
                            setErrors({
                                amount: '',
                                intrest: '',
                                years: '',
                            });
                        }}
                        className="bg-gray-500 dark:bg-slate-100 dark:text-black hover:bg-slate-700 dark:hover:bg-slate-200 text-white font-semibold py-2 px-4 rounded mt-4 ml-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Clear Form
                    </button>
                </center>

            </form>
        </div>
    );
};

export default Calculator;
