<template>
  <footer>
    <div class="common-footer">
      <!-- <div class="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.574937845977!2d139.66077639678954!3d35.761251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018eded75bbd9e5%3A0x81785ee2ca15ad26!2z44Gr44GX44GN5bmz5ZKM5Y-w566h55CG44K144O844OT44K55LqL5YuZ5omA!5e0!3m2!1szh-CN!2sjp!4v1733389844548!5m2!1szh-CN!2sjp"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> -->
      <div class="footer-text">
        <p>© 2024 株式会社 新東方. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "DjFooter",
};
</script>

<style scoped>
/* 通用的页脚样式 */
.common-footer {
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
}

/* 地图容器样式 */
.footer-map {
  margin: 0 auto;
  max-width: 1200px; /* 限制地图宽度 */
  padding: 10px;
  border-radius: 10px; /* 添加圆角 */
  overflow: hidden; /* 隐藏溢出的部分 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

/* 页脚文字部分 */
.footer-text {
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.5;
}

.footer-text p {
  margin: 0;
}
</style>
