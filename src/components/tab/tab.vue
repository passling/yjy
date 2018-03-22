<template>
  <div class="menu">
    <ul>
      <li>
        <router-link tag="a" to="/index">
          <span class="icon icon-index"></span>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link tag="a" to="/destination">
          <span class="icon icon-destination"></span>
          <p>目的地</p>
        </router-link>
      </li>
      <li @click="clickTag(3)">
        <router-link tag="a" to="/notes">
          <span class="icon icon-notes"></span>
          <p>遇见</p>
        </router-link>
      </li>
      <li>
        <router-link tag="a" to="/member">
          <span class="icon icon-member"></span>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="es6">

    export default {
        name: "tab",

    }
</script>

<style type="text/css">
  @import url('../../assets/css/common.css');
  .router-link-active {
    color: #47aedf;
  }
  .router-link-active .icon-index{
    background: url("../../assets/images/home_on.png");
    background-size: cover;
  }
  .router-link-active .icon-destination{
    background: url("../../assets/images/destination_h.png");
    background-size: cover;
  }
  .router-link-active .icon-notes{
    background: url("../../assets/images/find_on.png");
    background-size: cover;
  }
  .router-link-active .icon-member{
    background: url("../../assets/images/mine_on.png");
    background-size: cover;
  }
</style>
