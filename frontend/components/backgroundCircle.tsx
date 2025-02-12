import React from "react";

interface CircleProps {
  size: string;
  top: string;
  left?: string;
  right?: string;
}

const Circle: React.FC<CircleProps> = ({ size, top, left, right }) => {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: size,
        height: size,
        top: top,
        left: left,
        right: right,
        filter: "blur(60px)",
        background:
          "radial-gradient(circle, rgba(31, 255, 26, 1) 0%, rgba(31, 255, 26, 0.4) 100%)",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Circle;
