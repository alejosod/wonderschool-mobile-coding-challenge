import { MenuItem } from '@/types/MenuItem'

export const reduceCartTotal = (
  accumulator: number,
  currentValue: MenuItem & { itemsNumber: number },
) => accumulator + currentValue.itemsNumber * currentValue.price
