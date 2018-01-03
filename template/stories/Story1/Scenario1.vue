<template>
  <div>
    <HelloWorld hello="Hello World from Story1, Scenario1" />
  </div>
</template>

<script>
export default {
  components: {
    HelloWorld: () => import('@/HelloWorld')
  }
}
</script>
