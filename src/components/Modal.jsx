import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] sm:w-1/2 md:w-1/3 md:h-auto overflow-y-auto  max-h-[90vh]">
                <button
                    className="text-gray-400 hover:text-gray-600 float-right"
                    onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
