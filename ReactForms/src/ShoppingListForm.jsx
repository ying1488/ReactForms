import { useState } from "react";
function ShoppingListForm(){
const [formData,setFormData] = useState({product:"",quantity:""});
const handleChange = (evt) => {
  const changeField = event.target.name;
  
  setFormData((currData)=>{
    return{
      ...currData,
      [evt.target.name]:evt.target.value
    };
  });
}
return(
  <form>
    <h1>Product is {formData.product} and quantity is {formData.quantity}</h1>
    <label htmlFor="product">Product</label>
    <input
    type="text"
    placeholder="product name"
    name="product"
    id="product"
    onChange={handleChange}
    value={formData.product}
    />
    <label htmlFor="quantity">Quantity</label>
    <input
    type="number"
    placeholder="quantity"
    name="quantity"
    id="quantity"
    onChange={handleChange}
    value={formData.quantity}
    />
    <button>Add Item</button>
  </form>
)
}
export default ShoppingListForm;