import store from '../../vuex/store'

export default {
  name: 'levelChoice',
  props: ['degree', 'maxNumber','minNumber','nameKey'],
  data() {
    return {
      level: this.degree
    }
  },
  methods: {
    // 提交这个数据并隐藏组件
    updateLevel(e) {
      // 我真的不想这样写啊..
      let thisComponent = e.currentTarget.parentElement;
      thisComponent.style.opacity = 0;
      thisComponent.disabled = true;

      this.level = Number.parseInt(this.level);

      if (this.level < this.minNumber || this.level > this.maxNumber) {
        this.level = this.degree;
        alert(`请输入${this.minNumber}-${this.maxNumber}的整数`);
        return;
      }
      store.commit(this.nameKey, this.level);
    },
    // 显示组件
    // 这样写太痛苦了....
    showComponent(e) {
      let thisComponent = e.target.parentElement;
      thisComponent.style.opacity = 1;
      thisComponent.disabled = false;
    }
  }
}