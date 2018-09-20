import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

test('emits on-close event when close button is clicked', () => {
  const wrapper = shallowMount(Modal)
  expect(wrapper.emitted('close-modal')).toBeUndefined()
  wrapper.find('[aria-label="close"]').trigger('click')
  expect(wrapper.emitted('close-modal')).toHaveLength(1)
})
