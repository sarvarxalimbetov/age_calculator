const _form = document.querySelector(".app_form")
const _dayInput = document.getElementById("day_input")
const _monthInput = document.getElementById("month_input")
const _yearInput = document.getElementById("year_input")

// error messages
const _dayError = document.getElementById('day_error')
const _monthError = document.getElementById('month_error')
const _yearError = document.getElementById('year_error')

// output inputs
const _outputDay = document.getElementById("outputDay")
const _outputMonth = document.getElementById("outputMonth")
const _outputYear = document.getElementById("outputYear")

let isValid = false

_dayInput.addEventListener("input", e => {
    let value = Number(e.target.value)

    if(value > 31) {
         _dayError.textContent = "Must be a valid day"
         isValid = false
         return;
    } else {
        isValid = true
        _dayError.textContent = ""
    }

    if(value < 0 || value === 0){
        _dayError.textContent = "This field is required"
        isValid = false
        return;
    } else {
        _dayError.textContent = ""
    }
})

_monthInput.addEventListener("input", e => {
    let value = Number(e.target.value)

    if(value > 12) {
         _monthError.textContent = "Must be a valid day"
         isValid = false
         return;
    } else {
        isValid = true
        _monthError.textContent = ""
    }

    if(value < 0 || value === 0){
        _monthError.textContent = "This field is required"
        isValid = false
        return;
    } else {
        _monthError.textContent = ""
    }
})

_yearInput.addEventListener("input", e => {
    let value = Number(e.target.value)
    let currentYear = new Date().getFullYear()

    if(value > currentYear) {
         _yearError.textContent = "Must be a valid day"
         isValid = false
         return;
    } else {
        isValid = true
        _yearError.textContent = ""
    }

    if(value < 0 || value === 0){
        _yearError.textContent = "This field is required"
        isValid = false
        return;
    } else {
        _yearError.textContent = ""
    }
})

_form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(isValid){
        let birthday = `${_monthInput.value}/${_dayInput.value}/${_yearInput.value}`

        let birthdayObj = new Date(birthday)
        let resultAge = Date.now() - birthdayObj;
        let ageDate = new Date(resultAge)
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1
        
        _outputYear.textContent = ageYear
        _outputMonth.textContent = ageMonth
        _outputDay.textContent = ageDay
    } else {
        alert("error")
    }

    e.target.reset()
})