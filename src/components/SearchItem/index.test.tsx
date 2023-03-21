/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { castMoney } from 'utils/castMoney'
import { searchMock } from '__mocks__'
import SearchItem from '.'

describe('Test component <SearchItem item />', () => {

    const item = searchMock.items[0]

    const component = () => {
        return render(
            <MemoryRouter>
                <SearchItem item={item} />
            </MemoryRouter>
        )
    }

    test('should basic render component', async () => {
        component()
        expect(screen.queryByText(item.title)).toBeDefined()
        expect(screen.queryByText(`$ ${castMoney(`${item.price.amount}`)}`)).toBeDefined()
    })

})
