class TokiPlugin {
  constructor() {
    this.id = "tokinovel";
    this.name = "Toki Novel";
    this.icon = "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png";
    this.site = "https://toki31.com";
    this.version = "1.0.0";
  }

  async popularNovels(page) {
    return [];
  }

  async parseNovelAndChapters(novelPath) {
    return {
      name: "",
      cover: "",
      author: "",
      summary: "",
      chapters: []
    };
  }

  async parseChapter(chapterPath) {
    return "";
  }

  async searchNovels(searchTerm, page) {
    return [];
  }
}

module.exports = new TokiPlugin();
