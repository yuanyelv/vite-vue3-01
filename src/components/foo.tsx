// export default () => {
//   return (
//     <div>
//       <h1>foo 函数式组件</h1>
//     </div>
//   )
// }
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      count: 0
    }
  },
  render () {
    return (
            <div>
            <div>{this.msg}</div>
            <p>{this.count}</p>
            </div>
    )
  }
})
