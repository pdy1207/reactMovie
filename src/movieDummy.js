// 사용한 API : TMDB 현재 한국에서 상영 중인 영화 API
// API Document : https://developers.themoviedb.org/3/movies/get-now-playing
// Request : https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR

export const dummy = {
  dates: { maximum: "2023-05-24", minimum: "2023-04-06" },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "따단-딴-따단-딴 ♫ 전 세계를 열광시킬 올 타임 슈퍼 어드벤처의 등장! 뉴욕의 평범한 배관공 형제 '마리오'와 ‘루이지’는 배수관 고장으로 위기에 빠진 도시를 구하려다 미스터리한 초록색 파이프 안으로 빨려 들어가게 된다. 파이프를 통해 새로운 세상으로 차원 이동하게 된 형제. 형 '마리오'는 뛰어난 리더십을 지닌 '피치'가 통치하는 버섯왕국에 도착하지만 동생 '루이지'는 빌런 '쿠파'가 있는 다크랜드로 떨어지며 납치를 당하고 ‘마리오’는 동생을 구하기 위해 ‘피치’와 ‘키노피오’의 도움을 받아 '쿠파'에 맞서기로 결심한다. 그러나 슈퍼스타로 세상을 지배하려는 그의 강력한 힘 앞에 이들은 예기치 못한 위험에 빠지게 되는데...!",
      popularity: 8501.774,
      poster_path: "/dlGyzCxbBQK1U2O5o31Z1hB6erc.jpg",
      release_date: "2023-04-26",
      title: "슈퍼 마리오 브라더스",
      video: false,
      vote_average: 7.6,
      vote_count: 2570,
    },
    {
      adult: false,
      backdrop_path: "/cEyhk8tZWubni71M6plwLMQFOIX.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "돔과 그의 패밀리 앞에 나타난 운명의 적 단테. 과거의 그림자는 돔의 모든 것을 파괴하기 위해 달려온다. 단테에 의해 산산히 흩어진 패밀리들은 모두 목숨을 걸고 맞서야 하는 함정에 빠지고 마는데...",
      popularity: 2667.036,
      poster_path: "/3JT1oE0JIA6CQJaZDG00y3S0kP3.jpg",
      release_date: "2023-05-17",
      title: "분노의 질주: 라이드 오어 다이",
      video: false,
      vote_average: 6.8,
      vote_count: 84,
    },
    {
      adult: false,
      backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
      genre_ids: [27, 53, 14],
      id: 758323,
      original_language: "en",
      original_title: "The Pope's Exorcist",
      overview:
        "바티칸이 인정한 공식 수석 엑소시스트이자 최고의 구마사제 '가브리엘 아모르트’ 신부(러셀 크로우)는 한 어린 소년에게 들린 악마를 구마하기 위해 스페인으로 향한다. 그리고 그곳에서 바티칸이 숨겨온 충격적인 비밀과 마주하고, '토마스 에스퀴벨’ 신부(다니엘 조바토)와 함께 진실을 파헤치게 되는데...",
      popularity: 1926.839,
      poster_path: "/fA1xRPplBqW87wWh0hO1pwbQmX8.jpg",
      release_date: "2023-05-10",
      title: "엑소시스트: 더 바티칸",
      video: false,
      vote_average: 7.2,
      vote_count: 1015,
    },
    {
      adult: false,
      backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      genre_ids: [878, 12, 28],
      id: 447365,
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "가모라를 잃고 슬픔에 빠져 있던 피터 퀼이 위기에 처한 은하계와 동료를 지키기 위해 다시 한 번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기.",
      popularity: 1766.934,
      poster_path: "/b7epV2cQZVIR4u5VZraDwD0AgiE.jpg",
      release_date: "2023-05-03",
      title: "가디언즈 오브 갤럭시: Volume 3",
      video: false,
      vote_average: 8.1,
      vote_count: 1293,
    },
    {
      adult: false,
      backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "죽을 위기에서 살아난 존 윅은 최고 회의를 쓰러트릴 방법을 찾아낸다. 비로소 완전한 자유의 희망을 보지만, 빌런 그라몽 후작과 전 세계의 최강 연합은 존 윅의 오랜 친구까지 적으로 만들어 버리고, 새로운 위기에 놓인 존 윅은 최후의 반격을 준비하는데...",
      popularity: 1095.972,
      poster_path: "/9WF6TxCYwdiZw51NM92ConaQz1w.jpg",
      release_date: "2023-04-12",
      title: "존 윅 4",
      video: false,
      vote_average: 7.9,
      vote_count: 1423,
    },
    {
      adult: false,
      backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
      genre_ids: [27, 9648, 53],
      id: 934433,
      original_language: "en",
      original_title: "Scream VI",
      overview:
        "고스트페이스의 습격에서 살아남은 생존자들이 우즈보로를 떠나 뉴욕에서 새로운 삶을 시작하지만, 다시금 과거의 살인마에게 쫓기게 되는 이야기",
      popularity: 930.217,
      poster_path: "/1zhb49U0Rjg2qVU9L7VLmujf1Hs.jpg",
      release_date: "2023-05-24",
      title: "스크림 6",
      video: false,
      vote_average: 7.3,
      vote_count: 1193,
    },
    {
      adult: false,
      backdrop_path: "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
      genre_ids: [878, 28, 18],
      id: 842675,
      original_language: "zh",
      original_title: "流浪地球2",
      overview:
        "태양계 소멸의 위기를 맞은 인류는 지구 표면에 거대한 엔진을 달아 궤도를 옮기는 ‘유랑지구 프로젝트’에 돌입한다. 하지만, 데이터베이스로 영생을 가지려는 ‘디지털 라이프’와 대립하게 되며 프로젝트는 난관에 부딪히게 되고, 그 과정 속 달과의 충돌이라는 예상치 못한 대재앙에 놓이게 되는데… 살아남기 위한 선택은 단 하나, 달을 파괴하라!",
      popularity: 1412.376,
      poster_path: "/pajq0n6FZivirCg1ifpe4zYKvsA.jpg",
      release_date: "2023-05-10",
      title: "유랑지구 2",
      video: false,
      vote_average: 7.4,
      vote_count: 193,
    },
    {
      adult: false,
      backdrop_path: "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
      genre_ids: [27, 35, 14],
      id: 649609,
      original_language: "en",
      original_title: "Renfield",
      overview:
        "정년 보장 + 평생 직장의 대가는 밤낮없는 24시간 FULL 근무? 사내 복지는 만성 피로, 불면증, 소화불량, 짙은 다크서클입니다! 불멸의 삶과 폭발적인 힘의 대가는 악당용 배민이 되는 것?! ‘드라큘라’에게 취업 사기를 당하고 24시간 밤낮없이 그에게 순결한 제물을 바치는 직속비서 ‘렌필드’는 남들과 다른 특별한 꼰대 상사에 점차 피폐해져 간다. 그러던 어느 날, 여느 때처럼 ‘드라큘라’에게 바칠 제물을 찾던 중 자신의 인생을 뒤바꿔줄 친구 ‘레베카’를 만나게 되고 지금껏 가슴 한 켠에 숨 죽여 있었던 퇴사의 희망을 발견하게 되는데.. 과연 퇴사 없는 종신계약에서 ‘렌필드’는 벗어날 수 있을까?  슈퍼 을(乙) ‘렌필드’, 자네 꿈이 뭔가? “이 지독한 관계에서 벗어나고 싶어요! 퇴사하겠습니다!”",
      popularity: 1267.379,
      poster_path: "/wJXgQ3FgVIyVUwdoaKoeobET3po.jpg",
      release_date: "2023-04-19",
      title: "렌필드",
      video: false,
      vote_average: 7.1,
      vote_count: 412,
    },
    {
      adult: false,
      backdrop_path: "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
      genre_ids: [12, 10751, 14, 10749],
      id: 447277,
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "아틀란티카 바다의 왕 트라이튼의 사랑스러운 막내딸인 인어 에리얼은 늘 인간들이 사는 바다 너머 세상으로의 모험을 꿈꾼다. 어느 날, 우연히 바다 위로 올라갔다가 폭풍우 속 가라앉는 배에 탄 인간 에릭 왕자의 목숨을 구해준다. 갈망하던 꿈과 운명적인 사랑을 이루기 위해 용기를 낸 에리얼은 사악한 바다 마녀 울슐라와의 위험한 거래를 통해 다리를 얻게 된다. 드디어 바다를 벗어나 그토록 원하던 인간 세상으로 가게 되지만, 그 선택으로 에리얼과 아틀란티카 왕국 모두 위험에 처하게 되는데… 바닷속, 그리고 그 너머 아름다운 꿈과 사랑의 멜로디가 펼쳐진다!",
      popularity: 439.41,
      poster_path: "/8k8tmcx5e6ShpackLnDswBo1tnB.jpg",
      release_date: "2023-05-24",
      title: "인어공주",
      video: false,
      vote_average: 5.5,
      vote_count: 19,
    },
    {
      adult: false,
      backdrop_path: "/eEF40Xk2twM3WjRNZftfo771gjv.jpg",
      genre_ids: [878, 12, 53],
      id: 700391,
      original_language: "en",
      original_title: "65",
      overview:
        "우주 비행 중 행성과의 치명적인 충돌이 일어난 후, 조종사 밀스와 유일한 탑승 생존자 코아는 6,500만 년 전 공룡의 시대 지구에 불시착한다.  모든 것이 위험과 죽음과 맞닿아 있는 상황, 그들은 거대한 행성과의 충돌 전, 반드시 지구를 탈출해야만 한다!",
      popularity: 380.734,
      poster_path: "/o9ItQpKVvhGcAcJFyIpFM7YYKuv.jpg",
      release_date: "2023-04-20",
      title: "65",
      video: false,
      vote_average: 6.3,
      vote_count: 1050,
    },
    {
      adult: false,
      backdrop_path: "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
      genre_ids: [27, 53],
      id: 980078,
      original_language: "en",
      original_title: "Winnie the Pooh: Blood and Honey",
      overview:
        "어릴 적 친구로부터 버림받은 곰돌이 ‘푸’와 ‘피글렛’  참을 수 없는 분노와 배신감을 느끼며 잔혹한 복수를 시작한다.",
      popularity: 333.54,
      poster_path: "/fcCbzcEbAEQ5gWzx7EX78qLEVFw.jpg",
      release_date: "2023-04-06",
      title: "곰돌이 푸: 피와 꿀",
      video: false,
      vote_average: 5.7,
      vote_count: 587,
    },
    {
      adult: false,
      backdrop_path: "/4uij4drUitClyXihCyQJSklXvvv.jpg",
      genre_ids: [18, 10749],
      id: 876797,
      original_language: "ja",
      original_title: "余命10年",
      overview:
        "스무 살이 되던 해, 수 만명 중 1명이 걸리는 난치병으로 10년의 삶을 선고받은 ‘마츠리’는 삶의 의지를 잃은 ‘카즈토’를 만나 사랑에 빠진다. 처음 만난 봄, 즐거운 여름, 아름답던 가을, 깊어진 겨울까지 하루하루 애틋하게 사랑한 두 사람 하지만 쌓이는 추억만큼 줄어드는 시간 앞에 결국 ‘마츠리’는 ‘카즈토’를 떠나기로 결심하는데…",
      popularity: 82.456,
      poster_path: "/y2Ucvit19UUfsdLKlYyDz2ZfToS.jpg",
      release_date: "2023-05-24",
      title: "남은 인생 10년",
      video: false,
      vote_average: 7.1,
      vote_count: 28,
    },
    {
      adult: false,
      backdrop_path: "/2ZpwPckspTSY9sVEkjEyatgBWT7.jpg",
      genre_ids: [27, 53, 18],
      id: 848058,
      original_language: "es",
      original_title: "Cerdita",
      overview:
        "내 이름은 사라. 나를 돼지라 부르며 괴롭히던 친구들이 납치당하는 것을 보게 되었다. 작은 마을에서 살인 사건도 벌어졌다.끔찍한 사건의 유일한 목격자가 된 것 같다 그렇다면… 신고한다VS 안 한다",
      popularity: 82.686,
      poster_path: "/xRdV63kKgWoEwt022e75OBlDeEO.jpg",
      release_date: "2023-04-26",
      title: "피기",
      video: false,
      vote_average: 6.7,
      vote_count: 375,
    },
    {
      adult: false,
      backdrop_path: "/rCZNtFhCId7zAMo68xyCEwnRvB.jpg",
      genre_ids: [18],
      id: 901563,
      original_language: "fr",
      original_title: "Close",
      overview:
        "서로가 세상의 전부였던 레오와 레미는 친구들에게 관계를 의심받기 시작한다. 이후 낯선 시선이 두려워진 레오는 레미와 거리를 두고, 홀로 남겨진 레미는 걷잡을 수 없는 감정에 빠져들고 만다. 점차 균열이 깊어져 가던 어느 날, 레오는 믿을 수 없는 현실을 마주하게 되는데...",
      popularity: 71.634,
      poster_path: "/2zWgF5rHhoi42foPKOayVJQooLd.jpg",
      release_date: "2023-05-03",
      title: "클로즈",
      video: false,
      vote_average: 7.8,
      vote_count: 380,
    },
    {
      adult: false,
      backdrop_path: "/jENycYiYGr5NvMs789zj06JkW5l.jpg",
      genre_ids: [35, 18],
      id: 497828,
      original_language: "en",
      original_title: "Triangle of Sadness",
      overview:
        "호화 크루즈에 협찬으로 승선한 인플루언서 모델 커플. 각양각색의 부자들과 휴가를 즐기던 사이, 뜻밖의 사건으로 배가 전복되고 8명만이 간신히 무인도에 도착한다. 할 줄 아는 거라곤 구조 대기뿐인 사람들. 이때 존재감을 드러내는 건...",
      popularity: 63.898,
      poster_path: "/ltEblZr0pwTf585kbrZSWyNf4uj.jpg",
      release_date: "2023-05-17",
      title: "슬픔의 삼각형",
      video: false,
      vote_average: 7.2,
      vote_count: 1289,
    },
    {
      adult: false,
      backdrop_path: "/dbrLfmFNFEJWv8rLnjpgCKlXWSy.jpg",
      genre_ids: [878, 12, 28],
      id: 333339,
      original_language: "en",
      original_title: "Ready Player One",
      overview:
        "2045년, 암울한 현실과 달리 가상현실 오아시스에서는 누구든 원하는 캐릭터로 상상하는 모든 걸 할 수 있다. 웨이드 와츠의 유일한 낙은 오아시스에 접속하는 것. 어느 날 오아시스의 창시자인 괴짜 천재 제임스 할리데이는 자신이 가상현실 속에 숨겨둔 3개의 미션에서 우승하는 사람에게 오아시스의 소유권과 막대한 유산을 상속한다는 유언을 남기고, 그가 사랑했던 80년대 대중문화 속에 힌트가 있음을 알린다. 와츠가 첫 번째 수수께끼를 푸는 데 성공하자 이를 저지하기 위해 현실에서 살인도 마다하지 않는 IOI라는 거대 기업이 뛰어드는데...",
      popularity: 56.604,
      poster_path: "/j4TIfwFrm8WnckByTnMFEAuIVju.jpg",
      release_date: "2018-03-28",
      title: "레디 플레이어 원",
      video: false,
      vote_average: 7.6,
      vote_count: 14032,
    },
    {
      adult: false,
      backdrop_path: "/ndrZYPNv0jKMCO9Ne98vfNxTzkW.jpg",
      genre_ids: [18],
      id: 878375,
      original_language: "en",
      original_title: "On a Wing and a Prayer",
      overview:
        "조종사가 비행기를 조종하다 예기치 않게 사망한 후 가족을 구하기 위해 안전하게 비행기를 조종해야만 하는 한 남자의 이야기",
      popularity: 41.706,
      poster_path: "/wXiLzb5QiibYSDupKKtAi2MSu06.jpg",
      release_date: "2023-04-07",
      title: "온 어 윙 앤드 어 프레이어",
      video: false,
      vote_average: 6.4,
      vote_count: 39,
    },
    {
      adult: false,
      backdrop_path: "/kCEXA22ASuq7Y29jnngyaisyA0X.jpg",
      genre_ids: [878, 9648, 12],
      id: 62,
      original_language: "en",
      original_title: "2001: A Space Odyssey",
      overview:
        "인류에게 문명의 지혜를 가르쳐 준 검은 돌기둥의 정체를 밝히기 위해서 디스커버리호의 선장 보우만과 승무원 풀은 목성을 향해서 날아간다. 하지만 평온하던 디스커버리호에 갑자기 재난이 찾아온다. 우주선 내부에서 일어난 재난은 컴퓨터 HAL이 반란을 일으킨 것. HAL은 풀을 우주선 밖으로 던져버리고, 보우만까지도 모선 밖으로 끌어내지만 그는 필사의 노력으로 HAL을 제압한다. 보우만은 마침내 목성 궤도에서 문제의 검은 돌기둥을 발견하지만, 그 순간 우주의 급류에 휘말리게 된다. 보우만은 지구로의 귀환을 위해 노력하고, 신비한 시간의 흐름을 경험하는데...",
      popularity: 34.133,
      poster_path: "/2qJjH5mYNlGPdVrPqfEq1J6Mgb4.jpg",
      release_date: "2023-04-26",
      title: "2001 스페이스 오디세이",
      video: false,
      vote_average: 8.1,
      vote_count: 10209,
    },
    {
      adult: false,
      backdrop_path: "/qHurP5rHZk63ZIcjegKy1M57oC7.jpg",
      genre_ids: [35, 9648, 53, 28],
      id: 983883,
      original_language: "zh",
      original_title: "關於我和鬼變成家人的那件事",
      overview:
        "혈기왕성한 형사 우밍한은 중요한 사건 현장에서 도로에 흩어진 증거물을 수집하던 중 의문의 붉은 봉투를 발견하고 무심코 줍는다. 그때부터 밍한에게 벌어지는 불길한 사건들! 자신에게 다가온 '운명'을 한사코 거부하던 밍한은 거듭되는 생명의 위협에 마지못해 인생 최대의 결심을 하는데... 얼결에 '부부'가 된 귀신과 최악의 빌런을 잡기 위해 인간+귀신 콤비가 벌이는 극강의 공조 수사! 코믹과 액션을 버무리고 감동과 반전까지 가미한, 풀옵션 오감으로 즐기는 블록버스터. 인류애 넘치는 콤비의 격정적인 공조가 마침내 시작된다! 이 콤비도, 두 사람의 공조 수사도 완전히 다 미쳤다!!!",
      popularity: 32.926,
      poster_path: "/m9UIiiTDTx6w1gPQgVr8cvgol91.jpg",
      release_date: "2023-05-17",
      title: "메리 마이 데드 바디",
      video: false,
      vote_average: 6.4,
      vote_count: 8,
    },
    {
      adult: false,
      backdrop_path: "/6VtzCw8Wd9UWSA5FcXK6Kh2y5FE.jpg",
      genre_ids: [53, 14, 27],
      id: 812488,
      original_language: "es",
      original_title: "Mete miedo",
      overview:
        "특수경찰대원 카밀라는 슬럼가에 숨은 갱단의 아지트를 급습하는 과정에서  갱단의 습격으로 대부분의 대원들이 희생당하는 사고를 당한다.  카밀라는 때마침 벌어진 사이비 교주 알비노의 강령술 한가운데에 떨어져  온몸에 심한 화상을 입은 채로 혼수상태에 빠진다.  기억을 잃고 깨어난 그녀는 친구인 파티마의 도움을 받는다.  하지만 기억을 잃은 카밀라의 주변에는 사악한 기운이 맴돌고  주변 사람들이 웃음을 지으며 자살하는 기이한 사건들이 벌어진다.  저주를 받은 카밀라와 파티마와 얽힌 끔찍한 비밀이 밝혀지고  사이비 종교 알비노 일당들과 최후의 대결을 벌이게 된다.",
      popularity: 29.006,
      poster_path: "/qJVhs4BaUOHk3wT8AlTK1zgwq6w.jpg",
      release_date: "2023-04-25",
      title: "스마일 어게인",
      video: false,
      vote_average: 5.8,
      vote_count: 33,
    },
  ],
  total_pages: 5,
  total_results: 87,
};
