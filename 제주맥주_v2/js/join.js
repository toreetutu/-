// 제주맥주 PJ 회원가입 페이지 JS - join.js

// 이 구역이 window.addEventListener("DOMContentLoaded", ()=>{} 
// html을 다 읽은 후 실행되는 구역
$(() => { /////////////// jQB /////////////////////
  console.log("로딩완료!");

  /****************************************** 
        [ 사용자 입력폼 유효성 검사하기 ]
        - 이벤트 종류: blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드: blur()
          (객체 안에 만들어진 함수가 메서드)
        - 이벤트 대상:

        -> id가 "email2"가 아니고 
            type이 "text"인 입력요소 input

        >>> 제이쿼리 선택 표현법:
        input[type=text][id!=email2]
        >>> 대괄호[]는 속성선택, != 같지않다(제이쿼리전용)

        -> type이 "password"인 입력요소 input

        >>> 제이쿼리 선택 표현법:
        input[type=password]

    ******************************************/
  $(`input[type=text][id!=email2],
  input[type=password]`)
    .blur(function () {

      // 모든공백 제거함수:아이디,비번에 공백없도록 ////
      const groSpace = cv => cv.replace(/\s/g, "")
      // (cv) => {return cv.replace(/\s/g,"");}
      // 명령문이 하나라 중괄호와 리턴 키워드를 모두 생략함
      // cv는 본 함수의 내부전달변수임!

      // groSpace 는 get rid of Space 즉, 공백제거라는 말!
      // replace(바꿀값,바뀔값)
      // 하나밖에 못 바꾸니까 정규식을 사용
      // 정규식: 슬래쉬 사이에 씀
      // 공백문자: \s
      // g -> global 즉, 모두 찾아라!
      // groSpace에 cv 값을 받으면 cv라고 전달된 값을 replace를 해서 내보내(\s스페이스문자를 다 찾아서g 전부다 비워)


      // 방금 blur한 요소의 아이디
      let cid = $(this).attr('id');
      // cid 는 current id 즉, 현재 아이디
      // attr() -> 속성셋팅 / 속성값 읽기

      // 방금 blur한 요소의 값
      let cv = $(this).val();
      // cv 는 current value 즉, 현재값
      // val() -> 입력된 값 읽기 / 쓰기

      // 입력값의 공백제거하기!
      // (빈값을 데이터로 치는 것 없애주기)

      cv = cv.trim(); // 앞뒤공백만 제거


      // 공백제거 입력값 업데이트
      // 공백제거한 후에 처음값으로 초기화 함
      $(this).val(cv); // val(값) -> 값을 쓰면 값설정, 안쓰면 읽어오기

      console.log("아이디:", cid);
      console.log("값:", cv);


      /***************************************** 
        1. 빈값 여부 체크하기
      *****************************************/
      if (cv === "") {
        // 빈값일 경우 메시지 출력하기
        $(this).siblings(".msg").text("필수입력")

      } /////// if: 빈값체크 /////////



    });


}); /////////////// jQB /////////////////////