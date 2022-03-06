import Link from "next/link";
import { useRouter } from "next/router";

import { useDispatch} from "react-redux";
import { CartProd } from "../../../store/actions/category";
import Styles from '../../../styles/ProductDetails.module.css';

const Product = ({product}) => {
 

   const dispatch=useDispatch();
   const router = useRouter()
  const {id} = router.query
  
    const handleCategoryID=(e)=>{
        e.DisplayOrder=1
        dispatch(CartProd(e))
    }
  
    return ( 
        <>
        <div className="container">
        <div className="row">
            <div className="col-6 mt-5">
                <div >
        <h1 className="text-center mt-5">{product[0].Name}</h1>
        <p className=" text-center mt-2 text-muted">{product[0].Description}</p>
        <p className="text-center  text-muted">{product[0].Name}</p>
        <h3 className="text-center" style={{color:"#F8B055"}}>{product[0].DefaultPrice} BHD</h3>
                </div>
               
                <Link  href={`/products/${product[0].CategoryID}`}>
                <button className={Styles.btnaa+" btn  me-2"}>back</button>
                </Link>
                {/* <span className={Styles.btna}> */}

                <button className={Styles.btna+" btn "} onClick={()=>handleCategoryID(product[0])}>Add to cart </button>
                {/* </span> */}
                
                
            </div>
            <div className="col-6">
                <img src={product[0].ImagePath} style={{width:400,height:400}}/>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Product;
export async function getStaticPaths() {
    const req=await fetch("https://task-api-eosin.vercel.app/api/products?catID=19");
    const req1=await fetch(`https://task-api-eosin.vercel.app/api/products?catID=20`);
    const res1=await req1.json();
    const res = await req.json();
      const paths1=res.map(prod=>{
          return{
              params:{id:prod.ID.toString(),idd:"19"}
          };
      });
      const paths2=res1.map(prod=>{
        return{
            params:{id:prod.ID.toString(),idd:"20"}
        };
    });
  
      return{
        paths:[...paths1,...paths2],fallback:false
    }
  }

export async function getStaticProps(context){
    let product=[];
    const id= context.params.id;
    
    const req=await fetch(`https://task-api-eosin.vercel.app/api/products?catID=20`);
    const req1=await fetch("https://task-api-eosin.vercel.app/api/products?catID=19");
    const res = await req1.json();
    const products=await req.json();
    product=res.filter(e=>e.ID==id);
    if(product.length==0){
    product=products.filter(e=>e.ID==id);

    }
    return{
        props:{product}
    }
}