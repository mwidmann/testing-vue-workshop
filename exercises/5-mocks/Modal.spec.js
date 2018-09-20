import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

// Use jest.fn to create a mock function
test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn()
  const wrapper = shallowMount(Modal, {
    propsData: {
      onClose
    }
  })

  wrapper.find('[aria-label="close"]').trigger('click')
  expect(onClose).toHaveBeenCalled()
})
