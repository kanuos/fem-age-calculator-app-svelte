<script lang="ts">
  import Result from "./components/Result/index.svelte";
  import Form from "./components/Form/index.svelte";
  import type { IAge, IAgeError } from "./ts-support";
  import { getAge } from "./utils";

  // state types assigned
  let ageInput: IAge, age: IAge, error: IAgeError;

  // reactive state variables
  $: ageInput = {
    day: null,
    month: null,
    year: null,
  };

  $: age = { day: null, month: null, year: null };

  $: error = { day: "", month: "", year: "" };

  // callbacks
  function calculateAge() {
    age = getAge(ageInput);
  }
</script>

<main class="bg-neutral-2 min-h-screen grid place-items-center p-6">
  <h1 class="hidden">Age calculator app</h1>

  <section
    class="bg-neutral-1 px-6 py-10 w-full rounded-lg rounded-br-[2.5rem] md:rounded-br-[6rem] drop-shadow-sm max-w-lg min-w-[17rem]"
  >
    <Form
      bind:age={ageInput}
      bind:errorData={error}
      on:calculate-age={calculateAge}
    />
    {#key age}
      <Result {age} />
    {/key}
  </section>
</main>
