import { ItemApiResponse } from '@/types/ItemApiResponse'

//dummy function to map api response to UI usable data model.
// I like to obscure api implementation to ui model to remove dependencies.
export const MenuResponseToMenusItem = (apiResponse: ItemApiResponse) => ({
  id: apiResponse.id,
  name: apiResponse.name,
  price: apiResponse.price,
})
