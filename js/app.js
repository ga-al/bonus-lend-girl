// Для чтения RequestAnimationFrame разными браузерами
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());

const labelTitle = document.querySelector('.label-title')
const logo = document.querySelector('.logo')
const socIcons = document.querySelector('.soc-icons')
const shadowDark = document.querySelector('.shadow-dark')
const borderText = document.querySelector('.t-border')
const bgText = document.querySelector('.t-background')
const smokeRight = document.querySelector('.smoke-right')
const smokeMobiRight = document.querySelector('.smoke-mobile-right')
const smokeLeft = document.querySelector('.smoke-left')
const girlOne = document.querySelector('.girl1')
const girlTwo = document.querySelector('.girl2')
const girlMobileOne = document.querySelector('.girl1-mobile')
const girlMobileTwo = document.querySelector('.girl2-mobile')
const balls = document.querySelector('.balls')
const ballOne = document.querySelector('.ball1')
const ballTwo = document.querySelector('.ball2')
const ballThree = document.querySelector('.ball3')
const ballFour = document.querySelector('.ball4')
const ballFive = document.querySelector('.ball5')
const ballMobileOne = document.querySelector('.ball1-mobile')
const ballMobileTwo = document.querySelector('.ball2-mobile')
const ballMobileThree = document.querySelector('.ball3-mobile')
const ballMobileFour = document.querySelector('.ball4-mobile')
const ballMobileFive = document.querySelector('.ball5-mobile')
const ballMobileSix = document.querySelector('.ball6-mobile')

const startTime = new Date().getTime()

const styleBlocks = function() {
    logo.style.opacity = 1
    socIcons.style.opacity = 1
    labelTitle.style.opacity = 1
    shadowDark.style.opacity = 1
    borderText.style.opacity = 1
    smokeRight.style.opacity = 1
    smokeLeft.style.opacity = 1
    girlOne.style.opacity = 1
    girlTwo.style.opacity = 1
    girlMobileTwo.style.opacity = 1
    girlMobileOne.style.opacity = 1
    bgText.style.opacity = 0.8

    window.requestAnimationFrame(styleBlocks)
}
styleBlocks()

// Анимация мячей для разных расширений
const makeBallOne = function () {
  let newLeft = calcMovement(50, 60)

  ballOne.style.left = `${newLeft}px`
  if (newLeft < 156) {
    window.requestAnimationFrame(makeBallOne)
  }

}

const makeBallTwo = function () {
  let newTop = calcMovement(-120, 20)

  ballTwo.style.top = `${newTop}px`
  if (newTop < -51) {
    window.requestAnimationFrame(makeBallTwo)
  }

}

const makeBallThree = function () {
  let newLeftBottom = calcMovement(-121, 50)

  ballThree.style.left = `${newLeftBottom}px`
  if (newLeftBottom > -144) {
    window.requestAnimationFrame(makeBallThree)
  }

}

const makeBallFour = function () {
  let newBottom = calcMovement(50, 50)

  ballFour.style.bottom = `${newBottom}px`
  if (newBottom < 151) {
    window.requestAnimationFrame(makeBallFour)
  }

}

const makeBallFive = function () {
  let newLeftCenter = calcMovementLitle(394, 50)

  ballFive.style.left = `${newLeftCenter}px`
  if (newLeftCenter > 290) {
    window.requestAnimationFrame(makeBallFive)
  }

}

const makeBallTwoMobile = function () {
  let newLeftMobile = calcMovement(-40, 20)

  ballMobileTwo.style.left = `${newLeftMobile}px`
  if (newLeftMobile < 0) {
    window.requestAnimationFrame(makeBallTwoMobile)
  }

}

const makeBallThreeMobile = function () {
  let newBottomMobile = calcMovement(50, 50)

  ballMobileThree.style.bottom = `${newBottomMobile}px`
  if (newBottomMobile < 175) {
    window.requestAnimationFrame(makeBallThreeMobile)
  }

}

const makeBallOneMobile = function () {
  let newRightmMobile = calcMovementLitle(-60, 50)

  ballMobileOne.style.right = `${newRightmMobile}px`
  if (newRightmMobile > -21) {
    window.requestAnimationFrame(makeBallOneMobile)
  }

}

const makeBallFourMobile = function () {
  let newCenterMobile = calcMovementLitle(80, 70)

  ballMobileFour.style.left = `${newCenterMobile}px`
  if (newCenterMobile > 80) {
    window.requestAnimationFrame(makeBallFourMobile)
  }

}

const makeBallFiveMobile = function () {
  let newBottomLeftMobile = calcMovement(-30, 70)

  ballMobileFive.style.left = `${newBottomLeftMobile}px`
  if (newBottomLeftMobile > 0) {
    window.requestAnimationFrame(makeBallFiveMobile)
  }

}

const makeBallSixMobile = function () {
  let newTopmMobile = calcMovementLitle(-30, 70)

  ballMobileSix.style.top = `${newTopmMobile}px`
  if (newTopmMobile > -10) {
    window.requestAnimationFrame(makeBallSixMobile)
  }

}

if (window.matchMedia('(max-width: 425px)').matches) {
  makeBallTwoMobile()
  makeBallThreeMobile()
  makeBallOneMobile()
  makeBallFourMobile()
  makeBallFiveMobile()
  makeBallSixMobile()
}

if (window.matchMedia('(min-width: 1024px)').matches) {
    smokeLeft.style.left = 0
    smokeRight.style.right = 0
    makeBallOne()
    makeBallTwo()
    makeBallThree()
    makeBallFour()
    makeBallFive()
}

if (window.matchMedia('(max-width: 360px)').matches) {
  smokeMobiRight.style.right = 0
}


function calcMovement(startSize, rise) {
  const currTime = new Date().getTime()
  return startSize + (currTime - startTime)/700 + rise
}
function calcMovementLitle(startSize, rise) {
  const currTime = new Date().getTime()
  return startSize - (currTime - startTime)/700 + rise
}


// Модальное окно
const modalTrigger = document.getElementsByClassName("trigger")[0]

const windowInnerWidth = document.documentElement.clientWidth
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)

const bodyElementHTML = document.getElementsByTagName("body")[0]
const modalBackground = document.getElementsByClassName("modalBackground")[0]
const modalBlur = document.getElementsByClassName("blur")[0]
const modalClose = document.getElementsByClassName("modalClose")[0]
const modalActive = document.getElementsByClassName("modalActive")[0]

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px"
    window.requestAnimationFrame(bodyMargin)
}

bodyMargin()

modalTrigger.addEventListener("click", function () {
    modalBackground.classList.add('open')
    if (windowInnerWidth >= 1020) {
        bodyMargin()
    }
})

modalClose.addEventListener("click", function () {
    modalBackground.classList.remove('open')
    if (windowInnerWidth >= 1366) {
        bodyMargin()
    }
}) 

modalBlur.addEventListener("click", function (event) {
    if (event.target === modalBlur) {
        modalBackground.classList.remove('open')
        if (windowInnerWidth >= 1020) {
            bodyMargin()
        }
    }
})