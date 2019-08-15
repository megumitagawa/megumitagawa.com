import React from "react"
import Layout from "../components/layout"
import Sections from "../components/sections"
import SEO from "../components/seo"
import DottedLine from '../components/dotted-line'

const tempSections = [
  {
    heading: '作品',
    body: '「都会の鳥のノヴェレッテ」\nオルガンソロ(2016)2016.9.3初演\nオルガン：野田優子\n\n「パンと鳥のブローチ」\nギターコンチェルト(2014)2014.9.5初演\nギター独奏：志野綾音 指揮：松川智哉　芸大有志オーケストラ\n\n「おもわぬひろいものの組曲」\nfor 1Marimba 2Players(2014)2014.3初演\nマリンバ：パーカッショニスト文角-BUNKAKU-\n\n「Illust.」\nオーケストラ(2013)\n大学院修了作品\n\n「Pixelate」\nfor Cl,Vn,Va,Melodica,Pf(2012)\n門下試演会東京音楽大学J館スタジオにて初演\n\n「SOURCE」\nオーケストラ(2011-2012)\n学部卒業作品\n\n「An Index」\nfor 2Fl,2Vn,Va,Vibr(2011)\n学内演奏会にて初演\n\n「Recollection」\nオーケストラ(2010)2011.7.7初演\n指揮：湯浅卓雄 藝大フィルハーモニア'
  },
  {
    heading: '作曲・編曲・演奏',
    body: '『映画　賭ケグルイ』(音楽：未知瑠)\n音楽協力(2019)\n\nメルクストーリアコンサート2019 - 癒術士と旅の音色 -\nオーケストラ編曲(2019.5)\n\n茨城県小美玉市立小川南小学校\n校歌制作(2019)\n\n東京アニメアワードフェスティバル(TAAF)2019 シネアド\n音楽制作(2019)\n\n野田さくらハートクリニック　テーマソング\n作曲(2018.12)\n\n取手市オリジナルアニメーション「いいな、いいな。取手っていいな。」\n音楽制作(2018)\n\nglobal bridge HOLDINGS VEVOプロモーションムービー\n音楽制作(2018)\n\n山田姉妹　アルバム「故郷 日本の愛唱歌Ｉ」\n鍵盤ハーモニカ演奏(2018.9)\n\n藝大アーツ・スペシャル2017 障がいとアーツ「愛の夢」(トロンボーン：鈴木加奈子)\n編曲(2017.12)\n\nOST日本歌劇団「Dracula」\n編曲(2017.11)\n\n北とぴあ国際音楽祭2017《芸大とあそぼうin北とぴあ「動物たちの運動会～智慧比干支競走」》\n編曲(2017.11)\n\n東京藝術大学　管打楽器シリーズ2017　ロッシーニ：オーボエと管弦楽による歌劇《セビリアの理髪師》より アリア〈今の歌声は〉\n編曲(2017.10)\n\nMUSIRISCA miyazono yuria\nライブサポート ピアノ,キーボード演奏,マニピュレーター(2017.7)\n\nグラニ「黒騎士と白の魔王」\nオーケストラアレンジ（2017）\n\nNintendo Switch CM\nハモンドオルガン演奏(2017)\n\n混声合唱団コール小川 30周年記念コンサート\nピアノ演奏(2016.5)\n\n「劇場版デート・ア・ライブ 万由里ジャッジメント」キャラソン・アルバム“Music Judgement”」\nM3、M7ピアノ演奏(2016.2)\n\nCX系月9ドラマ「いつかこの恋を思い出してきっと泣いてしまう」劇中音楽より 「明日への手紙」piano & strings version)、acoustic band version\nアレンジ,ピアノ演奏\n\n小美玉市図書館主催 朗読会 宮沢賢治の世界「やまなし」\n作曲、ピアノ演奏(2015)\n\nDUO LIVE tagawa megumi+BUN Imai\n(2014.5)\n\n東京・春・音楽祭 E.W.コルンゴルト「さすらいの歌」（歌劇《カトリーン》より）\n室内楽編曲(2014.3)\n\nライブペイント 岡田杏里The songs of the earth @ KID AIRCK ART HALL\nライブパフォーマンス(2013.8)\n\n小美玉さくらフェスティバル2013「いばなし&いばうた」\nピアノ演奏(2013.4)\n\nCAPCOM「大神 五重之音調」\nピアノ演奏(2012.10)\n\n日本映画学校 三年技術三科合同卒業制作前実習作品『跡と後』\n音楽制作(2012.8)\n\nFEAMS(フルートカルテット)編曲「スーパーマリオブラザーズ」「ルパン三世のテーマ」他\n\nSonyCSL, Sony Global Education ウェブ,アプリケーション,プロモーション音源制作'
  },
  {
    heading: 'その他',
    body: '西岡龍彦オーケストラ作品「天平乱声」\n浄書(2016)\n\nラ・フォル・ジュルネ・オ・ジャポン\nhallA サービス映像カット割りディレクター(2018,2019)\n\nラ・フォル・ジュルネ・オ・ジャポン\nhallA サービス映像スタッフ(2016,2017)\n\nBS朝日コンサート収録スコアラー(2016,2017,2018)'
  }
]

const WorksPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="works" />
    <h1>
      <DottedLine>works</DottedLine>
    </h1>
    <Sections
      HeadingTag="h2"
      contents={tempSections}
    />
  </Layout>
)

export default WorksPage
