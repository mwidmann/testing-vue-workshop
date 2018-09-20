import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import Menu from './Menu.vue'

test('renders router-link to /login page when signedIn is false', () => {
  const wrapper = shallowMount(Menu, {
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
  expect(wrapper.find(RouterLinkStub).props('to')).toBe('/login')
})

test('renders <a> that signs user out if signedIn is true', () => {
  const signOut = jest.fn()
  const wrapper = shallowMount(Menu, {
    propsData: {
      signOut,
      signedIn: true
    },
    stubs: {
      RouterLink: RouterLinkStub
    }
  })

  wrapper.find('a').trigger('click')
  expect(wrapper.findAll(RouterLinkStub)).toHaveLength(0)
  expect(signOut).toHaveBeenCalled()
})
