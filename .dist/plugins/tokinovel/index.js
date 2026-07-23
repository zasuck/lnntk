const client = new Client();

class TokiNovel extends Plugin {
  id = 'tokinovel';
  name = 'Toki Novel';
  icon = 'https://tok31.com/favicon.ico';
  site = 'https://toki31.com';
  version = '1.0.1';

  async popularNovels(page) {
    const result = await client.get(`${this.site}/novel?page=${page}`);
    const body = await result.text();
    const loadedCheerio = cheerio.load(body);

    const novels = [];

    loadedCheerio('a').each((_, element) => {
      const title = loadedCheerio(element).text().trim();
      const url = loadedCheerio(element).attr('href');
      if (url && url.includes('/novel/')) {
        novels.push({
          name: title || '제목 없음',
          cover: 'https://via.placeholder.com/150',
          path: url.replace(this.site, '')
        });
      }
    });

    const uniqueNovels = Array.from(new Map(novels.map(n => [n.path, n])).values());

    return {
      novels: uniqueNovels,
      hasNextPage: uniqueNovels.length > 0
    };
  }

  async parseNovelAndChapters(novelPath) {
    const result = await client.get(`${this.site}${novelPath}`);
    const body = await result.text();
    const loadedCheerio = cheerio.load(body);

    let novelName = loadedCheerio('h1').text().trim() || '소설 제목';
    let authorName = loadedCheerio('.author').text().trim() || '작가 미상';
    let summaryText = loadedCheerio('.description').text().trim() || '줄거리 없음';
    let coverImg = loadedCheerio('img').attr('src') || 'https://via.placeholder.com/150';
    if (coverImg && coverImg.startsWith('/')) {
      coverImg = this.site + coverImg;
    }

    const chapters = [];
    loadedCheerio('a').each((_, element) => {
      const chapName = loadedCheerio(element).text().trim();
      const chapUrl = loadedCheerio(element).attr('href');
      if (chapUrl && (chapUrl.includes('/chapter/') || chapUrl.includes('/ep/'))) {
        chapters.push({
          name: chapName || '화수',
          path: chapUrl.replace(this.site, ''),
          releaseTime: new Date().toISOString()
        });
      }
    });

    return {
      name: novelName,
      cover: coverImg,
      author: authorName,
      summary: summaryText,
      chapters: chapters.reverse()
    };
  }

  async parseChapter(chapterPath) {
    const result = await client.get(`${this.site}${chapterPath}`);
    const body = await result.text();
    const loadedCheerio = cheerio.load(body);

    let chapterHtml = loadedCheerio('.content').html() || loadedCheerio('article').html() || '<p>본문을 불러올 수 없습니다.</p>';
    return chapterHtml;
  }

  async searchNovels(searchTerm, page) {
    const result = await client.get(`${this.site}/novel?search=${encodeURIComponent(searchTerm)}`);
    const body = await result.text();
    const loadedCheerio = cheerio.load(body);

    const novels = [];
    loadedCheerio('a').each((_, element) => {
      const title = loadedCheerio(element).text().trim();
      const url = loadedCheerio(element).attr('href');
      if (url && url.includes('/novel/')) {
        novels.push({
          name: title,
          cover: 'https://via.placeholder.com/150',
          path: url.replace(this.site, '')
        });
      }
    });

    return Array.from(new Map(novels.map(n => [n.path, n])).values());
  }
}

module.exports = new TokiNovel();
