import client, { ResponseWS } from "lib/client"


class ItemsApi {
    private static _instance: ItemsApi

    public static get instance(): ItemsApi {
        if (ItemsApi._instance === undefined) {
            ItemsApi._instance = new ItemsApi()
        }
        return ItemsApi._instance
    }

    getItemsByQuery = async <T>(query: string): Promise<ResponseWS<T>> => client.get(['items', query].join('/'))

    getItemById = async <T>(productId: string): Promise<ResponseWS<T>> => client.get(['items', 'detail', productId].join('/'))
}

export default ItemsApi.instance
