<template>
  <div class="layoutContainer">
    <div class="header">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
          <span>header</span>
        </div>
        <slot name="header"></slot>
      </el-card>
    </div>
    <div class="main">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
          <span>main</span>
        </div>
        <slot name="main"></slot>
      </el-card>
    </div>
    <div class="footer">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
          <span>footer</span>
        </div>
        <slot name="footer"></slot>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 20px;
}
.footer {
  margin-top: 20px;
}
</style>