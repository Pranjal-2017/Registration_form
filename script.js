document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var formData = new FormData(this);
  
    // Send form data to PHP script using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText); // Show response from PHP script
        document.getElementById("myForm").reset(); // Reset form
      }
    };
    xhr.send(formData);
  });
  