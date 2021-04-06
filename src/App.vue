<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      username: "Lukas",
      room: "testroom",
    };
  },
  methods: {
    onMessage: function (msg) {
      console.log("onMessage: " + msg);
      this.message = msg;
    },
    sendMessage: function (msg) {
      console.log("sendMessage: " + msg);
      this.$socket.emit("msgToServer", {
        sender: this.username,
        message: msg,
        room: this.room,
      });
    },
    joinRoom: function (room) {
      console.log("joinRoom: " + room);
      this.$socket.emit("joinRoom", room);
    },
  },
  created() {
    // it's working !!!!!!!!!

    this.sockets.subscribe("msgToClient", (msg) => {
      this.onMessage(msg);
    });

    this.joinRoom(this.room);

    this.sendMessage("Hello World from wss");
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
