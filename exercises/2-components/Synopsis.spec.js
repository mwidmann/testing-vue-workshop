import { shallowMount } from '@vue/test-utils'
import Synopsis from './Synopsis.vue'

// You can use the Vue Test Utils slots option to pass in a slot:
//
// const wrapper = shallowMount(Component, {
//   slots: {
//     foo: '<div />',
//     bar: 'bar',
//   }
// })
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders short slot, and hides long slot, initially', () => {
    const long = 'Long slot'
    const short = 'Short slot'

    const wrapper = shallowMount(Synopsis, {
        slots: {
            long: `<p>${long}</p>`,
            short: `<p>${short}</p>`
        }
    })

    expect(wrapper.text()).toContain(short)
    expect(wrapper.text()).not.toContain(long)
})

// You can use the Vue Test Utils find and trigger methods to trigger an event:
//
// const wrapper = shallowMount(Component)
// wrapper.find('button').trigger('click')
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders long slot, and hides short slot, when button is clicked', () => {
    const long = 'Long slot'
    const short = 'Short slot'

    const wrapper = shallowMount(Synopsis, {
        slots: {
            long: `<p>${long}</p>`,
            short: `<p>${short}</p>`
        }
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.text()).not.toContain(short)
    expect(wrapper.text()).toContain(long)
})

test('toggles "Show more/ show less" when button is clicked', () => {
    const wrapper = shallowMount(Synopsis)

    expect(wrapper.text()).toContain('Show more')

    wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('Show less')
})
