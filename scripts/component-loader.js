
new Vue({
    el: '#my-app',
    components: {
      'sluzby': httpVueLoader('.components/sluzby.vue'),
      'onas-component': httpVueLoader(''),
    }
  });
