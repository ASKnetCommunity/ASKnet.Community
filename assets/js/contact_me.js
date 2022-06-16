---
---
$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var honeynamepot = $("input#name").val(); //trap for sp4m-bots
	    var url = "https://formspree.io/" + "{% if site.data.settings.formspree-path %}{{ site.data.settings.formspree-path }}{% else %}{{ site.data.settings.contact-email }}{% endif %}";
      var name = $("input#namejkl").val();
      var email = $("input#emailasd").val();
      var subject = "{{ site.data.sitetext[site.locale].contact.subject-prefix | default: "[Contact Form]" }}" + " " + $("input#hddhemail-subjectwerw").val();
      var message = $("textarea#messagexrtz").val();
      var firstName = name; // For Success/Failure Message
      if (honeynamepot.length > 0) { // if the h o n e y p o t - field is not empty, the script is aborted without sending an email
          return;
      }
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: url,
        type: "POST",
	      dataType: "json",
        data: {
          name: name,
          subject: subject,
          email: email,
          message: message
        },
        cache: false,

		success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },

        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },

        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
