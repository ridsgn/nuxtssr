<template>
  <div class="my-28">
    <b-steps
      v-model="activeStep"
      :animated="isAnimated"
      :rounded="isRounded"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      :label-position="labelPosition"
      :mobile-mode="mobileMode"
    >
      <b-step-item step="1" label="Shipping" :clickable="isStepsClickable">
        <ShippingComponent></ShippingComponent>
      </b-step-item>

      <b-step-item
        step="2"
        label="Review"
        :clickable="isStepsClickable"
        :type="{'is-success': isProfileSuccess}"
      >
        <h1 class="title has-text-centered">Review</h1>Lorem ipsum dolor sit amet.
      </b-step-item>

      <b-step-item
        step="3"
        label="Finish"
        :clickable="isStepsClickable"
        disabled
      >
        <h1 class="title has-text-centered">Finish</h1>Lorem ipsum dolor sit amet.
        <div class="buttons">
          <b-button type="is-primary" loading>Expanded</b-button>
        </div>
      </b-step-item>

      <template v-if="customNavigation" slot="navigation" slot-scope="{previous, next}">
        <b-button
          outlined
          type="is-danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
        >Previous</b-button>
        <b-button
          outlined
          type="is-success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          @click.prevent="next.action"
        >Submit</b-button>
      </template>
    </b-steps>
  </div>
</template>

<script>
// import { Steps, Buttons } from "buefy";

export default {
  data() {
    return {
      activeStep: 0,

      showSocial: false,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: false,
      isProfileSuccess: false,

      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      labelPosition: "bottom",
      mobileMode: "compact",
    };
  },
};
</script>