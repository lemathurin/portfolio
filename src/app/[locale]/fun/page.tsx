"use client";

import InteractiveCanvas from "@/components/InteractiveCanvas";

export default function FunPage() {
  const handleItemClick = (itemId: string) => {
    console.log("Clicked item:", itemId);
  };

  return (
    <InteractiveCanvas onItemClick={handleItemClick}>
      {/* Text block at 100, 150 */}
      <div
        className="absolute cursor-pointer hover:shadow-lg transition-shadow bg-white p-4 rounded shadow border"
        style={{
          left: 100,
          top: 150,
          width: 200,
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleItemClick("text-1");
        }}
      >
        This is a text block that users can click on
      </div>

      {/* Image at 400, 300 */}
      <img
        src="/test.jpeg"
        alt="Sample image"
        className="absolute cursor-pointer hover:shadow-lg transition-shadow max-w-none"
        style={{
          left: 400,
          top: 300,
          width: 200,
        }}
        draggable={false}
        onClick={(e) => {
          e.stopPropagation();
          handleItemClick("image-1");
        }}
      />

      {/* Another text block at 800, 500 */}
      <div
        className="absolute cursor-pointer hover:shadow-lg transition-shadow bg-blue-100 p-6 rounded-lg border-2 border-blue-300"
        style={{
          left: 800,
          top: 500,
          width: 250,
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleItemClick("text-2");
        }}
      >
        <h3 className="font-bold text-lg mb-2">Another Text Block</h3>
        <p>This one has different styling and is positioned manually</p>
      </div>

      {/* Image at 1200, 800 */}
      <img
        src="/me-100.svg"
        alt="Another image"
        className="absolute cursor-pointer hover:shadow-lg transition-shadow max-w-none rounded-lg"
        style={{
          left: 1200,
          top: 800,
          width: 400,
        }}
        draggable={false}
        onClick={(e) => {
          e.stopPropagation();
          handleItemClick("image-2");
        }}
      />

      {/* Custom component at 600, 1000 */}
      <div
        className="absolute cursor-pointer hover:shadow-lg transition-shadow"
        style={{
          left: 600,
          top: 1000,
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleItemClick("custom-1");
        }}
      >
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-lg text-white">
          <h2 className="text-xl font-bold">Custom Component</h2>
          <p>You can place any React component here</p>
        </div>
      </div>

      {/* Add as many elements as you want, positioned wherever you want */}
    </InteractiveCanvas>
  );
}
