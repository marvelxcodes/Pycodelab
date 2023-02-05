<script lang="ts">
	import Header from "@/components/Header.svelte";
   import Interactive from "@/components/Interactive.svelte";
   import Script from "@/components/Script.svelte";

	let isScriptMode = true;
	function invertMode() {
		isScriptMode = !isScriptMode;
	}
</script>

<main>
	<Header
      invertMode={invertMode}
      isScriptMode={isScriptMode}
   />
   
	{#if isScriptMode}
      <Script/>
   {:else}
      <Interactive />
   {/if}
</main>

<style lang="postcss">
</style>
