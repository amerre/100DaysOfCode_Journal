export default {
  state() {
    return {
      /*
      "Template_01": {
        active: false,
        title: "Working on FCC curiculum",
        date: "Day XX - Month 00, 2019",
        whatIDid: "I've gone through many exercises on FreeCodeCamp.",
        thoughts: "I've recently started coding, and it's a great feeling when I finally solve an algorithm challenge after a lot of attempts and hours spent.",
        link: ""
      },
      "Template_02": {
        active: false,
        title: "Learning CSS Canvas",
        date: "Day XX - Month 00, 2019",
        whatIDid: "Fixed CSS, worked on canvas functionality for the app.",
        thoughts: " I really struggled with CSS, but, overall, I feel like I am slowly getting better at it. Canvas is still new for me, but I managed to figure out some basic functionality.",
        link: "http://calculator.fr"
      },
      */
      "01": {
        active: false,
        title: "Example 1",
        date: "Day 1 - February 01, 2019",
        whatIDid: "...",
        thoughts: "...",
        link: "http://adrienmerre.fr"
      }
      /*
      "02": {
        active: false,
        title: "",
        date: "Day 2 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      }
      "03": {
        active: false,
        title: "",
        date: "Day 3 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "04": {
        active: false,
        title: "",
        date: "Day 4 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "05": {
        active: false,
        title: "",
        date: "Day 5 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "06": {
        active: false,
        title: "",
        date: "Day 6 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "07": {
        active: false,
        title: "",
        date: "Day 7 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "08": {
        active: false,
        title: "",
        date: "Day 8 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "09": {
        active: false,
        title: "",
        date: "Day 9 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "010": {
        active: false,
        title: "",
        date: "Day 10 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "011": {
        active: false,
        title: "",
        date: "Day 11 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "012": {
        active: false,
        title: "",
        date: "Day 12 - Monthy 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "013": {
        active: false,
        title: "",
        date: "Day 13 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "014": {
        active: false,
        title: "",
        date: "Day 14 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "015": {
        active: false,
        title: "",
        date: "Day 15 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "016": {
        active: false,
        title: "",
        date: "Day 16 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "017": {
        active: false,
        title: "",
        date: "Day 17 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "018": {
        active: false,
        title: "",
        date: "Day 18 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "019": {
        active: false,
        title: "",
        date: "Day 19 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "020": {
        active: false,
        title: "",
        date: "Day 20 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "021": {
        active: false,
        title: "",
        date: "Day 21 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "022": {
        active: false,
        title: "",
        date: "Day 22 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "023": {
        active: false,
        title: "",
        date: "Day 23 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "024": {
        active: false,
        title: "",
        date: "Day 24 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "025": {
        active: false,
        title: "",
        date: "Day 25 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "026": {
        active: false,
        title: "",
        date: "Day 26 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "027": {
        active: false,
        title: "",
        date: "Day 27 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "028": {
        active: false,
        title: "",
        date: "Day 28 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "029": {
        active: false,
        title: "",
        date: "Day 29 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "030": {
        active: false,
        title: "",
        date: "Day 30 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "031": {
        active: false,
        title: "",
        date: "Day 31 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "032": {
        active: false,
        title: "",
        date: "Day 32 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "033": {
        active: false,
        title: "",
        date: "Day 33 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "034": {
        active: false,
        title: "",
        date: "Day 34 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "035": {
        active: false,
        title: "",
        date: "Day 35 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "036": {
        active: false,
        title: "",
        date: "Day 36 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "037": {
        active: false,
        title: "",
        date: "Day 37 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "038": {
        active: false,
        title: "",
        date: "Day 38 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "039": {
        active: false,
        title: "",
        date: "Day 39 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "040": {
        active: false,
        title: "",
        date: "Day 40 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "041": {
        active: false,
        title: "",
        date: "Day 41 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "042": {
        active: false,
        title: "",
        date: "Day 42 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "043": {
        active: false,
        title: "",
        date: "Day 43 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "044": {
        active: false,
        title: "",
        date: "Day 44 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "045": {
        active: false,
        title: "",
        date: "Day 45 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "046": {
        active: false,
        title: "",
        date: "Day 46 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "047": {
        active: false,
        title: "",
        date: "Day 47 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "048": {
        active: false,
        title: "",
        date: "Day 48 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "049": {
        active: false,
        title: "",
        date: "Day 49 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "050": {
        active: false,
        title: "",
        date: "Day 50 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "051": {
        active: false,
        title: "",
        date: "Day 51 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "052": {
        active: false,
        title: "",
        date: "Day 52 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "053": {
        active: false,
        title: "",
        date: "Day 53 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "054": {
        active: false,
        title: "",
        date: "Day 54 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "055": {
        active: false,
        title: "",
        date: "Day 55 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "056": {
        active: false,
        title: "",
        date: "Day 56 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "057": {
        active: false,
        title: "",
        date: "Day 57 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "058": {
        active: false,
        title: "",
        date: "Day 58 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "059": {
        active: false,
        title: "",
        date: "Day 59 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "060": {
        active: false,
        title: "",
        date: "Day 60 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "061": {
        active: false,
        title: "",
        date: "Day 61 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "062": {
        active: false,
        title: "",
        date: "Day 62 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "063": {
        active: false,
        title: "",
        date: "Day 63 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "064": {
        active: false,
        title: "",
        date: "Day 64 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "065": {
        active: false,
        title: "",
        date: "Day 65 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "066": {
        active: false,
        title: "",
        date: "Day 66 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "067": {
        active: false,
        title: "",
        date: "Day 67 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "068": {
        active: false,
        title: "",
        date: "Day 68 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "069": {
        active: false,
        title: "",
        date: "Day 69 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "070": {
        active: false,
        title: "",
        date: "Day 70 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "071": {
        active: false,
        title: "",
        date: "Day 71 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "072": {
        active: false,
        title: "",
        date: "Day 72 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "073": {
        active: false,
        title: "",
        date: "Day 73 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "074": {
        active: false,
        title: "",
        date: "Day 74 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "075": {
        active: false,
        title: "",
        date: "Day 75 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "076": {
        active: false,
        title: "",
        date: "Day 76 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "077": {
        active: false,
        title: "",
        date: "Day 77 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "078": {
        active: false,
        title: "",
        date: "Day 78 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "079": {
        active: false,
        title: "",
        date: "Day 79 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "080": {
        active: false,
        title: "",
        date: "Day 80 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "081": {
        active: false,
        title: "",
        date: "Day 81 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "082": {
        active: false,
        title: "",
        date: "Day 82 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "083": {
        active: false,
        title: "",
        date: "Day 83 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "084": {
        active: false,
        title: "",
        date: "Day 84 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "085": {
        active: false,
        title: "",
        date: "Day 85 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "086": {
        active: false,
        title: "",
        date: "Day 86 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "087": {
        active: false,
        title: "",
        date: "Day 87 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "088": {
        active: false,
        title: "",
        date: "Day 88 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "089": {
        active: false,
        title: "",
        date: "Day 89 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "090": {
        active: false,
        title: "",
        date: "Day 90 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "091": {
        active: false,
        title: "",
        date: "Day 91 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "092": {
        active: false,
        title: "",
        date: "Day 92 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "093": {
        active: false,
        title: "",
        date: "Day 93 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "094": {
        active: false,
        title: "",
        date: "Day 94 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "095": {
        active: false,
        title: "",
        date: "Day 95 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "096": {
        active: false,
        title: "",
        date: "Day 96 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "097": {
        active: false,
        title: "",
        date: "Day 97 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "098": {
        active: false,
        title: "",
        date: "Day 98 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "099": {
        active: false,
        title: "",
        date: "Day 99 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      },
      "0100": {
        active: false,
        title: "",
        date: "Day 100 - Month 00, 2019",
        whatIDid: "",
        thoughts: "",
        link: ""
      }
      */
    };
  }
};
