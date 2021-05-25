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

# 현재 메모와 관련된 데이터베이스는 공용상태.. 각 유저 별 메모들을 뽑아서 할당 필요