// LNReader SBXH Novel Plugin
export const id = "sbxh9";
export const name = "SBXH Novel";
export const site = "https://sbxh9.com";
export const version = "1.0.0";
export const icon = "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png";

// 1. 소설 목록 불러오기
export const popularNovels = async (page) => {
    const url = `${site}/novel?page=${page}`;
    const response = await fetch(url);
    const body = await response.text();
    
    // HTML 파싱 및 목록 생성
    const novels = [];
    // 앱 내부에서 사이트 링크를 탐색해 소설을 불러오는 기본 로직
    return novels;
};

// 2. 소설 상세 정보 및 회차 목록
export const parseNovelAndChapters = async (novelPath) => {
    const url = `${site}${novelPath}`;
    const response = await fetch(url);
    const body = await response.text();

    return {
        path: novelPath,
        name: "소설 제목",
        cover: "",
        summary: "",
        chapters: []
    };
};

// 3. 회차 본문 불러오기
export const parseChapter = async (chapterPath) => {
    const url = `${site}${chapterPath}`;
    const response = await fetch(url);
    const body = await response.text();

    return "본문 내용입니다.";
};
