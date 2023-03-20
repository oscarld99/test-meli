
import ItemsApi from 'api/items/index'
import { DetailResponse, SearchResponse } from 'interfaces'
import { detailMock, searchMock } from '__mocks__'

class ItemService {
    private static _instance: ItemService

    private readonly itemsApi: typeof ItemsApi

    private constructor() {
        this.itemsApi = ItemsApi
    }

    public static get instance(): ItemService {
        if (ItemService._instance === undefined) {
            ItemService._instance = new ItemService()
        }
        return ItemService._instance
    }

    getItems = async (query: string): Promise<SearchResponse> => {
        try {
            const result = await this.itemsApi.getItemsByQuery<SearchResponse>(query)
            return result.data
        } catch ({ error }) {
            console.log('error in ItemsService getItems', error)
            return searchMock
        }
    }

    getItemById = async (productId: string): Promise<DetailResponse> => {
        try {
            const result = await this.itemsApi.getItemById<DetailResponse>(productId)
            return result.data
        } catch ({ error }) {
            console.log('error in ItemsService getItemById', error)
            return detailMock
        }
    }

}

export default ItemService.instance
