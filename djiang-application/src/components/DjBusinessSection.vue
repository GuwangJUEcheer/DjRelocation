<template>
    <section class="business-section">
        <div class="business-container">
            <div class="business-item" v-for="(business, index) in businesses" :key="index">
                <div class="business-image"> <!-- :style="{ backgroundImage: `url(${business.img})` }"> -->
                    <div class="business-text">
                        <h2>{{ business.title }}</h2>
                        <h3>{{ business.enTitle }}</h3>
                        <p>{{ business.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            businesses: [
                {
                    title: "Ｄちゃんの引っ越し",
                    enTitle: "Moving Service",
                    description: "安心できるサービスで、家庭からオフィスまで幅広く対応します。",
                    img: require("@/assets/images/moving.jpg"), // 替换为搬家图片路径
                },
                {
                    title: "貨物輸送",
                    enTitle: "Cargo Transport",
                    description: "国内外の貨物輸送を迅速かつ安全に提供します。",
                    img: require("@/assets/images/cargo2.jpg"), // 替换为货物图片路径
                },
                {
                    title: "倉庫存储",
                    enTitle: "Warehouse",
                    description: "最適な保管環境で、食品や製品を安全に管理します。",
                    img: require("@/assets/images/warehouse.jpg"), // 替换为仓库图片路径
                },
                {
                    title: "粗大ゴミリサイクル",
                    enTitle: "Recycling",
                    description: "不要品をリサイクルして、環境に優しいサービスを提供します。",
                    img: require("@/assets/images/recycle.jpg"), // 替换为回收图片路径
                },
                {
                    title: "中古家電家具販売",
                    enTitle: "Used Appliances",
                    description: "中古の家電と家具をお得な価格で販売しています。",
                    img: require("@/assets/images/furniture2.avif"), // 替换为家电图片路径
                },
                {
                    title: "不動産賃貸と売買と管理",
                    enTitle: "Real Estate",
                    description: "賃貸・売買・管理を総合的にサポートします。",
                    img: require("@/assets/images/realestate.jpg"), // 替换为房产图片路径
                },
            ],
        };
    },
};
</script>

<style scoped>
.business-section {
    padding: 50px 20px;
    background-color: #f9f9f9;
}

.business-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 90%;
    margin: 0 auto;
}

.business-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 300px;
}

.business-item:hover {
    transform: translateY(-5px);
}

.business-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    color: white;
    text-align: center;
    padding: 20px;
}

.business-text {
    background: rgba(0, 0, 0, 0.6); /* 半透明背景，突出文字 */
    padding: 20px;
    border-radius: 10px;
    width: 90%;
}

.business-text h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.business-text h3 {
    font-size: 16px;
    margin-bottom: 10px;
}

.business-text p {
    font-size: 14px;
    line-height: 1.6;
}
</style>
