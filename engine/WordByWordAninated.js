
/**
 * Permet de modofier plusieurs attribut en une seul requête
 * @param {HTMLElement} el //Element ciblé
 * @param {objet} options  // Collections d'attributs à appliqué
 */

 const setAttributes = (el, options) => {
	Object.keys(options).forEach(function(attr) {
	  el.setAttribute(attr, options[attr]);
	})
 }

class WordByWordAnimated{
  constructor(options = {}){

    this.options =  Object.assign({},{

      method : 'wordByWord',
      container : '',
      lineBreak : [],
      child : '', //Attribut textAnimated-name 
      keyframes : '', //nom de l'animation à appliqué
      animationDuration : 0.7, // Durée de l'animation de l'élément mot ou lettre
      shiftDelay : 0.2, //Délai d'animation entre deux mots ou deux lettre.    
      animationOffset : 0 //Délai de lancement de l'animation global.

    },options)  

      this.container = document.querySelector(this.options.container)
      if(this.container === null){
        console.error('impossible de trouver l\'element : ', this.options.container);
        return
      }
      this.strings = document.querySelectorAll(this.options.child)

      this.strings.forEach(element => {
        if(this.options.method === "wordByWord"){
          this.wordByWord(element, this.options.lineBreak)   
        }else if(this.options.method === "letterByLetter"){ 
          this.letterByLetter(element, this.options.lineBreak) 
        }   
      });

  }

  wordByWord(element,breakPoints){

  

        let delay = this.options.animationDuration
        const words = element.textContent.trim(' ').split(' ')
        const newContainer = document.createElement('span')

        newContainer.style.overflow = 'hidden'
        newContainer.style.display = 'inline-block' 
        
        words.forEach((word,key) => {

          const newEl = document.createElement('span')
          newEl.style.display = 'inline-block'
          newEl.style.animation = `${this.options.keyframes} ${delay}s both`

         
          const shiftDelay = (key * this.options.shiftDelay) + this.options.animationOffset
          newEl.style.animationDelay = `${shiftDelay}s`
         
          
          newEl.innerHTML= `${word}&ensp;`
          newContainer.insertAdjacentElement('beforeend',newEl)

          if(breakPoints.includes(key)){
            const lineBreak = document.createElement('br')
            newContainer.insertAdjacentElement('beforeend',lineBreak)
          }

       
        });

        element.textContent = ''
        element.insertAdjacentElement('beforeend',newContainer)

  }


  letterByLetter(element,breakPoints){
     
   const words = element.textContent.trim(' ').split(' ')
   const letterArray = []
   const wordsCount = words.length -1

   console.log(wordsCount -1);

    words.forEach((word,key) => {

      const letters = word.split('')
      letters.forEach(letter => {
        letterArray.push(letter)        
      });

      if(key < wordsCount){
        console.log(key);
        letterArray.push(' ')
      }
    })

    const newContainer = document.createElement('span')
    newContainer.style.overflow = 'hidden'
    newContainer.style.display = 'inline-block' 

    console.log(letterArray);

     
    letterArray.forEach((letter,key) => {

   //  console.log(letter);

      let delay = this.options.animationDuration
      const newEl = document.createElement('span')
      newEl.style.display = 'inline-block'
      newEl.style.animation = `${this.options.keyframes} ${delay}s both`

      const shiftDelay = (key * this.options.shiftDelay) + this.options.animationOffset
      newEl.style.animationDelay = `${shiftDelay}s`

      console.log(breakPoints , key , letter);
      if(!breakPoints.includes(key) ){
        if(letter === ' '){
          console.log('blank');
          newEl.innerHTML = '&ensp;'
          newEl.classList.add('blankAnimated')
        }
        newEl.innerHTML = letter
      }

      if(breakPoints.includes(key)){
        const lineBreak = document.createElement('br')
        newContainer.insertAdjacentElement('beforeend',lineBreak)
      }

      newContainer.insertAdjacentElement('beforeend',newEl)
      
    });

    element.textContent = ''
    element.insertAdjacentElement('beforeend',newContainer)




  }
}

new WordByWordAnimated({
  method : 'wordByWord',
  container : '[textAnimatedContainer]',
  lineBreak : [1,3],
  child : '[textAnimated-name="first"]',
  keyframes : 'titleRevealY'

})
new WordByWordAnimated({
  method : 'wordByWord',
  container : '[textAnimatedContainer]',
  child : '[textAnimated-name="second"]',
  keyframes : 'titleRevealX',
  animationOffset : 1.7,
})

new WordByWordAnimated({
  method : 'letterByLetter',
  container : '[textAnimatedContainer]',
  child : '[textAnimated-name="third"]',
  keyframes : 'titleRevealX',
  animationOffset : 2.5
})
new WordByWordAnimated({
  method : 'letterByLetter',
  container : '[textAnimatedContainer]',
  child : '[textAnimated-name="four"]',
  keyframes : 'flipY',
  animationOffset : 5.4
})



