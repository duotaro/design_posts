import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import { GENRE_LIST, AD_CLIENT_ID } from "../const";
import AdSense from '../components/ads/ad'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <meta name="description" content="TechnologyとConvenienceを組み合わせた造語。​ChatGPTなどのAI技術がもたらす便利なものを紹介します。" />
        <meta property="og:image"  contents="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501153944.jpg"></meta>
      </Head>
      {/* <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></script> */}
      <Navbar />
      <AdSense slot={'aaa'}/>
      <nav className="navbar navbar-expand navbar-light bg-dark">
        <div className="container">
          <div className="text-center text-white w-100">
            <ul className="navbar-nav nav-justified " style={{width:'100%'}}>
             {GENRE_LIST.map((genre) => {
              return (
                <li className="nav-item" key={genre.name}>
                  <a className="nav-link text-white" aria-current="page" href={genre.url}>
                    {genre.name}
                  </a>
                </li>
              )
             })}
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}