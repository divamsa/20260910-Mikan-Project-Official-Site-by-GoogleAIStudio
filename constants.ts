
import { WorkItem, WorkCategory, StaffMember } from './types';

export const COMPANY_INFO = {
  name: "株式会社みかんプロジェクト",
  establishment: "2020年10月",
  capital: "500万円",
  business: "テレビ番組等の映像作品企画・制作",
  ceo: "伊槻雅裕",
  address: "〒150-0042 東京都渋谷区宇田川町"
};

export const WORKS_DATA: WorkItem[] = [
  // --- NHK 番組 ---
  {
    id: '1',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2023.9',
    title: '「断らない　ある市役所の実践」',
    description: '神奈川県座間市は、「誰も断らない、見捨てない」をモットーに、生活困窮者や生きづらさを抱えた若者の支援に取り組んでいる。そのため地域の力を結集し立ち上げたのは「チーム座間」。迷いながら奮闘する職員たちの、役所内外の日々に密着。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Zama+City+Hall+Meeting', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/K6LXV37WX7',
    linkText: '「断らない」NHK'
  },
  {
    id: '2',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2022.6',
    title: '「迷える女性たちの家」',
    description: 'とある街の一角。行き場を失った女性たちのためのシェルターがある。「女性の居場所 Jikka（実家）」。家族のDV から逃れて来た人、自傷行為がやめられない人、5 人の子を持つシングルマザー…。ここで暮らしを立て直そうとする女性たちの日々。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Jikka+Shelter', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/2KJ99V1GM6',
    linkText: '「迷える女性たちの家」 | NHK'
  },
  {
    id: '3',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: 'ETV 特集 （E テレ）',
    date: '2021.5',
    title: '「この国で生きてゆく　～大阪 外国ルーツの子どもたち～」',
    description: '大阪ミナミの歓楽街。その片隅に、外国ルーツの子どもたちの学習を支援する夜間教室がある。子どもたちにとっては夜間の居場所、親にとっては相談の場所となっている。コロナ禍, 高校受験を控えた３人を中心に、子どもたちとその家族を 1 年に渡って見つめた。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Night+Classroom', 
    link: 'https://www.web.nhk/tv/an/etv21c/pl/series-tep-M2ZWLQ6RQP/ep/6LVLZK8G84',
    linkText: '「この国で生きてゆく」 | NHK'
  },
  {
    id: '4',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '４K 特集 （BS４K・BSP）',
    date: '2023.5',
    title: '「すべてのものが幸福にしかなれない處　～京都・五条坂 河井寬次郎家の人々」',
    description: '日本を代表する陶工、河井寬次郎(1890-1966)。焼き物だけでなく、胸に響く多くの「言葉」を遺した。「美を追はない仕事 仕事の後から追いひかける美」etc.。何気ない日常に美を見出した寬次郎. 祖父の言葉を胸に。人生をよりよく生きようとした家族の物語。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Kawai+Family+Group', 
    link: 'https://www2.nhk.or.jp/archives/movies/?id=D0009051574_00000',
    linkText: 'NHK アーカイブス'
  },
  {
    id: '5',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2025.9',
    title: '「だからあんな不思議な絵を　〜夭折の画家・有元利夫と家族 〜」',
    description: '日本の高度成長期に、幻想に満ちた絵画世界で一世を風靡した画家・有元利夫。有元は 38 歳の若さで亡くなり、日本画家だった妻容子さんと、生まれて間もない長男の利彦さんが遺された。生前の芸術家夫婦の葛藤、画家を目指した利彦さんのその後を紐解く。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Arimoto+Toshio+Photo', 
    link: 'https://www.nhk-ondemand.jp/goods/G2025150385SA000/index.html',
    linkText: 'NHKオンデマンド'
  },
  {
    id: '6',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2025.1',
    title: '「人生で美しいとは何か 彫刻家・舟越保武と子どもたち」',
    description: '日本を代表する彫刻家、舟越保武（1912-2002）。保武の作品は、見るものに「美しさとは何か」を厳しく問いかける。その製作の様子を間近に見て育った子どもたち、末盛千枝子、舟越桂、舟越直木、舟越カンナ･･･。作品を通して父と対話を続ける人生とは。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Funakoshi+Sculptures', 
    link: 'https://www.web.nhk/tv/an/nichibi/pl/series-tep-3PGYQN55NP/ep/3L64LJL9XZ',
    linkText: '日曜美術館 | NHK'
  },
  {
    id: '7',
    category: WorkCategory.NHK,
    categoryLabel: 'NHK 番組',
    subCategory: '日曜美術館 （E テレ）',
    date: '2024.1',
    title: '「美は喜び   河井寬次郎 住める哲学」',
    description: '京都・五条坂にたたずむ河井寬次郎の旧居。ここは寬次郎自ら設計した建物で、没後孫たちが記念館として公開した。寬次郎が体現した「暮らし」のなかの「美」とは？ 孫で学芸員の鷺珠江さんの案内で、建物や作品の随所に現れる寬次郎の哲学に迫る。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Kawai+House', 
    link: 'https://www.web.nhk/tv/an/nichibi/pl/series-tep-3PGYQN55NP/ep/9172NKYWWJ',
    linkText: '美は喜び 日曜美術館 | NHK'
  },
  {
    id: '8',
    category: WorkCategory.OTHER,
    categoryLabel: 'その他',
    subCategory: '', 
    date: '2021.6',
    title: '国立ハンセン病資料館 DVD 「知っていますか？ ハンセン病問題」',
    description: '国の政策によって世間の偏見差別にさらされ、長く苦難の道を歩いてきた人たちがいるー。ハンセン病について、医学、歴史、現在の課題まで、基本的な知識を、多摩全生園で暮らす山内きみ江さんの語りを軸に、わかりやすくまとめたもの。',
    image: 'https://placehold.co/600x400/e2e8f0/475569?text=Image:+Hansen+Museum', 
    link: 'https://www.bing.com/videos/riverview/relatedvideo?q=%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%81%8b+%e3%83%8f%e3%83%b3%e3%82%bb%e3%83%b3%e7%97%85%e5%95%8f%e9%a1%8c&refig=693a781d7f4d481f8d0a84e99f761703&pc=LCTS&pq=%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%81%8b%e3%80%80%e3%81%af%e3%82%93%e3%81%9b%e3%82%93&pqlth=12&assgl=15&sgcn=%e7%9f%a5%e3%81%a3%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%81%8b+%e3%83%8f%e3%83%b3%e3%82%bb%e3%83%b3%e7%97%85%e5%95%8f%e9%a1%8c&qs=SC&sgtpv=SC&smvpcn=0&swbcn=8&sctcn=0&sc=8-12&sp=1&ghc=0&cvid=693a781d7f4d481f8d0a84e99f761703&clckatsg=1&hsmssg=0&ru=%2fsearch%3fq%3d%25E7%259F%25A5%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%2584%25E3%2581%25BE%25E3%2581%2599%25E3%2581%258B%b%25E3%2583%258F%25E3%2583%25B3%25E3%2582%25BB%25E3%2583%25B3%25E7%2597%2585%25E5%2595%258F%25E9%25A1%258C%26form%3dANNTH1%26refig%3d693a781d7f4d481f8d0a84e99f761703%26pc%3dLCTS%26pq%3d%25E7%259F%25A5%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%2584%25E3%2581%25BE%25E3%2581%2599%25E3%2581%258B%25E3%2580%2580%25E3%2581%25AF%25E3%2582%2593%25E3%2581%259B%25E3%2583%25B3%26pqlth%3d12%26assgl%3d15%26sgcn%3d%25E7%259F%25A5%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%2584%25E3%2581%25BE%25E3%2581%2599%25E3%2581%258B%b%25E3%2583%258F%25E3%2583%25B3%25E3%2582%25BB%25E3%2583%25B3%25E7%2597%2585%25E5%2595%258F%25E9%25A1%258C%26qs%3dSC%26sgtpv=SC%26smvpcn=0&swbcn=8&sctcn=0&sc=8-12&sp=1&ghc=0&cvid=693a781d7f4d481f8d0a84e99f761703&clckatsg=1&hsmssg=0&mmscn=vwrc&mid=8899CD6839CF618F8E3D8899CD6839CF618F8E3D&FORM=WRVORC&ntb=1&msockid=8c8304d1d66611f0ba8f20a5b10a891b',
    linkText: '国立ハンセン病資料館ユーチューブ'
  }
];

