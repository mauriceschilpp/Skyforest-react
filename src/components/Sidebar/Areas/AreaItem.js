import Checkbox from "@/components/Inputs/CheckBox";

const AreaItem = ({ name, size, tags, isChecked, onCheckboxToggle }) => {
  // Added 'cursor-pointer select-none' to the container classes
  const containerClasses = `area-item w-[380px] h-[75px] pl-2 pr-4 py-2.5 ${isChecked ? 'bg-slate-100 shadow-inner checked' : 'bg-gray-50'} rounded justify-start items-center gap-3 inline-flex cursor-pointer select-none`;

  const handleBoxClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={containerClasses} onClick={onCheckboxToggle}>
      <Checkbox isChecked={isChecked}/>
      <div className="grow shrink basis-0 h-[55px] justify-start items-center gap-4 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch h-8 justify-start items-center gap-2.5 inline-flex">
            <div className="text-neutral-800 text-sm font-semibold">{name}</div>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="text-gray-400 text-xs font-medium">{size}</div>
            <div className="text-xs font-medium" style={{color: "#85BBF3"}}>•</div>
            <div className="grow shrink basis-0 h-[15px] justify-start items-center gap-1.5 flex">
              {tags.map((tag, index) => (
                <div key={index} className="justify-center items-center gap-2.5 flex">
                  <div className="text-gray-400 text-xs font-medium">#{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hover-target hidden justify-start items-start gap-3 flex" onClick={handleBoxClick}>
          <div className="w-8 h-8 bg-gray-50 rounded shadow justify-center items-center gap-2.5 flex">
            <span className="icon-remove-icon w-[18px] h-[18px] flex-col justify-center items-center gap-2.5 inline-flex" style={{'color': '#A5B5BD'}}></span>
          </div>
          <div className="shadow justify-start items-start flex">
            <div className="w-8 h-8 bg-gray-50 rounded justify-center items-center gap-2.5 flex">
              <span className="icon-portals w-[18px] h-[18px] justify-center items-center gap-2.5 flex" style={{'color': '#A5B5BD'}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaItem;
