<template>
    <button class="zk-button" :class="[`zk-button--${type}`,{'is-plain':plain}]"><slot></slot></button>
</template>
<script>
export default {
  name: 'ZkButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.type)
  }
}
</script>
