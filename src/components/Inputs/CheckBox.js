import React from 'react';

const Checkbox = ({ isChecked, onToggle }) => {
  return (
    <div
      className="checkbox-container w-6 h-6 flex justify-center items-center cursor-pointer"
      onClick={onToggle}
    >
      <div className="checkbox-inner w-[18px] h-[18px] flex justify-center items-center rounded shadow relative">
        {/* Background for unchecked state, changes on hover */}
        <div className={`absolute inset-0 bg-white rounded transition-all ${!isChecked ? 'bg-unchecked' : ''}`}></div>

        {/* Background for checked state, opacity transitions */}
        <div className={`absolute inset-0 bg-checked-box rounded transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Icon for checked state */}
        {isChecked && (
          <span className="icon-approve flex justify-center items-center" style={{ width: '12px', height: '9px', position: 'relative', zIndex: 1 }}></span>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
