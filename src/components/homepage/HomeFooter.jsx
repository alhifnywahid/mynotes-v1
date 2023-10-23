import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import { XIcon } from '@site/src/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';

const belajar = [
  { name: 'Artikel', href: '#', },
  { name: 'Tutorial', href: '#', },
  { name: 'Buku', href: '#', },
];

const popularTutorial = [
  { name: 'Java', href: '#', },
  { name: 'Javascript', href: '#', },
  { name: 'Basisdata', href: '#', },
];

const sosialMedia = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'LinkeId', href: '#' },
];

const myNotes = [
  { name: 'About', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Contact', href: '#' },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        'flex h-24 max-w-[418px] overflow-clip rounded-2xl bg-white',
        className
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500">
        Your Security,<br />
        Our Priority.
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/soc-compliant-1.png" />
        <img src="/img/vector.png" />
      </div>
    </div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'All Systems Operational',
  });

  useEffect(() => {
    if (typeof StatusPage !== 'undefined') {
      // eslint-disable-next-line no-undef
      var sp = new StatusPage.page({ page: 'wjlxrzb5h09l' });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://status.dyte.io"
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full bg-[#2DB002]',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>{status.description}</div>
    </Link>
  );
}

function Links({ name, links }) {
  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href }) => (
          <Link
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <img src="/svg/logoku.svg" alt="Dyte" className="h-9 w-fit lg:h-12" />

          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Belajar" links={belajar} />
          <Links name="Populer Tutorial" links={popularTutorial} />
          <Links name="Sosial Media" links={sosialMedia} />
          <Links name="My Notes" links={myNotes} />
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>
          <Safety className="flex w-full max-w-full lg:hidden" />

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://dyte.io/privacy-policy"
              className="text-inherit hover:text-black hover:underline"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://dyte.io/terms-of-service"
              className="text-inherit hover:text-black hover:underline"
            >
              Terms of Service
            </Link>
            &bull;
            <Link
              href="https://dyte.io/website-terms-of-use"
              className="text-inherit hover:text-black hover:underline"
            >
              Website Terms of Use
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} Dyte Inc.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/dyte-io"
              aria-label="Dyte's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/dyteio"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/company/dyteio"
              aria-label="Dyte YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
