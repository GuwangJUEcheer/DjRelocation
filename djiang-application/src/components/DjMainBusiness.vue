<template>
  <div class="feature-section">
    <div
      class="feature-item"
      v-for="(feature, index) in features"
      :key="index"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <!-- 图片部分 -->
      <div class="feature-image">
        <img :src="feature.image" :alt="feature.title" />
      </div>
      <!-- 文案部分 -->
      <div class="feature-text">
        <h2 class="feature-title">{{ feature.title }}</h2>
        <p class="feature-subtitle">{{ feature.subtitle }}</p>
        <p class="feature-description">{{ feature.description }}</p>
        <div class="feature-services">
          <div
            v-for="(service, idx) in feature.services"
            :key="idx"
            class="service-item"
          >
            <img :src="service.icon" class="service-icon" alt="Service Icon" />
            <span class="service-title">{{ service.title }}</span>
          </div>
        </div>
        <button class="feature-button">{{ feature.buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjMainBusiness",
  data() {
    return {
      features: [
  {
    title: "Ｄちゃんの引っ越し",
    subtitle: "安心できるサービス",
    description:
      "Ｄちゃんの引っ越しサービスは迅速かつ安心できるプロフェッショナルな引っ越しを提供します。国内外を問わず、さまざまなニーズに対応。",
    image: require("@/assets/images/relocation.jpg"), // 替换为搬家图片路径
    services: [
      { icon: require("@/assets/images/cargo-truck.png"), title: "家庭搬家" },
      { icon: require("@/assets/images/moving-truck.png"), title: "办公搬迁" },
    ],
    buttonText: "詳しくはこちら",
  },
  {
    title: "貨物輸送",
    subtitle: "輸送の効率化",
    description:
      "国内外の貨物輸送をお手伝いします。物流の効率化と信頼性を実現するサービスをご提供。",
    image: require("@/assets/images/cargo.jpg"), // 替换为货物运输图片路径
    services: [
      { icon: require("@/assets/images/cargo01.webp"), title: "国際空運" },
      { icon: require("@/assets/images/cargo02.webp"), title: "公路運輸" },
      { icon: require("@/assets/images/cargo03.webp"), title: "鉄路貨運" },
    ],
    buttonText: "詳しくはこちら",
  },
  {
    title: "倉庫存储",
    subtitle: "安全で信頼できる保管",
    description:
      "最適な保管環境で、食品や製品を安全に管理します。迅速で効率的なサービスをご提供。",
    image: require("@/assets/images/warehouse.jpg"), // 替换为仓库存储图片路径
    services: [
      { icon: require("@/assets/images/warehouse01.webp"), title: "食品管理" },
      { icon: require("@/assets/images/warehouse02.webp"), title: "安全管理" },
    ],
    buttonText: "詳しくはこちら",
  },
  {
    title: "粗大ゴミリサイクル",
    subtitle: "環境に優しいリサイクル",
    description:
      "不要品をリサイクルして、環境に優しいサービスを提供します。さまざまな廃棄物の処理に対応。",
    image: require("@/assets/images/recycle.jpg"), // 替换为粗大垃圾回收图片路径
    services: [
      { icon: require("@/assets/images/recycle-bin.webp"), title: "廃棄物処理" },
      { icon: require("@/assets/images/recycle (2).png"), title: "リサイクル" },
    ],
    buttonText: "詳しくはこちら",
  },
  {
    title: "中古家電家具販売",
    subtitle: "お得な価格で中古品を販売",
    description:
      "中古の家電と家具をお得な価格で販売しています。高品質な商品を取り揃えています。",
    image: require("@/assets/images/appliances.jpg"), // 替换为家电家具图片路径
    services: [
      { icon: require("@/assets/images/appliances01.png"), title: "家電販売" },
      { icon: require("@/assets/images/appliances02.png"), title: "家具販売" },
    ],
    buttonText: "詳しくはこちら",
  },
  {
    title: "不動産賃貸と売買と管理",
    subtitle: "総合的な不動産サポート",
    description:
      "賃貸・売買・管理を総合的にサポートします。不動産のあらゆるニーズに対応可能。",
    image: require("@/assets/images/realestate.jpg"), // 替换为不动产图片路径
    services: [
      { icon: require("@/assets/images/rent.png"), title: "賃貸" },
      { icon: require("@/assets/images/buy.png"), title: "売買" },
      { icon: require("@/assets/images/manage.png"), title: "管理" },
    ],
    buttonText: "詳しくはこちら",
  },
],
    };
  },
};
</script>

<style scoped>
.feature-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0px 100px;
}

.feature-item.reverse {
  flex-direction: row-reverse;
}

.feature-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.feature-image {
  display: inline-block;
  width: 50%; /* 保持图片宽度比例 */
}
.feature-text {
  display: inline-block;
  padding: 2rem;
  /* width: 40%; */
}

.feature-title {
  font-size: 3rem; /* 增大标题字体 */
  font-weight: bold;
  margin-bottom: 1rem;
}

.feature-subtitle {
  font-size: 2rem; /* 增大副标题字体 */
  color: #888;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1.2rem; /* 增大描述字体 */
  line-height: 1.8; /* 增加行间距 */
  margin-bottom: 2rem;
}

.feature-services {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem; /* 增加图标和文字之间的间距 */
  margin-bottom: 2rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #f8f9fa;
  padding: 0.8rem 1.5rem; /* 增大内边距 */
  border-radius: 6px; /* 调整圆角 */
}

.service-icon {
  width: 32px; /* 增大图标大小 */
  height: 32px;
  object-fit: contain; /* 确保图片比例 */
}

.service-title {
  font-size: 1.1rem; /* 增大服务文字字体 */
}

.feature-button {
  padding: 1rem 2rem; /* 增大按钮尺寸 */
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem; /* 增大按钮字体 */
  font-weight: bold;
  transition: background 0.3s;
}

.feature-button:hover {
  background-color: #b71c1c;
}

/* 响应式调整，确保适应不同屏幕大小 */
@media (max-width: 768px) {
  .feature-text {
    width: 100%; /* 小屏幕时文字区域占满 */
    text-align: center; /* 居中对齐文字 */
  }

  .feature-title {
    font-size: 1.8rem;
  }

  .feature-subtitle {
    font-size: 1rem;
  }

  .feature-description {
    font-size: 1rem;
  }

  .service-item {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }

  .feature-button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>
