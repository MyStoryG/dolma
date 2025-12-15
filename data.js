const competencies = {
    COLLABORATION: "협업",
    CREATIVITY: "창의",
    PROBLEM_SOLVING: "문제해결",
    INQUIRY: "탐구",
    PHYSICAL_ABILITY: "신체능력",
};

const categories = {
    LIBERAL_ARTS: "문과",
    STEM: "이과",
    ARTS_PHYSICAL: "예체능",
    FUSION: "융합"
};

const clubs = [
    {
        id: 1,
        name: "스타트업",
        category: categories.LIBERAL_ARTS,
        short_description: "실현 가능한 창업 모델을 만드는 창업 기획 동아리",
        competencies: [competencies.COLLABORATION, competencies.CREATIVITY, competencies.PROBLEM_SOLVING, competencies.INQUIRY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "스타트업과 경영, 마케팅에 관심 있는 학생들이 사업 아이템을 설정하여 실제로 경영해보며 사이트 제작, 디자인, 역할 분담을 통해 실제 스타트업에 대한 경험을 쌓을 수 있는 동아리입니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "동아리의 최종 목표는 완성도있는 실제로 구현 가능한 사이트 제작과 수익성을 띄는 사업일시 실제로 판매해보며 시중의 시장 현황을 파악하는 것이 목표이며, 이로 인해 트렌드를 분석하고 소비자의 태도에 맞추는 마케팅과 함께 기업가정신에 대해서 배워나가는 것이 최종 목표입니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "동아리의 장점은 담당 교사인 임은경 선생님의 높은 퀄리티의 생기부와 신뢰할 수있는 스타트업 기업에서 오시는 멘토님들의 지원이 우리 동아리의 최대 장점입니다." }
        ],
        full_description: "최근 관심사, 평소 해결하고 싶었던 문제들, 진로 연관 주제 등 다양한 의견들을 공유한 뒤, 주제 관련 스타트업을 만들고 마인드맵, 사이트 개설 및 주제에 적합한 활동과 심화 탐구를 통해 경쟁력 있는 실현 가능한 스타트업을 창설하는 동아리입니다."
    },
    {
        id: 2,
        name: "융합사이언스",
        category: categories.STEM,
        short_description: "다양한 실험과 탐구를 통해 과학적 사고력을 기르는 활동을 하는 동아리",
        competencies: [competencies.INQUIRY, competencies.CREATIVITY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "우리 동아리는 코딩을 통해 아두이노와 인공지능 등을 제어하는 활동을 합니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "저희 동아리는 자율주행차를 만드는 걸 목표로하고 있습니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "장점은 상상하는 것을 실행할 수 있는 환경이 갖춰진 것입니다." }
        ],
        full_description: "융합과학 동아리는 다양한 과학 관련 분야를 실험하고 탐구하며 과학적 사고를 기르는 활동을 합니다. 다양한 실험을 통해 과학 개념을 체계적으로 이해하고 보고서를 작성하며 발표를 진행합니다. 이를 통해 과학적 지식을 재밌고 깊이 있게 배우며 능력을 길러냅니다."
    },
    {
        id: 3,
        name: "탁구부",
        category: categories.ARTS_PHYSICAL,
        short_description: "탁구 실력 향상과 협동심, 체력을 기르는 동아리",
        competencies: [competencies.PHYSICAL_ABILITY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "우리 동아리는 일단 탁구으로 중점적으로 다양한 체육활동을하고 있다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "다양한 체육활동을 통해 체력향상 및 다양한 종목에서 다양한 기술을 구사하는 것을 목표하고 있다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "우리 동아리의 장점은 농구장과 탁구장을 사용할 수 있는 게 장점이다." }
        ],
        full_description: "여러가지 탁구 기술 연마와 실전 경기를 통해 탁구 실력을 향상시키고 그 과정에서 협동심과 체력을 기름."
    },
    {
        id: 4,
        name: "에듀 크래프트",
        category: categories.LIBERAL_ARTS,
        short_description: "교육 이해를 넓히고 봉사와 다양한 활동을 통해 폭넓은 경험을 쌓는 동아리",
        competencies: [competencies.CREATIVITY, competencies.PROBLEM_SOLVING],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "저희 에듀크래프트 동아리는 이름처럼 ‘교육(Edu)’과 ‘창의적 제작(Craft)’을 결합한 교육 중심 동아리입니다. 주로 초등학생들을 대상으로 재능기부 수업을 진행하며 수업 주제는 문학, 과학, 미술 등 다양하고, 멘토들이 스스로 교구를 만들고 프로그램을 설계하면서 수업 전체를 운영합니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "저희는 ’배움의 선순환’을 만드는 걸 목표로 하고 있습니다. 멘토들이 수업을 준비하면서 교육의 가치를 직접 느끼고, 아이들에게는 배움의 즐거움을 선물하는 것입니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "한 가지로 말하자면, ‘함께 성장하는 분위기’입니다. 누가 혼자 힘들게 하지 않고, 다 같이 준비하고 고민하면서 성장합니다." }
        ],
        full_description: "여러가지 교육적 활동을 함으로써 학생들의 교육 이해를 넓히고 봉사활동도 하며 다양한 경험을 기를 수 있는 동아리."
    },
    {
        id: 5,
        name: "인사이트",
        category: categories.LIBERAL_ARTS,
        short_description: "다양한 활동을 통해 진로 탐색과 사회적 지식을 강화하는 동아리",
        competencies: [competencies.PROBLEM_SOLVING, competencies.COLLABORATION],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "저희 동아리 '인사이트'는 세상을 꿰뚫는 통찰력을 기르는 것을 목적으로 만들어진 문이과 융합동아리입니다! 생기부 맞춤형 활동을 하며 시사 이슈 토론, 미니 융합세션 등 다양한 활동들을 해왔습니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "부원들이 다각도로 현상을 바라보는 능력과 융합사고력 그리고 진로 역량 강화를 이루어 성장하는 것을 목표로 삼고 있습니다!" },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "힘들고 노력이 많이 드는 만큼 '생기부'만큼은 정말 풍성하게 만들 수 있다는 것이 가장 큰 장점이라고 생각합니다." }
        ],
        full_description: "동아리의 목적은 다양한 활동들의 진로 탐색과 시사 이슈 탐구를 통해 사회적 지식과 진로 역량 강화를 향상시키는 것이다. 인사이트는 독서, 토론, PPT 제작, 모의고사 분석, 진로이해 능력 향상 수업 등 다양한 활동을 통해 진로에 대해 이해와 사회적 지식을 견고히 할 수 있다."
    },
    {
        id: 6,
        name: "정책제안",
        category: categories.LIBERAL_ARTS,
        short_description: "교내 문제를 조사하고 해결하며 정책에 대한 이해를 높이는 동아리",
        competencies: [competencies.PROBLEM_SOLVING, competencies.INQUIRY, competencies.COLLABORATION],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "우리 동아리는 사회 문제를 분석하고 창의적인 해결책을 제시하는 정책 제안 중심 동아리이다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "성남시 정책안제에 참여해 지역 사회의 문제를 발견하고, 현실적이면서도 혁신적인 정책을 제안해 사회에 긍정적인 변화를 만드는 것을 목표로 하고 있다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "다양한 진로를 가지고 있는 학생들이 많아 다양한 분야에 흥미를 가지고 정책을 제안할 수 있다." }
        ],
        full_description: "교내 다양한 문제들을 조사하고 해결해 보고자 분야에 대한 이해력을 기름 또한 정책을 이해하고 제안해보며 다양한 문제에 대한 고민을 통해 참여합니다. 토론 동아리"
    },
    {
        id: 7,
        name: "비즈니스 인사이트",
        category: categories.LIBERAL_ARTS,
        short_description: "실제 기업 분석·모의주식·토론을 통해 경제적 사고력을 기르는 동아리",
        competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "경제, 경영에 대한 이해를 바탕으로 실제 기업 사례를 분석하고 모의주식과 토론을 통해 경제적 사고력을 키우는 동아리이다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "동아리 활동을 통해 문제를 다각도로 보고 근거를 들어 설명하는 힘을 기르는 것을 목표로 한다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "문제 해결 능력을 키울 수 있다." }
        ],
        full_description: "여러 경험 마케팅 분석과 책 읽기 겸하며 미래 직업 이해를 향상할 수 있는 동아리 활동입니다. 책에서 나온 포트폴리오 경험을 통해 만들어봄. 또한 시사적 문제 상황에 실제 대비할 수 있는 시간을 가져볼 수 있습니다."
    },
    {
        id: 8,
        name: "사이언티아",
        category: categories.STEM,
        short_description: "화학·생명 분야의 실험과 탐구를 통해 개인 탐구 역량을 키우는 과학 동아리",
        competencies: [competencies.PROBLEM_SOLVING, competencies.INQUIRY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "화학, 생명 관련 과학실험 및 탐구" },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "학교 수업시간에는 해보지 못하는 실험이나 추가적인 탐구를 동아리 내에서 진행하여 학생 개인의 탐구 역량을 키우는 것" },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "효과적인 생기부를 얻을 수 있다." }
        ],
        full_description: "이공계 진학을 희망하는 학생들이 교과내용을 바탕으로 심화된 연구 및 실험을 진행하고 과학적 지식을 기릅니다. 활동예: 실험보고서 작성, 융합과학탐구, DNA 단백질 추출 실험, 생활과학 토론, 주제탐구활동, 물리응용탐구실험"
    },
    {
        id: 9,
        name: "유엔미",
        category: categories.ARTS_PHYSICAL,
        short_description: "미용 분야를 직접 체험하며 창의적 작품 제작과 전문적인 실습 경험을 쌓는 미용 동아리",
        competencies: [competencies.CREATIVITY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "네일, 메이크업, 헤어, 특수분장 등 미용과 관련된 활동을 하는 동아리로 직접 해보는 시간을 갖는 동아리입니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "미용의 재미를 알려주고 서로의 개성과 스타일을 존중하며 창의적인 작품을 만든다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "직접 해볼 수 있다는 것과 실제로 사용하는 것들로 동아리를 진행해 더욱 더 전문적으로 배울 수 있고 실제 자격증이 있는 동아리장, 부장의 실력으로 믿고 배울 수 있다." }
        ],
        full_description: "저희 유앤미는 미용부로 메이크업, 네일아트, 헤어, 피부특수분장, 퍼스널컬러 이론과 실습을 통해 나에게 어울리는 미를 추구합니다."
    },
    {
        id: 10,
        name: "스펙업",
        category: categories.LIBERAL_ARTS,
        short_description: "관심 이슈를 심화 조사하고 융합적 사고로 보고서를 작성하는 학술 중심 동아리",
        competencies: [competencies.INQUIRY, competencies.COLLABORATION],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "동아리 부원들이 관심있어하는 이슈를 토의를 통해 정하고 더욱 심화해서 각자의 탐구 주제를 정한다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "여러 매체를 통해서 자신들의 주제를 탐구하고 융합적인 사고를 할 수 있게 한다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "자신의 의견을 정리해서 보고서를 작성하는 활동을 주로 한다." }
        ],
        full_description: "우리 동아리는 사회 문제를 인식하고 분석하여 연구 내용을 공유하며 논리적 사고력과 창의력을 기르는 것을 목표로 합니다. 시사적 이슈와 관심 분야에 대해 토론하고 자료조사를 진행하여 사회문제를 해결하는 능력을 향상합니다."
    },
    {
        id: 11,
        name: "아트랩",
        category: categories.ARTS_PHYSICAL,
        short_description: "다양한 예술 매체를 활용해 표현력·창의력·협동심을 기르는 종합 미술 활동 동아리",
        competencies: [competencies.CREATIVITY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "다양한 예술 활동을 통해 표현력과 창의력을 기르고 있다" },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "직접 작품을 만들면서 표현력과 관찰력, 창의적 사고를 키우는 것이 목표이다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "다양한 미술 경험을 한 번에 해볼 수 있는 실습 중심의 활동이 가장 큰 장점이다." }
        ],
        full_description: "우리 동아리는 디자인, 애니메이션, 공예, 조소 등 다양한 미술 분야를 탐구하며 개성을 드러냅니다. 작품을 제작하고 전시회를 준비하며 창의적 표현 능력을 향상시킵니다."
    },
    {
        id: 12,
        name: "방송부",
        category: categories.ARTS_PHYSICAL,
        short_description: "학교 행사 방송과 콘텐츠 제작을 통해 기획력·팀워크·현장 대응력을 키우는 실무형 방송 동아리",
        competencies: [competencies.COLLABORATION, competencies.CREATIVITY],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "방송부는 학교 행사와 주요 소식을 전달하며 기획력과 협동심을 기르는 동아리이다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "행사 진행 시 아나운서, 음향, 영상 촬영, 편집 등 다양한 역할을 분담하여 팀워크를 발휘하고, 생방송 상황에서도 침착하게 대처하는 능력을 키운다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "축제나 체육대회 등 학교 주요 행사에서는 진행과 음악 송출을 맡아 현장의 분위기를 조성하고, 자체 제작 영상이나 인터뷰 영상을 통해 학생들에게 학교 소식을 전달하는 활동을 했다." }
        ],
        full_description: "다양한 매체를 통해 학교와 학생간의 소통을 원활히 하며 창의적이고 전문적인 방송 콘텐츠를 제작하고 실행함"
    },
    {
        id: 13,
        name: "북커스",
        category: categories.LIBERAL_ARTS,
        short_description: "다양한 책을 읽고 토론·글쓰기·독서 행사 등을 통해 사고력과 표현력을 기르는 독서 활동 동아리",
        competencies: [competencies.INQUIRY, competencies.COLLABORATION],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "저희 독서부는 다양한 분야의 책을 함께 읽고 토론하며 사고력과 표현력을 기르는 동아리입니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "책을 통해 성장하는 사람’을 만드는 것을 목표로 합니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "서로의 생각을 존중하며 깊이 있는 대화를 나눌 수 있다는 점입니다." }
        ],
        full_description: "북커스는 단순히 책을 읽는 것을 넘어, 다양한 방식으로 이야기를 즐기고 창의적인 활동을 펼치는 독서 토론 동아리입니다. 책을 사랑하는 사람, 새로운 이야기를 만들고 싶은 사람 모두 환영입니다."
    },
    {
        id: 14,
        name: "뉴런",
        category: categories.STEM,
        short_description: "생명·화학 분야의 실험을 수행하며 심화 탐구 능력을 기르는 과학 동아리",
        competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "뉴런동아리는 크게 생명, 화학으로 나눠 두 가지 분야로 나누어 실험을 정한다. 실험 전 PPT로 이해를 돕고 실험 후 탐구보고서를 통해 추가적으로 탐구할 수 있다" },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "실험을 통해 얻은 데이터를 바탕으로 현상을 정확히 이해하고, 이를 논리적으로 정리해 보고서로 완성하는 것을 목표로 합니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "생명·화학 두 분야를 직접 선택해서 실험하고, 그 과정과 결과를 스스로 정리하며 깊이 탐구할 수 있는 자율성과 탐구 중심의 분위기가 가장 큰 장점입니다." }
        ],
        full_description: "동아리는 교과서를 토대로 화학과 생명과학 실험과 심화탐구를 통해 실험 설계와 수행 능력을 향상시키고 과학적 원리를 이해하는 것을 목표로 합니다. 2~3명씩 모둠을 조성해 실험을 정하고 분기마다 진행합니다."
    },
    {
        id: 15,
        name: "화생방",
        category: categories.STEM,
        short_description: "화학과 생명과학 관련 탐구실험을 통해 교과 이해도와 과학적 사고력을 기르는 동아리",
        competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "화학과 생물 관련 실험을 직접 해보며 과학 원리와 현상을 탐구하는 활동을 합니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "실험을 통해 과학적 개념을 이해하고, 데이터를 분석하며 논리적으로 결과를 정리하는 능력을 키우는 것이 목표입니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "직접 실험하며 배우는 탐구 중심 활동이 가장 큰 장점입니다." }
        ],
        full_description: "과학교과(생명과학, 화학)에 배우는 내용과 연계된 탐구실험을 진행하며 교과의 이해도를 높이고 심화된 실험을 통해 과학적 사고력을 기르고, 관련 실험을 통해 더 깊은 이해를 경험할 수 있습니다."
    },
    {
        id: 16,
        name: "바이오존",
        category: categories.STEM,
        short_description: "생명과학 실습과 관찰, DNA 실험 등을 통해 지식을 나누는 동아리",
        competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING],
        qna: [
            { q: "어떤 활동을 하는 동아리인가요?", a: "우리 동아리는 생명과학 관련 실험을 직접 해보고, 결과를 함께 이야기한 뒤 보고서까지 작성하는 활동을 합니다." },
            { q: "이 동아리는 어떤 결과를 목표로 삼고 있나요?", a: "실험을 통해 생명과학 개념을 더 잘 이해하고, 결과를 해석하는 능력과 보고서 작성 능력을 키우는 것을 목표로 합니다." },
            { q: "우리 동아리의 장점을 딱 한가지 꼽아본다면 어떤 것이 있을까요?", a: "직접 해보면서 배우는 실험 경험이 확실하다는 점이 가장 큰 장점입니다." }
        ],
        full_description: "바이오존 동아리는 생명과학에 대한 호기심을 해소하고 매력을 알리기 위해 만들어졌습니다. 현미경 관찰과 생물 표본 만들기, DNA 추출 실험 등, 뛰어난 생명과학자가 되는 것에 필수적인 실습 활동도 진행합니다."
    }
];

