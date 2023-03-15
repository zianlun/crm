<template>
    <div class="app">
        <come-header></come-header>
        <router-view></router-view>
    </div>
</template>

<script>
import ComeHeader from '@/components/ComeHeader.vue';
export default {
    name:"ComeView",
    components:{
        ComeHeader
    }
}
</script>

<style lang='less' scoped>

</style>