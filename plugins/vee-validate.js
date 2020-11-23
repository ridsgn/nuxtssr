import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver, configure } from 'vee-validate';
import { email, required, confirmed, numeric } from "vee-validate/dist/rules";

extend('email', email);
extend('required', {
  ...required,
  message: "{_field_} is required"
});
extend('numeric', {
  ...numeric,
  message: "{_field_} is numeric only"
});
extend('confirmed', {
  ...confirmed,
  message: "{_field_} field confirmation does not match"
});

// Add a rule.
extend('positive', {
  validate: value => value >= 0,
  message: 'Value must be positive'
});

// extend('positive', {
//   validate: value => value >= 0,
//   message: 'Value must be positive'
// });

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
