'use client';
import CategoriesProducts from "@/views/restaurantId";
import { usePathname } from "next/navigation";

const category = () => {
  const pathname = usePathname();
  const catId = pathname?.split('/')?.pop();
  console.log('cat id ', catId);
  return (
    <div style={{ marginTop: 75 }}>
    <CategoriesProducts id={catId}/>
    </div>
  )
};
export default category;
