<!-- Form svelte -->
<script lang="ts">
  import { onDestroy, createEventDispatcher } from "svelte";
  import Input from "../Input/index.svelte";
  import icon from "/src/assets/icon-arrow.svg";
  import { ageValidator, isDateInPast, isValidDate } from "../../utils";
  import type { IAge, IAgeError, PeriodType } from "../../ts-support";

  // props
  export let age: IAge, errorData: IAgeError;
  $: errorData;

  let timeoutVariable: ReturnType<typeof setTimeout>;

  const dispatch = createEventDispatcher();

  // callbacks

  function resetErrors() {
    errorData = { day: "", month: "", year: "" };
  }

  function handleSubmit() {
    try {
      const { error } = ageValidator.validate(age, {
        abortEarly: false,
      });

      // validation error
      if (error) {
        error.details.forEach(({ message, path }) => {
          errorData[path[0] as unknown as PeriodType] = message;
        });
        timeoutVariable = setTimeout(resetErrors, 2500);
        return;
      }

      // reset the previous error messages
      resetErrors();

      // check if the date is valid or not

      if (!isValidDate(age)) {
        errorData = { ...errorData, day: "Must be a valid date" };
        timeoutVariable = setTimeout(resetErrors, 2500);
        return;
      }

      if (!isDateInPast(age)) {
        errorData = { ...errorData, day: "Must be in the past" };
        timeoutVariable = setTimeout(resetErrors, 2500);
        return;
      }

      // valid data
      dispatch("calculate-age");
    } catch (e) {
      errorData = { ...errorData, day: "Must be a valid date :)" };
    }
  }

  onDestroy(() => {
    clearTimeout(timeoutVariable);
  });
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="w-full grid grid-rows-2 gap-y-6 md:gap-y-2"
>
  <div class="flex items-start justify-between w-full gap-4 md:max-w-sm">
    <Input type="day" bind:value={age.day} errorMsg={errorData.day} />
    <Input type="month" bind:value={age.month} errorMsg={errorData.month} />
    <Input type="year" bind:value={age.year} errorMsg={errorData.year} />
  </div>

  <div
    class="relative h-fit grid place-items-center md:place-items-end w-full after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:z-0 after:h-px after:bg-neutral-2"
  >
    <button
      type="submit"
      class="bg-primary-1 hover:bg-opacity-70 transition-all aspect-square rounded-full p-1 inline-grid place-items-center relative z-10"
    >
      <span class="sr-only">calculate</span>
      <img src={icon} alt="" class="block h-3/5" />
    </button>
  </div>
</form>
