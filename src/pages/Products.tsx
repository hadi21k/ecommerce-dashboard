import AddProduct from "../components/Products/AddProduct";
import CollectionType from "../components/Products/CollectionType";
import SearchInput from "../components/ui/SearchInput";
import SortProductsBy from "../components/ui/SortProductsBy";
import GridContent from "../components/Products/GridContent";
import TableContent from "../components/Products/TableContent";
import { useStore } from "../context/context";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Products: React.FC = () => {
  const { collectionType, setProducts, setFilteredBy } = useStore();
  useEffect(() => {
    const getProducts = async () => {
      const productsRef = collection(db, "products");
      onSnapshot(productsRef, (doc) => {
        setProducts(doc.docs.map((doc) => doc.data()));
        setFilteredBy(doc.docs.map((doc) => doc.data()));
      });
    };
    getProducts();
  }, []);
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between space-y-2 xl:flex-row xl:items-end">
        <AddProduct />
        <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
          <CollectionType />
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0">
            <SearchInput />
            <SortProductsBy />
          </div>
        </div>
      </div>
      {collectionType === "table" ? <TableContent /> : <GridContent />}
    </div>
  );
};

export default Products;
