# Practice
Udemy의 'The Web Developer Bootcamp' 강의를 들으며 공부하고 정리한 내용입니다.
HTML, CSS, JavaScript, Node.js, EJS, Git 등을 연습했습니다.

<br>
<br>

## Index
1. [YelpCamp](#YelpCamp)
2. [Score Keeper](#Score-Keeper)
3. [TV Show Search](#TV-Show-Search)

<br>
<br>
<br>

# YelpCamp
강의 내의 클론 코딩 프로젝트입니다. 미국 내의 캠프장과 리뷰를 등록, 수정, 삭제할 수 있습니다. 
[(링크)](https://guarded-wildwood-42249.herokuapp.com/)

### 주요 기능
1. 캠프장 등록 / 수정 / 삭제
2. 캠프장 게시물에 리뷰 등록 / 수정 / 삭제
3. 회원가입 / 로그인

### 기술 스택
1. Node.js
2. Express
3. MongoDB / Mongoose
4. EJS
5. HTML / CSS / Bootstrap / Vanilla JavaScript
6. Mapbox API
7. Deploy: Heroku

<br>
<br>
<br>

# ScreenShots
## Index
1. [홈페이지](#홈페이지)
2. [캠프장 목록](#캠프장-목록)
3. [회원가입](#회원가입)
4. [로그인](#로그인)
5. [개별 캠프장 페이지](#개별-캠프장-페이지)
6. [캠프장 생성](#캠프장-생성)
7. [캠프장 수정](#캠프장-수정)

<br>
<br>

## 홈페이지
![home](https://user-images.githubusercontent.com/63030905/127596164-1413c5ac-1624-4609-bb53-ef64f8cc9002.png)
* 로그인 전에는 NavBar에 <Login>, <Register> 버튼이 나타나고, 로그인 후에는 <Logout> 버튼이 나타납니다.

<br>
<br>
<br>

## 캠프장 목록
![index1](https://user-images.githubusercontent.com/63030905/127596222-23982fdb-7c28-4dd7-aafe-1695c75c0d49.png)
* 존재하는 캠프장의 목록을 보여줍니다.
* <View> 버튼을 누르면 [개별 캠프장 페이지](#개별-캠프장-페이지)로 이동합니다.
* Mapbox API를 이용하여 지도에 캠프장 클러스터를 보여줍니다.

<br>
<br>
<br>

## 회원가입
![register](https://user-images.githubusercontent.com/63030905/127596664-8f9aae5a-ad11-4eac-b363-1fed8848a06f.png)
* Passpost.js를 이용하여 회원가입 기능을 구축하였습니다.

<br>
<br>
<br>

## 로그인
![login](https://user-images.githubusercontent.com/63030905/127596673-66dd1e1d-fb70-475e-9a88-c4213de85a43.png)
* Passport.js를 이용하여 로그인 기능을 구축하였습니다.

<br>
<br>
<br>

## 개별 캠프장 페이지
#### 타 유저의 캠프장
![show-login](https://user-images.githubusercontent.com/63030905/127596699-50850a5b-0212-45f7-988e-8758286e1cb4.png)
#### 내 캠프장
![show-mine](https://user-images.githubusercontent.com/63030905/127596704-c37ee9d3-4fa7-4a8e-9855-11471fceb907.png)
* 별점과 리뷰를 남길 수 있습니다
* Mapbox API를 이용하여 지도를 보여줍니다.
* 로그인 전에는 리뷰 textarea가 나타나지 않습니다.
* 내 캠프장인 경우에만 <edit>, <delete> 버튼이 나타납니다.

<br>
<br>
<br>

## 캠프장 생성
![new](https://user-images.githubusercontent.com/63030905/127596963-024242dd-077b-485e-9242-d5b510b43e1d.png)
* 캠프장을 생성합니다. Mongoose Model을 이용하여 작업했습니다.

<br>
<br>
<br>

## 캠프장 수정
![edit](https://user-images.githubusercontent.com/63030905/127596707-9cf4a280-bdd1-4b44-b061-23ac00656cfb.png)
* 캠프장을 수정합니다. 
* 내 캠프장이 아닌 경우에는 flash를 이용하여 권한 없음을 표시합니다.

  
<br>
<br>
<br>

# Score Keeper
강의 내의 클론 코딩 토이 프로젝트 입니다. 탁구 경기의 점수를 기록할 수 있는 웹페이지입니다. 
  
### 주요기능
1. 두 플레이어의 점수 기록
2. 점수 리셋
3. 승리 기준을 설정
  
### 기술 스택
1. HTML 
2. CSS / Bootstrap
3. JavaScript
  
<br>
<br>

## ScreenShot

![scorekeeper](https://user-images.githubusercontent.com/63030905/127616716-db58705a-dfee-429b-b7da-c97ea3104f4c.png)

<br>
<br>
<br>

# TV Show Search
강의 내의 클론 코딩 토이 프로젝트입니다. TV Maze의 API와 Axios를 이용해서 TV 프로그램을 검색하는 웹페이지입니다.
  
### 주요 기능
1. API로 TV 프로그램 검색
2. 검색된 프로그램 이미지 표시

### 기술 스택
1. HTML
2. JavaScript
3. Axios
4. TV Maze API
  
<br>
<br>

## Screenshot
  
![TV show search](https://user-images.githubusercontent.com/63030905/127617476-b27807ed-b3ae-47e7-8d03-fc38bd3194de.png)
* 'new'라는 키워드로 검색한 결과입니다.
