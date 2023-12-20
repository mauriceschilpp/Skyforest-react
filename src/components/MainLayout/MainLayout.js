// MainLayout Component
"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ExtendedMenu from "@/components/Sidebar/ExtendedMenu";

export default function MainLayout() {
  const [selected, setSelected] = useState('map');

  const handleButtonClick = (buttonName) => {
    setSelected(buttonName);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar selected={selected} handleButtonClick={handleButtonClick} />
      {selected === 'map' && <ExtendedMenu />}
    </div>
  );
}
