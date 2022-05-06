<template>
  <!-- 头部header部分 -->
  <header>
    <div class="l-content">
      <!-- <el-button type="primary" size="mini"><i class="el-icon-menu"></i></el-button> -->
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
  methods: {
    handleMenu() {
        this.$store.commit('collapseMenu')
    }
  },
};
</script>
<style lang="less" scoped>
header {
    display:flex;
    height:100%;
    justify-content: space-between;/* 让header内容flex布局，内容分两边分布 */
    align-items: center;/* 让每一项内容居中 */
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 10px;
    }
}
.r-content .user {
    width:40px;
    height: 40px;
    border-radius: 50%;
}
</style>