<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <div class="logo__container">
        <img src="../assets/images/djlogo.jpg" alt="Logo" class="logo__image" />
      </div>
      <span class="logo__text">株式会社 新東方</span>
    </div>

    <!-- Navigation Menu -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="white"
      text-color="#333"
      active-text-color="#e00"
    >
      <el-menu-item index="1" @click="navigateTo('/')">
        <el-icon><House /></el-icon>
        <span class="menu__text">ホーム</span>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateTo('/company')">
        <el-icon><OfficeBuilding /></el-icon>
        <span class="menu__text">会社案内</span>
      </el-menu-item>
      <el-menu-item index="3" @click="navigateTo('/services')">
        <el-icon><Folder /></el-icon>
        <span class="menu__text">業務案内</span>
      </el-menu-item>
      <el-menu-item index="4" @click="navigateTo('/contact')">
        <el-icon><ChatDotRound /></el-icon>
        <span class="menu__text">お問い合わせ</span>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: "DjHeader",
  data() {
    return {
      activeIndex: "1", // 默认选中的菜单项
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route); // 使用 Vue Router 导航到指定页面
    },
  },
};
</script>

<style scoped>
/* Header 样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0px; */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px; /* 设置固定高度 */
}

/* Logo 样式 */
.logo {
  display: flex;
  align-items: center;
}

.logo__container {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo__image {
  margin-left: 30px;
  max-width: 100%;
  max-height: 100%;
}

.logo__text {
  font-size: 20px;
  font-weight: bold; /* 字体加粗 */
  color: #333;
  margin-left: 25px;
}

/* Menu 样式 */
.el-menu-demo {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  border-bottom: none; /* 移除底部边框 */
  box-shadow: none;    /* 移除阴影 */
}

.el-menu-item {
  font-size: 16px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold; /* 菜单字体加粗 */
}

.menu__text {
  font-weight: bold; /* 字体加粗 */
}

.el-menu-item:hover {
  background-color: #f5f5f5;
}

.el-menu-item .el-icon {
  font-size: 18px;
}
</style>
