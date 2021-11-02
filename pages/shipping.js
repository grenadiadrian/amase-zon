import { Store } from "@/utils/Store"
import {useRouter} from "next/router"
import { useContext } from "react"

export default function ShippingScreen() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { userInfo } = state
  if (!userInfo) {
    router.push('/login?redirect=/shipping')
  }
  return (
    <div>Shipping Page</div>
)
}