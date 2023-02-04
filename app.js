Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    }
  },
  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px) 
        rotateX(${this.rotateX}deg) 
        rotateY(${this.rotateY}deg) 
        rotateZ(${this.rotateZ}deg)
        `
      }
    }
  },
  methods: {
    reset() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
    },
    // copy the CSS to the clipboard
    async copy() {
      // create a string of the CSS
      // this.box.transform is the computed property that we created above
      let text = `transform:${this.box.transform}`
      // write the CSS to the clipboard
      await navigator.clipboard.writeText(text)
      // alert the user that the CSS has been copied
      alert("CSS copied to clipboard!")
    }
  }
}).mount('#app')