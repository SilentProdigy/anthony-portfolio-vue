<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am Anthony Mark Lopez, a website developer from Legazpi City, Albay, Philippines with over 6 years of experience in the industry.',
				},
				{
					id: 2,
					bio:
						'I handled multiple clients from different country such as Canada, Australia, US, Hawaii and Portugal. Most of my projects with them are built on Wordpress and Shopify. But I also have experience in Laravel Framework, custom plugin development on wordpress and frontend tech such as HTML, CSS, Vue JS and React JS. For over 6 years, aside from working for agencies and clients, I sharpen my skills by building web applications such as POS system and Bidding Platform. I am also knowledgeable using design tools such as Photoshop and Figma. I am always willing to learn more and keep on sharpening my skillset and share it with people or clients that would help them successful.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
