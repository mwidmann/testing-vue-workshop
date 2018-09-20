import { shallowMount } from '@vue/test-utils'
import SubmitForm from './SubmitForm.vue'

test('calls onSubmit with value of input when form is submitted', () => {  const onSubmit = jest.fn()
  const wrapper = shallowMount(SubmitForm, {
    propsData: {
      onSubmit
    }
  })

  wrapper.find('[type="text"]').setValue('Edd')
  wrapper.find('[type="submit"]').trigger('submit')

  expect(onSubmit).toHaveBeenCalledWith('Edd')
})
