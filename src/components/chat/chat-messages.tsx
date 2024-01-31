"use client";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface Message {
  id: string;
  content: string;
  role: string;
}

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {
  messages?: Message[];
}

export default function ChatMessages({
  className,
  messages = [],
  ...props
}: ChatMessagesProps) {
  const inverseMessages = [...messages].reverse();
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
        className
      )}
    >
      <div className="flex-1 flex-row" />
      {inverseMessages
        .filter((message) => message.role !== "system")
        .map((message) => (
          <div key={message.id} className="chat-message">
            <div
              className={cn("flex items-end", {
                "justify-end": message.role === "user",
              })}
            >
              <div
                className={cn(
                  "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                  {
                    "order-1 items-end": message.role === "user",
                    "order-2 items-start": message.role !== "user",
                  }
                )}
              >
                <p
                  className={cn("px-4 py-2 rounded-lg", {
                    "bg-indigo-500 text-white": message.role === "user",
                    "bg-gray-200 text-gray-900": message.role !== "user",
                  })}
                >
                  {message.content}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
