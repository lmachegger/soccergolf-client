<template>
  <div id="app">
    <h3>{{ playerName }}</h3>
    <h3>{{ roomName }}</h3>
    <h1>{{ message }}</h1>
    <p>{{ gameDataMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "appBackup",
  props: {
    playerName: String,
    roomName: String,
  },
  data() {
    return {
      message: "",
      gameDataMessage: "",
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
        sender: this.playerName,
        message: msg,
        room: this.roomName,
      });
    },
    joinRoom: function (room) {
      console.log("joinRoom: " + room);
      this.$socket.emit("joinRoom", room);
    },
  },
  mounted() {
    // it's working !!!!!!!!!
    console.log("created");
    this.sockets.subscribe("msgToClient", (msg) => {
      this.onMessage(msg);
    });

    this.sockets.subscribe("gameDataToClient", (msg) => {
      this.onGameData(msg);
    });

    this.joinRoom({
      player: this.playerName,
      room: this.roomName,
    });

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
