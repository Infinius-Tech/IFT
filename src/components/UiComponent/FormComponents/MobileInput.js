import React from 'react'

export default function MobileInput({ label, name, value, onChange, error, placeholder }) {

    const onMobileNumberChange = (e) => {
        const { value } = e.target;
        if (/^\d{0,10}$/.test(value)) {
            onChange(e);
        }
    };

  return (
    <div>
      <label className="block text-[#8B4513] mb-2 font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onMobileNumberChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 shadow appearance-none border ${error ? 'border-red-500' : ''} rounded-xl text-[#8B4513] focus:outline-none focus:ring-2 focus:ring-amber-500 autofill:bg-amber-50 autofill:text-[#8B4513]`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
