export default function HireWindow({ onClose }) {
  const handleOrangeDivClick = (event) => {
    // Prevent event propagation to parent div
    event.stopPropagation();
  };
  return (
    <div
      className="w-screen h-screen fixed z-50 backdrop-blur-lg bg-white/30 flex justify-center items-end"
      onClick={onClose}
    >
      <div
        className="w-[40%] h-[40%] bg-orange-500"
        onClick={handleOrangeDivClick}
      >
        <div className="w-[50px] h-[50px] bg-blue-500" onClick={onClose}></div>
      </div>
    </div>
  );
}
