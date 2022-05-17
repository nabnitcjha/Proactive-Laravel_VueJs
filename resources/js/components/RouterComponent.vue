<template>
<admin-index></admin-index>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import AdminTemplateIndex from './AdminTemplate/Index.vue';
    export default {
        components:{
            'admin-index':AdminTemplateIndex
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
