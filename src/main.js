// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue

Vue.config.productionTip = false
import Demo from './Demo.vue'//优先使用demo-->模块化

Vue.component('Demo2', {
    template: `
    <div>demo22222<div>
   `
})
//Vue实例或Vue对象
new Vue({
    components: {
        Demo,//Demo:Demo的缩写
        Demo3: {
            template: `
                <div>demo33333</div>
            `
        }
    },

    //生命周期
    create(){
        console.log('我在内存中，还没出现在页面中')
    },mounted() {
        console.log('我已出现在页面中')
    },updated(){
        console.log('更新了')
        console.log(this.n)
    },destroyed(){},

    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },

    template: `
        <div class="red">
            {{n}}
            <button @click="add">+1</button>
            <Demo/>
            <Demo2/>
            <Demo3/>
            <hr>
            {{filter()}}
        </div>
    `,

    methods: {
        add() {
            this.n += 1
        },
        filter() {
            return this.array.filter(i => i % 2 === 0)
        }
    }
}).$mount('#app')