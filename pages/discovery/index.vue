<template>
	<div>
		<TheBanner />
		<div class="mt-10">
			<CardHomeSlider label="Venue" :offsetBefore="80" />
			<CardHomeSlider label="Dress" :offsetBefore="80" />
			<CardHomeSlider label="Photography" :offsetBefore="80" />
		</div>
	</div>
</template>

<script>
export default {
  // layout: "mobile",
  name: "PageStore"
};
</script>
