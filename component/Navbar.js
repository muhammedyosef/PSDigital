import Link from "next/link";
import {  useState } from "react";
import { useSelector } from "react-redux";
import Styles from '../styles/Navbar.module.css'
const Navbar = () => {
  const cartProd=useSelector(state=>state.cartprod); 
  const [prod,setProd]=useState(1);
  const removeitem = (id) => {
    if(id>-1){
       cartProd.splice(id,1);
    }
    setProd(prod+1);
  };
  const increment=(id)=>{
    const res =cartProd[id].DefaultPrice
    cartProd[id].DisplayOrder+=1;
    cartProd[id].FinaltPrice=res*cartProd[id].DisplayOrder;
    setProd(prod+1);
  }
  const decrement=(id)=>{
    const res =cartProd[id].DefaultPrice
    if(cartProd[id].DisplayOrder>1){
      cartProd[id].DisplayOrder-=1;
      cartProd[id].FinaltPrice=res*cartProd[id].DisplayOrder;
    }else{cartProd[id].DisplayOrder=1;
      cartProd[id].FinaltPrice =cartProd[id].DefaultPrice
    }
    setProd(prod+1);
  }



    return ( 
        <nav className={`${Styles.navbar} navbar navbar-expand-lg navbar-dark texas_navbar texas-navbar-light navbar navbar-expand-lg navbar-light `}>
        <div className={` container-fluid`}>
            {/* <Link href={'/'}> */}
          {/* <a className={`${Styles.licolor} navbar-brand`} >Navbar</a> */}
          <img className="ms-5" src="https://texas-psdigital.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimages%2FlogoW-59522258c45ee846225f46d80ba3589e.png&w=128&q=75"/>
            {/* </Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className={Styles.navbar+ " nav-item"}>
                  <Link href={"/"}>
                <a className={Styles.lii +" nav-link"} >Home</a>

                  </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" >Link</a> */}
              </li>
              <li className="nav-item dropdown" onClick={e=>{e.stopPropagation()}}>
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OUYwMDJEMjA0N0ExMUVBODlBOEJERUJENkU3RjVEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OUYwMDJEMzA0N0ExMUVBODlBOEJERUJENkU3RjVEMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5RjAwMkQwMDQ3QTExRUE4OUE4QkRFQkQ2RTdGNUQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY5RjAwMkQxMDQ3QTExRUE4OUE4QkRFQkQ2RTdGNUQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sADWywAABKdJREFUeNrUmXlsTVkcx8+zlNKqKgZjqX1nithFQoikCUIwlMQuxPqXmZFMZiYTyx8SjC21JKKE1B5LbfGHxFhiiTW2ICR2itoGfb6/vO+N05P7Ove17717/JJPzrv3nnvv+d1zzm97gWAwqEz5uLudKoV0AGNBN/AW7AHZoADMA4PAO7AbbAAvSvKSCoMuFjkORFGRcmAXyOTxJ1Beu54F+oPRoKx2fjZYWlpFyqjoyVUq8RtIBQnyoUAbcARsAmepsHN+P1gC5pf25dFSZDtoCrqDBSBfu3YF9AObwTL2c86L4qvBr1yKvipSCwzhgP4tpl8W21zj/FQuwxy/FRnG9m8PfTeC9sbeEVkBGoFkPxWpxzbfQ19nxn4wzl8Ocz6uinxhW96LsQnzXufeQj8VcV4eiOB9hWHOB/22Wr5LvBVJ0JxnEcesOVHfFKkewbOegGfgrnH+AdsCtrVLElaUVg6DauC5h757wUvQFzQgzUATXt8G7oDxYCtYB456GUQgBkFjTdAY1OeXbcrBiuNMoa+oGuZeGcx5Bp6OXKBCObqJN2OtksxIIgeaDupwwDLYhhx4bSMojEQeuczsT+AfxmMS5qwHp70uLbHrrUBd0IJLoC4H3biYLxpLkZmcQpaDGV4U+Qv8YrG1HWUqUqaYQNBmue/V/BZ8bw6xXJSfd4ObVQxCu3g63Gi9aDV9QXMmVxlURvbZqwif9ckPRZ6CjkyOboMuzMkHgP/AInr+YzbPiHzpluAcCwgPwUkmTwfo3MTmfwZ9wAlb90gv7gdJlrq6XL/E59/hkusJ3oDKNs3ISg60Cx2nm3SjJ07nrMkM/Wzb0prOvbGW8dNCl4KCFOcG8rg1iw97uQStUOQgv+5i1qYyWM7J4CAP0YophjaOZLOdb4siK9n2ZrtQi1L3gRFa30ba70o00WtsUUSWR2ftuD/3yWJaqXzt2S2MeydIlsCcxHdFCo18QUSqhrmqaIFOZiNPhQrWjjiG4Zbfinww0ltH/qAP0UUKcXM5K2d5rg7bt+ESPfqdmCsSMGpZipnbny59U4hEqp3AHEYC/1c6KlFJKFKH6BTY7mlLakwxSzCBy7A+Y69rvJZmg2dPpSL3aH4dEYv0mN5bMfWVFDVJ6zNP6+v7Zh9JT70FzKIVuw5ugt+1fq0NJRRTVMnpK9qgyETwHtRQoT9pMlklERmn9Us37pOY6zUDTCv8SAZLPlNdrqUx0lUsVpgzKTLTplhrB/ONLJdr09jqUa44ylNcehVtUqQHmMTodpZxbagKVQqTNPMsHr1tGDPte2KVzUxwGa3XDoYfiuGKOMjhNM9pNidWipmghPQrOBOO1w+qbxVDSah2ulgwq3J2x6SeAZPBjypUbRerNliF/u097hLSWFsO6kSc8KWsirPEou4UdyVipYiySZGA5eNu4FWRGhYrIYnaKq+bXYoHUshOptkUL11Fo1qMlmUCc3u3hC6PVvCAcvmbL5wix1T4MqfkJFWpXBKppClZnVQxPkQKf6fy/kSXZycxsHT8yX4OPk9LyqJmfj8y74jkCydykMn08mn8naJ9EJnl28z78xkZ7PFaqPgqwACESOvoPxaZQAAAAABJRU5ErkJggg==" style={{width:30,height:30}}/>
                </a>
                <ul  className="dropdown-menu" aria-labelledby="navbarDropdown" style={{width:300,overflow:"scroll",height:300}}>
                  { cartProd.map((prod,index)=>{
                    return(
                      <>
                       <li key={prod.ID}>
    <button type="button" className="btn-close d-flex ms-auto"   onClick={() => removeitem(index)}></button>
                  <div className="card mb-3 border-0" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={prod.ImagePath} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{prod.Name}</h5>
        <p className="card-text"><small className="text-muted">{prod.FinaltPrice?prod.FinaltPrice:prod.DefaultPrice} BHD</small></p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary" type="button" onClick={()=>increment(index)}>+</button>
  <span>{prod.DisplayOrder}</span>
  <button className="btn btn-primary" type="button"onClick={()=>decrement(index)}>-</button>
</div>
    </div>
  </div>
</div>
                  </li>
                  <hr/>
                      </>
                    )
                  })}
                 
                
           
                </ul>
              </li>
             
            </ul>
        
          </div>
        </div>
      </nav>
          
     );
}
 
export default Navbar;


