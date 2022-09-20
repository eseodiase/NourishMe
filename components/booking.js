const booking =()=>{
    return `<section class="bookingJs">
<form method="POST" name="BookingForm" class="bForm">
<div class="bookingForm">
<h3 class="formH3">Reserve A Table</h3>
<label>Date</label>
<input type ="date" class="bFormDate" name="Reservation Date" value="2022-06-01" required/>

<label>Time</label>
<input type ="Time" class="bFormTime" name="Reservation Time" value="07:44:00" required/>
<br/>

<div class="bookingInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" name="Name" class="bFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="bFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label><i class="fa fa-phone"></i></label>
<input type ="tel" name="Phone Number" class="bFormInput" placeholder="Your phone number" required/>

<hr class="formHr">
<label><i class="fa fa-child"></i></label>
<input type ="number" name="Number of kids" class="bFormInput" id="kids" placeholder="Number of kids">

<hr class="formHr">
<label><i class="fa fa-users"></i></label>
<input type ="number" name="Number of adults" class="bFormInput" id="adults" placeholder="Number of adults" required/>

<hr class="formHr">
<label class="txtA">
<i class="fa fa-edit"></i>
</label>
<textarea name="Special Request" placeholder="Special request (Optional)" class="bFormTxtArea" rows="4" cols="30"></textarea> <br />

<hr class="formHr">
</div>
<button type="submit" class="reservationBtn">Reserve Table</button>
</div>
</form>
</section>`;
}
export default booking;