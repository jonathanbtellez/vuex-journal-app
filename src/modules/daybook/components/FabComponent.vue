<template>
<!-- Using $emit method we can dispach a custom event directly -->
<button @click="$emit('on:click')" class="btn btn-primary">
            <i class="fa fa-2x"
                :class="icon"
            ></i>
        </button>
</template>
<script>
export default {
    props:{
        icon:{
            type: String,
            default: "fa-plus"
        }
    },
    // This propertie receive a array with the name of custom events to use
    // emits:['on:click'],
    methods:{
        /**
         * Emit the custon event in the parent component
         */
        // saveEntry(){
        //     this.$emit('on:click')
        // }
    }
}

</script>

<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
</style>