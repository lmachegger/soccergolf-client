<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>{{ gameDataMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "appBackup",
  data() {
    return {
      message: "",
      gameDataMessage: "",
      username: "Lukas",
      room: "testroom",
    };
  },
  methods: {
    onMessage: function (msg) {
      console.log("onMessage: " + msg);
      this.message = msg;
    },
    onGameData: function (msg) {
      console.log("onGameDataMessage: " + msg);
      this.gameDataMessage = msg;
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
    console.log("created");
    this.sockets.subscribe("msgToClient", (msg) => {
      this.onMessage(msg);
    });

    this.sockets.subscribe("gameDataToClient", (msg) => {
      this.onGameData(msg);
    });

    this.joinRoom(this.room);

    this.sendMessage("Hello World from wss");
    console.log("created end");
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
