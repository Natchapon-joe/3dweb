import React from "react";

export default function Diamond({ width = -400, height = -300 }) {
  return (
    <svg
      height="400px"
      width="400px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-400 -400 800 800"
      xmlSpace="preserve"
      className="border-[4px] border-rose-600"
    >
      <defs>
        <pattern id="bgImage" x="0" y="0" width="1" height="1">
          <image xlinkHref="/apps.jpg" x="0" y="0" />
        </pattern>
      </defs>
      <polygon
        points={`0,${width} ${height},0 0,400 300,0`}
        fill="url(#bgImage)"
        className="hover:opacity-100 opacity-20"
      />
    </svg>
  );
}
