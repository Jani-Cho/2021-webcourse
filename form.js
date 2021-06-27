let sendButton = $('#sendButton')

function send() {
  let email = $('#email').val()
  let name = $('#name').val()
  let country = $('#country').val()
  let product = $('#product').val()
  let serialNumber = $('#serialNumber').val()
  let computerOperatingSystem = $('#computerOperatingSystem').val()
  let specifications = $('#specifications').val()
  let subject = $('#subject').val()
  let description = $('#description').val()
  let attachFile = $('#attachFile').val()

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbztCng8CiWuCD-lVDThuzq46-VeTl2web-6NuBbC7Pgr95SWJIvhdqjhhqqhw7PxzF8/exec",
    data: {
      "email": email,
      "name": name,
      "country": country,
      "product": product,
      "serialNumber": serialNumber,
      "computerOperatingSystem": computerOperatingSystem,
      "specifications": specifications,
      "subject": subject,
      "description": description,
      "attachFile": attachFile
    },
    success: function (response) {
      if (response == "成功") {
        alert("成功");
      }
    },
  });
};

// sendButton.addEventListener('click', send);

sendButton.click(function () {
  console.log('send')
  send();
})