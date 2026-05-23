export type Platform = "youtube" | "github" | "telegram" | "other";

export interface LinkItem {
  label: string;
  url: string;
  platform: Platform;
}

export interface CreditItem {
  name: string;
  url?: string;
}

export interface Method {
  id: string;
  title: string;
  links: LinkItem[];
  credits: CreditItem[];
}

const MATIN: CreditItem = { name: 'Matin SenPai', url: 'https://t.me/MatinSenPaii' };
const WHITEDNS: CreditItem = { name: 'WhiteDns Channel', url: 'https://t.me/whitedns' };
const PATTERNIHA: CreditItem = { name: 'Patterniha', url: 'https://github.com/patterniha' };
const THEAZIZI: CreditItem = { name: 'TheAzizi', url: 'http://theazizi.ir/' };

export const methods: Method[] = [
  {
    id: 'lion-and-sun',
    title: 'شیر و خورشید',
    links: [
      {
        label: 'لینک پروژه اندروید',
        url: 'https://github.com/shirokhorshid/shirokhorshid-android',
        platform: 'github',
      },
      {
        label: 'اسکنر Akamai',
        url: 'https://github.com/mirarr-app/network-checker',
        platform: 'github',
      },
    ],
    credits: [
      { name: 'Samim', url: 'https://github.com/ssmirr' },
      { name: 'Mirarr', url: 'https://github.com/mirarr-app' },
    ],
  },
  {
    id: 'se7en-pro',
    title: 'Se7en Pro',
    links: [
      {
        label: 'لینک پروژه',
        url: 'https://github.com/KNG7-P/Se7en-Pro',
        platform: 'github',
      },
      {
        label: 'آموزش ویدیویی',
        url: 'https://youtu.be/zADLGLEkClw?si=tLsHypccvUYXs8ml',
        platform: 'youtube',
      },
    ],
    credits: [
      { name: 'KNG7-P', url: 'https://github.com/KNG7-P' },
      { name: 'ARSHIA HUMBERT', url: 'https://www.youtube.com/@ARSHIAHUMBERT' },
    ],
  },
  {
    id: 'mitm',
    title: 'MITM — Domain Fronting',
    links: [
      {
        label: 'لینک پروژه',
        url: 'https://github.com/patterniha/MITM-DomainFronting',
        platform: 'github',
      },
      {
        label: 'آموزش داخلی',
        url: 'https://up.theazizi.ir/download.php?t=70e787ea92f4c6ebd6a59d96be93cc7009b0',
        platform: 'other',
      },
    ],
    credits: [PATTERNIHA, THEAZIZI],
  },
  {
    id: 'master-http-relay',
    title: 'Master HTTP Relay (MHR)',
    links: [
      {
        label: 'آموزش ویدیویی',
        url: 'https://youtu.be/jzaqdKl40Ww',
        platform: 'youtube',
      },
      {
        label: 'لینک پروژه',
        url: 'https://github.com/masterking32/MasterHttpRelayVPN',
        platform: 'github',
      },
      {
        label: 'لینک پروژه (Rust)',
        url: 'https://github.com/therealaleph/MasterHttpRelayVPN-RUST',
        platform: 'github',
      },
    ],
    credits: [
      MATIN,
      { name: 'Shin (Aleph)', url: 'https://github.com/therealaleph' },
      { name: 'Amin Mahmoudi', url: 'https://github.com/masterking32' },
    ],
  },
  {
    id: 'skirk',
    title: 'Skirk',
    links: [
      {
        label: 'آموزش ویدیویی',
        url: 'https://youtu.be/vCr4E6Y1k4c?si=P0Muo_Gp_fXkJKpr',
        platform: 'youtube',
      },
      {
        label: 'لینک پروژه',
        url: 'https://github.com/ShahabSL/Skirk',
        platform: 'github',
      },
    ],
    credits: [
      THEAZIZI,
      { name: 'Shahab Lavasani', url: 'https://github.com/ShahabSL' },
    ],
  },
  {
    id: 'sni-spoof',
    title: 'SNI Spoof',
    links: [
      {
        label: 'آموزش ویدیویی macOS',
        url: 'https://uplod.ir/sp7b4c9fkx9b/2026-05-20_14-08-22.mp4.htm',
        platform: 'other',
      },
      {
        label: 'اپلیکیشن macOS (Cloak)',
        url: 'https://github.com/g3ntrix/Cloak',
        platform: 'github',
      },
      {
        label: 'لیست کانفیگ‌ها',
        url: 'https://t.me/MatinSenPaii/3183',
        platform: 'telegram',
      },
      {
        label: 'آموزش ویدیویی (ویندوز)',
        url: 'https://youtu.be/dujMBt4sCpw',
        platform: 'youtube',
      },
      {
        label: 'لینک پروژه (لینوکس)',
        url: 'https://github.com/PechenyeRU/FakeSNI',
        platform: 'github',
      },
      {
        label: 'آموزش ویدیویی Edge Tunnel',
        url: 'https://youtu.be/svYBcv4bSzo',
        platform: 'youtube',
      },
      {
        label: 'رفع مشکلات رایج',
        url: 'https://youtu.be/PuYwXH4D4tU',
        platform: 'youtube',
      },
    ],
    credits: [
      PATTERNIHA,
      { name: 'Komar', url: 'https://github.com/g3ntrix' },
      MATIN,
      { name: 'PechenyeRU', url: 'https://github.com/PechenyeRU' },
    ],
  },
  {
    id: 'dnstt',
    title: 'DNSTT',
    links: [
      {
        label: 'آموزش ویدیویی',
        url: 'https://t.me/whitedns/36',
        platform: 'telegram',
      },
      {
        label: 'اپلیکیشن اندروید',
        url: 'https://t.me/whitedns/57',
        platform: 'telegram',
      },
    ],
    credits: [MATIN, WHITEDNS],
  },
  {
    id: 'white-dns',
    title: 'White DNS',
    links: [
      {
        label: 'لینک پروژه اندروید',
        url: 'https://github.com/iampedii/WhiteDNS',
        platform: 'github',
      },
      {
        label: 'نسخه iOS',
        url: 'https://t.me/whitedns/657',
        platform: 'telegram',
      },
    ],
    credits: [
      { name: 'Pedi', url: 'https://github.com/iampedii' },
      WHITEDNS,
    ],
  },
  {
    id: 'psiphon-v2ray',
    title: 'Psiphon + V2Ray',
    links: [
      {
        label: 'آموزش',
        url: 'https://t.me/MatinSenPaii/2295',
        platform: 'telegram',
      },
    ],
    credits: [MATIN],
  },
  {
    id: 'mitm-gdrive',
    title: 'MITM + Google Drive',
    links: [
      {
        label: 'پیش‌نیاز روش',
        url: 'https://t.me/MatinSenPaii/3151',
        platform: 'telegram',
      },
      {
        label: 'لینک پروژه',
        url: 'https://github.com/TheGreatAzizi/AzuDL-GC2GD',
        platform: 'github',
      },
      {
        label: 'آموزش ویدیویی',
        url: 'https://t.me/MatinSenPaii/3230',
        platform: 'telegram',
      },
    ],
    credits: [MATIN, THEAZIZI],
  },
  {
    id: 'coreforge',
    title: 'CoreForge',
    links: [
      {
        label: 'آموزش',
        url: 'https://t.me/whitedns/656',
        platform: 'telegram',
      },
    ],
    credits: [WHITEDNS],
  },
  {
    id: 'goose-relay',
    title: 'Goose Relay VPN',
    links: [
      {
        label: 'آموزش ویدیویی',
        url: 'https://www.youtube.com/watch?v=tzjVg4O6dVs',
        platform: 'youtube',
      },
      {
        label: 'لینک پروژه',
        url: 'https://github.com/Kianmhz/GooseRelayVPN',
        platform: 'github',
      },
    ],
    credits: [
      { name: 'Iman Aghapour', url: 'https://www.youtube.com/@iAghapour' },
      { name: 'Kian Haddad', url: 'https://github.com/Kianmhz' },
    ],
  },
  {
    id: 'slipstream',
    title: 'Slipstream',
    links: [
      {
        label: 'لینک پروژه',
        url: 'https://github.com/AliRezaBeigy/slipstream-rust-deploy',
        platform: 'github',
      },
      {
        label: 'آموزش ویدیویی',
        url: 'https://youtu.be/hI9RPYwp_oQ',
        platform: 'youtube',
      },
    ],
    credits: [
      { name: 'AliRezaBeigy', url: 'https://github.com/AliRezaBeigy' },
      MATIN,
    ],
  },
];
