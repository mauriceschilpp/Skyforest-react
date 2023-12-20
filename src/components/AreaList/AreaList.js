// AreaList Component
const AreaList = ({ areas, isOnlySelected }) => {
  return (
    <div className="overflow-auto">
      <ul className="min-w-full divide-y divide-gray-200">
        {areas.filter(area => !isOnlySelected || area.selected).map((area) => (
          <li key={area.id} className="px-6 py-4 bg-white hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <input type="checkbox" checked={area.selected} onChange={() => {}} className="form-checkbox" />
              <span className="flex-1 min-w-0">{area.name}</span>
              <span className="inline-flex items-center text-sm">{area.size}</span>
              {/* Map tags here */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AreaList;
