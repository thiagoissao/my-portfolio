import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { THEME_STORAGE_KEY } from '../utils/constants';

interface MyDocumentProps {
  locale: string;
}

// runs before paint to avoid a light flash on dark theme
const THEME_SCRIPT = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`;

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale ?? 'pt-BR' };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="shortcut icon" href="/logo.svg" />
          <script
            dangerouslySetInnerHTML={{
              __html: THEME_SCRIPT,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
