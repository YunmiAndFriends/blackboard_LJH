# 과제 결과물
<img width="1792" alt="스크린샷 2022-03-07 오후 10 33 33" src="https://user-images.githubusercontent.com/87625901/157044078-461575be-ca7f-491b-8fcb-4025c60d37e9.png">

## 몰랐던 내용(react)
- `const [text, setText] = useState('')`
- text : useState의 상태 변수, setText : text값을 변경해주는 함수
- onChange event : 
- 예시 : `const onChangeText = (e)=>{
          setText(e.target.value)
         };`
         
         `<input id='textBox' onChange={onChangeText} placeholder='입력해주세요' />`
- 


## 몰랐던 내용(css)
- `display: flex;` 작성 후
- `align-items: center;` 등의 코드 사용(가운데로 정렬)
- `flex-direction: column;` 으로 위에서 아래로 정렬(`flex-direction: row;` 가 기본값[좌 -> 우])
