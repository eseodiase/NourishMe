const contact = ()=>{
    return `<section class="contactJs">
    <form method="POST" name="BookingForm" class="cntForm">
<div class="contactForm">
<h3 class="formH3">Get in Touch</h3>

<br/>
<div class="contactInput">
<label><i class="fa fa-user"></i></label>
<input type ="text" name="Name" class="bFormInput" placeholder="Your name" required/>

<hr class="formHr">
<label><i class="fa fa-at"></i></label>
<input type ="email" name="Email" class="bFormInput" placeholder="Your e-mail" required/>

<hr class="formHr">
<label class="txtA">
<i class="fa fa-envelope"></i>
</label>
<textarea name="Message" placeholder="Your message" class="cFormTxtArea" rows="4" cols="30" required></textarea> <br />

<hr class="formHr">
</div>
<button type="submit" class="sendBtn">Send</button>
</div>
</form>
</section>`   ;
}
export default contact;