const activities = [
    { id: 1, name: "뉴스 속 세상읽기", short_description: "신문 기사를 비교·분석하여 사회 이슈를 깊이 탐구하는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.INQUIRY] },
    { id: 2, name: "책으로 보는 세상", short_description: "도서관 자료를 활용하여 과제를 수행하고 포트폴리오를 제작하는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.INQUIRY] },
    { id: 3, name: "융합세션", short_description: "팀 기반 융합 탐구 활동으로 창의적 아이디어를 도출하는 프로젝트", category: categories.FUSION, competencies: [competencies.COLLABORATION, competencies.PROBLEM_SOLVING, competencies.INQUIRY] },
    { id: 4, name: "주제탐구학술활동", short_description: "논문을 기반으로 보고서를 작성하고 전문가의 강연을 통해 학술 탐구를 수행하는 활동", category: categories.FUSION, competencies: [competencies.PROBLEM_SOLVING, competencies.INQUIRY] },
    { id: 5, name: "미술 재능 엿보기", short_description: "다양한 미술 분야의 작품을 제작하고 우수작을 선정하는 예술 창작 활동", category: categories.ARTS_PHYSICAL, competencies: [competencies.CREATIVITY] },
    { id: 6, name: "인문학 독서캠프", short_description: "전문 강사의 강의를 듣고 인문학 도서를 완독하며 모둠 토론을 진행하는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.INQUIRY, competencies.COLLABORATION] },
    { id: 7, name: "경제경영포럼", short_description: "모의 투자, 기업 분석 발표, 경제 이슈 심화탐구 보고서 작성 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.INQUIRY, competencies.COLLABORATION, competencies.PROBLEM_SOLVING] },
    { id: 8, name: "학생예산정책제안제", short_description: "학교 및 지역의 정책과 예산 문제를 분석하고 개선 제안을 실행해보는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.PROBLEM_SOLVING] },
    { id: 9, name: "과학캠프", short_description: "과학 실험 체험을 통해 과학적 원리를 탐구하고 심화탐구 보고서를 작성하는 활동", category: categories.STEM, competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING] },
    { id: 10, name: "글로벌 이슈 모의 캠프", short_description: "국제 이슈에 대해 국가별 역할 토의, 연설문 작성, 결의안 발표를 진행하는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.COLLABORATION, competencies.PROBLEM_SOLVING] },
    { id: 11, name: "내가 만드는 드림스쿨", short_description: "학생이 직접 꿈꾸는 학교 모델을 설계하고 표현하는 창작 활동", category: categories.FUSION, competencies: [competencies.CREATIVITY] },
    { id: 12, name: "적정기술", short_description: "생활 속 문제 해결을 위해 적정기술 아이디어를 발굴하고 실습하는 활동", category: categories.FUSION, competencies: [competencies.COLLABORATION, competencies.PROBLEM_SOLVING, competencies.CREATIVITY] },
    { id: 13, name: "인공지능 캠프", short_description: "AI 기초 체험, 데이터 분석, 피지컬 컴퓨팅 시스템 구축을 중심으로 하는 탐구 활동", category: categories.STEM, competencies: [competencies.INQUIRY] },
    { id: 14, name: "나만의 서재", short_description: "희망 도서를 선정해 완독하고 진로 설계 활동지를 작성하는 자기주도적 독서 탐구 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.INQUIRY] },
    { id: 15, name: "MBL캠프", short_description: "MBL 장비를 활용한 과학 실험 수행 및 심화탐구 보고서를 작성하는 활동", category: categories.STEM, competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING] },
    { id: 16, name: "사이언스 포럼", short_description: "과학 주제를 선택하여 탐구하고 논문을 완성해 발표하는 연구형 프로그램", category: categories.STEM, competencies: [competencies.INQUIRY, competencies.PROBLEM_SOLVING] },
    { id: 17, name: "내일의 카피라이터", short_description: "한글날 주제의 지면 광고를 직접 제작하며 창의적 글쓰기 능력을 기르는 활동", category: categories.FUSION, competencies: [competencies.CREATIVITY] },
    { id: 18, name: "천문캠프", short_description: "천체 관측 실습 및 우주 과학 탐구를 기반으로 관찰보고서를 작성하는 캠프 활동", category: categories.STEM, competencies: [competencies.INQUIRY] },
    { id: 19, name: "나도 뮤지션", short_description: "학생 주도로 무대를 기획하고 음악 공연을 진행하는 예술 역량 발표 활동", category: categories.ARTS_PHYSICAL, competencies: [competencies.CREATIVITY, competencies.COLLABORATION] },
    { id: 20, name: "교실 속 작은 철학자", short_description: "발췌 독서·강의·철학 토론을 통해 사고력을 확장하고 딜레마 문제를 탐구하는 활동", category: categories.LIBERAL_ARTS, competencies: [competencies.COLLABORATION, competencies.INQUIRY] }
];
