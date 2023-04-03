<!-- ResultLine/index.tsx-->
<script lang="ts">
  import { onMount } from "svelte";
  import type { PeriodType } from "../../ts-support";

  export let value: number;
  export let period: PeriodType;
  let t: ReturnType<typeof setInterval>;

  let increaseBy = 1;

  $: startFrom = 0;
  $: value;
  $: t;

  onMount(() => {
    if (value) {
      t = setInterval(() => {
        if (startFrom < value) {
          startFrom += increaseBy;
        } else {
          clearInterval(t);
        }
      }, 50);
    }
  });
</script>

<div
  class="flex items-center text-4xl sm:text-5xl md:text-6xl italic font-extrabold gap-x-3"
>
  {#if isNaN(value) || value === null}
    <strong class="text-primary-1"> -- </strong>
  {:else}
    <strong class="text-primary-1">
      {startFrom.toString().padStart(2, "0")}
    </strong>
  {/if}
  <span class="text-neutral-5">
    {period}s
  </span>
</div>
