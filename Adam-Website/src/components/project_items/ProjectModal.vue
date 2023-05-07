<script setup>

</script>

<template>
	<div id='myCarousel' class='carousel slide col-sm-6' data-ride='carousel' data-interval='false'>
		<!--Indicators-->
		<ol id='projCarouselInds' class='carousel-indicators'>
			<li data-target='#myCarousel' data-slide-to='0' class='active'></li>
		</ol>
		<!--Wrapper for slides-->
		<div id='projMedia' class='carousel-inner text-center' role='listbox'>
			<div class='item active'></div>
		</div>
		<!--Left and right controls-->
		<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
			<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
			<span class='sr-only'>Previous</span>
		</a>
		<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
			<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
			<span class='sr-only'>Next</span>
		</a>
	</div>
	<div id='projDetails' class='col-sm-6 slide'></div>
</template>