import Vue from 'vue'
import AppToast from './AppToast.vue'

const constructor = Vue.extend(AppToast)
let instance = null

export default {
  show({ message, timeout = 1500, offset, type = 'default' }) {
    // console.log('show', message, timeout, offset, type)

    instance = new constructor({
      el: document.createElement('div'),
      data() {
        return {
          message,
          timeout,
          type,
          offset,
        }
      },
    })

    instance.state = true
    document.body.appendChild(instance.$el)
  },

  default({ message, timeout, offset }) {
    return this.show({ message, timeout, offset, type: 'default' })
  },
  success({ message, timeout, offset }) {
    return this.show({ message, timeout, offset, type: 'success' })
  },
  info({ message, timeout, offset }) {
    return this.show({ message, timeout, offset, type: 'info' })
  },
  warn({ message, timeout, offset }) {
    return this.show({ message, timeout, offset, type: 'warn' })
  },
  danger({ message, timeout, offset }) {
    return this.show({ message, timeout, offset, type: 'danger' })
  },
}
