import { create } from 'zustand';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  image?: string;
}

interface NewsState {
  news: NewsItem[];
  setNews: (news: NewsItem[]) => void;
  addNews: (item: NewsItem) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  setNews: (news) => set({ news }),
  addNews: (item) => set((state) => ({ news: [item, ...state.news] })),
}));
