const createStore = Framework7.createStore;
const store = createStore({
  state: {
    schedules: [], // スケジュール一覧
    selectedDate: null, // 選択された日付
  },
  getters: {
    schedules({ state }) {
      return state.schedules;
    },
    selectedDate({ state }) {
      return state.selectedDate;
    },
  },
  actions: {
    // スケジュール一覧をセット
    addSchedules({ state }, schedules) {
      state.schedules = schedules;
    },
    // 選択された日付をセット
    setDate({ state }, date) {
      state.selectedDate = date;
    },
  },
})

