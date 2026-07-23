import { Plugin } from '@lnreader/plugin-types';

const TokiPlugin: Plugin.PluginBase = {
  id: 'tokinovel',
  name: 'Toki Novel',
  icon: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png',
  site: 'https://toki31.com',
  version: '1.0.0',

  async popularNovels(page: number): Promise<Plugin.NovelItem[]> {
    return [
      {
        name: '테스트 소설',
        cover: 'https://via.placeholder.com/150',
        path: '/test',
      },
    ];
  },

  async parseNovelAndChapters(novelPath: string): Promise<Plugin.SourceNovel> {
    return {
      name: '테스트 소설',
      cover: 'https://via.placeholder.com/150',
      author: '작가',
      summary: 'v3 자동 빌드 연결 테스트',
      chapters: [
        {
          name: '1화',
          path: '/chap-1',
          releaseTime: '2026-07-24',
        },
      ],
    };
  },

  async parseChapter(chapterPath: string): Promise<string> {
    return '<p>연결 성공!</p>';
  },

  async searchNovels(searchTerm: string, page: number): Promise<Plugin.NovelItem[]> {
    return [];
  },
};

export default TokiPlugin;
