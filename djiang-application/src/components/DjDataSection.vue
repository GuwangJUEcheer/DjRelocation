<template>
  <section> 
   <div class="top-data-wrapper"> 
    <h2 class="top-data-wrapper__title"> <span class="top-data-wrapper__title--red">O</span>UR <span class="top-data-wrapper__title--red">D</span>ATA </h2> 
    <p class="top-data-wrapper__copy"> お菓子・食品運送における、九州の <br class="sp"> リーディングカンパニー </p> 
    <ul class="top-data-wrapper__inner clearfix"> 
     <li class="top-data-wrapper__inner__item"> <img src="../assets/images/data01.png" alt="九州内シェア80％以上!!"> </li> 
     <li class="top-data-wrapper__inner__item"> <img src="../assets/images/data02.png" alt="取扱い在庫数50万ケース"> </li> 
     <li class="top-data-wrapper__inner__item"> <img src="../assets/images/data03.png" alt="自社配送車数80台以上!!"> </li> 
     <li class="top-data-wrapper__inner__item"> <img src="../assets/images/data04.png" alt="取引先企業数40社以上!!"> </li> 
    </ul> 
    <a href="./features/" class="btn01 btn01--red btn01--shadow-none"> 私たちの強み </a> 
   </div> 
  </section> 
</template>

<script>
export default {
  name: 'DjDataSection',
  data() {
    return {
      dataList: [
        { img: require('@/assets/images/data01.png'), alt: '九州内シェア80％以上!!' },
        { img: require('@/assets/images/data02.png'), alt: '取扱い在庫数50万ケース' },
        { img: require('@/assets/images/data03.png'), alt: '自社配送車数80台以上!!' },
        { img: require('@/assets/images/data04.png'), alt: '取引先企業数40社以上!!' },
      ],
    };
  },
};
</script>

<style scoped>
.top-data-wrapper {
  padding: 75px 50px 105px;
  text-align: center;
  background-image: url(../assets/images/data_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
}

@media screen and (max-width: 1024px) {
  .top-data-wrapper {
    padding: 50px 30px;
  }
}

@media screen and (max-width: 767px) {
  .top-data-wrapper {
    padding: 30px 20px;
  }
}

.top-data-wrapper::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/dot_black.png);
  position: absolute;
  z-index: 0;
}

@media screen and (max-width: 1024px) {
  .top-data-wrapper::before {
    background-size: 1px auto;
  }
}

.top-data-wrapper__title {
  margin-bottom: 10px;
  margin-left: 0.05em;
  font-size: 60px;
  line-height: 1.01em;
  color: #fff;
  font-family: "Roboto", sans-serif !important;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 1024px) {
  .top-data-wrapper__title {
    margin-bottom: 5px;
    font-size: 45px;
  }
}

@media screen and (max-width: 767px) {
  .top-data-wrapper__title {
    font-size: 30px;
  }
}

.top-data-wrapper__title--red {
  color: #e00;
}

.top-data-wrapper__copy {
  margin-bottom: 45px;
  font-size: 18px;
  line-height: 1.5em;
  color: #fff;
  font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 1024px) {
  .top-data-wrapper__copy {
    margin-bottom: 20px;
    font-size: 16px;
  }
}

@media screen and (max-width: 767px) {
  .top-data-wrapper__copy {
    margin-bottom: 20px;
    font-size: 14px;
  }
}

.top-data-wrapper__inner {
  margin: 0 auto 60px;
  width: 100%;
  max-width: 1142px;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 1024px) {
  .top-data-wrapper__inner {
    margin: 0 auto 30px;
  }
}

@media screen and (max-width: 767px) {
  .top-data-wrapper__inner {
    margin: 0 auto 0;
  }
}

.top-data-wrapper__inner__item {
  padding: 0 15px;
  width: 24.975%;
  text-align: center;
  border-right: 1px dotted #fff;
  float: left;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

.top-data-wrapper__inner__item:first-child {
  border-left: 1px dotted #fff;
}

@media screen and (max-width: 767px) {
  .top-data-wrapper__inner__item {
    margin-bottom: 25px;
    padding: 0 20px;
    width: 49.95%;
    border-left: 1px dotted #fff;
  }

  .top-data-wrapper__inner__item:nth-child(even) {
    float: right;
    border-left: none;
  }
}

.top-data-wrapper__inner__item img {
  width: 100%;
  max-width: 185px;
}

.top-data-wrapper__title {
    margin-bottom: 10px;
    margin-left: 0.05em;
    font-size: 60px;
    line-height: 1.01em;
    color: #fff;
    font-family: "Roboto", sans-serif !important;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    position: relative;
    z-index: 2;
}

.top-data-wrapper__title--red {
    color: #e00;
}

.top-data-wrapper__copy {
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 1.5em;
    color: #fff;
    font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
    font-weight: 500;
    text-align: center;
    position: relative;
    z-index: 2;
}

@media screen and (max-width: 1024px) {
    .top-data-wrapper__copy {
        margin-bottom: 20px;
        font-size: 16px;
    }
}

@media screen and (max-width: 767px) {
    .top-data-wrapper__copy {
        margin-bottom: 20px;
        font-size: 14px;
    }
}

.top-data-wrapper__inner {
    margin: 0 auto 60px;
    width: 100%;
    max-width: 1142px;
    position: relative;
    z-index: 2;
}

@media screen and (max-width: 767px) {
    .top-data-wrapper__inner {
        margin: 0 auto 0;
    }
}

.top-data-wrapper__inner__item {
    padding: 0 15px;
    width: 24.975%;
    text-align: center;
    border-right: 1px dotted #fff;
    float: left;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
</style>