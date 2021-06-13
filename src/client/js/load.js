function init() {

    // 기존의 sessionStorage 내용 로드
    const loadedArray = sessionStorage.getItem("toDos");
    const parsedArray = JSON.parse(loadedArray);
    
    const jsonArray = []

    if (parsedArray) {
        parsedArray.forEach(oneMemo => {
            const memoObj = {
                title: oneMemo.title,
                description: oneMemo.description,
                id: memoArray.length + 1,
            }

            jsonArray.push(memoObj);

            // frontend Process
            paintMemo(memoObj);

            // backend process
            saveMemo(memoObj);
        });

        console.log(jsonArray);

        // frontend javascript 역시 import export 활용해서 모든 init 부분에 Ajax 활용을 추가해주는 방향? 
        // Ajax 활용
        // REST API?
        const stringifiedArray = JSON.stringify(jsonArray);

        const httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', "/server", true);
        httpRequest.setRequestHeader("content-type", "application/json")
        httpRequest.send(stringifiedArray);
    }
}

init();