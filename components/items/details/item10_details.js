const details10 =()=>{
    return `<div>
 <span class="x">
    <i class="fa fa-times"></i>    
  </span>
  
         <h4>Beef Kebab</h4>
<img src="images/beefKebab.png" class="fullImg" alt="Beef Kebab"/>
<br />

<p class="dP">
<span class="startPrice">$4.00</span> 
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
        
<button type="button" class="addBkebab">Item Added
<span class="tick">
<i class="fa fa-check"></i>
</span> 
</button>

        <span class="drop_btn10">
       
         <span id="btn_prices"> 
         <button type="button" class="prices">Add to Cart
         <i class="fa fa-cart-plus" id="plus">
         <span style="visibility:hidden">0</span>
         </i>
         </button>
         </span>
            
        <span class="priceList">   
        
        <li> 
        <button type="button" name="Beef Kebab_1pack" id="bKebab1" class="price" value="$4.00 for 1 stick">$4.00
 <i class="fa fa-cart-plus" id="pluss">1</i>       
        </button>
        </li>
           
           <li> 
        <button type="button" name="Beef Kebab_2packs" id="bKebab2" class="price" value="$7.00 for 2 sticks">$7.00
 <i class="fa fa-cart-plus" id="pluss">2</i>       
        </button>
        </li>
          
           <li> 
        <button type="button" name="Beef Kebab_3packs" id="bKebab3" class="price" value="$12.00 for 3 sticks">$12.00
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
export default details10;
