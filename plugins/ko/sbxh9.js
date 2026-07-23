class SBXHPlugin {
  constructor() {
    this.id = "sbxh9";
    this.name = "SBXH Novel";
    this.icon = "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png";
    this.site = "https://sbxh9.com";
    this.version = "1.0.0";
  }

  async popularNovels(page) {
    return [
      {
        name: "테스트 소설 1",
        cover: "https://via.placeholder.com/150",
        path: "/test-novel-1"
      }
    ];
  }

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

  async parseChapter(chapterPath) {
    return "LNReader 플러그인 연결 성공!";
  }

  async searchNovels(searchTerm, page) {
    return [];
  }
}

export default new SBXHPlugin();
