# This is my first memo application

## Blueprint

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
# /users/search -> User Search
# /users/chat -> Realtime Chat

## Required

localStorage -> Memo page [complete]

Authentication -> Welcome page
Mongodb -> Memo page

# 세션 관련 부분 로그인 구현 / 오류 해결 필요
# 쿠키 정보를 세션을 이용해서 어떻게 브라우저에 할당하는지...