<template>
  <a-result status="404" title="404" sub-title="Sorry,the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="toHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
export default defineComponent({
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push("/");
    }
    return {toHome}
  },
})

</script>

<style scoped>

</style>