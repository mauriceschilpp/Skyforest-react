import React, { useState } from 'react';
import CustomButton from './CustomButton/CustomButton';

const Sidebar = ({ selected, handleButtonClick }) => {

  return (
      <div className="text-blue-800 flex flex-col items-center py-4 shadow-lg fixed top-0 left-0 bottom-0 z-10"
style={{ backgroundColor: '#F7F9F9', width: '58px'}}>
          <img
              src="/logo.svg"
              style={{width: '32px'}} // Set the height to 32px
              alt="Company Logo"
          />

          {/* Divider */}
          <img
              src="/line.svg" // Path to your line.svg
              className="my-4" // Margin for spacing
              alt="Divider"
          />

          {/* Map button */}
          <CustomButton
              iconClass="icon-map"
              onClick={() => handleButtonClick('map')}
              alt="My Areas"
              selected={selected === 'map'}
          />

          <CustomButton
              iconClass="icon-download"
              onClick={() => handleButtonClick('download')}
              alt="Download"
              selected={selected === 'download'}
          />

          {/* Spacer to push the bottom items down */}
          <div className="flex-grow"></div>

          {/* Settings button */}
          <CustomButton
              iconClass="icon-settings"
              onClick={() => handleButtonClick('settings')}
              alt="Settings"
              selected={selected === 'settings'}
          />

          {/* Divider before logout */}
          <img
              src="/line.svg" // Path to your line.svg
              className="my-4" // Margin for spacing
              alt="Divider"
          />

          {/* Logout button */}
          <CustomButton
              iconClass="icon-log-out"
              onClick={() => handleButtonClick('logout')}
              alt="Logout"
              selected={selected === 'logout'}
          />
      </div>
  );
};

export default Sidebar;

