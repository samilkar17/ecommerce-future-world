"use client";

import { useChat } from "ai/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChatHeader from "./chat-header";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";

export default function Chat(props: { agent: string }) {
  const { messages, input, handleInputChange, handleSubmit,isLoading } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "system",
        content: props.agent,
      },
    ],
  });

  return (
  
      <Accordion
        type="single"
        collapsible
        className=" text-black"
      >
        <AccordionItem value="item-1">
          <div className="fixed right-8 w-80 bottom-8 bg-white rounded-md overflow-hidden">
            <div className="w-full h-full flex flex-col">
              <AccordionTrigger className="px-6 border-b border-zinc-300">
                <ChatHeader />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col h-80">
                  <ChatMessages className="px-2 py-3 flex-1" messages={messages}/>
                  <ChatInput
                    className="px-4"
                    inputValue={input}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    isLoading={isLoading}
                  />
                </div>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    
  );
}
