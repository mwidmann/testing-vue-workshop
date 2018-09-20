import ProgressBar from './ProgressBar.vue'
import { shallowMount } from '@vue/test-utils';

test('increments width by 1% every 100ms', () => {
  jest.useFakeTimers()
  const wrapper = shallowMount(ProgressBar)

  jest.advanceTimersByTime(100)
  expect(wrapper.vm.percent).toBe(1)
  expect(wrapper.element.style.width).toBe('1%')

  jest.advanceTimersByTime(100*9)
  expect(wrapper.vm.percent).toBe(10)
  expect(wrapper.element.style.width).toBe('10%')

  jest.advanceTimersByTime(100*90)
  expect(wrapper.vm.percent).toBe(100)
  expect(wrapper.element.style.width).toBe('100%')
})
