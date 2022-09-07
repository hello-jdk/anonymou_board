# 익명 게시판

비밀번호를 사용한 익명게시판 만들기

## 사용자 요구사항

1. 사용자 게시글 올리기

   1. 게시글의 제목은 최대 20자, 본문내용은 최대 200자입니다.
   2. 제목과 본문 모두 이모지가 포함 할 수 있습니다.

2. 패스워드를 통한 게시글 관리

   1. 패스워드를 통한 수정, 삭제 가능
   2. 패스워드는 DB에 암호화되서 저장
   3. 패스워드는 6자 이상, 숫자 1개 이상 반드시 포함

3. 모든 사용자가 한 페이지 내에서 모든 게시글을 확인

   1. 최신 글 순서로 정렬되어있습니다.
   2. 하나의 요청마다 최대 20개의 게시글 목록을 불러옵니다.

## 사용기술

`express`
`mysql2`
`sequelize`

## 스키마
<img width="400" alt="1" src="https://user-images.githubusercontent.com/57665888/188879492-bcfee6f2-eca7-4546-b215-a6773487f59f.png">

<img width="400" alt="1" src="https://user-images.githubusercontent.com/57665888/188884562-cd70d548-c9e9-4783-aee3-45512208c7c6.png">
<img width="400" alt="21" src="https://user-images.githubusercontent.com/57665888/188884567-05727fdc-0f9b-4c68-bf0d-59d02ec8c5bb.png">
<img width="400" alt="22" src="https://user-images.githubusercontent.com/57665888/188884571-d9d4d134-6be4-436e-a200-abc57aec9f93.png">
<img width="400" alt="31" src="https://user-images.githubusercontent.com/57665888/188884574-e96cde8b-b64c-4b92-92ab-4f35abfeb9ee.png">
<img width="400" alt="32" src="https://user-images.githubusercontent.com/57665888/188884577-80141597-5120-4c5a-9c92-3285a1797ec7.png">
<img width="400" alt="41" src="https://user-images.githubusercontent.com/57665888/188884580-c0086169-2537-4d47-ae10-fae84dbd4c01.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/57665888/188884584-a51feb52-836d-488e-95bc-1da4020eed5e.png">
