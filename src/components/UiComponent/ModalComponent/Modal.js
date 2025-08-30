import React from 'react'

export default function Modal({ children, closeModal, headerText }) {
  return (
    <div className="fixed inset-0 bg-[#000000bf] flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-4xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-[#8B4513]">Request a Sample</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
