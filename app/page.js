import Card from "@/components/Card";
import CardRow from "@/components/CardRow";
import CardTitle from "@/components/CardTitle";


export default function Home() {
  return (
    <div className="w-full " >
      <div className="flex flex-col absolute mt-20 space-y-10">
      <CardRow title="My List">
        <Card backgroundImage="https://assets.cdn.moviepilot.de/files/61bcb2142fd29172a16dc3045b218228bcb08317f8035da1de0a232c7f45/copyright/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI%40._V1_SY1000_CR0%2C0%2C717%2C1000_AL_.jpg"/>
        <Card backgroundImage="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/63A5C7AAB333F81E23212A834029E19EB0D2650F292FBD35A7123B78F3AB1D47/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        <Card backgroundImage="https://static.giga.de/9d/f7/dd/29015ad66b09b233529f6e5fe7_Azk3MjFkYmIzOWVl_8aa4159ef24ec76cbd61fb039c_a2m1odq5mmnjnmi5_7fef89d3b1b1883629504c1587_a2u2n2zkmtg2nwm4_onepiece-rcm1200x800.jpg"/>
        <Card backgroundImage="https://m.media-amazon.com/images/S/pv-target-images/321773c41991f3047c52e9a31fad5f861f2de2783acc072c2c727fda12825cd0.jpg"/>
        <Card backgroundImage="https://img.anime2you.de/2020/03/slime.jpg"/>
        <Card backgroundImage="https://m.media-amazon.com/images/S/pv-target-images/da6548c3d485d50e714a961fdf81096532e6b210a3c09e0b36b507027630c1be.jpg"/>
      </CardRow>
      <CardRow title="Popular on Netflix >">
      <Card backgroundImage="https://p325k7wa.twic.pics/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg?twic=v1/resize=760/step=10/quality=80"/>
      <Card backgroundImage="https://static.kino.de/88/02/a8/e616895c4271d879ca56f453c8_cmUgMTYwMCAxMjAwIGMgbQM4MmU2NTJkOTU0Yw==_naruto-shippuden-rcm1200x800.jpg"/>
      <Card backgroundImage="https://i.ytimg.com/vi/gLv9PwMqoO0/maxresdefault.jpg"/>
      <Card backgroundImage="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a1b9e0783210f940b383626b224e8827.jpe"/>
      <Card backgroundImage="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cdb845c5f165c85bacddaf5eef80b707.jpe"/>
      <Card backgroundImage="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/09cf6f743ee719f7e771cc0dcea51f212429612c165c1855220cf0c49bc95a92._RI_TTW_.jpg"/>
      </CardRow>
      <CardRow title="Trending Now">
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2018/08/v4167-365x235.jpg"/>
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2018/08/v7697-365x235.jpg"/>
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2018/08/v14892-365x235.jpg"/>
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2018/08/v18696-365x235.jpg"/>
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2019/10/v30265-365x235.jpg"/>
      <Card backgroundImage="https://www.animetoast.cc/wp-content/uploads/2018/08/v7274-365x235.jpg"/>
      </CardRow>
      </div>
      <div
            className="w-full h-[280px] bg-center bg-cover"
            style={{
              backgroundImage: `url("https://www.animenachrichten.de/wp-content/uploads/2023/08/Ragna-Crimson-Newsbild-August2023.png")`,
            }}
      >
        <div className="w-full h-full bg-gradient-to-t  from-zinc-900 to-gray-400/10">

        </div>
      </div>
    </div>
  )
}