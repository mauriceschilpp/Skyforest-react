import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import TitleBar from "@/components/Sidebar/TitleBar";
import Areas from "@/components/Sidebar/Areas/Areas";
import 'react-resizable/css/styles.css';

const ExtendedMenu = () => {
    const [width, setWidth] = useState(400);

  const handleResize = (event, { size }) => {
    if (size.width <= 400) {
      setWidth(size.width);
    }
  };

  return (
    <div
      className="bg-slate-100 fixed top-0 left-[58px] z-1"
      style={{
         width: '400px',
         boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.18)',
         transition: 'all 0.7s ease',
      }}
    >
        <TitleBar title="My Areas"/>
        <Areas/>
    </div>
  );
};

export default ExtendedMenu;
