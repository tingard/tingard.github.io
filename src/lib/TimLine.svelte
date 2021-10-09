<script>
    import marked from 'marked';
    import fs from 'fs';
    import fm from 'front-matter';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    export let delay = 50;
    export let duration = 500;

    let ready = false;
    let posts = [1,2,3,4,5];
    // Attempt to read these from the /src/lib/posts folder
    // let posts = fs.readdirSync('$lib/posts').map(postFilename => {
    //     const postContent = fs.readFileSync(`$lib/posts${postFilename}`, {
    //         encoding: 'utf8'
    //     });
    //     const postFrontMatter = fm(postContent);
    //     return {
    //         title: postFrontMatter.attributes.title,
    //         slug: postFrontMatter.attributes.slug,
    //         html: marked(postFrontMatter.body)
    //     }
    // });
    onMount(() => {
        ready = true
    });
</script>

<div class="md:grid md:grid-cols-2 lg:grid-cols-3 min-w-screen justify-left">
    <!-- Example post entry - to be broken out into a component -->
    {#if ready}
        {#each posts as i, post}
            <a sveltekit:prefetch href="/" class="flex-1 md:min-w-1/3 max-w-full min-h-sm">
                <div
                    class="m-4 bg-gradient-to-b from-background to-backgroundLighter hover:bg-blue-900 rounded-xl px-4 py-8 flex flex-column space-x-4 shadow-lg"
                    in:fly="{{ y: 50, duration: duration, delay: i * delay }}"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/11770176?v=4"
                        alt="Tim Lingard, smiling at the camera while wearing a blue polo shirt"
                        class="w-16 h-16 rounded-full self-center"
                    />
                    <div>
                        <h2 class="text-2xl text-gray-200">Post Title {i}</h2>
                        <p class="text-xs text-gray-500">26th October</p>
                        <p class="text-sm text-gray-300">A really cool and professional project to do with AI, blockchain and stakeholder management.</p>
                    </div>
                </div>
            </a>
        {/each}
    {/if}
</div>