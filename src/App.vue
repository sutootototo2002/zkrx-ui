<template>
  <div id="app">
    <div>
     <zk-button>按钮</zk-button>
     <zk-button type='success'>按钮组件1</zk-button>
     <zk-button type='success'>按钮组件2</zk-button>
     <zk-button type='info'>按钮组件3</zk-button>
     <zk-button type='warning'>按钮组件3</zk-button>
     <zk-button type='danger'>按钮组件3</zk-button>
    </div>
    <div>
     <zk-button>按钮</zk-button>
     <zk-button plain type='success'>按钮组件1</zk-button>
     <zk-button plain type='success'>按钮组件2</zk-button>
     <zk-button plain type='info'>按钮组件3</zk-button>
     <zk-button plain type='warning'>按钮组件3</zk-button>
     <zk-button plain type='danger'>按钮组件3</zk-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">

</style>
