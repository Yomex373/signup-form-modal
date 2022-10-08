const openFormBtn = document.getElementById('open-form-btn')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector(".modal")
const container = document.querySelector('.container')
const formBtn = document.getElementById("form-btn")
const signupForm = document.getElementById("signup-form")






openFormBtn.addEventListener('click', () =>{
    modalContainer.style.pointerEvents = "all"
    modalContainer.style.opacity = "1"
    container.style.opacity = '0.4'
})

formBtn.addEventListener("click", function(e){
    e.preventDefault()

    const signupFormData = new FormData(signupForm)
    const name = signupFormData.get("first-name")
    
    let a = document.forms["frm"]["first-name"].value;
    let b = document.forms["frm"]["last-name"].value;
    if (a == null || a == "", b == null || b == "") {
      alert("Please Fill All Required Field");
      console.log("not possible")
    } else{
        setTimeout(function(){
            modalContainer.innerHTML = `
                <div class="form-closing-message">
                    <button class="close-message-btn btn" id="close-message-btn">X</button>
                    <h1> Thank you ${name} for signing up, check your email for the comfirmation message.</h1>
                </div>
            `
            const closeMessage = document.createRange().createContextualFragment(modalContainer)
        
            document.getElementById("close-message-btn").addEventListener('click', function() {
                container.style.opacity = '1'
                modalContainer.style.opacity = "0"
            })
        
        },500)
    }

})






