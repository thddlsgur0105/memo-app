# This is my first memo application

## Blueprint

1. Default memo function
    > [-] create-memo
    > [-] delete-memo
    > [-] update-memo (edit-memo)

2. memo database 
    > [x] Local Storage
    > [-] MongoDB

3. Dependencies
    > [o] NodeJS express Install

4. devDependencies
    > [o] Nodemon
    > [o] Morgan 
    > [o] Babel (For using sexy javascript) Install

5. HTML template --> click, event --> get method Url --> Backend Server Communication 
   > [o] Connecting Server Pug engine
   > [-] Styling pug -- route: / -- Home Page

6. 개발 기능
   > 이름 물어보고 저장
   > 할 일 물어보고 저장
   > 할 일 버튼 기능 -- [o]삭제기능, [-]편집기능

7. 오류
   > edit 버튼 클릭 이후에 한 번 더 클릭 시 추가적으로 버튼 생성 오류
   > edit 버튼 클릭 이후에 바로 delete 버튼 클릭 시 edit 버튼 남아있는 오류

8. 스케줄
   > 보기 좋게 home 창 스타일링 + 이름 묻고 다음 창으로 넘어가는 방식 구현
   > edit 기능 구현하고 오류 수정
   > 다른 기능 memo 기본 기능들 탐색

### 탐구해야 할 부분
 > [o] pug 파일에 정적파일 로드하는 방식 공부