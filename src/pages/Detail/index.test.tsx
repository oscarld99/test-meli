/* eslint-disable jest/no-mocks-import */
import {
    cleanup,
    render,
    screen,
    waitFor
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { detailMock } from '__mocks__'
import Detail from '.'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: '/items/MLA1376065024' }),
}));

afterEach(cleanup)

describe('Test component <Detail />', () => {

    const component = () => {
        return render(
            <MemoryRouter>
                <Detail />
            </MemoryRouter>
        )
    }

    const itemTittle = () => screen.getByRole('contentinfo')
    const errorImage = () => screen.getByRole('img')


    test('should render component', async () => {
        window.fetch = jest.fn(() => ({
            json() { return Promise.resolve({ status: 200, data: detailMock }) },
            status: 200
        })) as any
        component()
        await waitFor(() => { return itemTittle() })
        expect(itemTittle()).toBeDefined()
    })

    test('should render component with failed data', async () => {
        window.fetch = jest.fn(() => ({
            json() { return Promise.resolve({ status: 200, data: [] }) },
            status: 200
        })) as any
        component()
        await waitFor(() => { return errorImage() })
        expect(errorImage()).toBeDefined()
    })

})
