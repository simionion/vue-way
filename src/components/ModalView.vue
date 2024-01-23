<script setup>
import { useModalStore } from '@/stores/ModalStore.js'
import { onMounted, ref } from 'vue'

const modal = useModalStore()
let modalRef = ref(null)

onMounted(() => {
  modal.setModalRef(modalRef)
})
</script>
<template>
  <teleport to="body">
    <dialog
      ref="modalRef"
      class="absolute h-full w-full overscroll-contain bg-black bg-opacity-50"
      role="alertdialog"
      aria-modal="true"
      @click.self="modalRef.close()"
    >
      <div
        class="absolute left-1/2 top-1/2 h-max w-max -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white text-black shadow-lg"
      >
        <header class="flex justify-between p-4">
          <h3 class="text-xl font-bold">{{ modal.title }}</h3>
          <button @click="modalRef.close()" class="text-xl font-bold">&times;</button>
        </header>
        <main class="p-4" v-if="modal.component">
          <component :is="modal.component" v-bind="modal.componentProps" />
        </main>
      </div>
    </dialog>
  </teleport>
</template>
