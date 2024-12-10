<template>
  <div class="company">
    <div class="company__container">
      <h1>会社案内</h1>
      <p>株式会社 新東方について</p>
      <ul>
        <li><strong>商号：</strong>株式会社 新東方</li>
        <li><strong>本社事務所：</strong>〒179-0081 東京都練馬区北町1-44-2 大久保ビル1階</li>
        <li><strong>設立：</strong>2017年2月23日</li>
        <li><strong>資本金：</strong>500万円</li>
        <li><strong>従業員数：</strong>8名</li>
        <li><strong>代表取締役社長：</strong>鄧 偉華</li>
        <li><strong>主要取引銀行：</strong>三菱ＵＦＪ銀行・楽天銀行</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjCompany",
};
</script>

<style scoped>
/* 整体容器铺满宽度 */
.company {
  width: 100%; /* 设置容器宽度为 100% */
  min-height: 100vh; /* 确保页面高度填充满屏 */
  display: flex;
  justify-content: center; /* 居中 */
  align-items: center; /* 垂直居中 */
  background-color: #f5f5f5; /* 添加背景色 */
  background-image: url("../assets/images/company-1.jpg");
  background-size: cover; /* 或 contain，根据需求选择 */
  background-repeat: no-repeat;
  background-position: center; /* 居中显示图片 */ /* 背景图片路径 */
}

/* 内层内容样式 */
.company__container {
  width: 80%; /* 内容宽度 80%，你也可以用更宽或更窄的值 */
  max-width: 1200px; /* 最大宽度限制 */
  padding: 40px; /* 内边距 */
  background-color: rgba(255, 255, 255, 0.5); 
  /* background-color: transparent; 全透明背景 */
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

h1 {
  text-align: center;
  color: #e00; /* 标题红色 */
  font-size: 32px; /* 标题大小 */
  margin-bottom: 10px;
}

p {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin-bottom: 8px;
}

ul li strong {
  font-weight: bold;
  color: #555;
}
</style>
