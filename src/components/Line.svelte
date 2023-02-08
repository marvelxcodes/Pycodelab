<script lang="ts">
   import { onMount } from "svelte";
   export let line:{
      index: number
      text: string
   };

</script>

<div class="flex">
   <div class="w-14 flex justify-center py-1 h-8 text-white bg-gray-500 border-b border-r">{line.index}</div>
   <input id={line.index.toString()} bind:value={line.text} class="w-full text-white caret-white bg-black border-[#75757580] border-b outline-none px-3" type="text" pattern="">
</div>

<style lang="scss">
   ::selection {
      background: rgba(254,129,255,0.7);
   }
</style>