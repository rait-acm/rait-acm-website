<!doctype html>

<html lang="English">

<head>
  <meta charset="utf-8">
  <title>admin event</title>
  <meta name="" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <style>
    body,
    html {
      height: 100%;
      font-family: Poppins-Regular, sans-serif;
      background-color: antiquewhite;
      line-height: 30px;
      font-size: 20px;
      position: relative;
      left: 2rem;
      overflow-x: hidden;
    }
    input , select , textarea{
max-width: 80%;
    }
    label{
        margin-top: 10px;
    }
  </style>

</head>

<body>
  <div>

    <form action="addEventsBack.php" method="POST" class="form-group" enctype="multipart/form-data">
      <h1>
        <div class="login100-form-title">
          Events Data Form
        </div>
      </h1>
      <div class="formGroup">
      </div>
      <div class="formGroup">
        <label for="name">Name of event<span class="required">*</span>:</label>
        <input type="text" name="Name" class="form-control" placeholder="enter name" autocomplete="off"  required  />
      </div>
     
      <!-- <div class="formGroup">
        <label for="">Orientation Subject<span class="required">*</span>:</label>
        <input type="text" name="Subject" class="form-control" placeholder="Orientation Subject" required>
      </div> -->
      <div class="formGroup">
        <label for="type">Type<span class="required">*</span>:</label>
        <select name="event_type" id="event_type" required class="form-control" >
          <option value="Workshop" default selected>Workshop</option>
          <option value="Webinar">Webinar</option>
          <option value="DSP">DSP</option>
          <option value="Student Competition">Student Competition</option> 
          <option value="Social Event">Social Event</option>
          <option value="Community Service">Community Service</option>
          <option value="Internship">Internship</option>
          <option value="Chapter Meeting">Chapter Meeting</option>

        </select>
      </div>
      <!-- <div class="formGroup">
        <label class="venue">Venue:<span class="required">*</span></label>
        <input list="all-collage" class="form-control" required id="venue" name="Venue" >
        <div id="new_venue_box" style="display: none;">
          <input type="text" name="new_venue" id="new_venue" placeholder=" Enter venue name" required>
        </div> -->

      <div class="formGroup date">

      <!-- <label class="" for="date" placeholder="">One day event?<span class="required">*</span>:</label>
        <input type="radio" class="form-control" value="Yes" name="isOneDay" id="isOneDay">
        <input type="radio" class="form-control" value="No" name="isOneDay" id="isOneDay"> -->
<!-- can simplify for input  -->

        <label class="date" for="date" placeholder="From/On">Event Start Date<span class="required">*</span>:</label>
        <input type="date" class="form-control" name="start_date" id="start_date" required style="max-width: 30%;">
      <!-- </div>

      <div class="formGroup"> -->
        <label class="End date" for="date">End Date:</label>
        <input type="date" class="form-control" name="end_date" id="end_date" value="" style="max-width: 30%;">
    
        <label for="recording_link">Recording Link of event:</label>
        <input type="text" name="recording_link" class="form-control" placeholder="paste yt/fb link of event " autocomplete="off"  />
    
      </div>

      <div class="formGroup">
        <label  name="description">Description of event (upto ~150 char)<span class="required">*:</span> </label>
        <textarea  maxlength="150" required name="desc" placeholder="short description of event" class="form-control"> </textarea>
      </div>
      <!-- write function to keep track of count and alert accordingly -->
   
      <label  name="img">Image of event<span class="required">*:</span> </label>
      <input type="file" name="file" size="50" class="form-control" /><br>

      <input type="submit" class="btn btn-danger" name="Next" action="">
      <input type="reset" class="btn btn-danger" value="Clear">
      <a href="" class="btn btn-danger">Go back to homepage</a>
    </form>
  </div>
  </div>


  <datalist id="all-collage">
    <!-- copy pasted from result.txt file for searchable dropdown of venue -->
    <option value="Other">
    <option value="workshop">
    <option value="Qther types">
  
  </datalist>


  <!-- bootstrp cdn link -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>