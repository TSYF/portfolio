<template>
	<article class="article">
		<p class="article__text">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
			illum iusto accusamus cupiditate accusantium aperiam. Aliquid,
			accusamus beatae! Sint fuga sequi natus! Reprehenderit
			necessitatibus dolorem officiis delectus, atque minima consectetur
			nisi et nam odit excepturi aspernatur distinctio aliquid. Voluptatem
			deserunt repudiandae pariatur. Facere aliquam neque, obcaecati non
			tempora sapiente distinctio.
		</p>
		<div class="img"></div>
	</article>
</template>

<script setup></script>

<style lang="scss" scoped>
	.img {
		height: 500px;
		width: 500px;
		background-color: gray;
	}

	.article {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 100vh;

		&__text {
			max-width: 50%;
			color: azure;
			line-height: 1.6;
		}
	}
</style>
