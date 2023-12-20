import React, { useState, useEffect } from 'react';
import AreaItem from "@/components/Sidebar/Areas/AreaItem";

const Areas = () => {

    const [listHeight, setListHeight] = useState(0);

  const updateListHeight = () => {
    // Assuming there's a header with 62px height
    const headerHeight = 62;
    // Calculate remaining height for the list
    const remainingHeight = window.innerHeight - headerHeight;
    setListHeight(remainingHeight);
  };

  useEffect(() => {
    // Set initial height
    updateListHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateListHeight);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateListHeight);
  }, []);

 const [areas, setAreas] = useState([
    // Example data, replace with actual data
    { name: "Area 1", size: "24 m2", tags: ["tag1", "tag2"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
     { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    { name: "Area 2", size: "30 m2", tags: ["tag3", "tag4"], isChecked: false },
    // Add more areas as needed
  ]);

 const handleCheckboxToggle = (index) => {
    const newAreas = [...areas];
    newAreas[index].isChecked = !newAreas[index].isChecked;
    setAreas(newAreas);
  };



return (
<div className="w-full h-full flex flex-wrap justify-between items-start" style={{ height: 'calc(100vh - 62px)' }}>
      <div className="w-full flex flex-wrap justify-start items-start h-full">
        <div className="flex flex-wrap justify-start items-start h-full">
          <div className="h-full bg-gray-50 flex flex-col justify-start items-start">
                        <div className="self-stretch flex-col justify-start items-start flex">
                    <div className=" bg-gray-50 flex-col justify-start items-start flex">
                        <div className="flex-col justify-start items-start flex">
                            <div className="h-14 pl-4 pr-5 bg-gray-50 flex-col justify-center items-start flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-6 h-6 justify-center items-center gap-2.5 flex">
                                        <div className="w-[18px] h-[18px] bg-gray-50 rounded shadow" />
                                    </div>
                                </div>
                            </div>
                            <div className="h-[3px] px-2 bg-gray-50 flex-col justify-start items-start gap-2.5 flex">
                                <div className="w-96 h-[3px] justify-center items-center inline-flex">
                                    <div className="w-96 self-stretch bg-gray-50 rounded shadow-inner" />
                                </div>
                            </div>
                        </div>
                        <div className="ml-2 flex-grow" style={{ height: `${listHeight-62}px`, overflowY: 'auto'}}>
                         {areas.map((area, index) => (
                              <AreaItem
                                key={index}
                                name={area.name}
                                size={area.size}
                                tags={area.tags}
                                isChecked={area.isChecked}
                                onCheckboxToggle={() => handleCheckboxToggle(index)}
                              />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
export default Areas;