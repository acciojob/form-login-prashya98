function getFormvalue() {
    //Write your code here
    event.preventDefault();

    // Get form fields
    const firstName = document.forms["form1"]["fname"].value.trim();
    const lastName = document.forms["form1"]["lname"].value.trim();

    // Show alert with full name
    alert(firstName + " " + lastName);

}
