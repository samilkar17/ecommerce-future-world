import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <div className="inline-block relative w-80 h-80">
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-0.4s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-0.8s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-0.4s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-0.8s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-1.2s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-0.8s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-1.2s" }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full bg-white animate-loading"
          style={{ animationDelay: "-1.6s" }}
        ></div>
      </div>
    </div>
  );
}
