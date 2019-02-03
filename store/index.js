import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      "01": {
        active: true,
        title: "[1] Doing stuff ...",
        date: "Day 1 - June 13, 2005",
        whatIDid:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum.",
        thoughts:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem."
      },
      "02": {
        active: false,
        title: "[2] Learning things ...",
        date: "Day 2 - March 23, 2001",
        whatIDid:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum.",
        thoughts:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem."
      }
    }
  });
};

export default createStore;
