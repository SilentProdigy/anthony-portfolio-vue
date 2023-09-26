<script>
import AboutSkillsSingle from './AboutSkillsSingle.vue';

export default {
	components: {
		AboutSkillsSingle,
	},
	data: () => {
		return {
			skillsHeading: 'Here are some of my tech stack.',
			skills: [
				{
					id: 1,
					title: 'HTML',
					img: require('@/assets/images/brands/amazon_gray.png'),
				},
				{
					id: 2,
					title: 'CSS',
					img: require('@/assets/images/brands/sony_gray.png'),
				},
				{
					id: 3,
					title: 'JavaScript',
					img: require('@/assets/images/brands/adidas_gray.png'),
				},
				{
					id: 4,
					title: 'Laravel',
					img: require('@/assets/images/brands/fila_gray.png'),
				},
				{
					id: 5,
					title: 'PHP',
					img: require('@/assets/images/brands/nb_gray.png'),
				},
				{
					id: 6,
					title: 'MySQL',
					img: require('@/assets/images/brands/samsung_gray.png'),
				},
				{
					id: 7,
					title: 'Wordpress',
					img: require('@/assets/images/brands/canon_gray.png'),
				},
				{
					id: 7,
					title: 'Shopify',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
				{
					id: 8,
					title: 'Vue JS',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
				{
					id: 9,
					title: 'React',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
				{
					id: 10,
					title: 'Bootstrap',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
				{
					id: 11,
					title: 'Tailwind CSS',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
				{
					id: 12,
					title: 'Photoshop',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ skillsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutSkillsSingle
				v-for="skill in skills"
				:key="skill.id"
				:skill="skill"
			/>
		</div>
	</div>
</template>
