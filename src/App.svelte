<script lang="ts">
  let count = $state(0)
</script>

<main>
  <div class="content">
    <span>{count}</span>
    <button class="w-20 mx-auto" onclick={() => (count += 1)}>Increment</button>
    <h1>Rsbuild with Svelte</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</main>

<style>
  .content {
    display: flex;
    min-height: 100vh;
    line-height: 1.1;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }

  .content h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
</style>
