<template>
  <div>
    <el-menu default-active="1-4-1" 
             class="el-menu-vertical-demo" 
             @open="handleOpen" 
             @close="handleClose" 
             :collapse="isCollapse" 
             background-color="#545c64"
             text-color= "#fff"
             active-text-color= "#ffd04b"
    >
      <h3>{{isCollapse ? '后台': '通用后台管理系统'}}</h3><!-- 侧边栏收起时为“后台”，展开为原文字 -->
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path+''">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
          <el-menu-item :index="subIndex+''">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
  <!-- :index="item.path"更改为:index="item.path+''"，elementUI的index是字符串格式，加个''，将后台数据转换为字符串 -->
</template>
<script>
export default {
  name: "CommonAside",
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mail",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "loaction",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
        this.$router.push({
            name:item.name,
        })
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      /* 从store文件下的tab文件中取出控制状态变量isCollapse，之后完善这个变量具体功能 */
      return this.$store.state.tab.isCollapse
    }
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu {
  height: 100vh;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}

</style>
