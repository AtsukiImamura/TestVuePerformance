<template>
    <div>
        <div class="p-5 bg-info">
            <h3>Child1</h3>
        </div>
        <div class="bt-3 border border-info p-3">
            <div class="row" v-for="(verb, index) in verbList" :key="index">
                <div class="col-2">{{ verb.word_id }}</div>
                <div class="col-2">{{ verb.type }}</div>
                <div class="col-2">{{ verb.person }}</div>
                <div class="col-2">{{ verb.word }}</div>
            </div>
        </div>
    </div>
</template>

<script>

import MainStore from '../stores/MainStore.js'
export default {
    computed: {
        verbList(){
            return MainStore.state.verbList
        }
    }
}
</script>