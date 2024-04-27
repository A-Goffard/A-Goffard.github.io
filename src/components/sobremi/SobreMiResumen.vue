<template>
    <div class="texto">
        <p>
            Soy una persona creativa a la que le gustan los retos y no paro de aprender cosas nuevas y desarrollar nuevos proyectos.
        </p>
        <p>
            Tengo experiencia en formación, divulgación, diseño de cursos y material didáctico, rutas, experiencias y talleres entre otros.
        </p>
        <p>
            Me he formado en varios ámbitos como geología, medioambiente, cambio climático, programación web, psicología y formación. 
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.texto {
    max-width: 30rem;
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem var(--rosaclaro);
    padding: 1rem;
    background-color: var(--blanco);
/*     box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton); */
    transition: 250ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
/*   .texto:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
    border: solid 0.15rem var(--moradomuyoscuro);
  } */
  p {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
  }
</style>