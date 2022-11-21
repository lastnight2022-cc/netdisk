<template>
  <a-result status="404" title="404" sub-title="Sorry,the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="toHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<!--<script lang="ts">-->
<!--import {defineComponent} from 'vue'-->
<!--import {useRouter} from 'vue-router'-->

<!--const router = useRouter()-->
<!--export default defineComponent({-->
<!--  setup() {-->
<!--    const router = useRouter()-->
<!--    const toHome = () => {-->
<!--      router.push("/");-->
<!--    }-->
<!--    return {toHome}-->
<!--  },-->
<!--})-->

<!--</script>-->
<script>
import {useRouter} from 'vue-router'
const router = useRouter()
export default {
  name:"Exception404",
  methods:{
    toHome() {
      router.push({path:'/'})
    }
  }
}
</script>

<style scoped>

</style>