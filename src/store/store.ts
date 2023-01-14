import create from "zustand";
import { devtools } from "zustand/middleware";

interface Item {
  src: string;
  desc: string;
}

interface UseStore {
  list: Item[];
}

const store = () => ({
  list: [{ src: "이미지 경로", desc: "설명" }],
});

export const useStore = create<UseStore>()(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);
