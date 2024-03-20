export default function HireWindow({ onClose }) {
  const handleWindowClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      className="w-screen h-screen flex justify-center items-end"
      onClick={onClose}
    >
      <div
        className="w-full h-[97%] md:w-[700px] md:h-[500px] rounded-tl-lg rounded-tr-lg bg-orange-500 shadow-xl overflow-hidden"
        onClick={handleWindowClick}
      >
        <div className="w-[50px] h-[50px] bg-blue-500" onClick={onClose}></div>
      </div>
    </div>
  );
}
