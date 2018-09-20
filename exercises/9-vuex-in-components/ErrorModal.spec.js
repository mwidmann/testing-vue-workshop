import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils";
import ErrorModal from './ErrorModal.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

test('adds is-active class when state.error is set', () => {
  const state = { error: null }
  const store = new Vuex.Store({
    state
  })
  const wrapper = shallowMount(ErrorModal, {
    localVue,
    store
  })

  expect(wrapper.classes()).not.toContain('is-active')
  state.error = 'OMG OMG'
  expect(wrapper.classes()).toContain('is-active')
})

test('commits setError with null when close button is clicked', () => {
  const commit = jest.fn()
  const wrapper = shallowMount(ErrorModal, {
    mocks: {
      $store: {
        state: { error: 'OMG OMG' },
        commit
      }
    }
  })

  expect(wrapper.classes()).toContain('is-active')
  wrapper.find('[aria-label="close"]').trigger('click')
  expect(commit).toHaveBeenCalledWith('setError', null)
})
