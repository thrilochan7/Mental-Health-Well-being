import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";
import { MayaAvatar } from "@/components/MayaAvatar";
import { useChatStore } from "@/store/chatStore";

export const ChatWidget = () => {
  const { isOpen, setIsOpen, initialMessage, setInitialMessage } = useChatStore();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialMessage && !message) {
      setMessage(initialMessage);
      setInitialMessage("");
    }
  }, [initialMessage, setInitialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // TODO: Implement chat functionality with Maya AI
    setMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col shadow-lg">
          <div className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center gap-2">
              <MayaAvatar size="sm" />
              <div>
                <h3 className="font-medium text-sm">Chat with Maya</h3>
                <p className="text-xs text-muted-foreground">AI Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            {/* Chat messages will go here */}
            <div className="text-sm text-muted-foreground text-center">
              How can I help you today?
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};