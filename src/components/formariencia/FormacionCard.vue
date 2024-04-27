<!-- formacionCard.vue -->
<template>
    <div class="formacion-card">
      <h3>{{ formacion.title }}</h3>
      <p>{{ formacion.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      formacion: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .formacion-card{
    width: 32rem;
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem var(--moradooscuro);
    padding: 1rem;
    background-color: var(--blanco);
    box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
    transition: 250ms ease;
  }
  .formacion-card:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
    border: solid 0.15rem var(--moradomuyoscuro);
  }

  h3 {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
  }

  p {
    background-color: var(--blanco);
  }

  @media screen and (max-width: 552px) {
    .formacion-card{
    width: 15rem;
    margin: 0.5rem;

  }

}
  </style>
  