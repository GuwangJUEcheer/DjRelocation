<template>
	<div class="typeItem">
		<div class="container">
			<div class="itemTitle text-center">
				<h1>服务类型</h1>
				<span>Moving Service</span>
			</div>
			<div class="row">
				<div class="box" v-for="(service, index) in services" :key="index"
					:style="{ backgroundColor: service.color }">
					<div class="icon" :style="{ backgroundImage: `url(${service.icon})` }"></div>
					<h1>{{ service.title }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DjAllServices',
	data() {
		return {
			services: [
				{
					title: '小件搬家',
					icon: require('@/assets/images/icon01.svg'), // 替换为您的图标路径
					color: '#ea7719',
				},
				{
					title: '普通搬家',
					icon: require('@/assets/images/icon01.svg'),
					color: '#20c0a0',
				},
				{
					title: '长途搬家',
					icon: require('@/assets/images/icon01.svg'),
					color: '#4a90e2',
				},
				{
					title: '精品搬家',
					icon: require('@/assets/images/icon01.svg'),
					color: '#455e72',
				},
				{
					title: '收纳整理',
					icon: require('@/assets/images/icon01.svg'),
					color: '#455e72',
				},
				{
					title: '设备搬运',
					icon: require('@/assets/images/icon01.svg'),
					color: '#4a90e2',
				},
				{
					title: '办公室搬迁',
					icon: require('@/assets/images/icon01.svg'),
					color: '#20c0a0',
				},
				{
					title: '旧物回收',
					icon: require('@/assets/images/icon01.svg'),
					color: '#ea7719',
				},
			],
		};
	},
};
</script>
<style scoped>
.typeItem {
	padding: 20px;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	text-align: center;
}

.itemTitle {
	margin-bottom: 30px;
}

.itemTitle h1 {
	font-size: 2rem;
	margin-bottom: 10px;
}

.itemTitle span {
	font-size: 1.2rem;
	color: gray;
}

.row {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-between;
}

.box {
	width: calc(25% - 20px);
	/* 每行四个 */
	background-color: #f7f7f7;
	border-radius: 8px;
	text-align: center;
	padding: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	transition: all 0.3s;
}

.box:hover {
	transform: translateY(-10px);
}

.icon {
	width: 80px;
	height: 80px;
	margin: 0 auto 15px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

h1 {
	font-size: 1.2rem;
	color: white;
	font-weight: bold;
}

@media screen and (max-width: 1024px) {
	.box {
		width: calc(33.33% - 20px);
		/* 每行三个 */
	}
}

@media screen and (max-width: 768px) {
	.box {
		width: calc(50% - 20px);
		/* 每行两个 */
	}
}

@media screen and (max-width: 480px) {
	.box {
		width: 100%;
		/* 每行一个 */
	}
}
</style>