import type { Locale } from '../i18n/site';
import { pathWithLocale } from '../i18n/site';

export interface ProductItem {
  key: string;
  icon: string;
  name: string;
  desc: string;
  shortDesc: string;
  tags: string[];
  color: string;
  href: string;
  docProject?: string;
}

export interface ProductCategory {
  key: string;
  label: string;
  icon: string;
  items: ProductItem[];
}

interface SourceProductItem {
  key: string;
  icon: string;
  color: string;
  href: string;
  docProject?: string;
  zh: {
    name: string;
    desc: string;
    shortDesc: string;
    tags: string[];
  };
  en: {
    name: string;
    desc: string;
    shortDesc: string;
    tags: string[];
  };
}

interface SourceCategory {
  key: string;
  icon: string;
  zhLabel: string;
  enLabel: string;
  items: SourceProductItem[];
}

const sourceCategories: SourceCategory[] = [
  {
    key: 'nodes',
    zhLabel: '节点',
    enLabel: 'Nodes',
    icon: '🖥️',
    items: [
      {
        key: 'blockbase',
        icon: '🖥️',
        color: '#00d4aa',
        href: '/blockbase',
        docProject: 'blockbase',
        zh: {
          name: 'BlockBase',
          desc: '开箱即用的节点服务，部署后即可接入 BlockLink 生态，作为数据与服务的核心节点。',
          shortDesc: '开箱即用的核心节点服务',
          tags: ['节点', '服务端', '部署'],
        },
        en: {
          name: 'BlockBase',
          desc: 'An out-of-the-box node service that joins the BlockLink ecosystem and acts as the core data/service node after deployment.',
          shortDesc: 'Out-of-the-box core node service',
          tags: ['Node', 'Backend', 'Deployment'],
        },
      },
    ],
  },
  {
    key: 'sdk',
    zhLabel: '开发 SDK',
    enLabel: 'Developer SDKs',
    icon: '🧰',
    items: [
      {
        key: 'blocklink-python',
        icon: '🐍',
        color: '#6c63ff',
        href: 'https://github.com/derek44554/BlockLink',
        docProject: 'blocklink',
        zh: {
          name: 'BlockLink',
          desc: 'Python pip 开发包，提供核心 API 接口，是整个 BlockLink 生态的基础依赖。',
          shortDesc: 'Python pip 核心开发包',
          tags: ['Python', 'pip', 'SDK'],
        },
        en: {
          name: 'BlockLink',
          desc: 'Python package on pip that exposes core APIs and serves as a foundational dependency across the BlockLink ecosystem.',
          shortDesc: 'Core Python package on pip',
          tags: ['Python', 'pip', 'SDK'],
        },
      },
      {
        key: 'block-flutter',
        icon: '💙',
        color: '#54c5f8',
        href: 'https://github.com/derek44554/block_flutter',
        zh: {
          name: 'block_flutter',
          desc: 'Flutter SDK，让移动端与桌面端应用轻松接入 BlockLink 生态。',
          shortDesc: 'Flutter 移动端 SDK',
          tags: ['Flutter', 'SDK', '移动端'],
        },
        en: {
          name: 'block_flutter',
          desc: 'Flutter SDK that makes it easy for mobile and desktop apps to connect with the BlockLink ecosystem.',
          shortDesc: 'Flutter SDK for mobile and desktop',
          tags: ['Flutter', 'SDK', 'Mobile'],
        },
      },
    ],
  },
  {
    key: 'apps',
    zhLabel: 'App',
    enLabel: 'Apps',
    icon: '📱',
    items: [
      {
        key: 'block-box',
        icon: '📦',
        color: '#8b85ff',
        href: 'https://github.com/derek44554/block_box',
        zh: {
          name: 'block_box',
          desc: '访问 BlockLink 的基础 App，提供核心功能入口，是生态 App 的起点。',
          shortDesc: '基础功能入口 App',
          tags: ['基础', '入口'],
        },
        en: {
          name: 'block_box',
          desc: 'Foundational app for accessing BlockLink, providing the core entry point for the app ecosystem.',
          shortDesc: 'Foundational entry app',
          tags: ['Core', 'Entry'],
        },
      },
      {
        key: 'block-photo',
        icon: '🖼️',
        color: '#ff6b6b',
        href: 'https://github.com/derek44554/block_photo',
        zh: {
          name: 'block_photo',
          desc: '基于 BlockLink 的相册 App，安全存储与管理你的照片。',
          shortDesc: '相册管理 App',
          tags: ['相册', '图片'],
        },
        en: {
          name: 'block_photo',
          desc: 'Album app built on BlockLink for securely storing and managing your photos.',
          shortDesc: 'Photo album app',
          tags: ['Album', 'Photos'],
        },
      },
      {
        key: 'block-notes',
        icon: '📝',
        color: '#ffa94d',
        href: 'https://github.com/derek44554/block_notes',
        zh: {
          name: 'block_notes',
          desc: '基于 BlockLink 的备忘录 App，随时记录、同步你的想法与笔记。',
          shortDesc: '备忘录与笔记 App',
          tags: ['备忘录', '笔记'],
        },
        en: {
          name: 'block_notes',
          desc: 'Notes app built on BlockLink for capturing and syncing your ideas anytime.',
          shortDesc: 'Notes and memo app',
          tags: ['Notes', 'Memos'],
        },
      },
      {
        key: 'block-music',
        icon: '🎵',
        color: '#f06595',
        href: 'https://github.com/derek44554/block_music',
        zh: {
          name: 'block_music',
          desc: '基于 BlockLink 的音乐 App，管理与播放你的私人音乐库。',
          shortDesc: '私人音乐库 App',
          tags: ['音乐', '播放器'],
        },
        en: {
          name: 'block_music',
          desc: 'Music app built on BlockLink for managing and playing your private music library.',
          shortDesc: 'Private music library app',
          tags: ['Music', 'Player'],
        },
      },
      {
        key: 'block-trace',
        icon: '👣',
        color: '#69db7c',
        href: 'https://github.com/derek44554/block_trace',
        zh: {
          name: 'block_trace',
          desc: '基于 BlockLink 的痕迹 App，记录你的足迹与生活轨迹。',
          shortDesc: '足迹与生活轨迹 App',
          tags: ['痕迹', '记录'],
        },
        en: {
          name: 'block_trace',
          desc: 'Trace app built on BlockLink to record your footprints and life timeline.',
          shortDesc: 'Footprint and life-trace app',
          tags: ['Trace', 'Timeline'],
        },
      },
    ],
  },
];

export function getCategories(locale: Locale): ProductCategory[] {
  return sourceCategories.map((category) => ({
    key: category.key,
    label: locale === 'zh' ? category.zhLabel : category.enLabel,
    icon: category.icon,
    items: category.items.map((item) => ({
      key: item.key,
      icon: item.icon,
      name: locale === 'zh' ? item.zh.name : item.en.name,
      desc: locale === 'zh' ? item.zh.desc : item.en.desc,
      shortDesc: locale === 'zh' ? item.zh.shortDesc : item.en.shortDesc,
      tags: locale === 'zh' ? item.zh.tags : item.en.tags,
      color: item.color,
      href: item.href.startsWith('/') ? pathWithLocale(locale, item.href) : item.href,
      docProject: item.docProject,
    })),
  }));
}
