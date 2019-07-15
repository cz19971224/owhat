import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

// vuex使用步骤
        // 1 安装vuex  npm install vuex --save
        // 2 新建store对象 并导出
        // 3 在根组织中导入store 每个组件中都会多一个$store对象 可以通过$store.state.状态名称 访问store中状态 也可以采用mapState\mapGetters将store中数据映射到组件的computed中
        // 4组件同步更新store的数据 采用this.$store.commit('事件名',数据) store监听到事件 会执行mutations中同名的函数
        // 5组件异步更新store的数据 采用this.$store.dispatch('事件名',数据) store监听到事件 会执行actions中同名的函数 需要特别注意 action不能更新数据 需要在actions中commit mutation更新数据


// vuex基于vue的状态管理工具 集中式管理项目的所有组件使用的状态
// vuex的核心就是存储数据的store
// 特点   1 支持响应式  组件使用数据时 从store中获取 当store中数据更新时 组件视图会相应的更新
        //   2 组件不能直接更新store中数据 当组件需要更新store中数据时 采用commit mutation(提交变化)的方式

// 单一状态树 整个项目只有一个store store中数据为了结构清晰 比照着组件数 将所有数据划分模块存储 形成一棵类似组件树的状态树

// state 存储数据  类似组件的data
// getters 计算属性 由state数据计算得到(派生状态) 类似组件中的computed
// mutations 同步操作 更新状态
// action 可以包含异步操作 不能直接更新状态 需要提交mutation
export default new Vuex.Store({
    state:{
        user:''
    },
    actions:{
        islogin(context,ispayload){
            axios.get(`/isLogin`)
            .then((res)=>{
                context.commit('islogin',res.data)
                console.log(res)
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    },
    mutations: {
        islogin(state, payload) {
            state.user = payload
            console.log(state.user)
        }
    }
})