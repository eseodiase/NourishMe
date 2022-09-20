const details1 =()=>{
    return `<div>
    <span class="x">
    <i class="fa fa-times"></i>    
    </span>
        
    <h4>Fried Rice</h4>
<img src="https://eseodiase.github.io/NourishMe/components/items/images/fried_rice.png" class="fullImg" alt="Fried Rice"/><br />

<p class="dP">
<span class="startPrice">$7.00</span> <br />
1 Pack
</p>

<p class="dP">
<span class="startPrice">$5.00</span><br />
Delivery Fee
</p>

<p class="dP">
<span class="startPrice">$0.00</span><br />
Take Away
</p><br />

<button type="button" class="added">Item Added
<span class="tick">
<i class="fa fa-check"></i>
</span> 
</button>


        <span class="drop_btns">
       
         <span id="btn_prices"> 
         <button type="button" class="prices">Add to Cart
         <i class="fa fa-cart-plus" id="plus">
         <span style="visibility:hidden">0</span>
         </i>
         </button>
         </span>
            
        <span class="priceList">   
        
        <li> 
        <button type="button" name="Jollof Rice_1pack" id="price1" class="price" value="$7.00 for 1 plate">$7.00
 <i class="fa fa-cart-plus" id="pluss">1</i>       
        </button>
        </li>
           
           <li> 
        <button type="button" name="Jollof Rice_2packs" id="price2" class="price" value="$13.00 for 2 plate">$13.00
 <i class="fa fa-cart-plus" id="pluss">2</i>       
        </button>
        </li>
          
           <li> 
        <button type="button" name="Jollof Rice_3packs" id="price3" class="price" value="$20.00 for 3 plate">$20.00
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
<p>Longer Lorem Isump dummy texts Longer Isump dummy texts Longer Lorem Isump dummy texts
</p>

</div>`
        
}
export default details1;