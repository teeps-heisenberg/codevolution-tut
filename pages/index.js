import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter();

  const onClickHandler = ()=>{
    router.push('/product')
    //router.replace('/product')
  }
  return (
    <div>
      <h1>Hello World</h1>
      <Link href='/product'>Product List</Link>
      <br/>
      <button onClick={onClickHandler}>Place Order</button>
    </div>
  )
}
