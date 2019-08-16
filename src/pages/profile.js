import React from "react"
import Sections from "../components/sections"
import SEO from "../components/seo"
import DottedLine from '../components/dotted-line'

const tempSections = [
  {
    heading: '田川めぐみ',
    body: '1988年生、茨城県小美玉市出身。\n2012年東京藝術大学音楽学部作曲科卒、2014年同大学院修士課程作曲専攻修了。学内にて安宅賞、アカンサス音楽賞、大学院アカンサス音楽賞を受賞。\n在学中にオーケストラ作品「Recollection」が湯浅卓雄氏指揮の芸大フィルハーモニアによって初演される。\n2010年、全日本電子楽器教育研究会主催のイベント「EMIES SHOWCASE リサイタルシリーズ」にてソロリサイタル「One Sketchbook」を行う。\n2014年より、東京藝術大学音楽学部音楽研究センター音響研究室教育研究助手。\nクラシックからポップス、ジャズ、映画音楽などの作編曲やピアノ、キーボード、鍵盤ハーモニカなどの演奏活動、音楽教育事業のための音源制作、その他様々なコンテンツ事業の音楽制作も行う。'
  },
  {
    heading: 'Megumi TAGAWA',
    body: "Born in 1988 in Omitama City, Ibaraki Prefecture.\nGraduated from Tokyo National University of Fine Arts and Music in 2012. Completed master's course in 2014. Received the Ataka Award, Acanthus Music Award, and Graduate Acanthus Music Award on campus.\nWhile still in school, the orchestra work “Recollection” is premiered by Geidai Philharmonia, conducted by Takuo Yuasa.\nIn 2010, she performed solo recital “One Sketchbook” at the event “EMIES SHOWCASE Recital Series” sponsored by the All Japan Electronic Musical Instruments Education Study Group.\nSince 2014, she has been an assistant researcher at the Acoustics Laboratory at the Music Research Center, Faculty of Music, Tokyo University of the Arts.\nShe also composes and arranges classics, pops, jazz, film music, and other musical activities such as piano, keyboard, and keyboard harmonica, produces sound sources for the music education business, and produces music for various other content businesses."
  }
]

const ProfilePage = () => (
  <div>
    <SEO title="profile" />
    <h1>
      <DottedLine>profile</DottedLine>
    </h1>
    <Sections
      HeadingTag="h2"
      contents={tempSections}
    />
  </div>
)

export default ProfilePage
