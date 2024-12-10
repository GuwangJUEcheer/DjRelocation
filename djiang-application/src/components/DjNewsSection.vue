<template>
  <section> 
   <div class="top-news-wrapper"> 
    <div class="top-news-wrapper__inner"> 
     <h2 class="top-news-wrapper__inner__title"> <span class="top-news-wrapper__inner__title__text"> TOPICS &amp; NEWS </span> <span class="top-news-wrapper__inner__title__jp"> 新着情報 </span> </h2> 
     <div class="clearfix"> 
      <div class="top-news-wrapper__inner__list-wrapper"> 
       <ul class="mb20"> 
        <li class="information-list-wrapper__inner__list__item"> <a href="https://www.munakatarikuun.co.jp/recruit/" class="information-list-wrapper__inner__list__item__link"> 
          <dl class="clearfix"> 
           <dt class="information-list-wrapper__inner__list__item__link__date">
            2024.07.30 
            <span class="information-list-wrapper__inner__list__item__link__date__icon icon icon--info">お知らせ</span> 
           </dt> 
           <dd class="information-list-wrapper__inner__list__item__link__text">
             採用情報を更新しました。 
           </dd> 
          </dl> </a> </li> 
        <li class="information-list-wrapper__inner__list__item"> <a href="http://www.munakatarikuun.co.jp/support/" target="_blank" class="information-list-wrapper__inner__list__item__link"> 
          <dl class="clearfix"> 
           <dt class="information-list-wrapper__inner__list__item__link__date">
            2023.11.17 
            <span class="information-list-wrapper__inner__list__item__link__date__icon icon icon--info">お知らせ</span> 
           </dt> 
           <dd class="information-list-wrapper__inner__list__item__link__text">
             スポーツ支援制度を導入しました。 
           </dd> 
          </dl> </a> </li> 
       </ul> 
       <a href="/information/" class="btn01 btn01--left"> 一覧はこちら </a> 
      </div> 
      <ul class="top-news-wrapper__inner__btn-wrapper clearfix"> 
       <li class="top-news-wrapper__inner__btn-wrapper__item"> <a href="./checklist/" class="top-news-wrapper__inner__btn-wrapper__item__link top-news-wrapper__inner__btn-wrapper__item__link--checklist"> 物流業者チェックリスト <span class="top-news-wrapper__inner__btn-wrapper__item__link__en"> Checklist </span> </a> </li> 
       <li class="top-news-wrapper__inner__btn-wrapper__item"> <a href="./recruit/" class="top-news-wrapper__inner__btn-wrapper__item__link top-news-wrapper__inner__btn-wrapper__item__link--recruit"> 採用情報 <span class="top-news-wrapper__inner__btn-wrapper__item__link__en"> Recruit </span> </a> </li> 
      </ul> 
     </div> 
    </div> 
   </div> 
  </section> 
  </template>
  
  <script>
  export default {
    name: 'NewsSection',
    data() {
      return {
        newsList: [
          {
            date: '2024.07.30',
            icon: 'お知らせ',
            text: '採用情報を更新しました。',
            link: 'https://www.munakatarikuun.co.jp/recruit/',
          },
          {
            date: '2023.11.17',
            icon: 'お知らせ',
            text: 'スポーツ支援制度を導入しました。',
            link: 'http://www.munakatarikuun.co.jp/support/',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .top-news-wrapper {
    padding: 100px 50px;
    position: relative;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper {
        padding: 60px 40px;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper {
        padding: 20px 20px 30px;
    }
}

.top-news-wrapper::before {
    content: "";
    top: 0;
    left: 0;
    width: calc(50% + 450px);
    height: 100%;
    background-color: #f7f7f7;
    position: absolute;
    z-index: -1;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper::before {
        width: 100%;
    }
}

.top-news-wrapper__inner {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    position: relative;
}

.top-news-wrapper__inner__title {
    margin-bottom: 25px;
    position: relative;
    text-align: left;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__title {
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__title {
        margin-bottom: 15px;
        text-align: center;
    }
}

.top-news-wrapper__inner__title::before {
    content: "";
    bottom: 10px;
    left: -70px;
    width: 60px;
    height: 2px;
    background-color: #e00;
    position: absolute;
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__title::before {
        display: none;
    }
}

.top-news-wrapper__inner__title__text {
    margin-bottom: 7px;
    padding-left: 32px;
    font-size: 45px;
    line-height: 1.01em;
    color: #222;
    font-family: "Roboto", sans-serif !important;
    font-weight: 700;
    letter-spacing: 0.05em;
    background-image: url(../assets/images//icon_pen_r.svg);
    background-size: 22px auto;
    background-repeat: no-repeat;
    background-position: 0 50%;
    display: block;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__title__text {
        margin-bottom: 5px;
        padding-left: 25px;
        font-size: 32px;
        background-size: 16px auto;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__title__text {
        margin-bottom: 4px;
        padding-top: 30px;
        padding-left: 0;
        font-size: 26px;
        background-position: 50% 0;
    }
}

.top-news-wrapper__inner__title__jp {
    font-size: 20px;
    line-height: 1.01em;
    color: #e00;
    font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
    font-weight: 700;
    letter-spacing: 0.2em;
    display: block;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__title__jp {
        font-size: 18px;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__title__jp {
        font-size: 14px;
    }
}

.top-news-wrapper__inner__list-wrapper {
    width: calc(100% - 350px);
    float: left;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__list-wrapper {
        margin-bottom: 40px;
        width: auto;
        float: none;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__list-wrapper {
        margin-bottom: 30px;
    }
}

.top-news-wrapper__inner__btn-wrapper {
    width: 310px;
    float: right;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper {
        margin: 0 auto;
        width: 650px;
        float: none;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper {
        width: 100%;
    }
}

.top-news-wrapper__inner__btn-wrapper__item {
    margin-top: 15px;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item {
        margin-top: 0;
        width: 310px;
        float: right;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item {
        width: 100%;
        float: none;
    }
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item {
        margin-top: 0;
        width: 310px;
        float: right;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item {
        width: 100%;
        float: none;
    }
}

.top-news-wrapper__inner__btn-wrapper__item:first-child {
    margin-top: 0;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item:first-child {
        float: left;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item:first-child {
        margin-bottom: 10px;
        float: none;
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link {
    padding: 27px 0 0 80px;
    height: 90px;
    font-size: 18px;
    line-height: 1.01em;
    color: #fff;
    font-family: "Noto Sans Japanese", "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", sans-serif !important;
    font-weight: 700;
    background-repeat: no-repeat;
    display: block;
    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.3);
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item__link {
        padding: 15px 0 0 55px;
        height: 60px;
        font-size: 16px;
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link__en {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.01em;
    color: #fff;
    font-family: "Roboto", sans-serif !important;
    font-weight: 500;
    display: block;
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item__link__en {
        margin-top: 4px;
        font-size: 12px;
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link--checklist {
    background-color: #e00;
    background-image: url(../assets/images//icon_check_w.svg);
    background-size: 30px auto;
    background-position: 29px 23px;
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item__link--checklist {
        background-size: 20px auto;
        background-position: 20px 16px;
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link--checklist:hover {
    color: #fff;
    background-color: #222;
    box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item__link--checklist:hover {
        background-color: #e00;
        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.3);
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link--recruit {
    background-color: #222;
    background-image: url(../assets/images//icon_recruit_w.svg);
    background-size: 21px auto;
    background-position: 35px 25px;
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item__link--recruit {
        background-color: #e00;
    }
}

@media screen and (max-width: 767px) {
    .top-news-wrapper__inner__btn-wrapper__item__link--recruit {
        background-size: 14px auto;
        background-position: 23px 17px;
    }
}

.top-news-wrapper__inner__btn-wrapper__item__link--recruit:hover {
    color: #fff;
    background-color: #e00;
    box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1024px) {
    .top-news-wrapper__inner__btn-wrapper__item__link--recruit:hover {
        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.3);
    }
}
  </style>
  