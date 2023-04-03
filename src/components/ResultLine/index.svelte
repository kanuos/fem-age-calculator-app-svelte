<!-- ResultLine/index.tsx-->
<script lang="ts">
  import type { PeriodType } from "../../ts-support";

  export let value: number;
  export let period: PeriodType;
</script>

<div
  class="flex items-center text-4xl sm:text-5xl md:text-6xl italic font-extrabold gap-x-3"
>
  {#if isNaN(value) || value === null}
    <strong class="text-primary-1"> -- </strong>
  {:else}
    <strong class="text-primary-1">
      {value.toString().padStart(2, "0")}
    </strong>
  {/if}
  <span class="text-neutral-5">
    {period}s
  </span>
</div>
