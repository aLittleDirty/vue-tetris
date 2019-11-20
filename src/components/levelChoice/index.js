import store from '../../vuex/store'

export default {
    name:'levelChoice',
    props:['speedStart'],
    data(){
        return{
            level:this.speedStart
        }
    },
    methods:{
        // 提交这个数据
        updateLevel(){
            this.level = Number.parseInt(this.level);
            if(this.level<1 || this.level>6){
                this.level = this.speedStart;
                    alert('请输入1-6的整数');
                    return;
            }
            store.commit('speedStart',this.level);
        }
    }
}


