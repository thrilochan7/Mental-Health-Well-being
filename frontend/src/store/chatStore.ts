import { create } from 'zustand';

interface ChatState {
  isOpen: boolean;
  initialMessage: string;
  setIsOpen: (isOpen: boolean) => void;
  setInitialMessage: (message: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  initialMessage: '',
  setIsOpen: (isOpen) => set({ isOpen }),
  setInitialMessage: (initialMessage) => set({ initialMessage }),
}));