const app = Vue.createApp({
  data() {
    return {
      styleClass: "",
      showValue: true,
      colorValue: "red",
    };
  },
  computed: {
    style() {
      if (this.styleClass === "user1") {
        return "user1";
      } else {
        return "user2";
      }
    },
    color() {
      return "color:" + this.colorValue;
    },
  },
  methods: {
    isShow() {
      console.log(this.showValue);
      this.showValue = !this.showValue;
    },
  },
});

app.mount("#assignment");
function style(value) {
  console.log(value);
}
