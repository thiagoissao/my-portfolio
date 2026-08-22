import { format } from 'date-fns';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

interface HeaderProps {
  readingTime: { text: string };
  title: string;
  createdAt: string;
  coverImage?: string;
}

const parseMinutes = (text: string | undefined): number => {
  if (!text) return 0;
  const match = text.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
};

const formatDate = (iso: string) => {
  try {
    return format(new Date(iso), 'yyyy.MM.dd');
  } catch {
    return '';
  }
};

const Header = ({ title, createdAt, readingTime, coverImage }: HeaderProps) => {
  const minutes = parseMinutes(readingTime?.text);

  return (
    <header className="rise">
      <div className="mono">
        {formatDate(createdAt)} ·{' '}
        <FormattedMessage id="article.readSuffix" values={{ minutes }} />
      </div>
      <h1>{title}</h1>
      {coverImage && (
        <div className="portrait">
          <Image
            src={coverImage}
            alt={title}
            width={1200}
            height={900}
            sizes="(max-width: 520px) 100vw, 400px"
            priority
          />
        </div>
      )}
    </header>
  );
};

export default Header;
