const TokiPlugin = {
  id: "tokinovel",
  name: "Toki Novel",
  icon: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
  site: "https://toki31.com",
  version: "1.0.0",

  async popularNovels(page) {
    return [
      {
        name: "테스트 소설",
        cover: "https://via.placeholder.com/150",
        path: "/test"
      }
    ];
  },

  async parseNovelAndChapters(novelPath) {
    return {
      name: "테스트 소설",
      cover: "https://via.placeholder.com/150",
      author: "작가",
      summary: "연결 테스트",
      chapters: [
        {
          name: "1화",
          path: "/chap-1",
          releaseTime: "2026-07-24"
        }
      ]
    };
  },

  async parseChapter(chapterPath) {
    return "연결 성공!";
  },

  async searchNovels(searchTerm, page) {
    return [];
  }
};

module.exports = TokiPlugin;
