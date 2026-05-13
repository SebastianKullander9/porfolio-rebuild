<script lang="ts">
	import PrimaryButton from "$lib/components/ui/buttons/PrimaryButton.svelte";
	import AsteriskIcon from "$lib/icons/AsteriskIcon.svelte";
</script>

<section class="section-style section-x-p section-y-p z-40 text-white">
	<div class="gap-extralarge grid h-full w-full grid-cols-12">
		<div
			class="gap-extralarge col-span-12 flex flex-col justify-end lg:col-span-6 xl:justify-start"
		>
			<div
				class="text-large flex flex-row items-center gap-sm font-semibold tracking-wide"
			>
				<AsteriskIcon size={22} />
				<h1>About</h1>
			</div>
			<div>
				<p
					class="text-4xl leading-tight font-bold tracking-tight xl:text-6xl"
				>
					I'm a full-stack developer with a soft spot for the
					frontend. I care about the parts people actually see,
					the motion, the details, the feeling a site leaves
					behind.
				</p>
			</div>
		</div>
		<div
			class="gap-extralarge col-span-12 flex flex-col items-end justify-start lg:col-span-6 xl:justify-end"
		>
			<p
				class="text-large max-w-prose leading-relaxed tracking-normal"
			>
				From stylish sites to business platforms and data
				dashboards, I handle the full picture. Every project gets
				the same attention — clean code, thoughtful interfaces, and
				experiences that work for everyone. Curious what I work
				with? See my skills
			</p>
			<PrimaryButton text="View More" />
		</div>
	</div>
</section>
