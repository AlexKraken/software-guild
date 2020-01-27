function validate() {
    if (document.getElementById("inputName") !== "" && document.getElementById("inputPhone").value !== "" &&
        document.getElementById("inputEmail") !== "" && document.getElementById("inputAddInfo").value !== "") {
        document.getElementById("submitRequest").style.display = "none"
        document.getElementById("validatedMessage").style.display = "block"
    }
    else {
        alert("Please fill out all the required fields!")
    }

    return false
}