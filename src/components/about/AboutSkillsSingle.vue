<script>
export default {
	props: ['skills'],
};
</script>

<template>
	<div>
		<img
			:src="skills.img"
			:alt="skills.title"
			class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
