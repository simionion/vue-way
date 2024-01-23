import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useModalStore = defineStore('modal', {
  state() {
    return {
      modalRef: null,
      title: '',
      component: null,
      componentProps: {}
    }
  },
  actions: {
    setModalRef(ref) {
      this.modalRef = ref?.value
    },
    show({ title, component, componentProps }) {
      this.title = title
      this.componentProps = componentProps || {}
      this.component = markRaw(component)
      this.modalRef?.showModal()
    },
    close() {
      this.modalRef?.close()
    }
  },

  getters: {
    isOpen() {
      return this.modalRef?.hasAttribute('open') || false
    },
    isClosed() {
      return !this.isOpen
    }
  }
})
