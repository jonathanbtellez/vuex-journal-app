<template lang="">
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">19 </span>
            <span class="mx-1 fs-3">Julio </span>
            <span class="mx-2 fs-4 fw-light">2023, Lunes.</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Delete
                <i class="fa fa-trash-alt"></i>                
            </button>
            <button class="btn btn-primary mx-2">
                Subir foto
                <i class="fa fa-upload"></i>                
            </button>            
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="¿Que sucedio hoy?"
        ></textarea>
    </div>
    <FabComponent/>
    <img src="https://www.hindustantimes.com/ht-img/img/2023/04/07/1600x900/jujutsu-kaisen_1680853025638_1680853037810_1680853037810.jpeg" alt="entry-picture" class="img-thumbnail"/>
</template>
<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue'))
    }
}
</script>
<style lang="scss" scoped>
    textarea{
        border: none;
        font-size: 20px;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
    }
</style>