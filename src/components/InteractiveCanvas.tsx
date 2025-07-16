"use client";

import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface InteractiveCanvasProps {
  children: React.ReactNode;
  onItemClick?: (itemId: string) => void;
}

const InteractiveCanvas: React.FC<InteractiveCanvasProps> = ({
  children,
  onItemClick,
}) => {
  const DIV_WIDTH = 3000;
  const DIV_HEIGHT = 2000;

  return (
    <TransformWrapper
      minScale={1}
      maxScale={1}
      disabled={false} // ensure panning is enabled
      limitToBounds={true} // allow dragging outside the visible area
      panning={{
        disabled: false,
        velocityDisabled: false,
      }}
      doubleClick={{ disabled: true }} // optional: disable zoom on double click
      pinch={{ disabled: true }} // optional: disable pinch zoom
      wheel={{ disabled: true }} // optional: disable wheel zoom
    >
      <TransformComponent
        wrapperStyle={{
          width: "100vw",
          height: "100dvh",
          overflow: "hidden",
          background: "red",
        }}
      >
        <div
          style={{
            width: `${DIV_WIDTH}px`,
            height: `${DIV_HEIGHT}px`,
            position: "relative",
            backgroundColor: "blue",
          }}
        >
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default InteractiveCanvas;
