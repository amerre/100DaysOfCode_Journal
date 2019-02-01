import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      "01": {
        active: true,
        title: "Learning to Sass",
        date: "Day 45 - June 13, 2005",
        whatIDid:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum.",
        thoughts:
          "Lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem."
      },
      "02": {
        active: false,
        title: "Learning to talk",
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
