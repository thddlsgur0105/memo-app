# 첫 번째 메모 앱입니다!

## 전체 서버 경로들

<!-- globalRouter -->
/ -> Welcome
/login -> Log In
/logout -> Log out

<!-- memoRouter -->
/memo/add -> Add Memo Content
/memo/:id/delete -> Delete Memo Content
/memo/:id/edit -> Edit Memo Content
/memo/:id/inComplete -> Not complete Memo Content
/memo/:id/complete -> Complete Memo Content

<!-- userRouter -->
/users/:id/detail -> User Detail Database
/users/:id/memo -> Mini Memo
/users/search -> User Search
/users/chat -> Realtime Chat

## 구현해야 할 프론트엔드 작업들

[-] 우선은 중요도에 따라서 카드의 색을 다르게 지정하는 기능
-> priority = 3 : 빨강 / priority = 2 : 노랑 / priority = 1 : 초록 

[-] 유저 디테일에서 세부적인 내용들을 데이터 시각화를 통해 유저에게 보여줌
-> D3.js 프레임워크를 활용해서 데이터를 시각화시킬 예정 
-> 유저는 자신의 분석결과를 바탕으로 자신의 수행정도를 가늠해 볼 수 있음
-> 추가된 친구의 수행정도를 자신의 디테일 창에서 확인해 볼 수 있고, 약간의 경쟁심을 유발할 수 있음

[-] 데이터 시각화 관련 부분은 유저 세부정보 뿐만아니라 친구 부분의 유저 카드에도 간소화시켜서 보여줄 수 있음
-> 유저에 관한 전반적인 정보들을 시각적으로 바로 확인할 수 있음

## 구현해야 할 백엔드 작업들


[x] 메모 편집 기능에서 우선순위를 설정하는 기능 추가
-> 우선은 중요도에 따라서 카드의 색을 다르게 지정하는 기능
-> priority = 3 : 빨강 / priority = 2 : 노랑 / priority = 1 : 초록 
-> 우선순위에 따라 보여주는 버튼 클릭시 그 메모부분만 선택적으로 재정렬해서 보여줌


[-] 메모부분에서 삭제버튼이나 편집버튼을 클릭했을 때, 동적으로 화면에서 변화하고 새로고침을 했을 때 백엔드 정보대로 수정되어 출력되도록 구현 필요

## 부족한 부분 && 중간에 경로 꼬이는 부분들 많이 보임
-> 우선 기능구현 하고 이후에 계속 개선해나가는 방향으로..
-> 모바일 기기 전용 우선
-> 웹 전용 나중

### 개인적인 활용 아이디어
-> navigation -> Zoomable Sunburst 
-> 친구 부분에서 친구 카드를 클릭하면 그 친구의 시각화된 데이터를 카드내에서 보여주는 양식
-> grid 활용해서 메모지 느낌으로 만들고 중요한 메모는 중요부분 클릭하면 메모지 상단에 큰 메모 부분에 고정
-> 진행중인 메모 노란색 완료한 메모는 회색으로 다르게 처리

### javascript main.js 관련해서 paintMemo 꼬인 부분 풀기..
### 꼬인 부분 풀면서 재시작할때마다 id 다시 부여 필요..