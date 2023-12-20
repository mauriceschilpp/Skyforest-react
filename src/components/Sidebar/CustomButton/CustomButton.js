const CustomButtonWrapper = ({ selected, children, onClick }) => {
  const wrapperStyle = {
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: selected ? '3px solid #85BBF3' : '3px solid transparent',
    backgroundColor: selected ? '#E9F3F4' : 'transparent',
    boxShadow: selected ? '1.5px 1.5px 3px 0px rgba(174, 174, 192, 0.40), -1px -1px 3px 0px #FFF' : 'none',
    borderRadius: '4px', // Outer border-radius
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    margin: '0 0 8px',
    boxSizing: 'border-box',
  };

  return (
    <div style={wrapperStyle} onClick={onClick}>
      {children}
    </div>
  );
};

const CustomButton = ({ iconClass, iconSrc, onClick, alt, selected }) => {
  const buttonStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    borderRadius: '5px', // Slightly reduced border-radius for inner button
    background: 'transparent',
  };

  // Style for the icon or image
  const iconStyle = {
    fontSize: '18px',
    color: selected ? '#85BBF3' : '#A5B5BD',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <CustomButtonWrapper selected={selected} onClick={onClick}>
      <button className="rounded bg-transparent" style={buttonStyle}>
        <span className={iconClass} style={iconStyle} aria-label={alt}></span>
      </button>
    </CustomButtonWrapper>
  );
};

export default CustomButton;
