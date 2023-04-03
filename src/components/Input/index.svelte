<script lang="ts">
  import type { PeriodType } from "../../ts-support";

  export let type: PeriodType;
  export let value: number | null = null;
  export let errorMsg: string = "";

  $: placeholder = type === "day" ? "DD" : type === "month" ? "MM" : "YYYY";
  $: value;
</script>

<div class="flex flex-col items-start justify-center w-full text-xs">
  <label
    for={type}
    class:text-primary-2={errorMsg.length > 0}
    class="uppercase text-xs md:text-base font-normal text-neutral-4 tracking-widest"
  >
    <small>
      <small>
        {type}
      </small>
    </small>
  </label>
  <input
    id={type}
    type="number"
    bind:value
    {placeholder}
    class:border-primary-2={errorMsg.length > 0}
    class:border-neutral-3={value}
    class="border mt-1 border-neutral-2 w-full rounded-md p-3 transition-all focus:border-neutral-4 text-neutral-5 focus:outline-none outline-none focus-visible:outline-none text-base md:text-lg"
  />
  <p class="text-sm text-primary-2 italic opacity-75 leading-3">
    <small>
      <small>
        {errorMsg}
      </small>
    </small>
  </p>
</div>
