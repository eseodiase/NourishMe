const details5 =()=>{
    return `<div>
  <span class="x">
    <i class="fa fa-times"></i>    
  </span>
  
         <h4> Vegitable Soup with Beef</h4>
<img src="images/vegetableSoup.png"  class="fullImg" alt=" Vegetable Soup with Beef"/>
<br />

<p class="dP">
<span class="startPrice">$5.00</span> 
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

<button type="button" class="vSoupAdded">Item Added
<span class="tick">
<i class="fa fa-check"></i>
</span> 
</button>

        <span class="drop_btn5">
       
         <span id="btn_prices"> 
         <button type="button" class="prices">Add to Cart
         <i class="fa fa-cart-plus" id="plus">
         <span style="visibility:hidden">0</span>
         </i>
         </button>
         </span>
            
        <span class="priceList">   
        
        <li> 
        <button type="button" name="Vegetable Soup_1pack" id="vSoupPrice1" class="price" value="$5.00 for 1 plate">$5.00
 <i class="fa fa-cart-plus" id="pluss">1</i>       
        </button>
        </li>
           
           <li> 
        <button type="button" name="Vegetable Soup_2packs" id="vSoupPrice2" class="price" value="$8.00 for 2 plate">$8.00
 <i class="fa fa-cart-plus" id="pluss">2</i>       
        </button>
        </li>
          
           <li> 
        <button type="button" name="Vegetable Soup_3packs" id="vSoupPrice3" class="price" value="$14.00 for 3 plate">$14.00
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
export default details5;