export const STAFF_DATA: StaffMember[] = [
  {
    id: '1',
    name: '伊槻 雅裕',
    role: 'ディレクター・プロデューサー',
    profile: `大学卒業後、日本短波放送（現ラジオ NIKKEI）入社。ラジオ番組の報道、制作に携わる。1997 年オフィスラフト（現千代田ラフト）に転職。以後テレビ番組のディレクター、プロデューサー。常務取締役。2020 年 10 月、映像制作会社「みかんプロジェクト」設立。`,
    history: [
      {
        id: 'h1',
        type: 'gray-bar',
        title: 'ラジオ',
        items: [
          { text: '■「キャンパスラジオ」（パーソナリティー：鷺沢恵・春風亭昇太）' },
          {
            text: '■「タッチ ～風景のなかで」 日本民間放送連盟賞優秀賞',
            notes: [
              '横浜文化ライブラリーで聴取できます',
              '関連リンク👉タッチ 風景のなかで｜放送ライブラリー公式ページ|https://www.bpcj.or.jp/program/detail/R00436/'
            ]
          },
          { text: '■「ソングス 小室等と子どもたち」 ギャラクシー賞小室等個人賞' },
          { text: '■「往復書講 二人の在日韓国人」 ギャラクシー賞優秀賞' }
        ]
      },
      {
        id: 'h2',
        type: 'simple-header',
        title: 'ラジオ番組の書籍化',
        items: [
          { text: '■「ここから風が 小室等対話集」（ぶどう社）' },
          { text: '■「デコボコ映画館 粉雪まみれインタビュー集 ハンディキャップ映画について語ろう」（リトル・モア）' }
        ]
      },
      { id: 'h3', type: 'gray-bar', title: 'NHK テレビ番組', items: [] },
      {
        id: 'y2000',
        type: 'year-box',
        title: '2000 年',
        items: [
          {
            text: '■総合特集「森의ドクターと仲間たち」（2000.2）',
            notes: [
              '横浜文化ライブラリーで視聴できます',
              '関連リンク👉森のドクターと仲間たち｜放送ライブラリー公式ページ|https://www.bpcj.or.jp/program/detail/011655/'
            ]
          },
          { text: '■ETV2000「新発見 中原中也・晩年の日誌」（2000.6）' }
        ]
      },
      {
        id: 'y2001',
        type: 'year-box',
        title: '2001 年',
        items: [
          {
            text: '■ハイビジョンスペシャル「フェルメール盗難事件 解き明かされた名画の謎」',
            notes: ['関連リンク👉NHK アーカイブス|https://www2.nhk.or.jp/archives/movies/?id=D0009010657_00000']
          }
        ]
      },
      {
        id: 'y2004',
        type: 'year-box',
        title: '2004 年',
        items: [
          { text: '■ＢＳドキュメンタリー「よみがえった聖母教会 ～ドレスデン 60 年後の和解～」' },
          { text: '■ハイビジョンスペシャル「カヤック 風と荒波の岬へ ～南米最南端 61 歳の挑戦」' }
        ]
      },
      {
        id: 'y2005',
        type: 'year-box',
        title: '2005 年',
        items: [
          { text: '■ＢＳドキュタリー「東京を爆撃した兵士たち ～アメリカ軍元パイロット 60 年後の証言～」' },
          { text: '■ハイビジョンスペシャル「日韓条約 ～知られざる交渉の内幕～」' }
        ]
      },
      {
        id: 'y2006-2008',
        type: 'year-box',
        title: '2006 年～2008 年',
        items: [
          {
            text: '■総合 シリーズ「新日本紀行ふたたび」',
            notes: ['鳴子、草津、標茶、村上、倉吉、江差、祇園 ほか 12 本']
          }
        ]
      },
      {
        id: 'y2008',
        type: 'year-box',
        title: '2008 年',
        items: [
          { text: '■ＢＳドキュメンタリー「憎しみを超えられるか ～北アイルランド紛ナンセンス対話の旅～」' },
          { text: '■ＥＴＶ特集「戦場カメラマン 小柳次一 ～日中・太平洋戦争 従軍５千キロの記録～」 P' }
        ]
      },
      {
        id: 'y2009-2010',
        type: 'year-box',
        title: '2009 年',
        items: [
          { text: '■総合 シリーズ「世界遺産への招待状」（スイス、フランス、ボスニア・ヘルツェゴビナ）' },
          { text: '■ハイビジョンスペシャル「Shall we ラストダンス？ ～草刈民代と周防正行」（2009.7） P' }
        ]
      },
      {
        id: 'y2011-2014',
        type: 'year-box',
        title: '2011 年～2014 年',
        items: [
          {
            text: '■BS1 シリーズ「ドキュメンタリーWAVE」 P',
            notes: [
              '▼「自由化を迎え撃て ～韓国 農村改革のゆくえ」（2011.12）',
              '▼「活躍！ドイツ海賊党 ～ネット世代の政治のゆくえ」（2013.3）',
              'ルポ記事お読みいただけます（有料）👉（有料）[電子版] ネット選挙とデジタル・デモクラシー | NHK 出版|https://www.nhk-book.co.jp/detail/000243007720000.html',
              '▼「激動スコットランド イギリス独立投票の行方」（2014.8） P 兼ディレクター ほか'
            ]
          }
        ]
      },
      {
        id: 'y2011-2012',
        type: 'year-box',
        title: '2011 年～2012 年',
        items: [
          {
            text: '■BSP シリーズ「極上美の饗宴」 P',
            notes: [
              '▼「川端康成 愛（いと）しの山水」（2011.7）',
              '▼「藤田嗣治・乳白色の裸婦の秘密」（2012.5） ほか'
            ]
          }
        ]
      },
      {
        id: 'y2013-2019',
        type: 'year-box',
        title: '2013 年～2019 年',
        items: [
          {
            text: '■総合 シリーズ「証言記録 東日本大震災」 P',
            notes: [
              '▼「宮城県東松島市 指定避難所を襲った大津波」（2013.5） ほか',
              'NHK の DVD でご覧いただけます（有料） 関連リンク👉証言記録 東日本大震災 第 17 回 宮城県東松島市|https://www.nhk-ep.com/products/detail/h19421AA'
            ]
          }
        ]
      },
      {
        id: 'y2015-2025',
        type: 'year-box',
        title: '2015 年～2025 年',
        items: [
          {
            text: '■総合「おせち家族に福きたる！ 平野レミ의早わざレシピ！」',
            notes: ['以降シリーズ化 番組継続中 P']
          }
        ]
      },
      {
        id: 'y2016',
        type: 'year-box',
        title: '2016 年',
        items: [
          { text: '■BS1 スペシャル「犬と私の 1600 キロ 極寒の大地をゆく」（2016.3） P' }
        ]
      },
      {
        id: 'y2017-2020',
        type: 'year-box',
        title: '2017 年～2020 年',
        items: [
          {
            text: '■BS プレミアム「行くぞ！最果て！秘境×鉄道」',
            notes: ['以降シリーズ化 番組継続中 P']
          },
          {
            text: '■国際放送「Asia Insight」 “Indonesia’s Garbage Clinic” ほか P'
          }
        ]
      },
      {
        id: 'y2018',
        type: 'year-box',
        title: '2018 年',
        items: [
          { text: '■ETV 特集「ドヤ街と詩人とおっちゃんたち ～釜ヶ崎芸術大学の日々」 P 兼ディレクター' }
        ]
      },
      {
        id: 'y2019-2020',
        type: 'year-box',
        title: '2019 年～2020 年',
        items: [
          {
            text: '■E テレ シリーズ「美の壺」 P',
            notes: [
              '▼「一杯の至福 コーヒー」（2019.10） 関連リンク👉選「一杯の至福コーヒー」 | NHK|https://www.web.nhk/tv/an/tsubo/pl/series-tep-3LWMJVY79P/ep/EGXVNYRK36',
              '▼「夏の輝き 氷」（2020.8） 関連リンク👉「夏の輝き 氷」 | 美の壺 | NHK|https://www.web.nhk/tv/an/tsubo/pl/series-tep-3LWMJVY79P/ep/4V9Q8ML2WY| ほか'
            ]
          }
        ]
      }
    ]
  }
];
