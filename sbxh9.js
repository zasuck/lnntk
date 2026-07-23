class SBXHPlugin {
  constructor() {
    this.id = "sbxh9";
    this.name = "SBXH Novel";
    this.icon = "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png";
    this.site = "https://sbxh9.com";
    this.version = "1.0.0";
  }

  // 1. 인기/최신 소설 목록 가져오기 (테스트용)
  async popularNovels(page) {
    return [
      {
        name: "테스트 소설 1",
        cover: "https://via.placeholder.com/150",
        path: "/test-novel-1"
      }
    ];
  }

  // 2. 소설 상세 정보 & 회차 목록 가져오기
  async parseNovelAndChapters(novelPath) {
    return {
      name: "테스트 소설 1",
      cover: "https://via.placeholder.com/150",
      author: "작자미상",
      summary: "플러그인 연결 테스트용 소설입니다.",
      chapters: [
        {
          name: "1화 - 테스트",
          path: "/test-chapter-1",
          releaseTime: "2026-07-24"
        }
      ]
    };
  }

  // 3. 본문 내용 가져오기
  async parseChapter(chapterPath) {
    return "LNReader v2 플러그인 연결에 성공했습니다! 정상 작동합니다.";
  }

  // 4. 검색 기능
  async searchNovels(searchTerm, page) {
    return [];
  }
}

// LNReader v2 등록 방식
module.exports = new SBXHPlugin();
