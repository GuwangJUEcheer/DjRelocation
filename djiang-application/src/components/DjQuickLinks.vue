<template>
   <section> 
   <ul class="top-btn-wrapper clearfix"> 
    <li class="top-btn-wrapper__item"> <a href="./features/" class="top-btn-wrapper__item__link"> 
      <div class="top-btn-wrapper__item__link__photo"> 
       <img src="../assets/images/nav_photo01.png" alt=""> 
       <span class="top-btn-wrapper__item__link__photo__icon top-btn-wrapper__item__link__photo__icon--features"> <img src="../assets/images/icon_candy_w.svg" alt=""> </span> 
      </div> <p class="top-btn-wrapper__item__link__text"> 私たちの強み <span class="top-btn-wrapper__item__link__text__en"> features </span> </p> </a> </li> 
    <li class="top-btn-wrapper__item"> <a href="./company/history.html" class="top-btn-wrapper__item__link"> 
      <div class="top-btn-wrapper__item__link__photo"> 
       <img src="../assets/images/nav_photo02.png" alt=""> 
       <span class="top-btn-wrapper__item__link__photo__icon top-btn-wrapper__item__link__photo__icon--history"> <img src="../assets/images/icon_history_w.svg" alt=""> </span> 
      </div> <p class="top-btn-wrapper__item__link__text"> 新东方のあゆみ <span class="top-btn-wrapper__item__link__text__en"> history </span> </p> </a> </li> 
    <li class="top-btn-wrapper__item"> <a href="./company/outline.html" class="top-btn-wrapper__item__link"> 
      <div class="top-btn-wrapper__item__link__photo"> 
       <img src="../assets/images/nav_photo03.png" alt=""> 
       <span class="top-btn-wrapper__item__link__photo__icon top-btn-wrapper__item__link__photo__icon--aboutus"> <img src="../assets/images/icon_build02_w.svg" alt=""> </span> 
      </div> <p class="top-btn-wrapper__item__link__text"> 会社概要 <span class="top-btn-wrapper__item__link__text__en"> about us </span> </p> </a> </li> 
    <li class="top-btn-wrapper__item"> <a href="./company/base.html" class="top-btn-wrapper__item__link"> 
      <div class="top-btn-wrapper__item__link__photo"> 
       <img src="../assets/images/nav_photo04.png" alt=""> 
       <span class="top-btn-wrapper__item__link__photo__icon top-btn-wrapper__item__link__photo__icon--location"> <img src="../assets/images/icon_map_w.svg" alt=""> </span> 
      </div> <p class="top-btn-wrapper__item__link__text"> 拠点情報 <span class="top-btn-wrapper__item__link__text__en"> alocation </span> </p> </a> </li> 
   </ul> 
  </section> 
  </template>
  
  <script>
  export default {
    name: 'DjQuickLinks',
    data() {
      return {
        links: [
          {
            title: '私たちの強み',
            enTitle: 'features',
            href: './features/',
            img: '../assets/images/nav_photo01.png',
            alt: '',
            icon: '../assets/images/icon_candy_w.svg',
            iconAlt: '',
            iconClass: 'top-btn-wrapper__item__link__photo__icon--features',
          },
          {
            title: '宗像陸運のあゆみ',
            enTitle: 'history',
            href: './company/history.html',
            img: '../assets/images/nav_photo02.png',
            alt: '',
            icon: '../assets/images/icon_history_w.svg',
            iconAlt: '',
            iconClass: 'top-btn-wrapper__item__link__photo__icon--history',
          },
          {
            title: '会社概要',
            enTitle: 'about us',
            href: './company/outline.html',
            img: '../assets/images/nav_photo03.png',
            alt: '',
            icon: '../assets/images/icon_build02_w.svg',
            iconAlt: '',
            iconClass: 'top-btn-wrapper__item__link__photo__icon--aboutus',
          },
          {
            title: '拠点情報',
            enTitle: 'location',
            href: './company/base.html',
            img: '../assets/images/nav_photo04.png',
            alt: '',
            icon: '../assets/images/icon_map_w.svg',
            iconAlt: '',
            iconClass: 'top-btn-wrapper__item__link__photo__icon--location',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .top-btn-wrapper {
    margin: 0;
}

.top-btn-wrapper__item {
    width: 24.975%;
    text-align: center;
    border-left: 1px solid #ddd;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
}

.top-btn-wrapper__item:first-child {
    border-left: none;
}

@media screen and (max-width: 1024px) {
    .top-btn-wrapper__item {
        width: 50%;
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-left: none;
    }

    .top-btn-wrapper__item:nth-child(even) {
        border-right: none;
        float: right;
    }
}

.top-btn-wrapper__item__link {
    padding: 90px 20px 110px;
    background-color: #fff;
    display: block;
}

@media screen and (max-width: 1500px) {
    .top-btn-wrapper__item__link {
        padding: 60px 20px 80px;
    }
}

@media screen and (max-width: 1300px) {
    .top-btn-wrapper__item__link {
        padding: 40px 20px 60px;
    }
}

@media screen and (max-width: 1024px) {
    .top-btn-wrapper__item__link {
        padding: 40px 20px 45px;
    }
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link {
        padding: 20px 15px;
    }
}


.top-btn-wrapper__item__link:hover {
    background-color: #e00;
}

@media screen and (max-width: 1024px) {
    .top-btn-wrapper__item__link:hover {
        background-color: #fff;
    }
}

.top-btn-wrapper__item__link:hover .top-btn-wrapper__item__link__text {
    color: #fff;
}

@media screen and (max-width: 1024px) {
    .top-btn-wrapper__item__link:hover .top-btn-wrapper__item__link__text {
        color: #222;
    }
}

.top-btn-wrapper__item__link:hover .top-btn-wrapper__item__link__text__en {
    color: #fff;
}

@media screen and (max-width: 1024px) {
    .top-btn-wrapper__item__link:hover .top-btn-wrapper__item__link__text__en {
        color: #e00;
    }
}

.top-btn-wrapper__item__link__photo {
    margin: 0 auto 15px;
    width: 100%;
    max-width: 190px;
    position: relative;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__photo {
        margin: 0 auto 8px;
        max-width: 130px;
    }
}

.top-btn-wrapper__item__link__photo__icon {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}

.top-btn-wrapper__item__link__photo__icon--features {
    width: 47px;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__photo__icon--features {
        width: 32.9px;
    }
}

.top-btn-wrapper__item__link__photo__icon--history {
    margin-left: 7px;
    width: 45px;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__photo__icon--history {
        margin-left: 5px;
        width: 31.5px;
    }
}

.top-btn-wrapper__item__link__photo__icon--aboutus {
    width: 41px;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__photo__icon--aboutus {
        width: 28.7px;
    }
}

.top-btn-wrapper__item__link__photo__icon--location {
    width: 31px;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__photo__icon--location {
        width: 21.7px;
    }
}

.top-btn-wrapper__item__link__text {
    font-size: 30px;
    line-height: 1.01em;
    color: #222;
    font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
    font-weight: 400;
    transition: 0.5s;
}

@media screen and (max-width: 1200px) {
    .top-btn-wrapper__item__link__text {
        font-size: 26px;
    }
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__text {
        font-size: 16px;
        font-weight: 700;
    }
}

.top-btn-wrapper__item__link__text__en {
    margin-top: 7px;
    margin-left: 0.06em;
    font-size: 16px;
    line-height: 1.01em;
    color: #e00;
    font-family: "Roboto", sans-serif !important;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-align: center;
    display: block;
    transition: 0.5s;
}

@media screen and (max-width: 767px) {
    .top-btn-wrapper__item__link__text__en {
        margin-top: 5px;
        font-size: 12px;
    }
}
  </style>
  