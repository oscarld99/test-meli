/* eslint-disable jest/no-mocks-import */
import {
    cleanup,
    render,
    screen,
    waitFor
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { searchMock } from '__mocks__'
import Search from '.'

afterEach(cleanup)

describe('Test component <Search />', () => {

    const component = () => {
        return render(
            <MemoryRouter initialEntries={[{ pathname: '/items', search: '?seacrh=celular' }]}>
                <Search />
            </MemoryRouter>
        )
    }

    const itemTittle = () => screen.getByRole('group')
    const emptyImage = () => screen.getByRole('img')


    test('should render component', async () => {
        window.fetch = jest.fn(() => ({
            json() { return Promise.resolve({ status: 200, data: searchMock }) },
            status: 200
        })) as any
        component()
        await waitFor(() => { return itemTittle() })
        expect(itemTittle()).toBeDefined()
    })

    test('should render component with empty items', async () => {
        window.fetch = jest.fn(() => ({
            json() { return Promise.resolve({ status: 200, data: { items: [] } }) },
            status: 200
        })) as any
        component()
        await waitFor(() => { return emptyImage() })
        expect(emptyImage()).toBeDefined()
    })

})
