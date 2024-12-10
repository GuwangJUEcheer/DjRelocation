<template>
  <div class="carousel" @mouseenter="pause" @mouseleave="play">
    <!-- 轮播内容 -->
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <img :src="item" alt="Slide image" />
      </div>
    </div>

    <!-- 左右按钮 -->
    <button class="carousel-btn prev" @click="prev">‹</button>
    <button class="carousel-btn next" @click="next">›</button>

    <!-- 底部圆点 -->
    <div class="carousel-dots">
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjSlider",
  data() {
    return {
      currentIndex: 0,
      items: [
        require("../assets/images/relocate-sidebar.jpg"),
        // require("../assets/images/relocate-sidebar2.jpg"),
        // require("../assets/images/relocate-sidebar3.jpg"),
        // require("../assets/images/recycle.jpg"),
        // require("../assets/images/Used Appliance and Furniture Sales.jpg"),
        // require("../assets/images/realestate.jpg"),
      ],
      timer: null, // 定时器
    };
  },
  methods: {
    next() {
      this.currentIndex =
        (this.currentIndex + 1) % this.items.length; // 循环到下一张
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length; // 循环到上一张
    },
    goTo(index) {
      this.currentIndex = index; // 跳转到指定图片
    },
    play() {
      // 开始自动轮播
      this.timer = setInterval(() => {
        this.next();
      }, 3000); // 每隔3秒自动播放
    },
    pause() {
      // 暂停自动轮播
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  mounted() {
    this.play(); // 组件挂载时启动自动轮播
  },
  beforeUnmount() {
    this.pause(); // 组件销毁时清除定时器
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 600px; /* 设置轮播高度 */
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.carousel-item img {
  width: 100%;
  height: 600px; /* 确保图片高度一致 */
  object-fit: cover; /* 根据需要调整图片适配模式 */
}

/* 左右按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.carousel-btn.prev {
  left: 10px;
}
.carousel-btn.next {
  right: 10px;
}

/* 圆点导航 */
.carousel-dots {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}
.carousel-dots span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: background 0.3s;
}
.carousel-dots span.active {
  background: #333;
}
</style>
