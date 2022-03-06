import nc from 'next-connect'
import db from '@/utils/db'
import { onError } from '@/utils/error'
import Product from 'models/Product'
import { isAuth, isAdmin } from '@/utils/auth'

const handler = nc({
  onError,
})
handler.use(isAuth, isAdmin)

handler.get(async (req, res) => {
  await db.connect()
  const products = await Product.find({})
  await db.disconnect()
  res.send(products)
})

export default handler