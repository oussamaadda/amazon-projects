export const cart=[];
export function addToCart(productId){
    let matchigItem;
  
    cart.forEach((item)=>{
        if(productId === item.productId){
            matchigItem = item
        }
    })
    
    if(matchigItem){
        matchigItem.quantity+=1.;
    }else{
        cart.push(
            {
                productId:productId,
                quantity:1
            }
        );
       
    }
  };