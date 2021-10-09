<script lang="ts">
	import { page } from '$app/stores';

</script>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">
			T
		</a>
	</div>
	<div class="corner">
		Social Links
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	a:hover {
		color: var(--accent-color);
	}
</style>
