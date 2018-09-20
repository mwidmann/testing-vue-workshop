import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Modal from './Modal.vue'

test('removes Modal when close-modal is emitted', () => {
  const wrapper = shallowMount(App)

  wrapper.find(Modal).vm.$emit('close-modal')

  expect(wrapper.findAll(Modal)).toHaveLength(0)
})
