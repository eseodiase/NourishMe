const details3 =()=>{
    return `<div>
  <span class="x">
    <i class="fa fa-times"></i>    
  </span>
  
         <h4>Red Wine</h4>
<img src="https://eseodiase.github.io/NourishMe/components/items/images/red_wine.png" class="fullImg" alt="Red Wine"/>
<br />

<p class="dP">
<span class="startPrice">$8.00</span> 
<br />
1 Pack
</p>

<p class="dP">
<span class="startPrice">$5.00</span>
<br /> 
Delivery Fee
</p>

<p class="dP">
<span class="startPrice">$0.00</span>
<br /> 
Take Away
</p>
<br />

<button type="button" class="addWine">
Item Added
<span class="tick">
<i class="fa fa-check"></i>
</span> 
</button>

        <span class="drop_btn3">
       
         <span id="btn_prices"> 
         <button type="button" class="prices">Add to Cart
         <i class="fa fa-cart-plus" id="plus">
         <span style="visibility:hidden">0</span>
           </i>
        </button>
        </span>
            
        <span class="priceList">   
        
        <li> 
        <button type="button" name="Red Wine_1pack" id="rWine1" class="price" value="$8.00 for 1 bottle">$8.00
 <i class="fa fa-cart-plus" id="pluss">1</i>       
        </button>
        </li>
           
           <li> 
        <button type="button" name="Red Wine_2packs" id="rWine2" class="price" value="$16.00 for 2 bottles">$16.00
 <i class="fa fa-cart-plus" id="pluss">2</i>       
        </button>
        </li>
          
           <li> 
        <button type="button" name="Red Wine_3packs" id="rWine3" class="price" value="$22.00 for 3 bottles">$22.00
 <i class="fa fa-cart-plus" id="pluss">3</i>       
        </button>
        </li>
          
<li> 
<button type="button" id="toMore" class="price">
             More
<span class="more">
<a href="#">
<i class="fa fa-chevron-right"></i>
</a>
</span>
</button>
</li>
                 
                 </span>
            
            </span>
            
           <h3>Details</h3>
<p>Longer Lorem Isump dummy texts Longer Isump dummy texts Longer Lorem Isump dummy texts</p>
        
    </div>`;
}
export default details3;