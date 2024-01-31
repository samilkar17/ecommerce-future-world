"use client";
import { cn } from "@/lib/utils";
import { CornerDownLeft, Loader2 } from "lucide-react";
import React, {
  ChangeEvent,
  FormEvent,
  HTMLAttributes,
  KeyboardEvent,
} from "react";
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {
  inputValue?: string;
  isLoading?: boolean;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ChatInput({
  inputValue,
  isLoading,
  handleSubmit,
  handleInputChange,
  className,
  ...props
}: ChatInputProps) {
  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // Si se presiona la tecla Enter y no se está utilizando Shift, enviar el formulario
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Evita que se genere una nueva línea en el textarea
      handleSubmit?.(event as any); // Llama a la función handleSubmit si está definida
    }
  };

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <form className="flex space-x-4" onSubmit={handleSubmit}>
          <TextareaAutosize
            rows={2}
            maxRows={4}
            autoFocus
            placeholder="Write a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
              {isLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <CornerDownLeft className="w-3 h-3" />
              )}
            </kbd>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
            aria-hidden="true"
          />
        </form>
      </div>
    </div>
  );
}
