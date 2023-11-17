'use client'
import ProductDetail from "@/views/productDetail";
import { usePathname } from "next/navigation";
const productDetailPage = () => {
  const pathname = usePathname();
  const productId = pathname?.split('/')?.pop();
  console.log('queryyyy   - ', productId);
  return (
  <ProductDetail id={productId}/>
  )
};
export default productDetailPage;
