<template>
    <h1 class="light">{{ msg }}</h1>
    <Button label="Submit" class="p-button-secondary" />
</template>

<script>
import {
    defineComponent,
    resolveComponent
} from 'vue';
//import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default defineComponent({
    name: 'TestButton',
    components: {
  //      Dialog,
        Button
    },
    props: {
        msg: String,
    },
    setup() {
        console.log("setup in test button");
        return {

        }
    }
})
</script>

<style lang="css" scoped>
.light {
    color: brown;
}
</style>
