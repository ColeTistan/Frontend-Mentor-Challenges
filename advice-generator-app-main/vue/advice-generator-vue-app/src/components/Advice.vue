<template>
  <div class="card">
    <p class="card-title">Advice #{{ advice.id }}</p>
    <p class="card-quote">
      {{ advice.advice }}
    </p>
    <img
      class="card-divider"
      src="../assets/images/pattern-divider-desktop.svg"
      alt="divider"
    />
    <button class="submit-btn" type="submit" @click="getAdviceData">
      <img src="../assets/images/icon-dice.svg" alt="dice" />
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      advice: {
        id: "1",
        advice:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo deleniti aspernatur, ea nulla, a perferendis fugiat iusto libero, porro beatae natus dolorem! Sit asperiores eligendi necessitatibus, blanditiis voluptate molestiae.",
      },
    };
  },

  methods: {
    getAdviceData() {
      axios.get("https://api.adviceslip.com/advice").then((res) => {
        let adviceData = res.data;
        this.advice = {
          id: adviceData.slip.id,
          advice: adviceData.slip.advice,
        };
        console.log(this.advice);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: $dark-grayish-blue;
  border-radius: 1rem;
  width: 43rem;
  padding: 3rem;

  .card-title {
    font-size: $default-font-size - 2px;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $neon-green;
  }

  .card-quote {
    margin: 25px 0;
    font-size: $quote-font-size;
  }

  .card-divider {
    margin: 20px 0 50px;
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .card {
    .card-divider {
      margin: 10px 0 30px;
    }
  }
}
</style>
