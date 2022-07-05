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
      if (cid === "mnm") //"현재 아이디가 이름mnm"일 경우
        cv = cv.trim(); // 앞뒤공백만 제거
      else // 그밖의 경우
        cv = groSpace(cv); // 모든공백제거!


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


      /****************************************** 
        2. 아이디일 경우 유효성 검사하기
          - 검사기준 : 
          영문자로 시작하는 6~20글자 영문자/숫자
      ******************************************/
      else if (cid === "mid") {
        console.log("아이디 검사결과:", vReg(cv, cid));

      } ////////// else if : 아이디 검사 /////////

    }); //////////// blur /////////////


}); /////////////// jQB /////////////////////

/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
  // val - 검사할값, cid - 처리구분아이디
  // //console.log("검사:"+val+"/"+cid);

  // 정규식 변수
  let reg;

  // 검사할 아이디에 따라 정규식을 변경함
  switch (cid) {
    case "mid": // 아이디
      reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
      // 영문자로 시작하는 6~20글자 영문자/숫자
      // /^[a-z]{1} 첫글자는 영문자로 체크!
      // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
      // 최소 5글자에서 최대 19글자를 유효범위로 체크!
      // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
      break;
    case "mpw": // 비밀번호
      reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
      // 특수문자,문자,숫자포함 형태의 5~15자리
      // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
      // (?=.*\d) 숫자 사용체크!
      // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
      // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
      break;
    case "eml": // 이메일
      reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      // 이메일 형식에 맞는지 검사하는 정규식
      break;
  } //////////// switch case문 //////////////////

  // //console.log("정규식:"+reg);

  // 정규식 검사를 위한 JS메서드 
  // -> 정규식.test(검사할값) : 결과 true/false
  return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////