# This is my first memo application

## Blueprint

1. Default memo function
    > [o] delete-memo
    > [-] create-memo
    > [-] update-memo (edit-memo)

2. memo database 
    > [o] Local Storage
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

6. 개발 기능 && 스케줄
   > [o] 삭제기능
   > [o] 편집 수정완료 기능
   > [o] 편집 뒤로가기 기능
   > [o] pug 파일에 정적파일 로드하는 기능
   > [o] Completed Part edit 기능 수정
   > [o] Completed Part delete 기능 수정
   > [o] memo 에서 진행중 영역 , 완료 영역 등등 여러 기능들 추가적으로 구현
   > [o] toDo Part, Completed Part 영역 구분해서 전달해주는 기능
   > [o] localStorage 에서 저장 -- 데이터는 왜 휘발됨?

   > [-] 편집 뒤로가기 기능 논리구조 이해 필요
   > [-] 보기 좋게 home 창 스타일링 + 이름 묻고 다음 창으로 넘어가는 방식 구현
   > [-] 편집 이후에 edit 관련 창 깔끔하게 없애주는 기능
   > [-] Completed Part 에서는 complete btn 다른 기능으로 수정
   > [-] 각잡고 코드 전체 점검하는 거 필요할 듯?
   > [-] 우선순위 설정해서 중요하다고 설정한 것들은 위로 올리는 기능?
   > [-] navigation bar 를 통해 벡엔드 작업으로 여러 기능 구현 시키기