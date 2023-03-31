<!-- Result/index.svelte -->
<script lang="ts">
  import type { IAge } from "../../ts-support";
  import ResultLine from "../ResultLine/index.svelte";

  // props
  export let age: IAge = { day: NaN, month: NaN, year: NaN };
</script>

<h2 class="flex flex-col items-start justify-start gap-y-3">
  <ResultLine value={age.year} period="year" />
  <ResultLine value={age.month} period="month" />
  <ResultLine value={age.day} period="day" />
</h2>
