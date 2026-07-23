class TokiNovel extends Plugin {
  id = 'tokinovel';
  name = 'Toki Novel';
  icon = 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png';
  site = 'https://toki31.com/novel';
  version = '1.0.0';

  async popularNovels(page) {
    return {
      novels: [
        {
          name: '토키노벨 연동 테스트',
          cover: 'https://via.placeholder.com/150',
          path: '/test'
        }
      ],
      hasNextPage: false
    };
  }

  async parseNovelAndChapters(novelPath) {
    return {
      name: '토키노벨 연동 테스트',
      cover: 'https://via.placeholder.com/150',
      author: '토키',
      summary: 'toki31.com/novel 연동 테스트 중입니다.',
      chapters: [
        {
          name: '1화',
          path: '/chap-1',
          releaseTime: '2026-07-24'
        }
      ]
    };
  }

  async parseChapter(chapterPath) {
    return '<p>연동 성공!</p>';
  }

  async searchNovels(searchTerm, page) {
    return [];
  }
}

module.exports = new TokiNovel();
