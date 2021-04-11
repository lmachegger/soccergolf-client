<template>
  <div class="home">
    <div class="inputFields">
      <input v-model="roomName" placeholder="room" />
      <input v-model="playerName" placeholder="name" />
    </div>
    <div class="joinButton">
      <button type="button" v-on:click="join">Join</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      roomName: "",
      playerName: "",
    };
  },
  methods: {
    join: function () {
      console.log(
        `join: roomName=${this.roomName} playerName=${this.playerName}`
      );
      this.$router.push({
        name: "game",
        params: { roomName: this.roomName, playerName: this.playerName },
      });
    },
  },
};
</script>
