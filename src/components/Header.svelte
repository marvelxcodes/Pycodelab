<script>

</script>

<header>
   
</header>

<style>
	@keyframes carnet-blink {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes text {
		0% {
			width: 0%;
		}
		30% {
			width: 100%;
		}
	}

	.typewriting-effect {
		position: relative;
		animation: text 5s infinite;
		overflow-x: hidden;
	}

	.typewriting-effect::after {
		content: "|";
		width: 1px;
		height: 100%;
		animation: carnet-blink 1s infinite;
	}
</style>
