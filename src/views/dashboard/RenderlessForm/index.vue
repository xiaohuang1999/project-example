<template>
  <div>
    <slot :user="formInline.user" :changeUser="change"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "这是子组件提供的数据",
      },
    };
  },
  methods: {
    change(e) {
      this.formInline.user = "触发了子组件方法，修改了value";
    },
  },
};
</script>