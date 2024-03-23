<template>
    <div>
        <h1 class="titulo">Bienvenido a mi Portfolio</h1>
        <p>Cotillea todo lo que quieras...</p>
        <div class="yo">
            <img src="/aintzane.png" alt="Aintzane Goffard">
            <h2>Aintzane Goffard</h2>
            <h3>Programadora Web</h3>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

img{
    max-width: 30rem;
    border-radius: 0.5rem;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.yo {
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem var(--moradooscuro);
    padding: 1rem;
    background-color: var(--blanco);
    box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
    transition: 250ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .yo:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
    border: solid 0.15rem var(--moradomuyoscuro);
  }
  h2 {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
  }

  h3 {
    background-color: var(--blanco);
  }
</style>