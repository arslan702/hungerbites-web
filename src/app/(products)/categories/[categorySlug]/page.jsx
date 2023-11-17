'use client';
import { usePathname } from "next/navigation";
import CategoriesSearch from "../../../../views/category";

const category = () => {
  const pathname = usePathname();
  const subCatId = pathname?.split('/')?.pop();
  console.log('sub id ', subCatId);
  return (
    <div style={{ marginTop: 75 }}>
    <CategoriesSearch id={subCatId}/>
    </div>
  )
};
export default category;
