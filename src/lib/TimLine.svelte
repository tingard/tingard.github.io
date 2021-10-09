<script>

</script>

<div class="md:flex flex-column flex-wrap min-w-screen justify-left">
    <!-- Example post entry - to be broken out into a component -->
    {#each Array(4) as _, i}
        <a sveltekit:prefetch href="/" class="flex-1 md:min-w-1/3 max-w-full min-h-sm">
            <div class="m-4 bg-white hover:bg-blue-100 rounded-xl px-4 py-8 flex flex-column space-x-4">
                <img
                    src="https://avatars.githubusercontent.com/u/11770176?v=4"
                    alt="Tim Lingard, smiling at the camera while wearing a blue polo shirt"
                    class="w-16 h-16 rounded-full self-center"
                />
                <div>
                    <h2 class="text-2xl text-gray-500">Post Title</h2>
                    <p class="text-black">A really cool and professional project to do with AI, blockchain and stakeholder management.</p>
                </div>
            </div>
        </a>
    {/each}
</div>