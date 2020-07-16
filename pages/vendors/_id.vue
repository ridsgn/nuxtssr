<template>
  <div>
    <v-button :onClick="clicked">
      Sign
    </v-button>
    <v-card hasShadow class="mt-20"></v-card>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton.vue";
import TheCard from "@/components/TheCard.vue";

export default {
  components: {
    "v-button": TheButton,
    "v-card": TheCard
  },
  methods: {
    clicked() {
      console.log("Button clicked");
    }
  }
};
</script>
