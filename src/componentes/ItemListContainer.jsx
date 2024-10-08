import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import {getDocs, collection, query, where} from "firebase/firestore";
import db from "../database/db.js";

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const [estaCargando, setEstaCargando] = useState(false)
  const { idCategoria } = useParams()
  
  const getProducts = async() => {
    const productosRef = collection(db, "productos")
    const dataDb = await getDocs(productosRef)

    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });
      setProductos(data)
  };

  const getProductsByCategory = async() => {
      const productosRef = collection(db, "productos")
      const q = query(productosRef, where("categoria", "==", idCategoria))
      const dataDb = await getDocs(q)

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
        
  });
  setProductos(data) 
};

  useEffect(() => {
    if(idCategoria){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategoria]);

  return (
    <div className="item">
      <h2 className="title">Bienvenido a mi E-commerce</h2>
      {estaCargando ? <div><DotLoader
  color="black"
  cssOverride={{}}
/></div>: <ItemList productos={productos} />}
      


    </div>

  )
};

export default ItemListContainer