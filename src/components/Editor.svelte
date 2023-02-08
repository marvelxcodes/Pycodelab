<script lang="ts">
   import Line from "@/components/Line.svelte";
   let data = [{
      index: 1,
      text: ""
   }];

   onMount(() => {
      const input = document.querySelectorAll(`input`)
      input.forEach((event) => {
         event.addEventListener("")
      })
   })
</script>

<section class="w-full h-full pt-16">
   {#each data as line}
      <Line line={line} />
   {/each}
</section>
