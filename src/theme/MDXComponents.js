// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ColorCode from '../components/ColorCode';
import ColorPalette from '../components/ColorPalette';
import VideoPlayer from '../components/VideoPlayer';
import InfoTooltip from '../components/InfoTooltip';
import PropsTable from '../components/PropsTable';
import DocCardList from '@theme/DocCardList';
import ComponentsGrid from '../components/ComponentsGrid';
import { CardSection, Card } from '../components/CardComponents';
import { DemoLiveEditor } from '../components/LiveCode';
import comentar from '../components/Comentar';
import IframeWindow from '../components/BrowserWindow/IframeWindow';
import Codepen from '../components/Codepen';
import ThinkerCad from '../components/ThinkerCad';
import * as icons from '../icons';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ...icons,

  Tabs,
  TabItem,
  color: ColorCode,
  ColorPalette,
  VideoPlayer,
  InfoTooltip,
  PropsTable,
  DocCardList,
  ComponentsGrid,
  CardSection,
  Card,
  DemoLiveEditor,
  comentar,
  IframeWindow,
  Codepen,
  ThinkerCad,
};
