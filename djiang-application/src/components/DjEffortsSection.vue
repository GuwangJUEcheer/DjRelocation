<template>
    <seciton> 
   <ul class="top-efforts-wrapper"> 
    <li class="top-efforts-wrapper__item clearfix"> 
     <div class="top-efforts-wrapper__item__photo top-efforts-wrapper_item_photo_safety MH"> 
     </div>
     <div class="top-efforts-wrapper__item__text-wrapper top-efforts-wrapper__item__text-wrapper--safety MH"> 
      <div class="top-efforts-wrapper__item__text-wrapper__inner"> 
       <h2 class="top-efforts-wrapper__item__text-wrapper__title"> 安全への取組み <span class="top-efforts-wrapper__item__text-wrapper__title__english"> For safety </span> </h2> 
       <p class="top-efforts-wrapper__item__text-wrapper__text"> 安全性優良事業所（Gマーク）の認定企業です。全車両にドライブレコーダーとデジタルタコグラフを搭載し、国家資格「運行管理者」を定数配置。安全・正確な配送を実現しています。また定期的に講習会やグループディスカッションを行い、徹底して安全性を高めています。 </p> 
      </div> 
      <a href="./efforts/safety.html" class="top-efforts-wrapper__item__text-wrapper__btn btn01"> 詳しくはこちら </a> 
     </div> </li> 
    <li class="top-efforts-wrapper__item clearfix"> 
     <div class="top-efforts-wrapper__item__photo top-efforts-wrapper__item__photo--eco MH"> 
     </div> 
     <div class="top-efforts-wrapper__item__text-wrapper top-efforts-wrapper__item__text-wrapper--eco MH"> 
      <div class="top-efforts-wrapper__item__text-wrapper__inner"> 
       <h2 class="top-efforts-wrapper__item__text-wrapper__title"> 環境への取組み <span class="top-efforts-wrapper__item__text-wrapper__title__english"> For environment </span> </h2> 
       <p class="top-efforts-wrapper__item__text-wrapper__text"> 排気ガスの計測と削減に向けた取組みを積極的に行っており、環境マネジメントシステムの国際規格、ISO14001を取得。省エネ運転による燃費の削減も長期的に行っています。こうした環境保全活動は当社のCSR活動の一貫であり、今後もさらなるレベルアップを図ります。 </p> 
      </div> 
      <a href="./efforts/environment.html" class="top-efforts-wrapper__item__text-wrapper__btn btn01"> 詳しくはこちら </a> 
     </div> </li> 
   </ul> 
  </seciton> 
</template>

<script>
export default {
  name: 'DjEffortsSection',
  data() {
    return {
       
    };
  },
};
</script>

<style scoped>
.top-efforts-wrapper {
  margin: 0;
}

.top-efforts-wrapper__item {
  margin: 0;
}

.top-efforts-wrapper__item__photo {
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100%;
  padding: 0px 0px 0px;
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__photo {
    width: 100%;
  }

  .top-efforts-wrapper__item__photo::before {
    content: "";
    padding-top: 40%;
    display: block;
  }
}

.top-efforts-wrapper_item_photo_safety {
    float: left;
    background-image: url("../assets/images/safety_photo.jpg");
    background-size: cover; /* 确保图片能完整显示 */
    width: 750px;
    height: 500px;
    margin-right: 5px;
}

.top-efforts-wrapper__item__photo_eco {
  float: right;
  background-image: url("../assets/images/eco_photo.jpg");
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__photo--eco {
    float: none;
  }
}

.top-efforts-wrapper__item__text-wrapper {
  width: 50%;
  padding: 100px 50px 195px;
  text-align: center;
  position: relative;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

@media screen and (max-width: 1500px) {
  .top-efforts-wrapper__item__text-wrapper {
    padding: 70px 30px 125px;
  }
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper {
    width: 100%;
    padding: 40px 40px 60px;
  }
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper {
    padding: 25px 20px 35px;
  }
}

.top-efforts-wrapper__item__text-wrapper__inner {
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  text-align: left;
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper__inner {
    text-align: center;
  }
}

.top-efforts-wrapper__item__text-wrapper__title {
  margin-bottom: 20px;
  font-size: 34px;
  line-height: 1.01em;
  color: #222;
  font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
  font-weight: 700;
  letter-spacing: 0.1em;
}

@media screen and (max-width: 1200px) {
  .top-efforts-wrapper__item__text-wrapper__title {
    margin-bottom: 15px;
    font-size: 28px;
  }
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper__title {
    margin-bottom: 10px;
    font-size: 22px;
  }
}

.top-efforts-wrapper__item__text-wrapper__title::first-letter {
  color: #e00;
}

.top-efforts-wrapper__item__text-wrapper__title__english {
  margin-top: 15px;
  font-size: 15px;
  line-height: 1.1em;
  color: #e00;
  font-family: "Roboto", sans-serif !important;
  font-weight: 700;
  display: block;
}

@media screen and (max-width: 1200px) {
  .top-efforts-wrapper__item__text-wrapper__title__english {
    margin-top: 10px;
    font-size: 13px;
  }
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper__title__english {
    margin-top: 5px;
    font-size: 11px;
  }
}

.top-efforts-wrapper__item__text-wrapper__text {
  font-size: 16px;
  line-height: 2em;
  color: #222;
  text-align: justify;
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper__text {
    font-size: 14px;
    line-height: 1.8em;
  }
}

.top-efforts-wrapper__item__text-wrapper--safety {
  float: right;
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper--safety {
    float: none;
  }
}

.top-efforts-wrapper__item__text-wrapper--safety::before {
  content: "";
  bottom: 0;
  right: 0;
  width: 180px;
  height: 180px;
  background-color: #e00;
  position: absolute;
  z-index: -1;
}

@media screen and (max-width: 1500px) {
  .top-efforts-wrapper__item__text-wrapper--safety::before {
    width: 160px;
    height: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper--safety::before {
    width: 180px;
    height: 80px;
  }
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper--safety::before {
    width: 40%;
    height: 55px;
  }
}

.top-efforts-wrapper__item__text-wrapper--eco {
  float: left;
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper--eco {
    float: none;
  }
}

.top-efforts-wrapper__item__text-wrapper--eco::before {
  content: "";
  bottom: 0;
  left: 0;
  width: 120px;
  height: calc(100% - 100px);
  background-color: #e00;
  position: absolute;
  z-index: -1;
}

@media screen and (max-width: 1500px) {
  .top-efforts-wrapper__item__text-wrapper--eco::before {
    height: calc(100% - 300px);
  }
}

@media screen and (max-width: 767px) {
  .top-efforts-wrapper__item__text-wrapper--eco::before {
    width: 30%;
    height: 90px;
  }
}

.top-efforts-wrapper__item__text-wrapper__btn {
  bottom: 100px;
  right: 100px;
  position: absolute;
}

@media screen and (max-width: 1500px) {
  .top-efforts-wrapper__item__text-wrapper__btn {
    bottom: 60px;
    right: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .top-efforts-wrapper__item__text-wrapper__btn {
    bottom: auto;
    right: auto;
    margin: 20px auto 0;
    position: relative;
  }
}
</style>