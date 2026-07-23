class TokiNovel extends Plugin {
    id = 'tokinovel';
    name = '토키노벨';
    icon = 'https://raw.githubusercontent.com/zasuck/tryntk/refs/heads/master/icon.png';
    site = 'https://toki31.com/novel';
    version = '1.0.0';

    async popularNovels(page, filters) {
        const url = `${this.site}?page=${page}`;
        const result = await fetch(url);
        const body = await result.text();

        let loadedCheerio = cheerio.load(body);
        let novels = [];

        loadedCheerio('.list-item').forEach((i, el) => {
            const novelName = loadedCheerio(el).find('.subject a').text().trim();
            const novelCover = loadedCheerio(el).find('img').attr('src');
            const novelUrl = loadedCheerio(el).find('.subject a').attr('href');

            if (novelName) {
                novels.push({
                    name: novelName,
                    cover: novelCover ? (novelCover.startsWith('http') ? novelCover : this.site + novelCover) : null,
                    url: novelUrl,
                });
            }
        });

        return { novels };
    }

    async parseNovel(novelUrl) {
        const url = novelUrl.startsWith('http') ? novelUrl : this.site + novelUrl;
        const result = await fetch(url);
        const body = await result.text();

        let loadedCheerio = cheerio.load(body);

        let novelName = loadedCheerio('.view-title').text().trim();
        let novelCover = loadedCheerio('.view-img img').attr('src');
        let author = loadedCheerio('.writer').text().trim();
        let summary = loadedCheerio('.view-content').text().trim();

        let chapters = [];
        loadedCheerio('.sps-list li').forEach((i, el) => {
            const chapterName = loadedCheerio(el).find('a').text().trim();
            const chapterUrl = loadedCheerio(el).find('a').attr('href');
            
            if (chapterName && chapterUrl) {
                chapters.push({
                    name: chapterName,
                    url: chapterUrl,
                });
            }
        });

        return {
            name: novelName,
            cover: novelCover ? (novelCover.startsWith('http') ? novelCover : this.site + novelCover) : null,
            author,
            summary,
            chapters: chapters.reverse(),
        };
    }

    async parseChapter(chapterUrl) {
        const url = chapterUrl.startsWith('http') ? chapterUrl : this.site + chapterUrl;
        const result = await fetch(url);
        const body = await result.text();

        let loadedCheerio = cheerio.load(body);
        let chapterText = loadedCheerio('#bo_v_con').html();

        return chapterText;
    }

    async searchNovels(searchTerm) {
        const url = `${this.site}?sfl=wr_subject&stx=${encodeURIComponent(searchTerm)}`;
        const result = await fetch(url);
        const body = await result.text();

        let loadedCheerio = cheerio.load(body);
        let novels = [];

        loadedCheerio('.list-item').forEach((i, el) => {
            const novelName = loadedCheerio(el).find('.subject a').text().trim();
            const novelCover = loadedCheerio(el).find('img').attr('src');
            const novelUrl = loadedCheerio(el).find('.subject a').attr('href');

            if (novelName) {
                novels.push({
                    name: novelName,
                    cover: novelCover ? (novelCover.startsWith('http') ? novelCover : this.site + novelCover) : null,
                    url: novelUrl,
                });
            }
        });

        return { novels };
    }
}

export default new TokiNovel();
