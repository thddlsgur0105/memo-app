# This is my first memo application

## 전체 서버 경로들

<!-- globalRouter -->
# / -> Welcome
/login -> Log In
/logout -> Log out

<!-- memoRouter -->
/memo/add -> Add Memo Content
/memo/:id/delete -> Delete Memo Content
/memo/:id/edit -> Edit Memo Content
/memo/:id/inComplete -> Not complete Memo Content
/memo/:id/complete -> Complete Memo Content

<!-- userRouter -->
# /users/:id/detail -> User Detail Database
# /users/:id/memo -> Mini Memo
# /users/search -> User Sea
# /users/chat -> Realtime Chat

## 구현해야 할 백엔드 작업들

[-] 유저 디테일에서 세부적인 내용들을 데이터 분석(?)을 통해 유저에게 보여줌 
-> 유저는 자신의 분석결과를 바탕으로 자신의 수행정도를 가늠해 볼 수 있음
-> 추가된 친구의 수행정도를 자신의 디테일 창에서 확인해 볼 수 있고, 약간의 경쟁심을 유발할 수 있음

[o] 검색을 통해서 주변 유저들을 보여주고 검색창에 유저이름을 입력하면 비슷한 이름의 유저 목록을 보여줌
-> 그 특정 유저의 수행정도가 표시된 점수를 확인할 수 있고, 자신의 수행정도에 대한 점수와 비교해 볼 수 있음

[-] 메모 편집 기능에서 우선순위를 설정하는 기능 추가
-> 우선순위에 따라 보여주는 버튼 클릭시 그 메모부분만 선택적으로 재정렬해서 보여줌

[o] 한 일들(completed === true)의 목록들은 따로 메모창에서 사이드바로 보여줌
->  언제든지 할 일 목록으로 가져올 수 있음