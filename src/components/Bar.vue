<template>
    <div>
        <div class="p-5 bg-danger">
            <h3 class="text-white">Bar</h3>
        </div>
        <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
                <a class="nav-link" :class="{'active': currentTabComponent == 'Child1'}" @click="currentTabComponent = 'Child1'" href="#/bar">Child1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': currentTabComponent == 'Child2'}" @click="currentTabComponent = 'Child2'" href="#/bar">Child2</a>
            </li>
        </ul>
        <div>
            <router-link to="/" class="px-2 py-2">Foo</router-link>
        </div>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

export default {
    components: {
        Child1, Child2
    },
    data: function(){
        return {
            currentTabComponent: 'Child1'
        }
    }
}
</script>