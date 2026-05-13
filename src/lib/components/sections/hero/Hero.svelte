<script lang="ts">
	import { headerHeight } from "$lib/store/store";
	import { cn } from "$lib/utils/utils";
</script>

<section
	style="padding-top: {$headerHeight}px"
	class="section-x-p h-screen w-full"
>
	<div
		style="height: calc(100vh - {$headerHeight}px)"
		class="section-b-p w-full"
	>
		<div class="grid h-full grid-cols-4 text-white">
			<div class="col-span-1 flex items-end">
				<p>
					Fullstack developer with an interest in design, user
					experience, accesible websites and creative
					development.
				</p>
			</div>
			<div
				class={cn(
					"flex items-end justify-end",
					"col-span-1 col-start-4 "
				)}
			>
				<p>Some placerholder text</p>
			</div>
		</div>
	</div>
</section>
