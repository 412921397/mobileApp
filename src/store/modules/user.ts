import { defineStore } from "pinia";

export function setupUser() {
  const userStore = useUserStore();
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "王小波",
    count: 1,
    userName: "hanmeimei"
  }),
  getters: {},
  actions: {
    mulment() {
      return (this.count = this.count * 2);
    }
  }
});
