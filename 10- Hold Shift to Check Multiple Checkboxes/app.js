const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

// console.log(checkboxes)

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that  they are ckecking it
  let inBetween = false
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log('Starting to check them inBetweeen')
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
  console.log(e)
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
})
