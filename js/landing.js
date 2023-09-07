const fadeEl = document.querySelectorAll(".fade-in")

fadeEl.forEach((el, i) => {
  return gsap.to(el, 1, {
    delay: (i + 1) * 0.7,
    opacity: 1,
  })
})

const noticeSwiper = new Swiper(".swiper-notice", {
  // Optional parameters
  direction: "vertical",
  autoplay: true,
  loop: true,
})

const promotionSwiper = new Swiper(".swiper-promotion", {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },
  loop: true,
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-next",
    prevEl: ".promotion .swiper-prev",
  },
})

const awardSwiper = new Swiper(".swiper-award", {
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  navigation: {
    nextEl: ".award .swiper-next",
    prevEl: ".award .swiper-prev",
  },
})

const promotionBtn = document.getElementById("upload")
const promotionArea = document.querySelector(".promotion")
const pagination = document.querySelector(".swiper-pagination ")

const 대충다른css속성주는함수 = (el, name) => {
  return (el.className = name)
}

const handler = () => {
  if (!promotionArea.classList.contains("hide")) {
    promotionArea.classList.add("hide")
    pagination.style.cssText = "opacity:0"
  } else {
    promotionArea.classList.remove("hide")
    pagination.style.cssText = "opacity:1"
  }
}

promotionBtn.addEventListener("click", handler)

// 랜덤 숫자 제조 함수
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    // 애니메이션 동작 시간
    random(1.5, 2.5),
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Sine.easeInOut, // Easing 함수 적용.
    },
  )
}

floatingObject(".floating1", 1, 15)
floatingObject(".floating2", 1.5, 20)
floatingObject(".floating3", 2.5, 30)

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll("section.scroll-spy")
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector(".this-year")
thisYear.textContent = new Date().getFullYear()
