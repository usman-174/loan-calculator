import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, name, error, ...props }) => {
  return (
    <div className="">
      {label && (
        <label className="block text-gray-700 dark:text-gray-300 text-md font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 dark:text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'
        } no-arrows`} // Add the no-arrows class
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
      />
      <p className="text-red-500 dark:text-red-600 text-xs italic mt-2 h-6">
        {error ? error : null}
      </p>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
