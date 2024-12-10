<template>
    <section class="contact-page">
      <div class="contact-container">
        <h1 class="contact-title">お問い合わせ</h1>
        <div class="contact-details">
          <h2>お問い合わせ方法</h2>
          <p><strong>メールでのお問い合わせ：</strong> <a href="mailto:service@shintoho.com">service@shintoho.com</a></p>
          <p><strong>営業時間：</strong> 平日 11:00-20:00</p>
          <p><strong>Tel：</strong> 03-5398-2050</p>
        </div>
        <div class="wechat-section">
          <h2>Wechat</h2>
          <img src="@/assets/images/wechat.png" alt="WeChat QR Code" class="wechat-qrcode" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "DjInquiry",
  };
  </script>
  
  <style scoped>
  .contact-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("@/assets/images/inquiry.jpg"); /* 替换为实际背景图片路径 */
    background-size: cover;
    background-position: center;
    padding: 20px;
    color: #fff;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }
  
  .contact-container {
    background: rgba(0, 0, 0, 0.6);
    padding: 40px;
    border-radius: 15px;
    max-width: 600px;
    width: 100%;
    text-align: center;
  }
  
  .contact-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .contact-details {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .contact-details a {
    color: #f9d342;
    text-decoration: none;
  }
  
  .contact-details a:hover {
    text-decoration: underline;
  }
  
  .wechat-section {
    margin-top: 20px;
  }
  
  .wechat-section h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .wechat-qrcode {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border: 2px solid #fff;
    border-radius: 10px;
    padding:20px;
  }
  </style>
  