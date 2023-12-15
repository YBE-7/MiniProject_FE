<div align="center">

<img src="https://github.com/yangjaehyuk/Baekjoon/assets/37584686/20fa075f-031b-40fc-8f77-fba23f2b2f06" alt="yanolja"/>

### 때려 7조 Mini Project : 숙박 예약 프로젝트

<p align="center">
  <a href="https://mini-team-7.vercel.app/">
    <img src="https://img.shields.io/badge/Yanolja-pink?style=for-the-badge&logoColor=white" alt="wiki"/>
  </a>
</p>

</div>

<br/>


## 🖥 프로젝트 개요
> 1. 프로젝트 주제 :  숙박 예약 웹서비스 구현 프로젝트
> 2. 프로젝트 기간 : 11월 20일(월) ~ 12월 01일(목)
> 3. 주요 목표 : UI/UX 작업, React.js 기반 컴포넌트 단위 구조 설계, API 명세서에 따른 JSON 데이터 화면 출력, 무한 스크롤

안녕하세요:smiley: 

때려 7조의 숙박 예약 프로젝트 :computer: 웹 페이지 입니다

저희 팀은 프론트엔드 4명 백엔드 4명으로 구성되어 있습니다.   

백엔드는 [이곳](https://github.com/YBE-7/YBE-Mini-Project-BE)을 클릭해 주세요 

<br/>

## :clap: 7조 Contributors

 <table align="center">
    <tr>
        <td align="center"><img alt="avatar" src="https://github.com/moana16.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/yangjaehyuk.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/hhjs2.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/skyeome.png" width="100"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/moana16">김지민</a></td>
        <td align="center"><a href="https://github.com/yangjaehyuk">양재혁</a></td>
        <td align="center"><a href="https://github.com/hhjs2">정효주</a></td>
        <td align="center"><a href="https://github.com/skyeome">김성겸</a></td>
    </tr>
 </table>

<br/>

## ✍️ 개인별 작업 내용


<details>
<summary>김지민</summary>

## 주요 기능

- 숙소 상세 페이지 
- 객실 상세 페이지
- 달력 모달 및 날짜 선택 기능 구현
- Kakao map API 연결
- 숙소 조회 API 연결
- 객실 조회 API 연결(날짜, 인원수에 따라 달라지는 API 요청 및 객실 상태에 따른 디자인 변경)
- 객실 상세 조회 API 연결
- 장바구니 담기 API 연결
- 검색 페이지
- API 테스팅


|                           객실상세페이지 예약                            |                                                객실 페이지 지도                                               |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|![객실상세예약하기](https://github.com/YBE-7/MiniProject_FE/assets/65649035/75ad53c0-6ed6-41ad-a5ff-9bf028034221) | ![지도숏](https://github.com/YBE-7/MiniProject_FE/assets/65649035/ec5896c7-fff1-41bb-af96-579ba5fbf5b6) |
|       예약 버튼을 누르면 예약 상품 정보를 전달하며 바로 예약 페이지로 이동합니다.       |                   상단 주소를 클릭하면 지도 화면이 보여지고 주소 복사가 가능합니다.                    |

 


  |                         장바구니 로그인                              |                                               장바구니 성공                                             |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![장바구니로그인](https://github.com/YBE-7/MiniProject_FE/assets/65649035/0f474be5-be84-49b3-bc76-cf52bbeaca8e) | ![장바구니성공](https://github.com/YBE-7/MiniProject_FE/assets/65649035/05c520e3-560e-4464-84ca-8f9686968433) |
|       초그인이 되어있지 않을 시 alert창과 함께 로그인 페이지로 이동합니다       |                   장바구니에 담을 상품을 서버에 전송하고 성공하면 alert창이 뜹니다                    |




  |                         날짜, 인원수에 따라 달라지는 UI                              |                                               최대인원 초과                                               |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![인원수변경](https://github.com/YBE-7/MiniProject_FE/assets/65649035/f834b7c0-2f50-4e19-a21c-8d342fe61071) | ![달력초기화](https://github.com/YBE-7/MiniProject_FE/assets/65649035/141fbd9f-55a1-4885-8436-7672d6a55e42)|
|      인원수에 따라 예약할 수 없는 방을 보여줍니다. <br/>또한 사용자가 선택한 날짜에 객실 상품이 품절되었는지 여부도 확인할 수 있습니다.        |                   달력 모달에서 날짜 선택, 날짜 초기화 가능합니다.<br/> 만약 날짜를 선택하여도 X 버튼으로 나가면 이전 날짜가 보여집니다.                    |





## :bomb: 트러블 슈팅

#### :x:오류

vercel에 배포 후 CORS 에러


#### :heavy_check_mark: 해결

그동안 http 통신이었다가 vercel에 배포하면서 자동으로 https로 배포가 되는 바람에
또 한번 CORS 에러가 떴다. <br/>
서버 측에서 해결 해 주셨지만 다음 번엔 먼저 https로 통신이 되게끔 회의해야겠다고 생각했고 또 찾아보니까 proxy 서버를 사용하면 프론트엔드 딴에서도 해결할 수 있다고한다.

#### :x:오류

장바구니 객실 담기할 때 정해진 개수를 초과해서 장바구니에 담는 오류


#### :heavy_check_mark: 해결

서버 측에서 받아오는 status 값을 통해 존재하는 객실 수 이상으로 장바구니 담기 버튼을 누를 경우 alert 창이 뜨게 함

--


## 회고

부트캠프를 하면서 처음으로 백엔드 분들과 프로젝트를 하였다. <br/>
처음에는 약 2주밖에 안되는 시간이라서 가능할까? 생각했지만 모두들 열심히 해주신 덕분에 생각보다 금방 할 수 있었다.  <br/>
Jira를 간단하게 작성하여 서로 작업 내용을 공유하니까 다른 파트 분들이 어느 정도 작업량을 하셨는지 알기가 수월해서 좋았다.   <br/>
이번에는 tailwind CSS를 오랜만에 다시 사용해 보았는데 역시 편하고 좋았다 근데 아무래도 공통적인 css 를 하기엔 조금 불편한 감이 없잖아 있는 것 같다.  <br/>
아쉬운 점은 이번에도 먼저 공통 CSS나 공통 컴포넌트를 생성하지 않고 처음 작업을 시작해서 중간에 한번 코드를 수정한 점이다.  <br/>
멘토님 말씀대로 다음번에는 작업하기 전에 디자인 리뷰를 할 생각이다.  <br/>
정말 다행인 건 요청드린 데이터 대로 빠르게 작업 해주셔서 시간이 촉박하지 않게 API 를 연결해서 마무리 작업을 할 수 있었다  <br/>
그리고 처음으로 테스트 코드를 작성했는데 재혁님 덕분에 해매지 않고 작성할 수 있었다. !! <br/>
하지만 아무래도 작업 중간에 테스트해본건 아니라서<br/>
다음 프로젝트는 중간중간 테스트 코드를 작성해보아야 겠다고 생각했다. <br/>
매일 회의를 하다보면 지치기도 할 텐데 다들 열정 넘치게 참여해주셔서 정말 감사합니다 :) !!



</details>

<details>
<summary>김성겸</summary>
  
## 주요 작업 내용

- 숙소 목록 조회 관련 모든 컴포넌트 Skeleton UI 적용
- 카테고리별 (호텔/리조트/펜션/풀빌라) 페이지
- 지역별 숙소 상품 조회 페이지
  - 필터링 기능 : [ 별점 높은 순, 예약가 높은 순, 예약가 낮은 순 ]
  - 무한 스크롤 기능 : 4개씩 불러오며, 하단에 도착하면 새로 4개를 불러옵니다.
- 지금 사랑받는 여행지 페이지
- 지역 선택 모달
- 공통 헤더 설정

|                                               상품 필터링 기능                                               |                                       선택한 날짜가 몇 박인지에 따라 가격이 변경                                       |
| :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![필터링 시연](https://github.com/YBE-7/MiniProject_FE/assets/59966217/70902b88-b531-4371-b968-4665653433e9) | ![날짜에 따라 가격 변경](https://github.com/YBE-7/MiniProject_FE/assets/59966217/77ae6556-a02a-4c6b-bfd2-425258d1f8f5) |
|           평점 높은순, 예약가 높은순, 예약가 낮은순 3가지 기준으로 숙박 상품을 조회 할수 있습니다.           |                          만약 선택한 날짜가 몇 박인지에 따라 n박 당 (가격 \* n)를 계산합니다.                          |

<br/>

|                                                 무한 스크롤 기능                                                  |                                           카테고리(호텔/리조트/펜션/풀빌라) 페이지                                           |
| :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| ![무한 스크롤 시연](https://github.com/YBE-7/MiniProject_FE/assets/59966217/6eb37248-a792-4f33-af2d-79bb3d324401) | ![화면-캡처-2023-11-30-110705](https://github.com/YBE-7/MiniProject_FE/assets/59966217/6d48fe68-7523-40f9-8ec7-a28e33862838) |
|                       React Query의 useInfiniteQuery를 사용해서 무한 스크롤을 구현했습니다.                       |                각 카테고리에서 평점 높은 상품을 보여주고, 하단에는 해당 카테고리의 지역별 숙소를 보여줍니다.                 |

## :bomb: 트러블 슈팅

#### :x: 오류

- 상품 썸네일이 다른 상품과 비율이 다른 경우인 경우 이미지가 튀어 나가는 버그

#### :heavy_check_mark: 해결

- 이미지를 감싸는 div에 `overflow: hidden; aspect-ratio: 1`을 추가하여 1:1비율로 썸네일을 고정합니다.  
  그리고 이미지 태그에는 `width: 100%; height:100%; object-fit: center;`를 추가하여 비율유지하며 꽉 채웠습니다.

#### :x: 오류

- 상품 상세페이지에서 체크인 날짜를 바꾸고 뒤로가면 선택한 날짜가 날아가는 버그

#### :heavy_check_mark: 해결

- 검색창에 from, to라는 파라메터에 날짜를 저장해서 사용하던 방식에 문제라고 판단되어서,  
  recoil의 전역 상태를 사용하는 방식으로 변경해서 전역 상태의 날짜를 따라가게 변경했습니다.

## 회고

여러 팀원들과의 소통과정에서 의견 충돌이 있었을 때 서로 기분나쁘지 않게 잘 해결하는 과정들이 있어서,  
저희 팀원들의 커뮤니케이션 스킬이 참 좋아보였습니다. 저도 소통에 대해서 많이 배웠던것같습니다.

그밖에 기술적으로 다 같이 좀 더 좋은 방법을 찾고, 버그도 같이 해결하면서 새로운 방법도 알게되며  
정말 많은 부분에서 고민하고 성장해보는 기회가 되었던것같습니다.

</details>


<details>
<summary>양재혁</summary>

## 주요 기능

- 로그인 페이지
- 회원 가입 페이지
- 마이 페이지
- 로그인 validation
- 회원 가입 validation
- 인증 및 인가
- 회원 가입 모달
- 마이 페이지 날짜 선택 모달
- Jest Testing

## :bomb: 트러블 슈팅

#### :x:오류

로그인 및 회원 가입 중복 요청 버그

#### :heavy_check_mark: 해결

로그인 및 회원 가입 버튼을 여러 번 누르면 클릭 수 만큼 요청이 되는 것을 방지하기 위해 클릭 후 swal창으로 막으려고 하였습니다. <br/> 
하지만 swal이 팝업되기 전까지의 시간이 있어 여러 번 요청되는 것을 식별하였습니다. <br/>
그래서 요청을 하기 전에 swal창을 팝업하도록 수정한 결과 버튼을 누르자마자 swal창이 떠서 중복 요청을 방지할 수 있었습니다.

--


## 회고

오랜만에 백엔드와 협업을 하게 되어 재밌고 유익하였습니다. <br/>
저희 팀 모두가 능력이 있으신 분들 같아 다양한 기능들을 기한보다 빠르게 마무리 할 수 있었던 것 같습니다. <br/>
프로젝트 매니지먼트부터 유닛 테스팅 까지 알차게 프로젝트를 진행한 것 같아 뿌듯했습니다. <br/>
오랜만에 Jest를 사용해서 버벅였는데 다음 프로젝트에서는 개발 중간 중간에 테스팅을 진행해야 겠다고 생각하였습니다. <br/>
모두들 고생 많으셨습니다 !!!

</details>


<details>
<summary>정효주</summary>

## 주요 기능

- 메인페이지 
  -   타입별 숙소, 지역별 숙소 API 연결, 리액트 쿼리 사용 
- 장바구니 페이지 
  - 장바구니 조회, 장바구니 개별 삭제, 전체 삭제  API 연결
  - 체크박스를 이용해 상품 관리 (합계 금액, 총 건수)

- 결제하기 페이지 
  - 결제폼 유효성 검사 후 에러 메세지
  -  필수 이용 동의 후 버튼 활성화
  - recoil을 이용해 주문id 관리

- 결제 완료 페이지   
  - 주문 조회 API 연결


|                          장바구니 체크박스                           |                                                장바구니 삭제기능                                             |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![cart1](https://github.com/YBE-7/MiniProject_FE/assets/102405617/f7be26b9-8334-40a5-8d72-ea1fb8cf9ecc) | ![cart2](https://github.com/YBE-7/MiniProject_FE/assets/102405617/e51676e3-fd26-4986-95e1-856fd2daa9fc) |
|       체크박스 선택에 따라 결제 금액과 결제 건수가 변경    |                 개별삭제, 전체 삭제 가능                    |


|                          결제하기 입력폼                     |                                                결제하기 버튼 활성화                                  |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![order1](https://github.com/YBE-7/MiniProject_FE/assets/102405617/646aa286-8158-4752-9944-c0ded2713814) | ![order2](https://github.com/YBE-7/MiniProject_FE/assets/102405617/d1307473-95e9-458f-84cc-8c9bcd413253) |
|       예약하기 폼 유효성 검사    |                 필수약관 동의 시 결제하기 버튼 활성화                    |


|                        메인페이지                  |                                              예약 결과 페이지                              |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![main](https://github.com/YBE-7/MiniProject_FE/assets/102405617/38c3eb6d-8e1f-4643-8255-c85e3be83ab6) | ![result](https://github.com/YBE-7/MiniProject_FE/assets/102405617/2cd48a1c-e6f1-471f-bc0c-edf9ad2056c2) |
|       타입별 숙소, 지역별 숙소 API 연결     |                주문 조회 API 연결                 |




## :bomb: 트러블 슈팅

#### :x:오류

로그인 상태에 따른 페이지 접근 오류

#### :heavy_check_mark: 해결
처음에는 장바구니 페이지에 들어갈 때 access토큰을 여부를 확인 후 없으면 접근 금지로 구현하였습니다. <br/>
그렇게 하다보니 장바구니 페이지 화면이 렌더링 된 후 접근 금지 알람창의 띄어지는 오류가 생겼습니다.<br/>
이러한 점을 장바구니 버튼을 클릭 했을 때 로그인 상태 여부를 확인하는 로직으로 수정했습니다.<br/>



## 회고
이번 프로젝트는 백엔드와 처음 협업하는 경험이었습니다. 기회부터 테스팅 배포까지에 대한 전 과정을 경험하며 매우 의미 있는 시간이었습니다.<br/>
새로운 상태 관리 라이브러리인 recoil과 react-query를 처음 사용해 보면서 데이터 관리와 캐싱에 대해 다양한 고민을 할 수 있었습니다.<br/>
인원이 적었음에도 불구하고 모든 팀원들이 최선을 다해주셔서 빨리 프로젝트를 마칠 수 있었습니다 ! 너무 즐거웠고, 감사합니다!



</details>

<br/>

## KPT 보완사항
<details>
<summary>김지민</summary>
  
  > 1. 커스텀 훅 생성으로 코드 재사용
>   2. 비즈니스 로직 분리
>   3. 스켈레톤 UI 생성
</details>
<details>
<summary>김성겸</summary>

아쉬웠던 부분을 이번 KPT기간을 활용하여 보완하였습니다.
시간이 없어서 진행하지 못했던 모바일 반응형을 진행하였으며, 
기획할 당시 넣어보고 싶었던 기능이였지만 시간상 어려워 진행하지 않았던 숙소 공유기능, 입실예정알림 기능을 추가하였습니다.

1. 전체 페이지 반응형 적용
   - 기존 pc기반으로 진행되었던 디자인을 전체적으로 모바일 환경에서도 잘 보이게 반응형을 수정했습니다.
2. 링크/카카오톡 공유 기능
   - 다른사람에게 숙소 정보를 공유하고 싶을 때 링크를 자유롭게 공유하거나, 카톡으로 메시지를 보내 공유할수있는 기능을 추가하였습니다.
3. 입실예정 알림 기능
   - 실제 야놀자에 있는 입실예정 알림기능을 모티브로 해서 Web Notification API를 참고해서 브라우저 알림으로 구현해보았습니다.

**링크공유**
![링크공유](https://github.com/YBE-7/MiniProject_FE/assets/59966217/d0afb604-834f-462b-9d21-a2682061ad75)

**카카오톡 공유**
![카카오톡-공유](https://github.com/YBE-7/MiniProject_FE/assets/59966217/dd7d80b5-676c-40fe-9cf0-a2f41bf6a7bd)

**입실예정알림**
![입실예정알림](https://github.com/YBE-7/MiniProject_FE/assets/59966217/03c5d327-e3ae-4bf2-ad23-0ce4b3669129)

</details>
<details>
<summary>양재혁</summary>
  
  > 1. 로그인, 회원가입 에러 핸들링 로직 수정
>   2. axios 인스턴스 분리
>   3. 마이페이지 인터페이스 분리
</details>
<details>
<summary>정효주</summary>
  
  > 1. 함수 컴포넌트의 Props 타입을 React.FC 대신 직접 명시하여 수정
>   2. 타입스크립트 부모와 자식 간의 Props 타입을 일치
>   3. 스켈레톤 UI 생성

</details>



## 회고

<details>
<summary>김지민</summary>
  
 #### 좋았던 점
> 1. 이전 프로젝트에서는 테스트 코드를 작성해 볼 여유가 없었는데 조금이나마 jest를 사용하여 테스트 코드를 작성해 볼 수 있어서 좋았습니다.
> 2. Recoil을 통한 상태관리를 보다 더 깊이 이해할 수 있었습니다.
> 3. 팀장으로서 팀을 어떻게 이끌어 나가야 하는지 알 수 있었습니다. 리더쉽을 배울 수 있었던 좋은 기회였습니다.
> 4. 백엔드 분들과 협업하여 소통하는 방법을 배울 수 있었습니다. 매일 회의를 통해 진척 사항을 얘기하고 공유하니 더 빠르게 개발을 마무리 할 수 있었습니다.
#### 아쉬운 점
> 1. 코드를 작성할 때 생각보다 재사용 가능한 코드들이 많았는데 이를 놓치고 코드를 작성했던 점이 아쉬웠습니다. 이후 리팩토링을 진행하면서 커스텀 훅으로 분리했었지만 다음 프로젝트에서는 처음 개발 단계에서 더 나은 코드를 위해 고민해 보아야 겠다고 생각했습니다.
> 2. 아무래도 적은 인원이다 보니 일단 기본적인 기능에 충실하게 진행하고자 하였지만 돌이켜서 생각해보니까 더 기능들을 붙여서 완벽한 프로젝트를 만들었으면 하는 아쉬움이 남았습니다.
> 3. 공통 컴포넌트를 처음에 분리하지 못한것이 아쉬웠습니다.
</details>
<details>
<summary>김성겸</summary>
  
#### 좋았던 점
> 1. 실무에서는 최신버전에 있는 기능을 사용못할수도 있기에 미니 프로젝트를 통해서 React 최신버전에 추가된 기능을 도전해본점이 좋았습니다.
> 2. 백엔드와의 협업을 통해서 실무에 가서 백엔드 개발자와 소통하고 원하는것을 요구하는 연습을 간접적으로 해본 경험을 얻어간것같습니다.
> 3. 실제 예약 시스템을 구축할때 어떠한 오류나 버그가 발생하는지 경험해보고 어떻게 해결해야 할지 고민하는 좋은 경험이 생긴것같습니다. 
또한 다른조의 사례를 통해서 간접적으로 트러블 슈팅에 방법에 대해 좀더 알게된것같습니다.

#### 아쉬운 점
> 1. 인원이 다른조에 비해 적어서 시간상 어려워 포기했던 기능이 몇개 있었던 점이 매우 아쉬웠습니다.
> 2. 기획할 당시 생각하지 못한 기능을 추가해야 했거나, 오류가 나서 시간을 많이 쓴 기능으로 인해 시간에 쫒기며 작업한 점이 아쉬웠습니다.

</details>
<details>
<summary>양재혁</summary>
  
  #### 좋았던 점
> 1. 아아
#### 아쉬운 점
> 1. 아아
</details>
<details>
<summary>정효주</summary>
  
 #### 좋았던 점
> 1. Recoil 전역 상태관리를 학습하고 react-query를 이용하여 데이터를 캐싱해 불러오는 수를 최소화하여 재접근 속도를 높히는것에 대해 고민하는 시간을 가질 수 있어서 좋았습니다.
> 2. 다른 팀원이 만든 커스텀 훅과 util 함수를 이용하여 반복되는 로직을 하나의 함수로 묶어서 재사용하였습니다. 이러한 경험을 통해 코드를 구조화 시키고 유지보수성을 향상시켜 코드를 가독성 있게 구현할 수 있어 좋았습니다.
> 3. 프로젝트 기간동안 디스코드를 활용하여 데일리 스크럼을 거쳐 매일 모각코를 진행했고, 회의가 아닌 시간에도 백엔드와 필요한 부분에 대해 상의하면서 끊임없이 정보를 공유했습니다. 이런 원활한 소통으로 버그를 해결하고 프로젝트를 예상보다 여유롭게 마무리할 수 있어 이상적인 협업을 경험을 얻어갈 수 있었습니다.
#### 아쉬운 점
> 1. 인원이 적다는 이유로 추가 기능을 생각못하고 기획을 했던 점이 아쉬웠습니다. 그리고 한 컨셉에 국한되는게 아닌 폭넓게 서비스에 대해 기획을 했으면 조금 더 많고 새로운 기능들을 구현 할 수 있었을 거라는 아쉬움이 남습니다.
> 2. 처음 기획 할 때 공통 컴포넌트를 생각하지 못 했습니다. 그래서 메인페이지와 숙소 조회 페이지에 같은 디자인 레이아웃이 있었음에도 불구하고, 각자 구현한 후 나중에 하나로 통일했기 때문에 시간적으로 낭비하여 아쉬웠습니다. 다음 프로젝트에서는 공통 컴포넌트를 먼저 생각해보는 계기가 되었습니다.
</details>

## 🛢️ Stack

### Language

<p align="left">
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
</p>

### Development

<p align="left">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/recoil-007AF4?style=for-the-badge&logo=recoil&logoColor=black"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Eslint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge"/>
</p>

### CI/CD

<p align="left">
  <img src="https://img.shields.io/badge/vercel-ffffff?style=for-the-badge&logo=vercel&logoColor=black"/>
</p>

### Design

<p align="left">
 <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
</p>

### Collaboration

<p align="left">
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
</p>

<br/>

## 🎨 화면 구성

#### 메인페이지
![image](https://github.com/YBE-7/MiniProject_FE/assets/65649035/96c57314-5770-41bc-9399-d30abfcee2cc)
#### 카테고리별 페이지
![image](https://github.com/YBE-7/MiniProject_FE/assets/65649035/93ddb03d-7338-4db1-9a04-e0b2d897fc5c)
#### 숙소 상세 페이지
![image](https://github.com/YBE-7/MiniProject_FE/assets/65649035/b7424080-f060-4ff2-80e6-fb20e54e9412)
#### 장바구니 페이지
![image](https://github.com/YBE-7/MiniProject_FE/assets/65649035/36f9c7f2-90df-440e-9a3d-2333d6281c08)
#### 마이페이지
![image](https://github.com/YBE-7/MiniProject_FE/assets/65649035/f99573f7-14f0-46ea-9b45-7520c17dfc6e)


<br/>

## 📚 주요 기능

<div align="center">
  <table>
    <tr align="center">
      <th>회원가입</th>
      <th>상품조회</th>
    </tr>
    <tr>
      <td><img src="https://github.com/YBE-7/MiniProject_FE/assets/59966217/27f10e32-ff99-4d47-ba1a-942bfd3b4c4a" alt="회원가입 유효성 검사"></td>
      <td><img src="https://github.com/YBE-7/MiniProject_FE/assets/59966217/6eb37248-a792-4f33-af2d-79bb3d324401"alt="무한스크롤 시연"></td>
    </tr>
    <tr align="center">
      <th>상세페이지</th>
      <th>결제페이지</th>
    </tr>
    <tr>
      <td><img src="https://github.com/YBE-7/MiniProject_FE/assets/59966217/31cc1d41-e252-4c9a-a466-dca74ec67c7e" alt="날짜에 따라 가격 및 품절 변경"></td>
      <td><img src="https://github.com/YBE-7/MiniProject_FE/assets/59966217/86ddcbf3-460f-4770-bc05-94b011a392d0" alt="결제페이지 필수 동의 여부"></td>
    </tr>
  </table>
</div>

<br/>

## :file_folder: 폴더 구조

```
📦MiniProject
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┣ 📂assets
 ┃ ┣ 📂componets
 ┃ ┣ 📂hooks
 ┃ ┣ 📂pages
 ┃ ┣ 📂recoil
 ┃ ┣ 📂types
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜index.css
 ┣ 📂test
 ┣ 📜.env
 ┣ 📜.eslintrc.js
 ┣ 📜.eslintignore
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tailwindcss.config.js
 ┗ 📜tsconfig.json

```
<br/>

## 🔑 테스트 아이디, 비밀번호

id : fast@naver.com <br/>
pw : test123!

