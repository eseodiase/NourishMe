const cart =()=>{
    return `<div>
           
    <!-- my cart notification--> 
            <p class="notification">
                 Cart is currently empty!<br/>
                 Please, select from our menu.
            </p>
    <!-- my cart notification ending-->    
    
    <!-- the selected items spaces--> 
            <div class="selectedItems">
            
            <div class="item1Space"></div>
            <div class="item2Space"></div>
            <div class="item3Space"></div>
            <div class="item4Space"></div>
            <div class="item5Space"></div>
            <div class="item6Space"></div>
            <div class="item7Space"></div>
            <div class="item8Space"></div>
            <div class="item9Space"></div>
            <div class="item10Space"></div>
            <div class="item11Space"></div>
            <div class="item12Space"></div>
            <div class="item13Space"></div>
            <div class="item14Space"></div>
            <div class="item15Space"></div>
            <div class="item16Space"></div>
            <div class="item17Space"></div>
            <div class="item18Space"></div>
            
            </div>
            <br/><br/>   
            <hr class="hr">
    <!-- the selected items space ending-->    
    
    <!-- the selected items sent to admin-->    
    <div class="sent_items">
    <input type="hidden" name="Fried Rice with Chicken Packs" class="item1Holder"/>
    
    <input type="hidden" name="Cartfish Pepper Soup Packs" class="item2Holder"/>
    
    <input type="hidden" name="Red Wine Packs" class="item3Holder"/>
    
    <input type="hidden" name="Orange Fruit Juice Packs" class="item4Holder"/>
    
   <input type="hidden" name="Vegetable Soup with Beef Packs" class="item5Holder"/>
   
   <input type="hidden" name="Chocolate Cake Packs" class="item6Holder"/>
   
   <input type="hidden" name="Grilled Fish with Cheeps Packs" class="item7Holder"/>
    
   <input type="hidden" name="Suya Packs" class="item8Holder"/>
    
   <input type="hidden" name="Wheat Balls Packs" class="item9Holder"/>
   
   <input type="hidden" name="Beef Kebab Packs" class="item10Holder"/>
   
   <input type="hidden" name="Fruit Salad Packs" class="item11Holder"/>
    
   <input type="hidden" name="Deep Fried Chicken Packs" class="item12Holder"/>
    
   <input type="hidden" name="Small Chops Packs" class="item13Holder"/>
   
   <input type="hidden" name="Sparkling Water Packs" class="item14Holder"/>
   
   <input type="hidden" name="Barbecue Chicken with Cheeps Packs" class="item15Holder"/>
    
   <input type="hidden" name="Vanilla Ice Cream Packs" class="item16Holder"/>
    
   <input type="hidden" name="Devilled Egg Packs" class="item17Holder"/>
   
   <input type="hidden" name="Fried Plantain with Egg Sauce Packs" class="item18Holder"/>
    </div>
    <!-- the selected items sent... ending-->    
    
    
<!--the vat, delivery/pickup and total sections--> 
            <section class="checkout">
            
            <!-- the vat output--> 
            <label class="cal">
            <strong>Vat(0.05%)</strong>
            </label>
            <input type="number" name="Vat" placeholder="0.00" id="vat" readonly/>
            <br />
            <br />
            <!-- the vat output ending --> 
            
            <!-- the delivery output --> 
            <div id="delivery">
               <label class="cal">
               <strong>Delivery </strong>
               
               <input type="number" name="Delivery Fee" placeholder="0.00" id="five" readonly/>
               </label>
            </div>
            <!-- the delivery output ending --> 
            
            <!-- the pickup output --> 
            <div id="pickup">
               <label class="cal">
               <strong>Pickup</strong>
               </label>
               <input type="number" name="Pickup Fee" placeholder="0.00" id="zero" readonly/>
               </div>    
           <!-- the pickup output ending --> 
           
           </section> 
           
    <!-- the total output section -->       
    <br />
    <br /> 
     <section class="theTotal">
        <div id="calAll">  
        <span class="cal">
        <strong>Total </strong>
        </span>
        <input type="number" name="Total_Amount" placeholder="0.00" id="cal" readonly/>
        </div>   
    </section>
    <!-- the total output section ending-->       
        
<!--the vat, delivery/pickup and total sections ending--> 
           
        <!---this part of html is used for calculations only and design to be invisible ...the beginning--->      
         <section class="hiddenCal">  
            <div>     
            <output type="output" id="total"></output>
           </div> 
           
           <div>
           <output type="output" id="overall"></output>
           </div>
        </section>
       <!---this part of html is used for calculations only and design to be invisible ...the end--->  
                
         </br>  <hr class="bold_hr">
         
 <!---receiver's details section; beginning--->
         <section class="bDetails">
              <h3>Your/Reciever Details</h3>
             
<input type="text" name="First Name" id="fname" placeholder="Your first name" />
             <br />
             
<input type="text" name="Last Name" id="lname" placeholder="Your last name" />
             <br />
              
<input type="text" name="Receiver Name" id="rname" placeholder="Receiver's name (Optional)" />
             <br />
             
<input type="tel" name="Phone Number" id="phone" placeholder="Phone number"/>
         </section> 
         <br />
 <!---receiver's details section ending--->
         

 <!--- hidden customers' input section; beginning--->
         <section class="customer_input">
          
 <!-- delivery options dropdown button -->  
         <section class="delv_btns">
         
         <button type="button" id="delv_type"> Select Delivery Options
        <span class="down">
        <i class="fa fa-chevron-down"></i> 
        </span>
         </button>
         
         <div class="opt">
        <button type="button" name="PickUp Option" value="Customer will come over to pick item" id="pickup_btn"> PickUp $0.00</button>
        
        <button type="button" name="Delivery Option" value="$5.00 cost of delivery" id="delvr"> Delivery $5.00
        </button>
         </div> 
         
         </section>  
 <!-- delivery options dropdown button ending -->  
             
<div id="Daddress">     
 <hr class="bold_hr">
   <button type="button" id="cancel">
   <i class="fa fa-times-circle"></i>
   </button>
 <h5> Delivery Address </h5>
<input type="text" name="Delivery Address" id="Dadd" placeholder="Enter delivery address"/> 

<h5> Set Delivery Date and Time </h5>
<label><i class="fa fa-calendar"></i></label>  
<input type="date"  id="date1" name="Delivery Date" value="2022-06-01"/> 

 <label><i class="fa fa-clock"></i></label>  
<input type="time"  id="time1" name="Delivery Time" value="07:44:00"/> 
</div>

<div id="Paddress">
 <hr class="bold_hr">
  <button type="button" id="cancel1">
  <i class="fa fa-times-circle"></i>
  </button>
 <h5> Pickup Address </h5>
<input type="text" name=Pickup Address" id="pAdd" value="Pickup item at №123 NourishMe Str, Off Demo Rd." readonly/>

<h5> Set Pickup Date and Time </h5>
<label><i class="fa fa-calendar"></i></label>  
<input type="date"  id="date2" name="Pickup Date" value="2022-06-01"/>  

 <label><i class="fa fa-clock"></i></label>  
<input type="time"  id="time2" name="Pickup Time" value="07:44:00"/>
</div>         
<br /> 
</section>
<!-- hidden customers input section ending-->
           
    <!--order-form submit beginning--->      
    <div class="submit_order"> 
    
     <section class="checked">
       <input type="checkbox" id="checked"/>
       <span class="checkTxt">
       I have selected delivery options, entered/reviewed address, date, time and total charge for this order. Proceed to payment.
       </span>
     </section>
           <br />
           
  <button type="button" id="btn_checkout">Checkout
  </button> 
  
  <!-- invoice number, admin only -->    
  <div class="ofInvoice">
    <input type="hidden" name="Invoice/Order Number" id="invoice" readonly/>
  </div>
  <!-- invoice number, admin only, the end -->   
  
  <!--the invoice/payment page -->    
        <div class="invoicePage">
        <br/>
        <label class="invLabel">Order Number:
        </label>
        <output type="output" id="inV">00000
        </output><br />
        <br/>
        
        <span class="invoiceNote"></span>
        
       <button type="submit" id="btn_submit" value="submit">Submit Order
       </button> 
       <br />
       <br />
       <button type="button" id="btn_cancel" onclick="window.location.reload(true)  ;">
       Cancel Order
       </button> 
       </div> 
  <!--the invoice page ending-->    
  
       </div>
    <!--order-form submit ending-->   
    
             </div>`;
}
export default cart;
