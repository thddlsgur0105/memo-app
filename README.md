# Memo App

![Hnet-image](https://user-images.githubusercontent.com/70431221/123586946-79dcd200-d820-11eb-85b3-6786ff812587.gif)

<hr>

## 상태
- ### 미완성
- ### 첫번째 프로젝트

<hr>

## 사용 언어

![Javascript Badge](https://img.shields.io/badge/-Javascript-%23F7DF1E)
![Html5 Badge](https://img.shields.io/badge/-HTML5-%23E34F26)
![Css3 Badge](https://img.shields.io/badge/-CSS3-%231572B6)
![MongoDB Badge](https://img.shields.io/badge/-MongoDB-%2347A248)
![Pug Badge](https://img.shields.io/badge/-Pug-%23A86454)
![Node.js Badge](https://img.shields.io/badge/-Node.js-%23339933)

<hr>

## 기능 

1. ### **첫페이지** 
   + 사이트이름과 링크를 입력하면 특정 사이트로 이동하는 버튼을 생성합니다.
2. ### **로그인**과 **회원가입** 
   + 회원가입하고 로그인하면 특정 페이지로 이동합니다.
3. ### **메모**
   + *할 일* 버튼과 *한 일* 버튼을 클릭하면 각 영역으로 이동합니다.
   + *추가* 버튼을 클릭하면 메모 한 개를 *할 일* 영역에 추가합니다.
   + 메모 한 개는 *삭제* 버튼과 *편집* 버튼, *완료* 버튼을 포함합니다.
   + *완료* 버튼을 클릭하면 *완료* 영역으로 넘어갑니다.
   + *미완료* 버튼을 클릭하면 *미완료* 영역으로 넘어갑니다.
   + 메모 한 개를 *추가*, *삭제*, *완료*, *미완료* 할 때마다 나의 수행 정도를 *상태바* 를 통해 확인할 수 있습니다.
   + *javascript* 의 반응형 디자인을 활용했습니다. 
4. ### **유저**
   + *내 정보* 를 보여줍니다.
   + *유저 이름* 을 검색하면 검색결과를 보여줍니다.
   + *친구 목록* 에서 검색결과를 확인할 수 있습니다.
<hr>

## 추가

1. *Node.js* 의 활용도가 떨어지고 메모 기능이 부실해보임
2. *첫 페이지* 에서 사이트 이름에 대한 아이콘 기능이 *Font Awesome* 에 전적으로 의존하고 있음
3. *유저* 페이지 미완료

<hr>

## **Class** 활용해서 코드 수정

* ### **Class** 활용 부품 파일
  * ### [o] Btn.js
* ### **Class** 활용 기능 파일
  * ### [o] Clock.js
  * ### [o] Load.js
  * ### [-] Memo.js
  * ### [o] Nav.js
  * ### [-] Scroll.js
  * ### [-] Status.js
* ### **Class** 관련 적용 파일 저장소
  * ### [-] Main.js
