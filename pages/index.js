import {Button,Select} from 'antd';
import Head from 'next/head'
import Link from 'next/link'
import "../src/style/index.less"


export default () => <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    Welcome to next.js!
    <Button type="primary">444</Button>
    <a href="index2">index2</a>
    <Link href="/index2"><a>index2 link</a></Link>
    <style jsx global>{`
      body {
      }
    `}</style>
</div>