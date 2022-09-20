const specify =()=>{
    return`<section class="specifyJs">
    <form method="POST" name="BookingForm" class="spcForm">
    
<div class="specifyForm">
<h3 class="formH3">
Request Your Special Order
</h3>

<label>Date</label>
<input type ="date" class="bFormDate" name="Reservation Date" value="2022-06-01"/>

<label>Time</label>
<input type ="Time" class="bFormTime" name="Reservation Time" value="07:44:00"/>
<br/>
<div class="bookingInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" nsme="Name" class="bFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="bFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label><i class="fa fa-phone"></i></label>
<input type ="tel" name="Phone Number" class="bFormInput" placeholder="Your phone number" required/>

<hr class="formHr">
<label class="txtA">
<i class="fa fa-edit"></i>
</label>
<textarea name="Special Order" placeholder="Your special order in writting" class="bFormTxtArea" rows="4" cols="30" required></textarea> <br />

<hr class="formHr">
<label><i class="fa fa-truck"></i></label>
<span class="options">
  <input type="radio" name="Delivery Option" value="Pickup" id="dOP">Pickup, Or
  <input type="radio" name="Delivery Option" value="Delivery" id="dOP">Delivery
</span>

<hr class="formHr">
<section class="agreement">
<input type="checkbox" name="Checked" id="agree" required/>
I have agreed to receive a quote for my special order.
</section>
</div>
<button type="submit" class="specifyBtn">Submit Request</button>
</div>
</form>
<section>`
}
export default specify;