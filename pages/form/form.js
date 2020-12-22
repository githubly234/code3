Page({
  data: {

  },
  onLoad: function (options) {

  },
  submitform(event){
    console.log("submitform",event.detail.value)
  },
  focusInput(){
    console.log("input---focus")
  },
  blurInput(){
    console.log("input---blur")
  },
  confirmInput(){
    console.log("input---confirm")
  },
  genderChange(event){
    console.log(event.detail.value)
  },
  hobbyChange(event){
    console.log(event.detail.value)
  }

})