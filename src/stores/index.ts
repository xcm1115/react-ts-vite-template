// Dependencies
import { create } from 'zustand';

type ModeState = {
  currentMode: 'light' | 'dark';
  switchMode: () => void;
};

const useModeStore = create<ModeState>((set) => ({
  currentMode: 'light',
  switchMode: () => {
    const body = document.body;

    set((state) => {
      if (state.currentMode === 'light') {
        body.setAttribute('theme-mode', 'dark');
        return { currentMode: 'dark' };
      } else {
        if (body.hasAttribute('theme-mode')) {
          body.removeAttribute('theme-mode');
        }
        return { currentMode: 'light' };
      }
    });
  },
}));

export { useModeStore };
