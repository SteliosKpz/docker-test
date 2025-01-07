
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <angular-button label="This is an angular button running in vue!"     ref="myComponent"></angular-button>
    <p>{{ count }}</p>
   
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>


<script  lang="ts">
export default {

  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    const myComponent :any= this.$refs.myComponent;
    myComponent.addEventListener('buttonClicked', this.handleEvent);
  },

  beforeUnmount() {
    const myComponent:any = this.$refs.myComponent;
    myComponent.removeEventListener('buttonClicked', this.handleEvent);
  },
  
  methods: {
    handleEvent(event:any) {
      console.log('Event received:', event);
      this.count+=1;
    },
  },
};
</script>
