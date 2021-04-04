<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onMessage: function (msg) {
      console.log("onMessage: " + msg);
      this.message = msg;
    },
    sendMessage: function (msg) {
      console.log("sendMessage: " + msg);
      this.$socket.emit("msgToServer", msg);
    },
  },
  created() {
    // it's working !!!!!!!!!
    this.sendMessage("Hello World from wss");

    this.sockets.subscribe("msgToClient", (msg) => {
      this.onMessage(msg);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
