import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver, configure } from 'vee-validate';
import { email, required, confirmed } from "vee-validate/dist/rules";

extend('email', email);
extend('required', {
  ...required,
  message: "{_field_} is required"
});
extend('confirmed', {
  ...confirmed,
  message: "{_field_} field confirmation does not match"
});

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
