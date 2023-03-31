<script lang="ts">
  import Result from "./components/Result/index.svelte";
</script>

<main class="bg-neutral-2 min-h-screen grid place-items-center p-6">
  <h1 class="hidden">Age calculator app</h1>

  <section
    class="bg-neutral-1 p-6 w-full rounded-lg rounded-br-[2.5rem] md:rounded-br-[6rem] drop-shadow-sm max-w-lg"
  >
    <Result />
  </section>
</main>
