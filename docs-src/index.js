import React from "react";
import ReactDOM from "react-dom";
import {
  AddCircleOutline,
  AddCircleSharp,
  AddCircle,
  AddOutline,
  AddSharp,
  Add,
  AirplaneOutline,
  AirplaneSharp,
  Airplane,
  AlarmOutline,
  AlarmSharp,
  Alarm,
  AlbumsOutline,
  AlbumsSharp,
  Albums,
  AlertCircleOutline,
  AlertCircleSharp,
  AlertCircle,
  AlertOutline,
  AlertSharp,
  Alert,
  AmericanFootballOutline,
  AmericanFootballSharp,
  AmericanFootball,
  AnalyticsOutline,
  AnalyticsSharp,
  Analytics,
  ApertureOutline,
  ApertureSharp,
  Aperture,
  AppsOutline,
  AppsSharp,
  Apps,
  ArchiveOutline,
  ArchiveSharp,
  Archive,
  ArrowBackCircleOutline,
  ArrowBackCircleSharp,
  ArrowBackCircle,
  ArrowBackOutline,
  ArrowBackSharp,
  ArrowBack,
  ArrowDownCircleOutline,
  ArrowDownCircleSharp,
  ArrowDownCircle,
  ArrowDownOutline,
  ArrowDownSharp,
  ArrowDown,
  ArrowForwardCircleOutline,
  ArrowForwardCircleSharp,
  ArrowForwardCircle,
  ArrowForwardOutline,
  ArrowForwardSharp,
  ArrowForward,
  ArrowRedoCircleOutline,
  ArrowRedoCircleSharp,
  ArrowRedoCircle,
  ArrowRedoOutline,
  ArrowRedoSharp,
  ArrowRedo,
  ArrowUndoCircleOutline,
  ArrowUndoCircleSharp,
  ArrowUndoCircle,
  ArrowUndoOutline,
  ArrowUndoSharp,
  ArrowUndo,
  ArrowUpCircleOutline,
  ArrowUpCircleSharp,
  ArrowUpCircle,
  ArrowUpOutline,
  ArrowUpSharp,
  ArrowUp,
  AtCircleOutline,
  AtCircleSharp,
  AtCircle,
  AtOutline,
  AtSharp,
  At,
  AttachOutline,
  AttachSharp,
  Attach,
  BackspaceOutline,
  BackspaceSharp,
  Backspace,
  BandageOutline,
  BandageSharp,
  Bandage,
  BarChartOutline,
  BarChartSharp,
  BarChart,
  BarbellOutline,
  BarbellSharp,
  Barbell,
  BarcodeOutline,
  BarcodeSharp,
  Barcode,
  BaseballOutline,
  BaseballSharp,
  Baseball,
  BasketOutline,
  BasketSharp,
  Basket,
  BasketballOutline,
  BasketballSharp,
  Basketball,
  BatteryChargingOutline,
  BatteryChargingSharp,
  BatteryCharging,
  BatteryDeadOutline,
  BatteryDeadSharp,
  BatteryDead,
  BatteryFullOutline,
  BatteryFullSharp,
  BatteryFull,
  BatteryHalfOutline,
  BatteryHalfSharp,
  BatteryHalf,
  BeakerOutline,
  BeakerSharp,
  Beaker,
  BedOutline,
  BedSharp,
  Bed,
  BeerOutline,
  BeerSharp,
  Beer,
  BicycleOutline,
  BicycleSharp,
  Bicycle,
  BluetoothOutline,
  BluetoothSharp,
  Bluetooth,
  BoatOutline,
  BoatSharp,
  Boat,
  BodyOutline,
  BodySharp,
  Body,
  BonfireOutline,
  BonfireSharp,
  Bonfire,
  BookOutline,
  BookSharp,
  Book,
  BookmarkOutline,
  BookmarkSharp,
  Bookmark,
  BookmarksOutline,
  BookmarksSharp,
  Bookmarks,
  BriefcaseOutline,
  BriefcaseSharp,
  Briefcase,
  BrowsersOutline,
  BrowsersSharp,
  Browsers,
  BrushOutline,
  BrushSharp,
  Brush,
  BugOutline,
  BugSharp,
  Bug,
  BuildOutline,
  BuildSharp,
  Build,
  BulbOutline,
  BulbSharp,
  Bulb,
  BusOutline,
  BusSharp,
  Bus,
  BusinessOutline,
  BusinessSharp,
  Business,
  CafeOutline,
  CafeSharp,
  Cafe,
  CalculatorOutline,
  CalculatorSharp,
  Calculator,
  CalendarOutline,
  CalendarSharp,
  Calendar,
  CallOutline,
  CallSharp,
  Call,
  CameraOutline,
  CameraReverseOutline,
  CameraReverseSharp,
  CameraReverse,
  CameraSharp,
  Camera,
  CarOutline,
  CarSharp,
  CarSportOutline,
  CarSportSharp,
  CarSport,
  Car,
  CardOutline,
  CardSharp,
  Card,
  CaretBackCircleOutline,
  CaretBackCircleSharp,
  CaretBackCircle,
  CaretBackOutline,
  CaretBackSharp,
  CaretBack,
  CaretDownCircleOutline,
  CaretDownCircleSharp,
  CaretDownCircle,
  CaretDownOutline,
  CaretDownSharp,
  CaretDown,
  CaretForwardCircleOutline,
  CaretForwardCircleSharp,
  CaretForwardCircle,
  CaretForwardOutline,
  CaretForwardSharp,
  CaretForward,
  CaretUpCircleOutline,
  CaretUpCircleSharp,
  CaretUpCircle,
  CaretUpOutline,
  CaretUpSharp,
  CaretUp,
  CartOutline,
  CartSharp,
  Cart,
  CashOutline,
  CashSharp,
  Cash,
  CellularOutline,
  CellularSharp,
  Cellular,
  ChatboxEllipsesOutline,
  ChatboxEllipsesSharp,
  ChatboxEllipses,
  ChatboxOutline,
  ChatboxSharp,
  Chatbox,
  ChatbubbleEllipsesOutline,
  ChatbubbleEllipsesSharp,
  ChatbubbleEllipses,
  ChatbubbleOutline,
  ChatbubbleSharp,
  Chatbubble,
  ChatbubblesOutline,
  ChatbubblesSharp,
  Chatbubbles,
  CheckboxOutline,
  CheckboxSharp,
  Checkbox,
  CheckmarkCircleOutline,
  CheckmarkCircleSharp,
  CheckmarkCircle,
  CheckmarkDoneCircleOutline,
  CheckmarkDoneCircleSharp,
  CheckmarkDoneCircle,
  CheckmarkDoneOutline,
  CheckmarkDoneSharp,
  CheckmarkDone,
  CheckmarkOutline,
  CheckmarkSharp,
  Checkmark,
  ChevronBackCircleOutline,
  ChevronBackCircleSharp,
  ChevronBackCircle,
  ChevronBackOutline,
  ChevronBackSharp,
  ChevronBack,
  ChevronDownCircleOutline,
  ChevronDownCircleSharp,
  ChevronDownCircle,
  ChevronDownOutline,
  ChevronDownSharp,
  ChevronDown,
  ChevronForwardCircleOutline,
  ChevronForwardCircleSharp,
  ChevronForwardCircle,
  ChevronForwardOutline,
  ChevronForwardSharp,
  ChevronForward,
  ChevronUpCircleOutline,
  ChevronUpCircleSharp,
  ChevronUpCircle,
  ChevronUpOutline,
  ChevronUpSharp,
  ChevronUp,
  ClipboardOutline,
  ClipboardSharp,
  Clipboard,
  CloseCircleOutline,
  CloseCircleSharp,
  CloseCircle,
  CloseOutline,
  CloseSharp,
  Close,
  CloudCircleOutline,
  CloudCircleSharp,
  CloudCircle,
  CloudDoneOutline,
  CloudDoneSharp,
  CloudDone,
  CloudDownloadOutline,
  CloudDownloadSharp,
  CloudDownload,
  CloudOfflineOutline,
  CloudOfflineSharp,
  CloudOffline,
  CloudOutline,
  CloudSharp,
  CloudUploadOutline,
  CloudUploadSharp,
  CloudUpload,
  Cloud,
  CloudyNightOutline,
  CloudyNightSharp,
  CloudyNight,
  CloudyOutline,
  CloudySharp,
  Cloudy,
  CodeDownloadOutline,
  CodeDownloadSharp,
  CodeDownload,
  CodeOutline,
  CodeSharp,
  CodeSlashOutline,
  CodeSlashSharp,
  CodeSlash,
  CodeWorkingOutline,
  CodeWorkingSharp,
  CodeWorking,
  Code,
  CogOutline,
  CogSharp,
  Cog,
  ColorFillOutline,
  ColorFillSharp,
  ColorFill,
  ColorFilterOutline,
  ColorFilterSharp,
  ColorFilter,
  ColorPaletteOutline,
  ColorPaletteSharp,
  ColorPalette,
  ColorWandOutline,
  ColorWandSharp,
  ColorWand,
  CompassOutline,
  CompassSharp,
  Compass,
  ConstructOutline,
  ConstructSharp,
  Construct,
  ContractOutline,
  ContractSharp,
  Contract,
  ContrastOutline,
  ContrastSharp,
  Contrast,
  CopyOutline,
  CopySharp,
  Copy,
  CreateOutline,
  CreateSharp,
  Create,
  CropOutline,
  CropSharp,
  Crop,
  CubeOutline,
  CubeSharp,
  Cube,
  CutOutline,
  CutSharp,
  Cut,
  DesktopOutline,
  DesktopSharp,
  Desktop,
  DiscOutline,
  DiscSharp,
  Disc,
  DocumentAttachOutline,
  DocumentAttachSharp,
  DocumentAttach,
  DocumentOutline,
  DocumentSharp,
  DocumentTextOutline,
  DocumentTextSharp,
  DocumentText,
  Document,
  DocumentsOutline,
  DocumentsSharp,
  Documents,
  DownloadOutline,
  DownloadSharp,
  Download,
  DuplicateOutline,
  DuplicateSharp,
  Duplicate,
  EarOutline,
  EarSharp,
  Ear,
  EarthOutline,
  EarthSharp,
  Earth,
  EaselOutline,
  EaselSharp,
  Easel,
  EggOutline,
  EggSharp,
  Egg,
  EllipseOutline,
  EllipseSharp,
  Ellipse,
  EllipsisHorizontalCircleOutline,
  EllipsisHorizontalCircleSharp,
  EllipsisHorizontalCircle,
  EllipsisHorizontalOutline,
  EllipsisHorizontalSharp,
  EllipsisHorizontal,
  EllipsisVerticalCircleOutline,
  EllipsisVerticalCircleSharp,
  EllipsisVerticalCircle,
  EllipsisVerticalOutline,
  EllipsisVerticalSharp,
  EllipsisVertical,
  EnterOutline,
  EnterSharp,
  Enter,
  ExitOutline,
  ExitSharp,
  Exit,
  ExpandOutline,
  ExpandSharp,
  Expand,
  EyeOffOutline,
  EyeOffSharp,
  EyeOff,
  EyeOutline,
  EyeSharp,
  Eye,
  EyedropOutline,
  EyedropSharp,
  Eyedrop,
  FastFoodOutline,
  FastFoodSharp,
  FastFood,
  FemaleOutline,
  FemaleSharp,
  Female,
  FileTrayFullOutline,
  FileTrayFullSharp,
  FileTrayFull,
  FileTrayOutline,
  FileTraySharp,
  FileTrayStackedOutline,
  FileTrayStackedSharp,
  FileTrayStacked,
  FileTray,
  FilmOutline,
  FilmSharp,
  Film,
  FilterOutline,
  FilterSharp,
  Filter,
  FingerPrintOutline,
  FingerPrintSharp,
  FingerPrint,
  FitnessOutline,
  FitnessSharp,
  Fitness,
  FlagOutline,
  FlagSharp,
  Flag,
  FlameOutline,
  FlameSharp,
  Flame,
  FlashOffOutline,
  FlashOffSharp,
  FlashOff,
  FlashOutline,
  FlashSharp,
  Flash,
  FlashlightOutline,
  FlashlightSharp,
  Flashlight,
  FlaskOutline,
  FlaskSharp,
  Flask,
  FlowerOutline,
  FlowerSharp,
  Flower,
  FolderOpenOutline,
  FolderOpenSharp,
  FolderOpen,
  FolderOutline,
  FolderSharp,
  Folder,
  FootballOutline,
  FootballSharp,
  Football,
  FunnelOutline,
  FunnelSharp,
  Funnel,
  GameControllerOutline,
  GameControllerSharp,
  GameController,
  GiftOutline,
  GiftSharp,
  Gift,
  GitBranchOutline,
  GitBranchSharp,
  GitBranch,
  GitCommitOutline,
  GitCommitSharp,
  GitCommit,
  GitCompareOutline,
  GitCompareSharp,
  GitCompare,
  GitMergeOutline,
  GitMergeSharp,
  GitMerge,
  GitNetworkOutline,
  GitNetworkSharp,
  GitNetwork,
  GitPullRequestOutline,
  GitPullRequestSharp,
  GitPullRequest,
  GlassesOutline,
  GlassesSharp,
  Glasses,
  GlobeOutline,
  GlobeSharp,
  Globe,
  GolfOutline,
  GolfSharp,
  Golf,
  GridOutline,
  GridSharp,
  Grid,
  HammerOutline,
  HammerSharp,
  Hammer,
  HandLeftOutline,
  HandLeftSharp,
  HandLeft,
  HandRightOutline,
  HandRightSharp,
  HandRight,
  HappyOutline,
  HappySharp,
  Happy,
  HardwareChipOutline,
  HardwareChipSharp,
  HardwareChip,
  HeadsetOutline,
  HeadsetSharp,
  Headset,
  HeartCircleOutline,
  HeartCircleSharp,
  HeartCircle,
  HeartDislikeCircleOutline,
  HeartDislikeCircleSharp,
  HeartDislikeCircle,
  HeartDislikeOutline,
  HeartDislikeSharp,
  HeartDislike,
  HeartHalfOutline,
  HeartHalfSharp,
  HeartHalf,
  HeartOutline,
  HeartSharp,
  Heart,
  HelpBuoyOutline,
  HelpBuoySharp,
  HelpBuoy,
  HelpCircleOutline,
  HelpCircleSharp,
  HelpCircle,
  HelpOutline,
  HelpSharp,
  Help,
  HomeOutline,
  HomeSharp,
  Home,
  HourglassOutline,
  HourglassSharp,
  Hourglass,
  IceCreamOutline,
  IceCreamSharp,
  IceCream,
  ImageOutline,
  ImageSharp,
  Image,
  ImagesOutline,
  ImagesSharp,
  Images,
  InfiniteOutline,
  InfiniteSharp,
  Infinite,
  InformationCircleOutline,
  InformationCircleSharp,
  InformationCircle,
  InformationOutline,
  InformationSharp,
  Information,
  JournalOutline,
  JournalSharp,
  Journal,
  KeyOutline,
  KeySharp,
  Key,
  KeypadOutline,
  KeypadSharp,
  Keypad,
  LanguageOutline,
  LanguageSharp,
  Language,
  LaptopOutline,
  LaptopSharp,
  Laptop,
  LayersOutline,
  LayersSharp,
  Layers,
  LeafOutline,
  LeafSharp,
  Leaf,
  LibraryOutline,
  LibrarySharp,
  Library,
  LinkOutline,
  LinkSharp,
  Link,
  ListCircleOutline,
  ListCircleSharp,
  ListCircle,
  ListOutline,
  ListSharp,
  List,
  LocateOutline,
  LocateSharp,
  Locate,
  LocationOutline,
  LocationSharp,
  Location,
  LockClosedOutline,
  LockClosedSharp,
  LockClosed,
  LockOpenOutline,
  LockOpenSharp,
  LockOpen,
  LogInOutline,
  LogInSharp,
  LogIn,
  LogOutOutline,
  LogOutSharp,
  LogOut,
  LogoAmazon,
  LogoAmplify,
  LogoAndroid,
  LogoAngular,
  LogoAppleAppstore,
  LogoApple,
  LogoBitbucket,
  LogoBitcoin,
  LogoBuffer,
  LogoCapacitor,
  LogoChrome,
  LogoClosedCaptioning,
  LogoCodepen,
  LogoCss3,
  LogoDesignernews,
  LogoDribbble,
  LogoDropbox,
  LogoEdge,
  LogoElectron,
  LogoEuro,
  LogoFacebook,
  LogoFirebase,
  LogoFirefox,
  LogoFlickr,
  LogoFoursquare,
  LogoGithub,
  LogoGooglePlaystore,
  LogoGoogle,
  LogoHackernews,
  LogoHtml5,
  LogoInstagram,
  LogoIonic,
  LogoIonitron,
  LogoJavascript,
  LogoLaravel,
  LogoLinkedin,
  LogoMarkdown,
  LogoNoSmoking,
  LogoNodejs,
  LogoNpm,
  LogoOctocat,
  LogoPinterest,
  LogoPlaystation,
  LogoPwa,
  LogoPython,
  LogoReact,
  LogoReddit,
  LogoRss,
  LogoSass,
  LogoSkype,
  LogoSlack,
  LogoSnapchat,
  LogoStackoverflow,
  LogoSteam,
  LogoStencil,
  LogoTumblr,
  LogoTux,
  LogoTwitch,
  LogoTwitter,
  LogoUsd,
  LogoVimeo,
  LogoVk,
  LogoVue,
  LogoWebComponent,
  LogoWhatsapp,
  LogoWindows,
  LogoWordpress,
  LogoXbox,
  LogoXing,
  LogoYahoo,
  LogoYen,
  LogoYoutube,
  MagnetOutline,
  MagnetSharp,
  Magnet,
  MailOpenOutline,
  MailOpenSharp,
  MailOpen,
  MailOutline,
  MailSharp,
  MailUnreadOutline,
  MailUnreadSharp,
  MailUnread,
  Mail,
  MaleFemaleOutline,
  MaleFemaleSharp,
  MaleFemale,
  MaleOutline,
  MaleSharp,
  Male,
  ManOutline,
  ManSharp,
  Man,
  MapOutline,
  MapSharp,
  Map,
  MedalOutline,
  MedalSharp,
  Medal,
  MedicalOutline,
  MedicalSharp,
  Medical,
  MedkitOutline,
  MedkitSharp,
  Medkit,
  MegaphoneOutline,
  MegaphoneSharp,
  Megaphone,
  MenuOutline,
  MenuSharp,
  Menu,
  MicCircleOutline,
  MicCircleSharp,
  MicCircle,
  MicOffCircleOutline,
  MicOffCircleSharp,
  MicOffCircle,
  MicOffOutline,
  MicOffSharp,
  MicOff,
  MicOutline,
  MicSharp,
  Mic,
  MoonOutline,
  MoonSharp,
  Moon,
  MoveOutline,
  MoveSharp,
  Move,
  MusicalNoteOutline,
  MusicalNoteSharp,
  MusicalNote,
  MusicalNotesOutline,
  MusicalNotesSharp,
  MusicalNotes,
  NavigateCircleOutline,
  NavigateCircleSharp,
  NavigateCircle,
  NavigateOutline,
  NavigateSharp,
  Navigate,
  NewspaperOutline,
  NewspaperSharp,
  Newspaper,
  NotificationsCircleOutline,
  NotificationsCircleSharp,
  NotificationsCircle,
  NotificationsOffCircleOutline,
  NotificationsOffCircleSharp,
  NotificationsOffCircle,
  NotificationsOffOutline,
  NotificationsOffSharp,
  NotificationsOff,
  NotificationsOutline,
  NotificationsSharp,
  Notifications,
  NuclearOutline,
  NuclearSharp,
  Nuclear,
  NutritionOutline,
  NutritionSharp,
  Nutrition,
  OpenOutline,
  OpenSharp,
  Open,
  OptionsOutline,
  OptionsSharp,
  Options,
  PaperPlaneOutline,
  PaperPlaneSharp,
  PaperPlane,
  PartlySunnyOutline,
  PartlySunnySharp,
  PartlySunny,
  PauseCircleOutline,
  PauseCircleSharp,
  PauseCircle,
  PauseOutline,
  PauseSharp,
  Pause,
  PawOutline,
  PawSharp,
  Paw,
  PencilOutline,
  PencilSharp,
  Pencil,
  PeopleCircleOutline,
  PeopleCircleSharp,
  PeopleCircle,
  PeopleOutline,
  PeopleSharp,
  People,
  PersonAddOutline,
  PersonAddSharp,
  PersonAdd,
  PersonCircleOutline,
  PersonCircleSharp,
  PersonCircle,
  PersonOutline,
  PersonRemoveOutline,
  PersonRemoveSharp,
  PersonRemove,
  PersonSharp,
  Person,
  PhoneLandscapeOutline,
  PhoneLandscapeSharp,
  PhoneLandscape,
  PhonePortraitOutline,
  PhonePortraitSharp,
  PhonePortrait,
  PieChartOutline,
  PieChartSharp,
  PieChart,
  PinOutline,
  PinSharp,
  Pin,
  PintOutline,
  PintSharp,
  Pint,
  PizzaOutline,
  PizzaSharp,
  Pizza,
  PlanetOutline,
  PlanetSharp,
  Planet,
  PlayBackCircleOutline,
  PlayBackCircleSharp,
  PlayBackCircle,
  PlayBackOutline,
  PlayBackSharp,
  PlayBack,
  PlayCircleOutline,
  PlayCircleSharp,
  PlayCircle,
  PlayForwardCircleOutline,
  PlayForwardCircleSharp,
  PlayForwardCircle,
  PlayForwardOutline,
  PlayForwardSharp,
  PlayForward,
  PlayOutline,
  PlaySharp,
  PlaySkipBackCircleOutline,
  PlaySkipBackCircleSharp,
  PlaySkipBackCircle,
  PlaySkipBackOutline,
  PlaySkipBackSharp,
  PlaySkipBack,
  PlaySkipForwardCircleOutline,
  PlaySkipForwardCircleSharp,
  PlaySkipForwardCircle,
  PlaySkipForwardOutline,
  PlaySkipForwardSharp,
  PlaySkipForward,
  Play,
  PodiumOutline,
  PodiumSharp,
  Podium,
  PowerOutline,
  PowerSharp,
  Power,
  PricetagOutline,
  PricetagSharp,
  Pricetag,
  PricetagsOutline,
  PricetagsSharp,
  Pricetags,
  PrintOutline,
  PrintSharp,
  Print,
  PulseOutline,
  PulseSharp,
  Pulse,
  PushOutline,
  PushSharp,
  Push,
  QrCodeOutline,
  QrCodeSharp,
  QrCode,
  RadioButtonOffOutline,
  RadioButtonOffSharp,
  RadioButtonOff,
  RadioButtonOnOutline,
  RadioButtonOnSharp,
  RadioButtonOn,
  RadioOutline,
  RadioSharp,
  Radio,
  RainyOutline,
  RainySharp,
  Rainy,
  ReaderOutline,
  ReaderSharp,
  Reader,
  ReceiptOutline,
  ReceiptSharp,
  Receipt,
  RecordingOutline,
  RecordingSharp,
  Recording,
  RefreshCircleOutline,
  RefreshCircleSharp,
  RefreshCircle,
  RefreshOutline,
  RefreshSharp,
  Refresh,
  ReloadCircleOutline,
  ReloadCircleSharp,
  ReloadCircle,
  ReloadOutline,
  ReloadSharp,
  Reload,
  RemoveCircleOutline,
  RemoveCircleSharp,
  RemoveCircle,
  RemoveOutline,
  RemoveSharp,
  Remove,
  ReorderFourOutline,
  ReorderFourSharp,
  ReorderFour,
  ReorderThreeOutline,
  ReorderThreeSharp,
  ReorderThree,
  ReorderTwoOutline,
  ReorderTwoSharp,
  ReorderTwo,
  RepeatOutline,
  RepeatSharp,
  Repeat,
  ResizeOutline,
  ResizeSharp,
  Resize,
  RestaurantOutline,
  RestaurantSharp,
  Restaurant,
  ReturnDownBackOutline,
  ReturnDownBackSharp,
  ReturnDownBack,
  ReturnDownForwardOutline,
  ReturnDownForwardSharp,
  ReturnDownForward,
  ReturnUpBackOutline,
  ReturnUpBackSharp,
  ReturnUpBack,
  ReturnUpForwardOutline,
  ReturnUpForwardSharp,
  ReturnUpForward,
  RibbonOutline,
  RibbonSharp,
  Ribbon,
  RocketOutline,
  RocketSharp,
  Rocket,
  RoseOutline,
  RoseSharp,
  Rose,
  SadOutline,
  SadSharp,
  Sad,
  SaveOutline,
  SaveSharp,
  Save,
  ScanCircleOutline,
  ScanCircleSharp,
  ScanCircle,
  ScanOutline,
  ScanSharp,
  Scan,
  SchoolOutline,
  SchoolSharp,
  School,
  SearchCircleOutline,
  SearchCircleSharp,
  SearchCircle,
  SearchOutline,
  SearchSharp,
  Search,
  SendOutline,
  SendSharp,
  Send,
  ServerOutline,
  ServerSharp,
  Server,
  SettingsOutline,
  SettingsSharp,
  Settings,
  ShapesOutline,
  ShapesSharp,
  Shapes,
  ShareOutline,
  ShareSharp,
  ShareSocialOutline,
  ShareSocialSharp,
  ShareSocial,
  Share,
  ShieldCheckmarkOutline,
  ShieldCheckmarkSharp,
  ShieldCheckmark,
  ShieldOutline,
  ShieldSharp,
  Shield,
  ShirtOutline,
  ShirtSharp,
  Shirt,
  ShuffleOutline,
  ShuffleSharp,
  Shuffle,
  SkullOutline,
  SkullSharp,
  Skull,
  SnowOutline,
  SnowSharp,
  Snow,
  SpeedometerOutline,
  SpeedometerSharp,
  Speedometer,
  SquareOutline,
  SquareSharp,
  Square,
  StarHalfOutline,
  StarHalfSharp,
  StarHalf,
  StarOutline,
  StarSharp,
  Star,
  StatsChartOutline,
  StatsChartSharp,
  StatsChart,
  StopCircleOutline,
  StopCircleSharp,
  StopCircle,
  StopOutline,
  StopSharp,
  Stop,
  StopwatchOutline,
  StopwatchSharp,
  Stopwatch,
  SubwayOutline,
  SubwaySharp,
  Subway,
  SunnyOutline,
  SunnySharp,
  Sunny,
  SwapHorizontalOutline,
  SwapHorizontalSharp,
  SwapHorizontal,
  SwapVerticalOutline,
  SwapVerticalSharp,
  SwapVertical,
  SyncCircleOutline,
  SyncCircleSharp,
  SyncCircle,
  SyncOutline,
  SyncSharp,
  Sync,
  TabletLandscapeOutline,
  TabletLandscapeSharp,
  TabletLandscape,
  TabletPortraitOutline,
  TabletPortraitSharp,
  TabletPortrait,
  TennisballOutline,
  TennisballSharp,
  Tennisball,
  TerminalOutline,
  TerminalSharp,
  Terminal,
  TextOutline,
  TextSharp,
  Text,
  ThermometerOutline,
  ThermometerSharp,
  Thermometer,
  ThumbsDownOutline,
  ThumbsDownSharp,
  ThumbsDown,
  ThumbsUpOutline,
  ThumbsUpSharp,
  ThumbsUp,
  ThunderstormOutline,
  ThunderstormSharp,
  Thunderstorm,
  TimeOutline,
  TimeSharp,
  Time,
  TimerOutline,
  TimerSharp,
  Timer,
  TodayOutline,
  TodaySharp,
  Today,
  ToggleOutline,
  ToggleSharp,
  Toggle,
  TrailSignOutline,
  TrailSignSharp,
  TrailSign,
  TrainOutline,
  TrainSharp,
  Train,
  TransgenderOutline,
  TransgenderSharp,
  Transgender,
  TrashBinOutline,
  TrashBinSharp,
  TrashBin,
  TrashOutline,
  TrashSharp,
  Trash,
  TrendingDownOutline,
  TrendingDownSharp,
  TrendingDown,
  TrendingUpOutline,
  TrendingUpSharp,
  TrendingUp,
  TriangleOutline,
  TriangleSharp,
  Triangle,
  TrophyOutline,
  TrophySharp,
  Trophy,
  TvOutline,
  TvSharp,
  Tv,
  UmbrellaOutline,
  UmbrellaSharp,
  Umbrella,
  VideocamOutline,
  VideocamSharp,
  Videocam,
  VolumeHighOutline,
  VolumeHighSharp,
  VolumeHigh,
  VolumeLowOutline,
  VolumeLowSharp,
  VolumeLow,
  VolumeMediumOutline,
  VolumeMediumSharp,
  VolumeMedium,
  VolumeMuteOutline,
  VolumeMuteSharp,
  VolumeMute,
  VolumeOffOutline,
  VolumeOffSharp,
  VolumeOff,
  WalkOutline,
  WalkSharp,
  Walk,
  WalletOutline,
  WalletSharp,
  Wallet,
  WarningOutline,
  WarningSharp,
  Warning,
  WatchOutline,
  WatchSharp,
  Watch,
  WaterOutline,
  WaterSharp,
  Water,
  WifiOutline,
  WifiSharp,
  Wifi,
  WineOutline,
  WineSharp,
  Wine,
  WomanOutline,
  WomanSharp,
  Woman,
} from '../dist'

class App extends React.Component {
    render() {
        return <div>
            <a className="icon-container" title="<AddCircleOutline />"><AddCircleOutline /></a>
            <a className="icon-container" title="<AddCircleSharp />"><AddCircleSharp /></a>
            <a className="icon-container" title="<AddCircle />"><AddCircle /></a>
            <a className="icon-container" title="<AddOutline />"><AddOutline /></a>
            <a className="icon-container" title="<AddSharp />"><AddSharp /></a>
            <a className="icon-container" title="<Add />"><Add /></a>
            <a className="icon-container" title="<AirplaneOutline />"><AirplaneOutline /></a>
            <a className="icon-container" title="<AirplaneSharp />"><AirplaneSharp /></a>
            <a className="icon-container" title="<Airplane />"><Airplane /></a>
            <a className="icon-container" title="<AlarmOutline />"><AlarmOutline /></a>
            <a className="icon-container" title="<AlarmSharp />"><AlarmSharp /></a>
            <a className="icon-container" title="<Alarm />"><Alarm /></a>
            <a className="icon-container" title="<AlbumsOutline />"><AlbumsOutline /></a>
            <a className="icon-container" title="<AlbumsSharp />"><AlbumsSharp /></a>
            <a className="icon-container" title="<Albums />"><Albums /></a>
            <a className="icon-container" title="<AlertCircleOutline />"><AlertCircleOutline /></a>
            <a className="icon-container" title="<AlertCircleSharp />"><AlertCircleSharp /></a>
            <a className="icon-container" title="<AlertCircle />"><AlertCircle /></a>
            <a className="icon-container" title="<AlertOutline />"><AlertOutline /></a>
            <a className="icon-container" title="<AlertSharp />"><AlertSharp /></a>
            <a className="icon-container" title="<Alert />"><Alert /></a>
            <a className="icon-container" title="<AmericanFootballOutline />"><AmericanFootballOutline /></a>
            <a className="icon-container" title="<AmericanFootballSharp />"><AmericanFootballSharp /></a>
            <a className="icon-container" title="<AmericanFootball />"><AmericanFootball /></a>
            <a className="icon-container" title="<AnalyticsOutline />"><AnalyticsOutline /></a>
            <a className="icon-container" title="<AnalyticsSharp />"><AnalyticsSharp /></a>
            <a className="icon-container" title="<Analytics />"><Analytics /></a>
            <a className="icon-container" title="<ApertureOutline />"><ApertureOutline /></a>
            <a className="icon-container" title="<ApertureSharp />"><ApertureSharp /></a>
            <a className="icon-container" title="<Aperture />"><Aperture /></a>
            <a className="icon-container" title="<AppsOutline />"><AppsOutline /></a>
            <a className="icon-container" title="<AppsSharp />"><AppsSharp /></a>
            <a className="icon-container" title="<Apps />"><Apps /></a>
            <a className="icon-container" title="<ArchiveOutline />"><ArchiveOutline /></a>
            <a className="icon-container" title="<ArchiveSharp />"><ArchiveSharp /></a>
            <a className="icon-container" title="<Archive />"><Archive /></a>
            <a className="icon-container" title="<ArrowBackCircleOutline />"><ArrowBackCircleOutline /></a>
            <a className="icon-container" title="<ArrowBackCircleSharp />"><ArrowBackCircleSharp /></a>
            <a className="icon-container" title="<ArrowBackCircle />"><ArrowBackCircle /></a>
            <a className="icon-container" title="<ArrowBackOutline />"><ArrowBackOutline /></a>
            <a className="icon-container" title="<ArrowBackSharp />"><ArrowBackSharp /></a>
            <a className="icon-container" title="<ArrowBack />"><ArrowBack /></a>
            <a className="icon-container" title="<ArrowDownCircleOutline />"><ArrowDownCircleOutline /></a>
            <a className="icon-container" title="<ArrowDownCircleSharp />"><ArrowDownCircleSharp /></a>
            <a className="icon-container" title="<ArrowDownCircle />"><ArrowDownCircle /></a>
            <a className="icon-container" title="<ArrowDownOutline />"><ArrowDownOutline /></a>
            <a className="icon-container" title="<ArrowDownSharp />"><ArrowDownSharp /></a>
            <a className="icon-container" title="<ArrowDown />"><ArrowDown /></a>
            <a className="icon-container" title="<ArrowForwardCircleOutline />"><ArrowForwardCircleOutline /></a>
            <a className="icon-container" title="<ArrowForwardCircleSharp />"><ArrowForwardCircleSharp /></a>
            <a className="icon-container" title="<ArrowForwardCircle />"><ArrowForwardCircle /></a>
            <a className="icon-container" title="<ArrowForwardOutline />"><ArrowForwardOutline /></a>
            <a className="icon-container" title="<ArrowForwardSharp />"><ArrowForwardSharp /></a>
            <a className="icon-container" title="<ArrowForward />"><ArrowForward /></a>
            <a className="icon-container" title="<ArrowRedoCircleOutline />"><ArrowRedoCircleOutline /></a>
            <a className="icon-container" title="<ArrowRedoCircleSharp />"><ArrowRedoCircleSharp /></a>
            <a className="icon-container" title="<ArrowRedoCircle />"><ArrowRedoCircle /></a>
            <a className="icon-container" title="<ArrowRedoOutline />"><ArrowRedoOutline /></a>
            <a className="icon-container" title="<ArrowRedoSharp />"><ArrowRedoSharp /></a>
            <a className="icon-container" title="<ArrowRedo />"><ArrowRedo /></a>
            <a className="icon-container" title="<ArrowUndoCircleOutline />"><ArrowUndoCircleOutline /></a>
            <a className="icon-container" title="<ArrowUndoCircleSharp />"><ArrowUndoCircleSharp /></a>
            <a className="icon-container" title="<ArrowUndoCircle />"><ArrowUndoCircle /></a>
            <a className="icon-container" title="<ArrowUndoOutline />"><ArrowUndoOutline /></a>
            <a className="icon-container" title="<ArrowUndoSharp />"><ArrowUndoSharp /></a>
            <a className="icon-container" title="<ArrowUndo />"><ArrowUndo /></a>
            <a className="icon-container" title="<ArrowUpCircleOutline />"><ArrowUpCircleOutline /></a>
            <a className="icon-container" title="<ArrowUpCircleSharp />"><ArrowUpCircleSharp /></a>
            <a className="icon-container" title="<ArrowUpCircle />"><ArrowUpCircle /></a>
            <a className="icon-container" title="<ArrowUpOutline />"><ArrowUpOutline /></a>
            <a className="icon-container" title="<ArrowUpSharp />"><ArrowUpSharp /></a>
            <a className="icon-container" title="<ArrowUp />"><ArrowUp /></a>
            <a className="icon-container" title="<AtCircleOutline />"><AtCircleOutline /></a>
            <a className="icon-container" title="<AtCircleSharp />"><AtCircleSharp /></a>
            <a className="icon-container" title="<AtCircle />"><AtCircle /></a>
            <a className="icon-container" title="<AtOutline />"><AtOutline /></a>
            <a className="icon-container" title="<AtSharp />"><AtSharp /></a>
            <a className="icon-container" title="<At />"><At /></a>
            <a className="icon-container" title="<AttachOutline />"><AttachOutline /></a>
            <a className="icon-container" title="<AttachSharp />"><AttachSharp /></a>
            <a className="icon-container" title="<Attach />"><Attach /></a>
            <a className="icon-container" title="<BackspaceOutline />"><BackspaceOutline /></a>
            <a className="icon-container" title="<BackspaceSharp />"><BackspaceSharp /></a>
            <a className="icon-container" title="<Backspace />"><Backspace /></a>
            <a className="icon-container" title="<BandageOutline />"><BandageOutline /></a>
            <a className="icon-container" title="<BandageSharp />"><BandageSharp /></a>
            <a className="icon-container" title="<Bandage />"><Bandage /></a>
            <a className="icon-container" title="<BarChartOutline />"><BarChartOutline /></a>
            <a className="icon-container" title="<BarChartSharp />"><BarChartSharp /></a>
            <a className="icon-container" title="<BarChart />"><BarChart /></a>
            <a className="icon-container" title="<BarbellOutline />"><BarbellOutline /></a>
            <a className="icon-container" title="<BarbellSharp />"><BarbellSharp /></a>
            <a className="icon-container" title="<Barbell />"><Barbell /></a>
            <a className="icon-container" title="<BarcodeOutline />"><BarcodeOutline /></a>
            <a className="icon-container" title="<BarcodeSharp />"><BarcodeSharp /></a>
            <a className="icon-container" title="<Barcode />"><Barcode /></a>
            <a className="icon-container" title="<BaseballOutline />"><BaseballOutline /></a>
            <a className="icon-container" title="<BaseballSharp />"><BaseballSharp /></a>
            <a className="icon-container" title="<Baseball />"><Baseball /></a>
            <a className="icon-container" title="<BasketOutline />"><BasketOutline /></a>
            <a className="icon-container" title="<BasketSharp />"><BasketSharp /></a>
            <a className="icon-container" title="<Basket />"><Basket /></a>
            <a className="icon-container" title="<BasketballOutline />"><BasketballOutline /></a>
            <a className="icon-container" title="<BasketballSharp />"><BasketballSharp /></a>
            <a className="icon-container" title="<Basketball />"><Basketball /></a>
            <a className="icon-container" title="<BatteryChargingOutline />"><BatteryChargingOutline /></a>
            <a className="icon-container" title="<BatteryChargingSharp />"><BatteryChargingSharp /></a>
            <a className="icon-container" title="<BatteryCharging />"><BatteryCharging /></a>
            <a className="icon-container" title="<BatteryDeadOutline />"><BatteryDeadOutline /></a>
            <a className="icon-container" title="<BatteryDeadSharp />"><BatteryDeadSharp /></a>
            <a className="icon-container" title="<BatteryDead />"><BatteryDead /></a>
            <a className="icon-container" title="<BatteryFullOutline />"><BatteryFullOutline /></a>
            <a className="icon-container" title="<BatteryFullSharp />"><BatteryFullSharp /></a>
            <a className="icon-container" title="<BatteryFull />"><BatteryFull /></a>
            <a className="icon-container" title="<BatteryHalfOutline />"><BatteryHalfOutline /></a>
            <a className="icon-container" title="<BatteryHalfSharp />"><BatteryHalfSharp /></a>
            <a className="icon-container" title="<BatteryHalf />"><BatteryHalf /></a>
            <a className="icon-container" title="<BeakerOutline />"><BeakerOutline /></a>
            <a className="icon-container" title="<BeakerSharp />"><BeakerSharp /></a>
            <a className="icon-container" title="<Beaker />"><Beaker /></a>
            <a className="icon-container" title="<BedOutline />"><BedOutline /></a>
            <a className="icon-container" title="<BedSharp />"><BedSharp /></a>
            <a className="icon-container" title="<Bed />"><Bed /></a>
            <a className="icon-container" title="<BeerOutline />"><BeerOutline /></a>
            <a className="icon-container" title="<BeerSharp />"><BeerSharp /></a>
            <a className="icon-container" title="<Beer />"><Beer /></a>
            <a className="icon-container" title="<BicycleOutline />"><BicycleOutline /></a>
            <a className="icon-container" title="<BicycleSharp />"><BicycleSharp /></a>
            <a className="icon-container" title="<Bicycle />"><Bicycle /></a>
            <a className="icon-container" title="<BluetoothOutline />"><BluetoothOutline /></a>
            <a className="icon-container" title="<BluetoothSharp />"><BluetoothSharp /></a>
            <a className="icon-container" title="<Bluetooth />"><Bluetooth /></a>
            <a className="icon-container" title="<BoatOutline />"><BoatOutline /></a>
            <a className="icon-container" title="<BoatSharp />"><BoatSharp /></a>
            <a className="icon-container" title="<Boat />"><Boat /></a>
            <a className="icon-container" title="<BodyOutline />"><BodyOutline /></a>
            <a className="icon-container" title="<BodySharp />"><BodySharp /></a>
            <a className="icon-container" title="<Body />"><Body /></a>
            <a className="icon-container" title="<BonfireOutline />"><BonfireOutline /></a>
            <a className="icon-container" title="<BonfireSharp />"><BonfireSharp /></a>
            <a className="icon-container" title="<Bonfire />"><Bonfire /></a>
            <a className="icon-container" title="<BookOutline />"><BookOutline /></a>
            <a className="icon-container" title="<BookSharp />"><BookSharp /></a>
            <a className="icon-container" title="<Book />"><Book /></a>
            <a className="icon-container" title="<BookmarkOutline />"><BookmarkOutline /></a>
            <a className="icon-container" title="<BookmarkSharp />"><BookmarkSharp /></a>
            <a className="icon-container" title="<Bookmark />"><Bookmark /></a>
            <a className="icon-container" title="<BookmarksOutline />"><BookmarksOutline /></a>
            <a className="icon-container" title="<BookmarksSharp />"><BookmarksSharp /></a>
            <a className="icon-container" title="<Bookmarks />"><Bookmarks /></a>
            <a className="icon-container" title="<BriefcaseOutline />"><BriefcaseOutline /></a>
            <a className="icon-container" title="<BriefcaseSharp />"><BriefcaseSharp /></a>
            <a className="icon-container" title="<Briefcase />"><Briefcase /></a>
            <a className="icon-container" title="<BrowsersOutline />"><BrowsersOutline /></a>
            <a className="icon-container" title="<BrowsersSharp />"><BrowsersSharp /></a>
            <a className="icon-container" title="<Browsers />"><Browsers /></a>
            <a className="icon-container" title="<BrushOutline />"><BrushOutline /></a>
            <a className="icon-container" title="<BrushSharp />"><BrushSharp /></a>
            <a className="icon-container" title="<Brush />"><Brush /></a>
            <a className="icon-container" title="<BugOutline />"><BugOutline /></a>
            <a className="icon-container" title="<BugSharp />"><BugSharp /></a>
            <a className="icon-container" title="<Bug />"><Bug /></a>
            <a className="icon-container" title="<BuildOutline />"><BuildOutline /></a>
            <a className="icon-container" title="<BuildSharp />"><BuildSharp /></a>
            <a className="icon-container" title="<Build />"><Build /></a>
            <a className="icon-container" title="<BulbOutline />"><BulbOutline /></a>
            <a className="icon-container" title="<BulbSharp />"><BulbSharp /></a>
            <a className="icon-container" title="<Bulb />"><Bulb /></a>
            <a className="icon-container" title="<BusOutline />"><BusOutline /></a>
            <a className="icon-container" title="<BusSharp />"><BusSharp /></a>
            <a className="icon-container" title="<Bus />"><Bus /></a>
            <a className="icon-container" title="<BusinessOutline />"><BusinessOutline /></a>
            <a className="icon-container" title="<BusinessSharp />"><BusinessSharp /></a>
            <a className="icon-container" title="<Business />"><Business /></a>
            <a className="icon-container" title="<CafeOutline />"><CafeOutline /></a>
            <a className="icon-container" title="<CafeSharp />"><CafeSharp /></a>
            <a className="icon-container" title="<Cafe />"><Cafe /></a>
            <a className="icon-container" title="<CalculatorOutline />"><CalculatorOutline /></a>
            <a className="icon-container" title="<CalculatorSharp />"><CalculatorSharp /></a>
            <a className="icon-container" title="<Calculator />"><Calculator /></a>
            <a className="icon-container" title="<CalendarOutline />"><CalendarOutline /></a>
            <a className="icon-container" title="<CalendarSharp />"><CalendarSharp /></a>
            <a className="icon-container" title="<Calendar />"><Calendar /></a>
            <a className="icon-container" title="<CallOutline />"><CallOutline /></a>
            <a className="icon-container" title="<CallSharp />"><CallSharp /></a>
            <a className="icon-container" title="<Call />"><Call /></a>
            <a className="icon-container" title="<CameraOutline />"><CameraOutline /></a>
            <a className="icon-container" title="<CameraReverseOutline />"><CameraReverseOutline /></a>
            <a className="icon-container" title="<CameraReverseSharp />"><CameraReverseSharp /></a>
            <a className="icon-container" title="<CameraReverse />"><CameraReverse /></a>
            <a className="icon-container" title="<CameraSharp />"><CameraSharp /></a>
            <a className="icon-container" title="<Camera />"><Camera /></a>
            <a className="icon-container" title="<CarOutline />"><CarOutline /></a>
            <a className="icon-container" title="<CarSharp />"><CarSharp /></a>
            <a className="icon-container" title="<CarSportOutline />"><CarSportOutline /></a>
            <a className="icon-container" title="<CarSportSharp />"><CarSportSharp /></a>
            <a className="icon-container" title="<CarSport />"><CarSport /></a>
            <a className="icon-container" title="<Car />"><Car /></a>
            <a className="icon-container" title="<CardOutline />"><CardOutline /></a>
            <a className="icon-container" title="<CardSharp />"><CardSharp /></a>
            <a className="icon-container" title="<Card />"><Card /></a>
            <a className="icon-container" title="<CaretBackCircleOutline />"><CaretBackCircleOutline /></a>
            <a className="icon-container" title="<CaretBackCircleSharp />"><CaretBackCircleSharp /></a>
            <a className="icon-container" title="<CaretBackCircle />"><CaretBackCircle /></a>
            <a className="icon-container" title="<CaretBackOutline />"><CaretBackOutline /></a>
            <a className="icon-container" title="<CaretBackSharp />"><CaretBackSharp /></a>
            <a className="icon-container" title="<CaretBack />"><CaretBack /></a>
            <a className="icon-container" title="<CaretDownCircleOutline />"><CaretDownCircleOutline /></a>
            <a className="icon-container" title="<CaretDownCircleSharp />"><CaretDownCircleSharp /></a>
            <a className="icon-container" title="<CaretDownCircle />"><CaretDownCircle /></a>
            <a className="icon-container" title="<CaretDownOutline />"><CaretDownOutline /></a>
            <a className="icon-container" title="<CaretDownSharp />"><CaretDownSharp /></a>
            <a className="icon-container" title="<CaretDown />"><CaretDown /></a>
            <a className="icon-container" title="<CaretForwardCircleOutline />"><CaretForwardCircleOutline /></a>
            <a className="icon-container" title="<CaretForwardCircleSharp />"><CaretForwardCircleSharp /></a>
            <a className="icon-container" title="<CaretForwardCircle />"><CaretForwardCircle /></a>
            <a className="icon-container" title="<CaretForwardOutline />"><CaretForwardOutline /></a>
            <a className="icon-container" title="<CaretForwardSharp />"><CaretForwardSharp /></a>
            <a className="icon-container" title="<CaretForward />"><CaretForward /></a>
            <a className="icon-container" title="<CaretUpCircleOutline />"><CaretUpCircleOutline /></a>
            <a className="icon-container" title="<CaretUpCircleSharp />"><CaretUpCircleSharp /></a>
            <a className="icon-container" title="<CaretUpCircle />"><CaretUpCircle /></a>
            <a className="icon-container" title="<CaretUpOutline />"><CaretUpOutline /></a>
            <a className="icon-container" title="<CaretUpSharp />"><CaretUpSharp /></a>
            <a className="icon-container" title="<CaretUp />"><CaretUp /></a>
            <a className="icon-container" title="<CartOutline />"><CartOutline /></a>
            <a className="icon-container" title="<CartSharp />"><CartSharp /></a>
            <a className="icon-container" title="<Cart />"><Cart /></a>
            <a className="icon-container" title="<CashOutline />"><CashOutline /></a>
            <a className="icon-container" title="<CashSharp />"><CashSharp /></a>
            <a className="icon-container" title="<Cash />"><Cash /></a>
            <a className="icon-container" title="<CellularOutline />"><CellularOutline /></a>
            <a className="icon-container" title="<CellularSharp />"><CellularSharp /></a>
            <a className="icon-container" title="<Cellular />"><Cellular /></a>
            <a className="icon-container" title="<ChatboxEllipsesOutline />"><ChatboxEllipsesOutline /></a>
            <a className="icon-container" title="<ChatboxEllipsesSharp />"><ChatboxEllipsesSharp /></a>
            <a className="icon-container" title="<ChatboxEllipses />"><ChatboxEllipses /></a>
            <a className="icon-container" title="<ChatboxOutline />"><ChatboxOutline /></a>
            <a className="icon-container" title="<ChatboxSharp />"><ChatboxSharp /></a>
            <a className="icon-container" title="<Chatbox />"><Chatbox /></a>
            <a className="icon-container" title="<ChatbubbleEllipsesOutline />"><ChatbubbleEllipsesOutline /></a>
            <a className="icon-container" title="<ChatbubbleEllipsesSharp />"><ChatbubbleEllipsesSharp /></a>
            <a className="icon-container" title="<ChatbubbleEllipses />"><ChatbubbleEllipses /></a>
            <a className="icon-container" title="<ChatbubbleOutline />"><ChatbubbleOutline /></a>
            <a className="icon-container" title="<ChatbubbleSharp />"><ChatbubbleSharp /></a>
            <a className="icon-container" title="<Chatbubble />"><Chatbubble /></a>
            <a className="icon-container" title="<ChatbubblesOutline />"><ChatbubblesOutline /></a>
            <a className="icon-container" title="<ChatbubblesSharp />"><ChatbubblesSharp /></a>
            <a className="icon-container" title="<Chatbubbles />"><Chatbubbles /></a>
            <a className="icon-container" title="<CheckboxOutline />"><CheckboxOutline /></a>
            <a className="icon-container" title="<CheckboxSharp />"><CheckboxSharp /></a>
            <a className="icon-container" title="<Checkbox />"><Checkbox /></a>
            <a className="icon-container" title="<CheckmarkCircleOutline />"><CheckmarkCircleOutline /></a>
            <a className="icon-container" title="<CheckmarkCircleSharp />"><CheckmarkCircleSharp /></a>
            <a className="icon-container" title="<CheckmarkCircle />"><CheckmarkCircle /></a>
            <a className="icon-container" title="<CheckmarkDoneCircleOutline />"><CheckmarkDoneCircleOutline /></a>
            <a className="icon-container" title="<CheckmarkDoneCircleSharp />"><CheckmarkDoneCircleSharp /></a>
            <a className="icon-container" title="<CheckmarkDoneCircle />"><CheckmarkDoneCircle /></a>
            <a className="icon-container" title="<CheckmarkDoneOutline />"><CheckmarkDoneOutline /></a>
            <a className="icon-container" title="<CheckmarkDoneSharp />"><CheckmarkDoneSharp /></a>
            <a className="icon-container" title="<CheckmarkDone />"><CheckmarkDone /></a>
            <a className="icon-container" title="<CheckmarkOutline />"><CheckmarkOutline /></a>
            <a className="icon-container" title="<CheckmarkSharp />"><CheckmarkSharp /></a>
            <a className="icon-container" title="<Checkmark />"><Checkmark /></a>
            <a className="icon-container" title="<ChevronBackCircleOutline />"><ChevronBackCircleOutline /></a>
            <a className="icon-container" title="<ChevronBackCircleSharp />"><ChevronBackCircleSharp /></a>
            <a className="icon-container" title="<ChevronBackCircle />"><ChevronBackCircle /></a>
            <a className="icon-container" title="<ChevronBackOutline />"><ChevronBackOutline /></a>
            <a className="icon-container" title="<ChevronBackSharp />"><ChevronBackSharp /></a>
            <a className="icon-container" title="<ChevronBack />"><ChevronBack /></a>
            <a className="icon-container" title="<ChevronDownCircleOutline />"><ChevronDownCircleOutline /></a>
            <a className="icon-container" title="<ChevronDownCircleSharp />"><ChevronDownCircleSharp /></a>
            <a className="icon-container" title="<ChevronDownCircle />"><ChevronDownCircle /></a>
            <a className="icon-container" title="<ChevronDownOutline />"><ChevronDownOutline /></a>
            <a className="icon-container" title="<ChevronDownSharp />"><ChevronDownSharp /></a>
            <a className="icon-container" title="<ChevronDown />"><ChevronDown /></a>
            <a className="icon-container" title="<ChevronForwardCircleOutline />"><ChevronForwardCircleOutline /></a>
            <a className="icon-container" title="<ChevronForwardCircleSharp />"><ChevronForwardCircleSharp /></a>
            <a className="icon-container" title="<ChevronForwardCircle />"><ChevronForwardCircle /></a>
            <a className="icon-container" title="<ChevronForwardOutline />"><ChevronForwardOutline /></a>
            <a className="icon-container" title="<ChevronForwardSharp />"><ChevronForwardSharp /></a>
            <a className="icon-container" title="<ChevronForward />"><ChevronForward /></a>
            <a className="icon-container" title="<ChevronUpCircleOutline />"><ChevronUpCircleOutline /></a>
            <a className="icon-container" title="<ChevronUpCircleSharp />"><ChevronUpCircleSharp /></a>
            <a className="icon-container" title="<ChevronUpCircle />"><ChevronUpCircle /></a>
            <a className="icon-container" title="<ChevronUpOutline />"><ChevronUpOutline /></a>
            <a className="icon-container" title="<ChevronUpSharp />"><ChevronUpSharp /></a>
            <a className="icon-container" title="<ChevronUp />"><ChevronUp /></a>
            <a className="icon-container" title="<ClipboardOutline />"><ClipboardOutline /></a>
            <a className="icon-container" title="<ClipboardSharp />"><ClipboardSharp /></a>
            <a className="icon-container" title="<Clipboard />"><Clipboard /></a>
            <a className="icon-container" title="<CloseCircleOutline />"><CloseCircleOutline /></a>
            <a className="icon-container" title="<CloseCircleSharp />"><CloseCircleSharp /></a>
            <a className="icon-container" title="<CloseCircle />"><CloseCircle /></a>
            <a className="icon-container" title="<CloseOutline />"><CloseOutline /></a>
            <a className="icon-container" title="<CloseSharp />"><CloseSharp /></a>
            <a className="icon-container" title="<Close />"><Close /></a>
            <a className="icon-container" title="<CloudCircleOutline />"><CloudCircleOutline /></a>
            <a className="icon-container" title="<CloudCircleSharp />"><CloudCircleSharp /></a>
            <a className="icon-container" title="<CloudCircle />"><CloudCircle /></a>
            <a className="icon-container" title="<CloudDoneOutline />"><CloudDoneOutline /></a>
            <a className="icon-container" title="<CloudDoneSharp />"><CloudDoneSharp /></a>
            <a className="icon-container" title="<CloudDone />"><CloudDone /></a>
            <a className="icon-container" title="<CloudDownloadOutline />"><CloudDownloadOutline /></a>
            <a className="icon-container" title="<CloudDownloadSharp />"><CloudDownloadSharp /></a>
            <a className="icon-container" title="<CloudDownload />"><CloudDownload /></a>
            <a className="icon-container" title="<CloudOfflineOutline />"><CloudOfflineOutline /></a>
            <a className="icon-container" title="<CloudOfflineSharp />"><CloudOfflineSharp /></a>
            <a className="icon-container" title="<CloudOffline />"><CloudOffline /></a>
            <a className="icon-container" title="<CloudOutline />"><CloudOutline /></a>
            <a className="icon-container" title="<CloudSharp />"><CloudSharp /></a>
            <a className="icon-container" title="<CloudUploadOutline />"><CloudUploadOutline /></a>
            <a className="icon-container" title="<CloudUploadSharp />"><CloudUploadSharp /></a>
            <a className="icon-container" title="<CloudUpload />"><CloudUpload /></a>
            <a className="icon-container" title="<Cloud />"><Cloud /></a>
            <a className="icon-container" title="<CloudyNightOutline />"><CloudyNightOutline /></a>
            <a className="icon-container" title="<CloudyNightSharp />"><CloudyNightSharp /></a>
            <a className="icon-container" title="<CloudyNight />"><CloudyNight /></a>
            <a className="icon-container" title="<CloudyOutline />"><CloudyOutline /></a>
            <a className="icon-container" title="<CloudySharp />"><CloudySharp /></a>
            <a className="icon-container" title="<Cloudy />"><Cloudy /></a>
            <a className="icon-container" title="<CodeDownloadOutline />"><CodeDownloadOutline /></a>
            <a className="icon-container" title="<CodeDownloadSharp />"><CodeDownloadSharp /></a>
            <a className="icon-container" title="<CodeDownload />"><CodeDownload /></a>
            <a className="icon-container" title="<CodeOutline />"><CodeOutline /></a>
            <a className="icon-container" title="<CodeSharp />"><CodeSharp /></a>
            <a className="icon-container" title="<CodeSlashOutline />"><CodeSlashOutline /></a>
            <a className="icon-container" title="<CodeSlashSharp />"><CodeSlashSharp /></a>
            <a className="icon-container" title="<CodeSlash />"><CodeSlash /></a>
            <a className="icon-container" title="<CodeWorkingOutline />"><CodeWorkingOutline /></a>
            <a className="icon-container" title="<CodeWorkingSharp />"><CodeWorkingSharp /></a>
            <a className="icon-container" title="<CodeWorking />"><CodeWorking /></a>
            <a className="icon-container" title="<Code />"><Code /></a>
            <a className="icon-container" title="<CogOutline />"><CogOutline /></a>
            <a className="icon-container" title="<CogSharp />"><CogSharp /></a>
            <a className="icon-container" title="<Cog />"><Cog /></a>
            <a className="icon-container" title="<ColorFillOutline />"><ColorFillOutline /></a>
            <a className="icon-container" title="<ColorFillSharp />"><ColorFillSharp /></a>
            <a className="icon-container" title="<ColorFill />"><ColorFill /></a>
            <a className="icon-container" title="<ColorFilterOutline />"><ColorFilterOutline /></a>
            <a className="icon-container" title="<ColorFilterSharp />"><ColorFilterSharp /></a>
            <a className="icon-container" title="<ColorFilter />"><ColorFilter /></a>
            <a className="icon-container" title="<ColorPaletteOutline />"><ColorPaletteOutline /></a>
            <a className="icon-container" title="<ColorPaletteSharp />"><ColorPaletteSharp /></a>
            <a className="icon-container" title="<ColorPalette />"><ColorPalette /></a>
            <a className="icon-container" title="<ColorWandOutline />"><ColorWandOutline /></a>
            <a className="icon-container" title="<ColorWandSharp />"><ColorWandSharp /></a>
            <a className="icon-container" title="<ColorWand />"><ColorWand /></a>
            <a className="icon-container" title="<CompassOutline />"><CompassOutline /></a>
            <a className="icon-container" title="<CompassSharp />"><CompassSharp /></a>
            <a className="icon-container" title="<Compass />"><Compass /></a>
            <a className="icon-container" title="<ConstructOutline />"><ConstructOutline /></a>
            <a className="icon-container" title="<ConstructSharp />"><ConstructSharp /></a>
            <a className="icon-container" title="<Construct />"><Construct /></a>
            <a className="icon-container" title="<ContractOutline />"><ContractOutline /></a>
            <a className="icon-container" title="<ContractSharp />"><ContractSharp /></a>
            <a className="icon-container" title="<Contract />"><Contract /></a>
            <a className="icon-container" title="<ContrastOutline />"><ContrastOutline /></a>
            <a className="icon-container" title="<ContrastSharp />"><ContrastSharp /></a>
            <a className="icon-container" title="<Contrast />"><Contrast /></a>
            <a className="icon-container" title="<CopyOutline />"><CopyOutline /></a>
            <a className="icon-container" title="<CopySharp />"><CopySharp /></a>
            <a className="icon-container" title="<Copy />"><Copy /></a>
            <a className="icon-container" title="<CreateOutline />"><CreateOutline /></a>
            <a className="icon-container" title="<CreateSharp />"><CreateSharp /></a>
            <a className="icon-container" title="<Create />"><Create /></a>
            <a className="icon-container" title="<CropOutline />"><CropOutline /></a>
            <a className="icon-container" title="<CropSharp />"><CropSharp /></a>
            <a className="icon-container" title="<Crop />"><Crop /></a>
            <a className="icon-container" title="<CubeOutline />"><CubeOutline /></a>
            <a className="icon-container" title="<CubeSharp />"><CubeSharp /></a>
            <a className="icon-container" title="<Cube />"><Cube /></a>
            <a className="icon-container" title="<CutOutline />"><CutOutline /></a>
            <a className="icon-container" title="<CutSharp />"><CutSharp /></a>
            <a className="icon-container" title="<Cut />"><Cut /></a>
            <a className="icon-container" title="<DesktopOutline />"><DesktopOutline /></a>
            <a className="icon-container" title="<DesktopSharp />"><DesktopSharp /></a>
            <a className="icon-container" title="<Desktop />"><Desktop /></a>
            <a className="icon-container" title="<DiscOutline />"><DiscOutline /></a>
            <a className="icon-container" title="<DiscSharp />"><DiscSharp /></a>
            <a className="icon-container" title="<Disc />"><Disc /></a>
            <a className="icon-container" title="<DocumentAttachOutline />"><DocumentAttachOutline /></a>
            <a className="icon-container" title="<DocumentAttachSharp />"><DocumentAttachSharp /></a>
            <a className="icon-container" title="<DocumentAttach />"><DocumentAttach /></a>
            <a className="icon-container" title="<DocumentOutline />"><DocumentOutline /></a>
            <a className="icon-container" title="<DocumentSharp />"><DocumentSharp /></a>
            <a className="icon-container" title="<DocumentTextOutline />"><DocumentTextOutline /></a>
            <a className="icon-container" title="<DocumentTextSharp />"><DocumentTextSharp /></a>
            <a className="icon-container" title="<DocumentText />"><DocumentText /></a>
            <a className="icon-container" title="<Document />"><Document /></a>
            <a className="icon-container" title="<DocumentsOutline />"><DocumentsOutline /></a>
            <a className="icon-container" title="<DocumentsSharp />"><DocumentsSharp /></a>
            <a className="icon-container" title="<Documents />"><Documents /></a>
            <a className="icon-container" title="<DownloadOutline />"><DownloadOutline /></a>
            <a className="icon-container" title="<DownloadSharp />"><DownloadSharp /></a>
            <a className="icon-container" title="<Download />"><Download /></a>
            <a className="icon-container" title="<DuplicateOutline />"><DuplicateOutline /></a>
            <a className="icon-container" title="<DuplicateSharp />"><DuplicateSharp /></a>
            <a className="icon-container" title="<Duplicate />"><Duplicate /></a>
            <a className="icon-container" title="<EarOutline />"><EarOutline /></a>
            <a className="icon-container" title="<EarSharp />"><EarSharp /></a>
            <a className="icon-container" title="<Ear />"><Ear /></a>
            <a className="icon-container" title="<EarthOutline />"><EarthOutline /></a>
            <a className="icon-container" title="<EarthSharp />"><EarthSharp /></a>
            <a className="icon-container" title="<Earth />"><Earth /></a>
            <a className="icon-container" title="<EaselOutline />"><EaselOutline /></a>
            <a className="icon-container" title="<EaselSharp />"><EaselSharp /></a>
            <a className="icon-container" title="<Easel />"><Easel /></a>
            <a className="icon-container" title="<EggOutline />"><EggOutline /></a>
            <a className="icon-container" title="<EggSharp />"><EggSharp /></a>
            <a className="icon-container" title="<Egg />"><Egg /></a>
            <a className="icon-container" title="<EllipseOutline />"><EllipseOutline /></a>
            <a className="icon-container" title="<EllipseSharp />"><EllipseSharp /></a>
            <a className="icon-container" title="<Ellipse />"><Ellipse /></a>
            <a className="icon-container" title="<EllipsisHorizontalCircleOutline />"><EllipsisHorizontalCircleOutline /></a>
            <a className="icon-container" title="<EllipsisHorizontalCircleSharp />"><EllipsisHorizontalCircleSharp /></a>
            <a className="icon-container" title="<EllipsisHorizontalCircle />"><EllipsisHorizontalCircle /></a>
            <a className="icon-container" title="<EllipsisHorizontalOutline />"><EllipsisHorizontalOutline /></a>
            <a className="icon-container" title="<EllipsisHorizontalSharp />"><EllipsisHorizontalSharp /></a>
            <a className="icon-container" title="<EllipsisHorizontal />"><EllipsisHorizontal /></a>
            <a className="icon-container" title="<EllipsisVerticalCircleOutline />"><EllipsisVerticalCircleOutline /></a>
            <a className="icon-container" title="<EllipsisVerticalCircleSharp />"><EllipsisVerticalCircleSharp /></a>
            <a className="icon-container" title="<EllipsisVerticalCircle />"><EllipsisVerticalCircle /></a>
            <a className="icon-container" title="<EllipsisVerticalOutline />"><EllipsisVerticalOutline /></a>
            <a className="icon-container" title="<EllipsisVerticalSharp />"><EllipsisVerticalSharp /></a>
            <a className="icon-container" title="<EllipsisVertical />"><EllipsisVertical /></a>
            <a className="icon-container" title="<EnterOutline />"><EnterOutline /></a>
            <a className="icon-container" title="<EnterSharp />"><EnterSharp /></a>
            <a className="icon-container" title="<Enter />"><Enter /></a>
            <a className="icon-container" title="<ExitOutline />"><ExitOutline /></a>
            <a className="icon-container" title="<ExitSharp />"><ExitSharp /></a>
            <a className="icon-container" title="<Exit />"><Exit /></a>
            <a className="icon-container" title="<ExpandOutline />"><ExpandOutline /></a>
            <a className="icon-container" title="<ExpandSharp />"><ExpandSharp /></a>
            <a className="icon-container" title="<Expand />"><Expand /></a>
            <a className="icon-container" title="<EyeOffOutline />"><EyeOffOutline /></a>
            <a className="icon-container" title="<EyeOffSharp />"><EyeOffSharp /></a>
            <a className="icon-container" title="<EyeOff />"><EyeOff /></a>
            <a className="icon-container" title="<EyeOutline />"><EyeOutline /></a>
            <a className="icon-container" title="<EyeSharp />"><EyeSharp /></a>
            <a className="icon-container" title="<Eye />"><Eye /></a>
            <a className="icon-container" title="<EyedropOutline />"><EyedropOutline /></a>
            <a className="icon-container" title="<EyedropSharp />"><EyedropSharp /></a>
            <a className="icon-container" title="<Eyedrop />"><Eyedrop /></a>
            <a className="icon-container" title="<FastFoodOutline />"><FastFoodOutline /></a>
            <a className="icon-container" title="<FastFoodSharp />"><FastFoodSharp /></a>
            <a className="icon-container" title="<FastFood />"><FastFood /></a>
            <a className="icon-container" title="<FemaleOutline />"><FemaleOutline /></a>
            <a className="icon-container" title="<FemaleSharp />"><FemaleSharp /></a>
            <a className="icon-container" title="<Female />"><Female /></a>
            <a className="icon-container" title="<FileTrayFullOutline />"><FileTrayFullOutline /></a>
            <a className="icon-container" title="<FileTrayFullSharp />"><FileTrayFullSharp /></a>
            <a className="icon-container" title="<FileTrayFull />"><FileTrayFull /></a>
            <a className="icon-container" title="<FileTrayOutline />"><FileTrayOutline /></a>
            <a className="icon-container" title="<FileTraySharp />"><FileTraySharp /></a>
            <a className="icon-container" title="<FileTrayStackedOutline />"><FileTrayStackedOutline /></a>
            <a className="icon-container" title="<FileTrayStackedSharp />"><FileTrayStackedSharp /></a>
            <a className="icon-container" title="<FileTrayStacked />"><FileTrayStacked /></a>
            <a className="icon-container" title="<FileTray />"><FileTray /></a>
            <a className="icon-container" title="<FilmOutline />"><FilmOutline /></a>
            <a className="icon-container" title="<FilmSharp />"><FilmSharp /></a>
            <a className="icon-container" title="<Film />"><Film /></a>
            <a className="icon-container" title="<FilterOutline />"><FilterOutline /></a>
            <a className="icon-container" title="<FilterSharp />"><FilterSharp /></a>
            <a className="icon-container" title="<Filter />"><Filter /></a>
            <a className="icon-container" title="<FingerPrintOutline />"><FingerPrintOutline /></a>
            <a className="icon-container" title="<FingerPrintSharp />"><FingerPrintSharp /></a>
            <a className="icon-container" title="<FingerPrint />"><FingerPrint /></a>
            <a className="icon-container" title="<FitnessOutline />"><FitnessOutline /></a>
            <a className="icon-container" title="<FitnessSharp />"><FitnessSharp /></a>
            <a className="icon-container" title="<Fitness />"><Fitness /></a>
            <a className="icon-container" title="<FlagOutline />"><FlagOutline /></a>
            <a className="icon-container" title="<FlagSharp />"><FlagSharp /></a>
            <a className="icon-container" title="<Flag />"><Flag /></a>
            <a className="icon-container" title="<FlameOutline />"><FlameOutline /></a>
            <a className="icon-container" title="<FlameSharp />"><FlameSharp /></a>
            <a className="icon-container" title="<Flame />"><Flame /></a>
            <a className="icon-container" title="<FlashOffOutline />"><FlashOffOutline /></a>
            <a className="icon-container" title="<FlashOffSharp />"><FlashOffSharp /></a>
            <a className="icon-container" title="<FlashOff />"><FlashOff /></a>
            <a className="icon-container" title="<FlashOutline />"><FlashOutline /></a>
            <a className="icon-container" title="<FlashSharp />"><FlashSharp /></a>
            <a className="icon-container" title="<Flash />"><Flash /></a>
            <a className="icon-container" title="<FlashlightOutline />"><FlashlightOutline /></a>
            <a className="icon-container" title="<FlashlightSharp />"><FlashlightSharp /></a>
            <a className="icon-container" title="<Flashlight />"><Flashlight /></a>
            <a className="icon-container" title="<FlaskOutline />"><FlaskOutline /></a>
            <a className="icon-container" title="<FlaskSharp />"><FlaskSharp /></a>
            <a className="icon-container" title="<Flask />"><Flask /></a>
            <a className="icon-container" title="<FlowerOutline />"><FlowerOutline /></a>
            <a className="icon-container" title="<FlowerSharp />"><FlowerSharp /></a>
            <a className="icon-container" title="<Flower />"><Flower /></a>
            <a className="icon-container" title="<FolderOpenOutline />"><FolderOpenOutline /></a>
            <a className="icon-container" title="<FolderOpenSharp />"><FolderOpenSharp /></a>
            <a className="icon-container" title="<FolderOpen />"><FolderOpen /></a>
            <a className="icon-container" title="<FolderOutline />"><FolderOutline /></a>
            <a className="icon-container" title="<FolderSharp />"><FolderSharp /></a>
            <a className="icon-container" title="<Folder />"><Folder /></a>
            <a className="icon-container" title="<FootballOutline />"><FootballOutline /></a>
            <a className="icon-container" title="<FootballSharp />"><FootballSharp /></a>
            <a className="icon-container" title="<Football />"><Football /></a>
            <a className="icon-container" title="<FunnelOutline />"><FunnelOutline /></a>
            <a className="icon-container" title="<FunnelSharp />"><FunnelSharp /></a>
            <a className="icon-container" title="<Funnel />"><Funnel /></a>
            <a className="icon-container" title="<GameControllerOutline />"><GameControllerOutline /></a>
            <a className="icon-container" title="<GameControllerSharp />"><GameControllerSharp /></a>
            <a className="icon-container" title="<GameController />"><GameController /></a>
            <a className="icon-container" title="<GiftOutline />"><GiftOutline /></a>
            <a className="icon-container" title="<GiftSharp />"><GiftSharp /></a>
            <a className="icon-container" title="<Gift />"><Gift /></a>
            <a className="icon-container" title="<GitBranchOutline />"><GitBranchOutline /></a>
            <a className="icon-container" title="<GitBranchSharp />"><GitBranchSharp /></a>
            <a className="icon-container" title="<GitBranch />"><GitBranch /></a>
            <a className="icon-container" title="<GitCommitOutline />"><GitCommitOutline /></a>
            <a className="icon-container" title="<GitCommitSharp />"><GitCommitSharp /></a>
            <a className="icon-container" title="<GitCommit />"><GitCommit /></a>
            <a className="icon-container" title="<GitCompareOutline />"><GitCompareOutline /></a>
            <a className="icon-container" title="<GitCompareSharp />"><GitCompareSharp /></a>
            <a className="icon-container" title="<GitCompare />"><GitCompare /></a>
            <a className="icon-container" title="<GitMergeOutline />"><GitMergeOutline /></a>
            <a className="icon-container" title="<GitMergeSharp />"><GitMergeSharp /></a>
            <a className="icon-container" title="<GitMerge />"><GitMerge /></a>
            <a className="icon-container" title="<GitNetworkOutline />"><GitNetworkOutline /></a>
            <a className="icon-container" title="<GitNetworkSharp />"><GitNetworkSharp /></a>
            <a className="icon-container" title="<GitNetwork />"><GitNetwork /></a>
            <a className="icon-container" title="<GitPullRequestOutline />"><GitPullRequestOutline /></a>
            <a className="icon-container" title="<GitPullRequestSharp />"><GitPullRequestSharp /></a>
            <a className="icon-container" title="<GitPullRequest />"><GitPullRequest /></a>
            <a className="icon-container" title="<GlassesOutline />"><GlassesOutline /></a>
            <a className="icon-container" title="<GlassesSharp />"><GlassesSharp /></a>
            <a className="icon-container" title="<Glasses />"><Glasses /></a>
            <a className="icon-container" title="<GlobeOutline />"><GlobeOutline /></a>
            <a className="icon-container" title="<GlobeSharp />"><GlobeSharp /></a>
            <a className="icon-container" title="<Globe />"><Globe /></a>
            <a className="icon-container" title="<GolfOutline />"><GolfOutline /></a>
            <a className="icon-container" title="<GolfSharp />"><GolfSharp /></a>
            <a className="icon-container" title="<Golf />"><Golf /></a>
            <a className="icon-container" title="<GridOutline />"><GridOutline /></a>
            <a className="icon-container" title="<GridSharp />"><GridSharp /></a>
            <a className="icon-container" title="<Grid />"><Grid /></a>
            <a className="icon-container" title="<HammerOutline />"><HammerOutline /></a>
            <a className="icon-container" title="<HammerSharp />"><HammerSharp /></a>
            <a className="icon-container" title="<Hammer />"><Hammer /></a>
            <a className="icon-container" title="<HandLeftOutline />"><HandLeftOutline /></a>
            <a className="icon-container" title="<HandLeftSharp />"><HandLeftSharp /></a>
            <a className="icon-container" title="<HandLeft />"><HandLeft /></a>
            <a className="icon-container" title="<HandRightOutline />"><HandRightOutline /></a>
            <a className="icon-container" title="<HandRightSharp />"><HandRightSharp /></a>
            <a className="icon-container" title="<HandRight />"><HandRight /></a>
            <a className="icon-container" title="<HappyOutline />"><HappyOutline /></a>
            <a className="icon-container" title="<HappySharp />"><HappySharp /></a>
            <a className="icon-container" title="<Happy />"><Happy /></a>
            <a className="icon-container" title="<HardwareChipOutline />"><HardwareChipOutline /></a>
            <a className="icon-container" title="<HardwareChipSharp />"><HardwareChipSharp /></a>
            <a className="icon-container" title="<HardwareChip />"><HardwareChip /></a>
            <a className="icon-container" title="<HeadsetOutline />"><HeadsetOutline /></a>
            <a className="icon-container" title="<HeadsetSharp />"><HeadsetSharp /></a>
            <a className="icon-container" title="<Headset />"><Headset /></a>
            <a className="icon-container" title="<HeartCircleOutline />"><HeartCircleOutline /></a>
            <a className="icon-container" title="<HeartCircleSharp />"><HeartCircleSharp /></a>
            <a className="icon-container" title="<HeartCircle />"><HeartCircle /></a>
            <a className="icon-container" title="<HeartDislikeCircleOutline />"><HeartDislikeCircleOutline /></a>
            <a className="icon-container" title="<HeartDislikeCircleSharp />"><HeartDislikeCircleSharp /></a>
            <a className="icon-container" title="<HeartDislikeCircle />"><HeartDislikeCircle /></a>
            <a className="icon-container" title="<HeartDislikeOutline />"><HeartDislikeOutline /></a>
            <a className="icon-container" title="<HeartDislikeSharp />"><HeartDislikeSharp /></a>
            <a className="icon-container" title="<HeartDislike />"><HeartDislike /></a>
            <a className="icon-container" title="<HeartHalfOutline />"><HeartHalfOutline /></a>
            <a className="icon-container" title="<HeartHalfSharp />"><HeartHalfSharp /></a>
            <a className="icon-container" title="<HeartHalf />"><HeartHalf /></a>
            <a className="icon-container" title="<HeartOutline />"><HeartOutline /></a>
            <a className="icon-container" title="<HeartSharp />"><HeartSharp /></a>
            <a className="icon-container" title="<Heart />"><Heart /></a>
            <a className="icon-container" title="<HelpBuoyOutline />"><HelpBuoyOutline /></a>
            <a className="icon-container" title="<HelpBuoySharp />"><HelpBuoySharp /></a>
            <a className="icon-container" title="<HelpBuoy />"><HelpBuoy /></a>
            <a className="icon-container" title="<HelpCircleOutline />"><HelpCircleOutline /></a>
            <a className="icon-container" title="<HelpCircleSharp />"><HelpCircleSharp /></a>
            <a className="icon-container" title="<HelpCircle />"><HelpCircle /></a>
            <a className="icon-container" title="<HelpOutline />"><HelpOutline /></a>
            <a className="icon-container" title="<HelpSharp />"><HelpSharp /></a>
            <a className="icon-container" title="<Help />"><Help /></a>
            <a className="icon-container" title="<HomeOutline />"><HomeOutline /></a>
            <a className="icon-container" title="<HomeSharp />"><HomeSharp /></a>
            <a className="icon-container" title="<Home />"><Home /></a>
            <a className="icon-container" title="<HourglassOutline />"><HourglassOutline /></a>
            <a className="icon-container" title="<HourglassSharp />"><HourglassSharp /></a>
            <a className="icon-container" title="<Hourglass />"><Hourglass /></a>
            <a className="icon-container" title="<IceCreamOutline />"><IceCreamOutline /></a>
            <a className="icon-container" title="<IceCreamSharp />"><IceCreamSharp /></a>
            <a className="icon-container" title="<IceCream />"><IceCream /></a>
            <a className="icon-container" title="<ImageOutline />"><ImageOutline /></a>
            <a className="icon-container" title="<ImageSharp />"><ImageSharp /></a>
            <a className="icon-container" title="<Image />"><Image /></a>
            <a className="icon-container" title="<ImagesOutline />"><ImagesOutline /></a>
            <a className="icon-container" title="<ImagesSharp />"><ImagesSharp /></a>
            <a className="icon-container" title="<Images />"><Images /></a>
            <a className="icon-container" title="<InfiniteOutline />"><InfiniteOutline /></a>
            <a className="icon-container" title="<InfiniteSharp />"><InfiniteSharp /></a>
            <a className="icon-container" title="<Infinite />"><Infinite /></a>
            <a className="icon-container" title="<InformationCircleOutline />"><InformationCircleOutline /></a>
            <a className="icon-container" title="<InformationCircleSharp />"><InformationCircleSharp /></a>
            <a className="icon-container" title="<InformationCircle />"><InformationCircle /></a>
            <a className="icon-container" title="<InformationOutline />"><InformationOutline /></a>
            <a className="icon-container" title="<InformationSharp />"><InformationSharp /></a>
            <a className="icon-container" title="<Information />"><Information /></a>
            <a className="icon-container" title="<JournalOutline />"><JournalOutline /></a>
            <a className="icon-container" title="<JournalSharp />"><JournalSharp /></a>
            <a className="icon-container" title="<Journal />"><Journal /></a>
            <a className="icon-container" title="<KeyOutline />"><KeyOutline /></a>
            <a className="icon-container" title="<KeySharp />"><KeySharp /></a>
            <a className="icon-container" title="<Key />"><Key /></a>
            <a className="icon-container" title="<KeypadOutline />"><KeypadOutline /></a>
            <a className="icon-container" title="<KeypadSharp />"><KeypadSharp /></a>
            <a className="icon-container" title="<Keypad />"><Keypad /></a>
            <a className="icon-container" title="<LanguageOutline />"><LanguageOutline /></a>
            <a className="icon-container" title="<LanguageSharp />"><LanguageSharp /></a>
            <a className="icon-container" title="<Language />"><Language /></a>
            <a className="icon-container" title="<LaptopOutline />"><LaptopOutline /></a>
            <a className="icon-container" title="<LaptopSharp />"><LaptopSharp /></a>
            <a className="icon-container" title="<Laptop />"><Laptop /></a>
            <a className="icon-container" title="<LayersOutline />"><LayersOutline /></a>
            <a className="icon-container" title="<LayersSharp />"><LayersSharp /></a>
            <a className="icon-container" title="<Layers />"><Layers /></a>
            <a className="icon-container" title="<LeafOutline />"><LeafOutline /></a>
            <a className="icon-container" title="<LeafSharp />"><LeafSharp /></a>
            <a className="icon-container" title="<Leaf />"><Leaf /></a>
            <a className="icon-container" title="<LibraryOutline />"><LibraryOutline /></a>
            <a className="icon-container" title="<LibrarySharp />"><LibrarySharp /></a>
            <a className="icon-container" title="<Library />"><Library /></a>
            <a className="icon-container" title="<LinkOutline />"><LinkOutline /></a>
            <a className="icon-container" title="<LinkSharp />"><LinkSharp /></a>
            <a className="icon-container" title="<Link />"><Link /></a>
            <a className="icon-container" title="<ListCircleOutline />"><ListCircleOutline /></a>
            <a className="icon-container" title="<ListCircleSharp />"><ListCircleSharp /></a>
            <a className="icon-container" title="<ListCircle />"><ListCircle /></a>
            <a className="icon-container" title="<ListOutline />"><ListOutline /></a>
            <a className="icon-container" title="<ListSharp />"><ListSharp /></a>
            <a className="icon-container" title="<List />"><List /></a>
            <a className="icon-container" title="<LocateOutline />"><LocateOutline /></a>
            <a className="icon-container" title="<LocateSharp />"><LocateSharp /></a>
            <a className="icon-container" title="<Locate />"><Locate /></a>
            <a className="icon-container" title="<LocationOutline />"><LocationOutline /></a>
            <a className="icon-container" title="<LocationSharp />"><LocationSharp /></a>
            <a className="icon-container" title="<Location />"><Location /></a>
            <a className="icon-container" title="<LockClosedOutline />"><LockClosedOutline /></a>
            <a className="icon-container" title="<LockClosedSharp />"><LockClosedSharp /></a>
            <a className="icon-container" title="<LockClosed />"><LockClosed /></a>
            <a className="icon-container" title="<LockOpenOutline />"><LockOpenOutline /></a>
            <a className="icon-container" title="<LockOpenSharp />"><LockOpenSharp /></a>
            <a className="icon-container" title="<LockOpen />"><LockOpen /></a>
            <a className="icon-container" title="<LogInOutline />"><LogInOutline /></a>
            <a className="icon-container" title="<LogInSharp />"><LogInSharp /></a>
            <a className="icon-container" title="<LogIn />"><LogIn /></a>
            <a className="icon-container" title="<LogOutOutline />"><LogOutOutline /></a>
            <a className="icon-container" title="<LogOutSharp />"><LogOutSharp /></a>
            <a className="icon-container" title="<LogOut />"><LogOut /></a>
            <a className="icon-container" title="<LogoAmazon />"><LogoAmazon /></a>
            <a className="icon-container" title="<LogoAmplify />"><LogoAmplify /></a>
            <a className="icon-container" title="<LogoAndroid />"><LogoAndroid /></a>
            <a className="icon-container" title="<LogoAngular />"><LogoAngular /></a>
            <a className="icon-container" title="<LogoAppleAppstore />"><LogoAppleAppstore /></a>
            <a className="icon-container" title="<LogoApple />"><LogoApple /></a>
            <a className="icon-container" title="<LogoBitbucket />"><LogoBitbucket /></a>
            <a className="icon-container" title="<LogoBitcoin />"><LogoBitcoin /></a>
            <a className="icon-container" title="<LogoBuffer />"><LogoBuffer /></a>
            <a className="icon-container" title="<LogoCapacitor />"><LogoCapacitor /></a>
            <a className="icon-container" title="<LogoChrome />"><LogoChrome /></a>
            <a className="icon-container" title="<LogoClosedCaptioning />"><LogoClosedCaptioning /></a>
            <a className="icon-container" title="<LogoCodepen />"><LogoCodepen /></a>
            <a className="icon-container" title="<LogoCss3 />"><LogoCss3 /></a>
            <a className="icon-container" title="<LogoDesignernews />"><LogoDesignernews /></a>
            <a className="icon-container" title="<LogoDribbble />"><LogoDribbble /></a>
            <a className="icon-container" title="<LogoDropbox />"><LogoDropbox /></a>
            <a className="icon-container" title="<LogoEdge />"><LogoEdge /></a>
            <a className="icon-container" title="<LogoElectron />"><LogoElectron /></a>
            <a className="icon-container" title="<LogoEuro />"><LogoEuro /></a>
            <a className="icon-container" title="<LogoFacebook />"><LogoFacebook /></a>
            <a className="icon-container" title="<LogoFirebase />"><LogoFirebase /></a>
            <a className="icon-container" title="<LogoFirefox />"><LogoFirefox /></a>
            <a className="icon-container" title="<LogoFlickr />"><LogoFlickr /></a>
            <a className="icon-container" title="<LogoFoursquare />"><LogoFoursquare /></a>
            <a className="icon-container" title="<LogoGithub />"><LogoGithub /></a>
            <a className="icon-container" title="<LogoGooglePlaystore />"><LogoGooglePlaystore /></a>
            <a className="icon-container" title="<LogoGoogle />"><LogoGoogle /></a>
            <a className="icon-container" title="<LogoHackernews />"><LogoHackernews /></a>
            <a className="icon-container" title="<LogoHtml5 />"><LogoHtml5 /></a>
            <a className="icon-container" title="<LogoInstagram />"><LogoInstagram /></a>
            <a className="icon-container" title="<LogoIonic />"><LogoIonic /></a>
            <a className="icon-container" title="<LogoIonitron />"><LogoIonitron /></a>
            <a className="icon-container" title="<LogoJavascript />"><LogoJavascript /></a>
            <a className="icon-container" title="<LogoLaravel />"><LogoLaravel /></a>
            <a className="icon-container" title="<LogoLinkedin />"><LogoLinkedin /></a>
            <a className="icon-container" title="<LogoMarkdown />"><LogoMarkdown /></a>
            <a className="icon-container" title="<LogoNoSmoking />"><LogoNoSmoking /></a>
            <a className="icon-container" title="<LogoNodejs />"><LogoNodejs /></a>
            <a className="icon-container" title="<LogoNpm />"><LogoNpm /></a>
            <a className="icon-container" title="<LogoOctocat />"><LogoOctocat /></a>
            <a className="icon-container" title="<LogoPinterest />"><LogoPinterest /></a>
            <a className="icon-container" title="<LogoPlaystation />"><LogoPlaystation /></a>
            <a className="icon-container" title="<LogoPwa />"><LogoPwa /></a>
            <a className="icon-container" title="<LogoPython />"><LogoPython /></a>
            <a className="icon-container" title="<LogoReact />"><LogoReact /></a>
            <a className="icon-container" title="<LogoReddit />"><LogoReddit /></a>
            <a className="icon-container" title="<LogoRss />"><LogoRss /></a>
            <a className="icon-container" title="<LogoSass />"><LogoSass /></a>
            <a className="icon-container" title="<LogoSkype />"><LogoSkype /></a>
            <a className="icon-container" title="<LogoSlack />"><LogoSlack /></a>
            <a className="icon-container" title="<LogoSnapchat />"><LogoSnapchat /></a>
            <a className="icon-container" title="<LogoStackoverflow />"><LogoStackoverflow /></a>
            <a className="icon-container" title="<LogoSteam />"><LogoSteam /></a>
            <a className="icon-container" title="<LogoStencil />"><LogoStencil /></a>
            <a className="icon-container" title="<LogoTumblr />"><LogoTumblr /></a>
            <a className="icon-container" title="<LogoTux />"><LogoTux /></a>
            <a className="icon-container" title="<LogoTwitch />"><LogoTwitch /></a>
            <a className="icon-container" title="<LogoTwitter />"><LogoTwitter /></a>
            <a className="icon-container" title="<LogoUsd />"><LogoUsd /></a>
            <a className="icon-container" title="<LogoVimeo />"><LogoVimeo /></a>
            <a className="icon-container" title="<LogoVk />"><LogoVk /></a>
            <a className="icon-container" title="<LogoVue />"><LogoVue /></a>
            <a className="icon-container" title="<LogoWebComponent />"><LogoWebComponent /></a>
            <a className="icon-container" title="<LogoWhatsapp />"><LogoWhatsapp /></a>
            <a className="icon-container" title="<LogoWindows />"><LogoWindows /></a>
            <a className="icon-container" title="<LogoWordpress />"><LogoWordpress /></a>
            <a className="icon-container" title="<LogoXbox />"><LogoXbox /></a>
            <a className="icon-container" title="<LogoXing />"><LogoXing /></a>
            <a className="icon-container" title="<LogoYahoo />"><LogoYahoo /></a>
            <a className="icon-container" title="<LogoYen />"><LogoYen /></a>
            <a className="icon-container" title="<LogoYoutube />"><LogoYoutube /></a>
            <a className="icon-container" title="<MagnetOutline />"><MagnetOutline /></a>
            <a className="icon-container" title="<MagnetSharp />"><MagnetSharp /></a>
            <a className="icon-container" title="<Magnet />"><Magnet /></a>
            <a className="icon-container" title="<MailOpenOutline />"><MailOpenOutline /></a>
            <a className="icon-container" title="<MailOpenSharp />"><MailOpenSharp /></a>
            <a className="icon-container" title="<MailOpen />"><MailOpen /></a>
            <a className="icon-container" title="<MailOutline />"><MailOutline /></a>
            <a className="icon-container" title="<MailSharp />"><MailSharp /></a>
            <a className="icon-container" title="<MailUnreadOutline />"><MailUnreadOutline /></a>
            <a className="icon-container" title="<MailUnreadSharp />"><MailUnreadSharp /></a>
            <a className="icon-container" title="<MailUnread />"><MailUnread /></a>
            <a className="icon-container" title="<Mail />"><Mail /></a>
            <a className="icon-container" title="<MaleFemaleOutline />"><MaleFemaleOutline /></a>
            <a className="icon-container" title="<MaleFemaleSharp />"><MaleFemaleSharp /></a>
            <a className="icon-container" title="<MaleFemale />"><MaleFemale /></a>
            <a className="icon-container" title="<MaleOutline />"><MaleOutline /></a>
            <a className="icon-container" title="<MaleSharp />"><MaleSharp /></a>
            <a className="icon-container" title="<Male />"><Male /></a>
            <a className="icon-container" title="<ManOutline />"><ManOutline /></a>
            <a className="icon-container" title="<ManSharp />"><ManSharp /></a>
            <a className="icon-container" title="<Man />"><Man /></a>
            <a className="icon-container" title="<MapOutline />"><MapOutline /></a>
            <a className="icon-container" title="<MapSharp />"><MapSharp /></a>
            <a className="icon-container" title="<Map />"><Map /></a>
            <a className="icon-container" title="<MedalOutline />"><MedalOutline /></a>
            <a className="icon-container" title="<MedalSharp />"><MedalSharp /></a>
            <a className="icon-container" title="<Medal />"><Medal /></a>
            <a className="icon-container" title="<MedicalOutline />"><MedicalOutline /></a>
            <a className="icon-container" title="<MedicalSharp />"><MedicalSharp /></a>
            <a className="icon-container" title="<Medical />"><Medical /></a>
            <a className="icon-container" title="<MedkitOutline />"><MedkitOutline /></a>
            <a className="icon-container" title="<MedkitSharp />"><MedkitSharp /></a>
            <a className="icon-container" title="<Medkit />"><Medkit /></a>
            <a className="icon-container" title="<MegaphoneOutline />"><MegaphoneOutline /></a>
            <a className="icon-container" title="<MegaphoneSharp />"><MegaphoneSharp /></a>
            <a className="icon-container" title="<Megaphone />"><Megaphone /></a>
            <a className="icon-container" title="<MenuOutline />"><MenuOutline /></a>
            <a className="icon-container" title="<MenuSharp />"><MenuSharp /></a>
            <a className="icon-container" title="<Menu />"><Menu /></a>
            <a className="icon-container" title="<MicCircleOutline />"><MicCircleOutline /></a>
            <a className="icon-container" title="<MicCircleSharp />"><MicCircleSharp /></a>
            <a className="icon-container" title="<MicCircle />"><MicCircle /></a>
            <a className="icon-container" title="<MicOffCircleOutline />"><MicOffCircleOutline /></a>
            <a className="icon-container" title="<MicOffCircleSharp />"><MicOffCircleSharp /></a>
            <a className="icon-container" title="<MicOffCircle />"><MicOffCircle /></a>
            <a className="icon-container" title="<MicOffOutline />"><MicOffOutline /></a>
            <a className="icon-container" title="<MicOffSharp />"><MicOffSharp /></a>
            <a className="icon-container" title="<MicOff />"><MicOff /></a>
            <a className="icon-container" title="<MicOutline />"><MicOutline /></a>
            <a className="icon-container" title="<MicSharp />"><MicSharp /></a>
            <a className="icon-container" title="<Mic />"><Mic /></a>
            <a className="icon-container" title="<MoonOutline />"><MoonOutline /></a>
            <a className="icon-container" title="<MoonSharp />"><MoonSharp /></a>
            <a className="icon-container" title="<Moon />"><Moon /></a>
            <a className="icon-container" title="<MoveOutline />"><MoveOutline /></a>
            <a className="icon-container" title="<MoveSharp />"><MoveSharp /></a>
            <a className="icon-container" title="<Move />"><Move /></a>
            <a className="icon-container" title="<MusicalNoteOutline />"><MusicalNoteOutline /></a>
            <a className="icon-container" title="<MusicalNoteSharp />"><MusicalNoteSharp /></a>
            <a className="icon-container" title="<MusicalNote />"><MusicalNote /></a>
            <a className="icon-container" title="<MusicalNotesOutline />"><MusicalNotesOutline /></a>
            <a className="icon-container" title="<MusicalNotesSharp />"><MusicalNotesSharp /></a>
            <a className="icon-container" title="<MusicalNotes />"><MusicalNotes /></a>
            <a className="icon-container" title="<NavigateCircleOutline />"><NavigateCircleOutline /></a>
            <a className="icon-container" title="<NavigateCircleSharp />"><NavigateCircleSharp /></a>
            <a className="icon-container" title="<NavigateCircle />"><NavigateCircle /></a>
            <a className="icon-container" title="<NavigateOutline />"><NavigateOutline /></a>
            <a className="icon-container" title="<NavigateSharp />"><NavigateSharp /></a>
            <a className="icon-container" title="<Navigate />"><Navigate /></a>
            <a className="icon-container" title="<NewspaperOutline />"><NewspaperOutline /></a>
            <a className="icon-container" title="<NewspaperSharp />"><NewspaperSharp /></a>
            <a className="icon-container" title="<Newspaper />"><Newspaper /></a>
            <a className="icon-container" title="<NotificationsCircleOutline />"><NotificationsCircleOutline /></a>
            <a className="icon-container" title="<NotificationsCircleSharp />"><NotificationsCircleSharp /></a>
            <a className="icon-container" title="<NotificationsCircle />"><NotificationsCircle /></a>
            <a className="icon-container" title="<NotificationsOffCircleOutline />"><NotificationsOffCircleOutline /></a>
            <a className="icon-container" title="<NotificationsOffCircleSharp />"><NotificationsOffCircleSharp /></a>
            <a className="icon-container" title="<NotificationsOffCircle />"><NotificationsOffCircle /></a>
            <a className="icon-container" title="<NotificationsOffOutline />"><NotificationsOffOutline /></a>
            <a className="icon-container" title="<NotificationsOffSharp />"><NotificationsOffSharp /></a>
            <a className="icon-container" title="<NotificationsOff />"><NotificationsOff /></a>
            <a className="icon-container" title="<NotificationsOutline />"><NotificationsOutline /></a>
            <a className="icon-container" title="<NotificationsSharp />"><NotificationsSharp /></a>
            <a className="icon-container" title="<Notifications />"><Notifications /></a>
            <a className="icon-container" title="<NuclearOutline />"><NuclearOutline /></a>
            <a className="icon-container" title="<NuclearSharp />"><NuclearSharp /></a>
            <a className="icon-container" title="<Nuclear />"><Nuclear /></a>
            <a className="icon-container" title="<NutritionOutline />"><NutritionOutline /></a>
            <a className="icon-container" title="<NutritionSharp />"><NutritionSharp /></a>
            <a className="icon-container" title="<Nutrition />"><Nutrition /></a>
            <a className="icon-container" title="<OpenOutline />"><OpenOutline /></a>
            <a className="icon-container" title="<OpenSharp />"><OpenSharp /></a>
            <a className="icon-container" title="<Open />"><Open /></a>
            <a className="icon-container" title="<OptionsOutline />"><OptionsOutline /></a>
            <a className="icon-container" title="<OptionsSharp />"><OptionsSharp /></a>
            <a className="icon-container" title="<Options />"><Options /></a>
            <a className="icon-container" title="<PaperPlaneOutline />"><PaperPlaneOutline /></a>
            <a className="icon-container" title="<PaperPlaneSharp />"><PaperPlaneSharp /></a>
            <a className="icon-container" title="<PaperPlane />"><PaperPlane /></a>
            <a className="icon-container" title="<PartlySunnyOutline />"><PartlySunnyOutline /></a>
            <a className="icon-container" title="<PartlySunnySharp />"><PartlySunnySharp /></a>
            <a className="icon-container" title="<PartlySunny />"><PartlySunny /></a>
            <a className="icon-container" title="<PauseCircleOutline />"><PauseCircleOutline /></a>
            <a className="icon-container" title="<PauseCircleSharp />"><PauseCircleSharp /></a>
            <a className="icon-container" title="<PauseCircle />"><PauseCircle /></a>
            <a className="icon-container" title="<PauseOutline />"><PauseOutline /></a>
            <a className="icon-container" title="<PauseSharp />"><PauseSharp /></a>
            <a className="icon-container" title="<Pause />"><Pause /></a>
            <a className="icon-container" title="<PawOutline />"><PawOutline /></a>
            <a className="icon-container" title="<PawSharp />"><PawSharp /></a>
            <a className="icon-container" title="<Paw />"><Paw /></a>
            <a className="icon-container" title="<PencilOutline />"><PencilOutline /></a>
            <a className="icon-container" title="<PencilSharp />"><PencilSharp /></a>
            <a className="icon-container" title="<Pencil />"><Pencil /></a>
            <a className="icon-container" title="<PeopleCircleOutline />"><PeopleCircleOutline /></a>
            <a className="icon-container" title="<PeopleCircleSharp />"><PeopleCircleSharp /></a>
            <a className="icon-container" title="<PeopleCircle />"><PeopleCircle /></a>
            <a className="icon-container" title="<PeopleOutline />"><PeopleOutline /></a>
            <a className="icon-container" title="<PeopleSharp />"><PeopleSharp /></a>
            <a className="icon-container" title="<People />"><People /></a>
            <a className="icon-container" title="<PersonAddOutline />"><PersonAddOutline /></a>
            <a className="icon-container" title="<PersonAddSharp />"><PersonAddSharp /></a>
            <a className="icon-container" title="<PersonAdd />"><PersonAdd /></a>
            <a className="icon-container" title="<PersonCircleOutline />"><PersonCircleOutline /></a>
            <a className="icon-container" title="<PersonCircleSharp />"><PersonCircleSharp /></a>
            <a className="icon-container" title="<PersonCircle />"><PersonCircle /></a>
            <a className="icon-container" title="<PersonOutline />"><PersonOutline /></a>
            <a className="icon-container" title="<PersonRemoveOutline />"><PersonRemoveOutline /></a>
            <a className="icon-container" title="<PersonRemoveSharp />"><PersonRemoveSharp /></a>
            <a className="icon-container" title="<PersonRemove />"><PersonRemove /></a>
            <a className="icon-container" title="<PersonSharp />"><PersonSharp /></a>
            <a className="icon-container" title="<Person />"><Person /></a>
            <a className="icon-container" title="<PhoneLandscapeOutline />"><PhoneLandscapeOutline /></a>
            <a className="icon-container" title="<PhoneLandscapeSharp />"><PhoneLandscapeSharp /></a>
            <a className="icon-container" title="<PhoneLandscape />"><PhoneLandscape /></a>
            <a className="icon-container" title="<PhonePortraitOutline />"><PhonePortraitOutline /></a>
            <a className="icon-container" title="<PhonePortraitSharp />"><PhonePortraitSharp /></a>
            <a className="icon-container" title="<PhonePortrait />"><PhonePortrait /></a>
            <a className="icon-container" title="<PieChartOutline />"><PieChartOutline /></a>
            <a className="icon-container" title="<PieChartSharp />"><PieChartSharp /></a>
            <a className="icon-container" title="<PieChart />"><PieChart /></a>
            <a className="icon-container" title="<PinOutline />"><PinOutline /></a>
            <a className="icon-container" title="<PinSharp />"><PinSharp /></a>
            <a className="icon-container" title="<Pin />"><Pin /></a>
            <a className="icon-container" title="<PintOutline />"><PintOutline /></a>
            <a className="icon-container" title="<PintSharp />"><PintSharp /></a>
            <a className="icon-container" title="<Pint />"><Pint /></a>
            <a className="icon-container" title="<PizzaOutline />"><PizzaOutline /></a>
            <a className="icon-container" title="<PizzaSharp />"><PizzaSharp /></a>
            <a className="icon-container" title="<Pizza />"><Pizza /></a>
            <a className="icon-container" title="<PlanetOutline />"><PlanetOutline /></a>
            <a className="icon-container" title="<PlanetSharp />"><PlanetSharp /></a>
            <a className="icon-container" title="<Planet />"><Planet /></a>
            <a className="icon-container" title="<PlayBackCircleOutline />"><PlayBackCircleOutline /></a>
            <a className="icon-container" title="<PlayBackCircleSharp />"><PlayBackCircleSharp /></a>
            <a className="icon-container" title="<PlayBackCircle />"><PlayBackCircle /></a>
            <a className="icon-container" title="<PlayBackOutline />"><PlayBackOutline /></a>
            <a className="icon-container" title="<PlayBackSharp />"><PlayBackSharp /></a>
            <a className="icon-container" title="<PlayBack />"><PlayBack /></a>
            <a className="icon-container" title="<PlayCircleOutline />"><PlayCircleOutline /></a>
            <a className="icon-container" title="<PlayCircleSharp />"><PlayCircleSharp /></a>
            <a className="icon-container" title="<PlayCircle />"><PlayCircle /></a>
            <a className="icon-container" title="<PlayForwardCircleOutline />"><PlayForwardCircleOutline /></a>
            <a className="icon-container" title="<PlayForwardCircleSharp />"><PlayForwardCircleSharp /></a>
            <a className="icon-container" title="<PlayForwardCircle />"><PlayForwardCircle /></a>
            <a className="icon-container" title="<PlayForwardOutline />"><PlayForwardOutline /></a>
            <a className="icon-container" title="<PlayForwardSharp />"><PlayForwardSharp /></a>
            <a className="icon-container" title="<PlayForward />"><PlayForward /></a>
            <a className="icon-container" title="<PlayOutline />"><PlayOutline /></a>
            <a className="icon-container" title="<PlaySharp />"><PlaySharp /></a>
            <a className="icon-container" title="<PlaySkipBackCircleOutline />"><PlaySkipBackCircleOutline /></a>
            <a className="icon-container" title="<PlaySkipBackCircleSharp />"><PlaySkipBackCircleSharp /></a>
            <a className="icon-container" title="<PlaySkipBackCircle />"><PlaySkipBackCircle /></a>
            <a className="icon-container" title="<PlaySkipBackOutline />"><PlaySkipBackOutline /></a>
            <a className="icon-container" title="<PlaySkipBackSharp />"><PlaySkipBackSharp /></a>
            <a className="icon-container" title="<PlaySkipBack />"><PlaySkipBack /></a>
            <a className="icon-container" title="<PlaySkipForwardCircleOutline />"><PlaySkipForwardCircleOutline /></a>
            <a className="icon-container" title="<PlaySkipForwardCircleSharp />"><PlaySkipForwardCircleSharp /></a>
            <a className="icon-container" title="<PlaySkipForwardCircle />"><PlaySkipForwardCircle /></a>
            <a className="icon-container" title="<PlaySkipForwardOutline />"><PlaySkipForwardOutline /></a>
            <a className="icon-container" title="<PlaySkipForwardSharp />"><PlaySkipForwardSharp /></a>
            <a className="icon-container" title="<PlaySkipForward />"><PlaySkipForward /></a>
            <a className="icon-container" title="<Play />"><Play /></a>
            <a className="icon-container" title="<PodiumOutline />"><PodiumOutline /></a>
            <a className="icon-container" title="<PodiumSharp />"><PodiumSharp /></a>
            <a className="icon-container" title="<Podium />"><Podium /></a>
            <a className="icon-container" title="<PowerOutline />"><PowerOutline /></a>
            <a className="icon-container" title="<PowerSharp />"><PowerSharp /></a>
            <a className="icon-container" title="<Power />"><Power /></a>
            <a className="icon-container" title="<PricetagOutline />"><PricetagOutline /></a>
            <a className="icon-container" title="<PricetagSharp />"><PricetagSharp /></a>
            <a className="icon-container" title="<Pricetag />"><Pricetag /></a>
            <a className="icon-container" title="<PricetagsOutline />"><PricetagsOutline /></a>
            <a className="icon-container" title="<PricetagsSharp />"><PricetagsSharp /></a>
            <a className="icon-container" title="<Pricetags />"><Pricetags /></a>
            <a className="icon-container" title="<PrintOutline />"><PrintOutline /></a>
            <a className="icon-container" title="<PrintSharp />"><PrintSharp /></a>
            <a className="icon-container" title="<Print />"><Print /></a>
            <a className="icon-container" title="<PulseOutline />"><PulseOutline /></a>
            <a className="icon-container" title="<PulseSharp />"><PulseSharp /></a>
            <a className="icon-container" title="<Pulse />"><Pulse /></a>
            <a className="icon-container" title="<PushOutline />"><PushOutline /></a>
            <a className="icon-container" title="<PushSharp />"><PushSharp /></a>
            <a className="icon-container" title="<Push />"><Push /></a>
            <a className="icon-container" title="<QrCodeOutline />"><QrCodeOutline /></a>
            <a className="icon-container" title="<QrCodeSharp />"><QrCodeSharp /></a>
            <a className="icon-container" title="<QrCode />"><QrCode /></a>
            <a className="icon-container" title="<RadioButtonOffOutline />"><RadioButtonOffOutline /></a>
            <a className="icon-container" title="<RadioButtonOffSharp />"><RadioButtonOffSharp /></a>
            <a className="icon-container" title="<RadioButtonOff />"><RadioButtonOff /></a>
            <a className="icon-container" title="<RadioButtonOnOutline />"><RadioButtonOnOutline /></a>
            <a className="icon-container" title="<RadioButtonOnSharp />"><RadioButtonOnSharp /></a>
            <a className="icon-container" title="<RadioButtonOn />"><RadioButtonOn /></a>
            <a className="icon-container" title="<RadioOutline />"><RadioOutline /></a>
            <a className="icon-container" title="<RadioSharp />"><RadioSharp /></a>
            <a className="icon-container" title="<Radio />"><Radio /></a>
            <a className="icon-container" title="<RainyOutline />"><RainyOutline /></a>
            <a className="icon-container" title="<RainySharp />"><RainySharp /></a>
            <a className="icon-container" title="<Rainy />"><Rainy /></a>
            <a className="icon-container" title="<ReaderOutline />"><ReaderOutline /></a>
            <a className="icon-container" title="<ReaderSharp />"><ReaderSharp /></a>
            <a className="icon-container" title="<Reader />"><Reader /></a>
            <a className="icon-container" title="<ReceiptOutline />"><ReceiptOutline /></a>
            <a className="icon-container" title="<ReceiptSharp />"><ReceiptSharp /></a>
            <a className="icon-container" title="<Receipt />"><Receipt /></a>
            <a className="icon-container" title="<RecordingOutline />"><RecordingOutline /></a>
            <a className="icon-container" title="<RecordingSharp />"><RecordingSharp /></a>
            <a className="icon-container" title="<Recording />"><Recording /></a>
            <a className="icon-container" title="<RefreshCircleOutline />"><RefreshCircleOutline /></a>
            <a className="icon-container" title="<RefreshCircleSharp />"><RefreshCircleSharp /></a>
            <a className="icon-container" title="<RefreshCircle />"><RefreshCircle /></a>
            <a className="icon-container" title="<RefreshOutline />"><RefreshOutline /></a>
            <a className="icon-container" title="<RefreshSharp />"><RefreshSharp /></a>
            <a className="icon-container" title="<Refresh />"><Refresh /></a>
            <a className="icon-container" title="<ReloadCircleOutline />"><ReloadCircleOutline /></a>
            <a className="icon-container" title="<ReloadCircleSharp />"><ReloadCircleSharp /></a>
            <a className="icon-container" title="<ReloadCircle />"><ReloadCircle /></a>
            <a className="icon-container" title="<ReloadOutline />"><ReloadOutline /></a>
            <a className="icon-container" title="<ReloadSharp />"><ReloadSharp /></a>
            <a className="icon-container" title="<Reload />"><Reload /></a>
            <a className="icon-container" title="<RemoveCircleOutline />"><RemoveCircleOutline /></a>
            <a className="icon-container" title="<RemoveCircleSharp />"><RemoveCircleSharp /></a>
            <a className="icon-container" title="<RemoveCircle />"><RemoveCircle /></a>
            <a className="icon-container" title="<RemoveOutline />"><RemoveOutline /></a>
            <a className="icon-container" title="<RemoveSharp />"><RemoveSharp /></a>
            <a className="icon-container" title="<Remove />"><Remove /></a>
            <a className="icon-container" title="<ReorderFourOutline />"><ReorderFourOutline /></a>
            <a className="icon-container" title="<ReorderFourSharp />"><ReorderFourSharp /></a>
            <a className="icon-container" title="<ReorderFour />"><ReorderFour /></a>
            <a className="icon-container" title="<ReorderThreeOutline />"><ReorderThreeOutline /></a>
            <a className="icon-container" title="<ReorderThreeSharp />"><ReorderThreeSharp /></a>
            <a className="icon-container" title="<ReorderThree />"><ReorderThree /></a>
            <a className="icon-container" title="<ReorderTwoOutline />"><ReorderTwoOutline /></a>
            <a className="icon-container" title="<ReorderTwoSharp />"><ReorderTwoSharp /></a>
            <a className="icon-container" title="<ReorderTwo />"><ReorderTwo /></a>
            <a className="icon-container" title="<RepeatOutline />"><RepeatOutline /></a>
            <a className="icon-container" title="<RepeatSharp />"><RepeatSharp /></a>
            <a className="icon-container" title="<Repeat />"><Repeat /></a>
            <a className="icon-container" title="<ResizeOutline />"><ResizeOutline /></a>
            <a className="icon-container" title="<ResizeSharp />"><ResizeSharp /></a>
            <a className="icon-container" title="<Resize />"><Resize /></a>
            <a className="icon-container" title="<RestaurantOutline />"><RestaurantOutline /></a>
            <a className="icon-container" title="<RestaurantSharp />"><RestaurantSharp /></a>
            <a className="icon-container" title="<Restaurant />"><Restaurant /></a>
            <a className="icon-container" title="<ReturnDownBackOutline />"><ReturnDownBackOutline /></a>
            <a className="icon-container" title="<ReturnDownBackSharp />"><ReturnDownBackSharp /></a>
            <a className="icon-container" title="<ReturnDownBack />"><ReturnDownBack /></a>
            <a className="icon-container" title="<ReturnDownForwardOutline />"><ReturnDownForwardOutline /></a>
            <a className="icon-container" title="<ReturnDownForwardSharp />"><ReturnDownForwardSharp /></a>
            <a className="icon-container" title="<ReturnDownForward />"><ReturnDownForward /></a>
            <a className="icon-container" title="<ReturnUpBackOutline />"><ReturnUpBackOutline /></a>
            <a className="icon-container" title="<ReturnUpBackSharp />"><ReturnUpBackSharp /></a>
            <a className="icon-container" title="<ReturnUpBack />"><ReturnUpBack /></a>
            <a className="icon-container" title="<ReturnUpForwardOutline />"><ReturnUpForwardOutline /></a>
            <a className="icon-container" title="<ReturnUpForwardSharp />"><ReturnUpForwardSharp /></a>
            <a className="icon-container" title="<ReturnUpForward />"><ReturnUpForward /></a>
            <a className="icon-container" title="<RibbonOutline />"><RibbonOutline /></a>
            <a className="icon-container" title="<RibbonSharp />"><RibbonSharp /></a>
            <a className="icon-container" title="<Ribbon />"><Ribbon /></a>
            <a className="icon-container" title="<RocketOutline />"><RocketOutline /></a>
            <a className="icon-container" title="<RocketSharp />"><RocketSharp /></a>
            <a className="icon-container" title="<Rocket />"><Rocket /></a>
            <a className="icon-container" title="<RoseOutline />"><RoseOutline /></a>
            <a className="icon-container" title="<RoseSharp />"><RoseSharp /></a>
            <a className="icon-container" title="<Rose />"><Rose /></a>
            <a className="icon-container" title="<SadOutline />"><SadOutline /></a>
            <a className="icon-container" title="<SadSharp />"><SadSharp /></a>
            <a className="icon-container" title="<Sad />"><Sad /></a>
            <a className="icon-container" title="<SaveOutline />"><SaveOutline /></a>
            <a className="icon-container" title="<SaveSharp />"><SaveSharp /></a>
            <a className="icon-container" title="<Save />"><Save /></a>
            <a className="icon-container" title="<ScanCircleOutline />"><ScanCircleOutline /></a>
            <a className="icon-container" title="<ScanCircleSharp />"><ScanCircleSharp /></a>
            <a className="icon-container" title="<ScanCircle />"><ScanCircle /></a>
            <a className="icon-container" title="<ScanOutline />"><ScanOutline /></a>
            <a className="icon-container" title="<ScanSharp />"><ScanSharp /></a>
            <a className="icon-container" title="<Scan />"><Scan /></a>
            <a className="icon-container" title="<SchoolOutline />"><SchoolOutline /></a>
            <a className="icon-container" title="<SchoolSharp />"><SchoolSharp /></a>
            <a className="icon-container" title="<School />"><School /></a>
            <a className="icon-container" title="<SearchCircleOutline />"><SearchCircleOutline /></a>
            <a className="icon-container" title="<SearchCircleSharp />"><SearchCircleSharp /></a>
            <a className="icon-container" title="<SearchCircle />"><SearchCircle /></a>
            <a className="icon-container" title="<SearchOutline />"><SearchOutline /></a>
            <a className="icon-container" title="<SearchSharp />"><SearchSharp /></a>
            <a className="icon-container" title="<Search />"><Search /></a>
            <a className="icon-container" title="<SendOutline />"><SendOutline /></a>
            <a className="icon-container" title="<SendSharp />"><SendSharp /></a>
            <a className="icon-container" title="<Send />"><Send /></a>
            <a className="icon-container" title="<ServerOutline />"><ServerOutline /></a>
            <a className="icon-container" title="<ServerSharp />"><ServerSharp /></a>
            <a className="icon-container" title="<Server />"><Server /></a>
            <a className="icon-container" title="<SettingsOutline />"><SettingsOutline /></a>
            <a className="icon-container" title="<SettingsSharp />"><SettingsSharp /></a>
            <a className="icon-container" title="<Settings />"><Settings /></a>
            <a className="icon-container" title="<ShapesOutline />"><ShapesOutline /></a>
            <a className="icon-container" title="<ShapesSharp />"><ShapesSharp /></a>
            <a className="icon-container" title="<Shapes />"><Shapes /></a>
            <a className="icon-container" title="<ShareOutline />"><ShareOutline /></a>
            <a className="icon-container" title="<ShareSharp />"><ShareSharp /></a>
            <a className="icon-container" title="<ShareSocialOutline />"><ShareSocialOutline /></a>
            <a className="icon-container" title="<ShareSocialSharp />"><ShareSocialSharp /></a>
            <a className="icon-container" title="<ShareSocial />"><ShareSocial /></a>
            <a className="icon-container" title="<Share />"><Share /></a>
            <a className="icon-container" title="<ShieldCheckmarkOutline />"><ShieldCheckmarkOutline /></a>
            <a className="icon-container" title="<ShieldCheckmarkSharp />"><ShieldCheckmarkSharp /></a>
            <a className="icon-container" title="<ShieldCheckmark />"><ShieldCheckmark /></a>
            <a className="icon-container" title="<ShieldOutline />"><ShieldOutline /></a>
            <a className="icon-container" title="<ShieldSharp />"><ShieldSharp /></a>
            <a className="icon-container" title="<Shield />"><Shield /></a>
            <a className="icon-container" title="<ShirtOutline />"><ShirtOutline /></a>
            <a className="icon-container" title="<ShirtSharp />"><ShirtSharp /></a>
            <a className="icon-container" title="<Shirt />"><Shirt /></a>
            <a className="icon-container" title="<ShuffleOutline />"><ShuffleOutline /></a>
            <a className="icon-container" title="<ShuffleSharp />"><ShuffleSharp /></a>
            <a className="icon-container" title="<Shuffle />"><Shuffle /></a>
            <a className="icon-container" title="<SkullOutline />"><SkullOutline /></a>
            <a className="icon-container" title="<SkullSharp />"><SkullSharp /></a>
            <a className="icon-container" title="<Skull />"><Skull /></a>
            <a className="icon-container" title="<SnowOutline />"><SnowOutline /></a>
            <a className="icon-container" title="<SnowSharp />"><SnowSharp /></a>
            <a className="icon-container" title="<Snow />"><Snow /></a>
            <a className="icon-container" title="<SpeedometerOutline />"><SpeedometerOutline /></a>
            <a className="icon-container" title="<SpeedometerSharp />"><SpeedometerSharp /></a>
            <a className="icon-container" title="<Speedometer />"><Speedometer /></a>
            <a className="icon-container" title="<SquareOutline />"><SquareOutline /></a>
            <a className="icon-container" title="<SquareSharp />"><SquareSharp /></a>
            <a className="icon-container" title="<Square />"><Square /></a>
            <a className="icon-container" title="<StarHalfOutline />"><StarHalfOutline /></a>
            <a className="icon-container" title="<StarHalfSharp />"><StarHalfSharp /></a>
            <a className="icon-container" title="<StarHalf />"><StarHalf /></a>
            <a className="icon-container" title="<StarOutline />"><StarOutline /></a>
            <a className="icon-container" title="<StarSharp />"><StarSharp /></a>
            <a className="icon-container" title="<Star />"><Star /></a>
            <a className="icon-container" title="<StatsChartOutline />"><StatsChartOutline /></a>
            <a className="icon-container" title="<StatsChartSharp />"><StatsChartSharp /></a>
            <a className="icon-container" title="<StatsChart />"><StatsChart /></a>
            <a className="icon-container" title="<StopCircleOutline />"><StopCircleOutline /></a>
            <a className="icon-container" title="<StopCircleSharp />"><StopCircleSharp /></a>
            <a className="icon-container" title="<StopCircle />"><StopCircle /></a>
            <a className="icon-container" title="<StopOutline />"><StopOutline /></a>
            <a className="icon-container" title="<StopSharp />"><StopSharp /></a>
            <a className="icon-container" title="<Stop />"><Stop /></a>
            <a className="icon-container" title="<StopwatchOutline />"><StopwatchOutline /></a>
            <a className="icon-container" title="<StopwatchSharp />"><StopwatchSharp /></a>
            <a className="icon-container" title="<Stopwatch />"><Stopwatch /></a>
            <a className="icon-container" title="<SubwayOutline />"><SubwayOutline /></a>
            <a className="icon-container" title="<SubwaySharp />"><SubwaySharp /></a>
            <a className="icon-container" title="<Subway />"><Subway /></a>
            <a className="icon-container" title="<SunnyOutline />"><SunnyOutline /></a>
            <a className="icon-container" title="<SunnySharp />"><SunnySharp /></a>
            <a className="icon-container" title="<Sunny />"><Sunny /></a>
            <a className="icon-container" title="<SwapHorizontalOutline />"><SwapHorizontalOutline /></a>
            <a className="icon-container" title="<SwapHorizontalSharp />"><SwapHorizontalSharp /></a>
            <a className="icon-container" title="<SwapHorizontal />"><SwapHorizontal /></a>
            <a className="icon-container" title="<SwapVerticalOutline />"><SwapVerticalOutline /></a>
            <a className="icon-container" title="<SwapVerticalSharp />"><SwapVerticalSharp /></a>
            <a className="icon-container" title="<SwapVertical />"><SwapVertical /></a>
            <a className="icon-container" title="<SyncCircleOutline />"><SyncCircleOutline /></a>
            <a className="icon-container" title="<SyncCircleSharp />"><SyncCircleSharp /></a>
            <a className="icon-container" title="<SyncCircle />"><SyncCircle /></a>
            <a className="icon-container" title="<SyncOutline />"><SyncOutline /></a>
            <a className="icon-container" title="<SyncSharp />"><SyncSharp /></a>
            <a className="icon-container" title="<Sync />"><Sync /></a>
            <a className="icon-container" title="<TabletLandscapeOutline />"><TabletLandscapeOutline /></a>
            <a className="icon-container" title="<TabletLandscapeSharp />"><TabletLandscapeSharp /></a>
            <a className="icon-container" title="<TabletLandscape />"><TabletLandscape /></a>
            <a className="icon-container" title="<TabletPortraitOutline />"><TabletPortraitOutline /></a>
            <a className="icon-container" title="<TabletPortraitSharp />"><TabletPortraitSharp /></a>
            <a className="icon-container" title="<TabletPortrait />"><TabletPortrait /></a>
            <a className="icon-container" title="<TennisballOutline />"><TennisballOutline /></a>
            <a className="icon-container" title="<TennisballSharp />"><TennisballSharp /></a>
            <a className="icon-container" title="<Tennisball />"><Tennisball /></a>
            <a className="icon-container" title="<TerminalOutline />"><TerminalOutline /></a>
            <a className="icon-container" title="<TerminalSharp />"><TerminalSharp /></a>
            <a className="icon-container" title="<Terminal />"><Terminal /></a>
            <a className="icon-container" title="<TextOutline />"><TextOutline /></a>
            <a className="icon-container" title="<TextSharp />"><TextSharp /></a>
            <a className="icon-container" title="<Text />"><Text /></a>
            <a className="icon-container" title="<ThermometerOutline />"><ThermometerOutline /></a>
            <a className="icon-container" title="<ThermometerSharp />"><ThermometerSharp /></a>
            <a className="icon-container" title="<Thermometer />"><Thermometer /></a>
            <a className="icon-container" title="<ThumbsDownOutline />"><ThumbsDownOutline /></a>
            <a className="icon-container" title="<ThumbsDownSharp />"><ThumbsDownSharp /></a>
            <a className="icon-container" title="<ThumbsDown />"><ThumbsDown /></a>
            <a className="icon-container" title="<ThumbsUpOutline />"><ThumbsUpOutline /></a>
            <a className="icon-container" title="<ThumbsUpSharp />"><ThumbsUpSharp /></a>
            <a className="icon-container" title="<ThumbsUp />"><ThumbsUp /></a>
            <a className="icon-container" title="<ThunderstormOutline />"><ThunderstormOutline /></a>
            <a className="icon-container" title="<ThunderstormSharp />"><ThunderstormSharp /></a>
            <a className="icon-container" title="<Thunderstorm />"><Thunderstorm /></a>
            <a className="icon-container" title="<TimeOutline />"><TimeOutline /></a>
            <a className="icon-container" title="<TimeSharp />"><TimeSharp /></a>
            <a className="icon-container" title="<Time />"><Time /></a>
            <a className="icon-container" title="<TimerOutline />"><TimerOutline /></a>
            <a className="icon-container" title="<TimerSharp />"><TimerSharp /></a>
            <a className="icon-container" title="<Timer />"><Timer /></a>
            <a className="icon-container" title="<TodayOutline />"><TodayOutline /></a>
            <a className="icon-container" title="<TodaySharp />"><TodaySharp /></a>
            <a className="icon-container" title="<Today />"><Today /></a>
            <a className="icon-container" title="<ToggleOutline />"><ToggleOutline /></a>
            <a className="icon-container" title="<ToggleSharp />"><ToggleSharp /></a>
            <a className="icon-container" title="<Toggle />"><Toggle /></a>
            <a className="icon-container" title="<TrailSignOutline />"><TrailSignOutline /></a>
            <a className="icon-container" title="<TrailSignSharp />"><TrailSignSharp /></a>
            <a className="icon-container" title="<TrailSign />"><TrailSign /></a>
            <a className="icon-container" title="<TrainOutline />"><TrainOutline /></a>
            <a className="icon-container" title="<TrainSharp />"><TrainSharp /></a>
            <a className="icon-container" title="<Train />"><Train /></a>
            <a className="icon-container" title="<TransgenderOutline />"><TransgenderOutline /></a>
            <a className="icon-container" title="<TransgenderSharp />"><TransgenderSharp /></a>
            <a className="icon-container" title="<Transgender />"><Transgender /></a>
            <a className="icon-container" title="<TrashBinOutline />"><TrashBinOutline /></a>
            <a className="icon-container" title="<TrashBinSharp />"><TrashBinSharp /></a>
            <a className="icon-container" title="<TrashBin />"><TrashBin /></a>
            <a className="icon-container" title="<TrashOutline />"><TrashOutline /></a>
            <a className="icon-container" title="<TrashSharp />"><TrashSharp /></a>
            <a className="icon-container" title="<Trash />"><Trash /></a>
            <a className="icon-container" title="<TrendingDownOutline />"><TrendingDownOutline /></a>
            <a className="icon-container" title="<TrendingDownSharp />"><TrendingDownSharp /></a>
            <a className="icon-container" title="<TrendingDown />"><TrendingDown /></a>
            <a className="icon-container" title="<TrendingUpOutline />"><TrendingUpOutline /></a>
            <a className="icon-container" title="<TrendingUpSharp />"><TrendingUpSharp /></a>
            <a className="icon-container" title="<TrendingUp />"><TrendingUp /></a>
            <a className="icon-container" title="<TriangleOutline />"><TriangleOutline /></a>
            <a className="icon-container" title="<TriangleSharp />"><TriangleSharp /></a>
            <a className="icon-container" title="<Triangle />"><Triangle /></a>
            <a className="icon-container" title="<TrophyOutline />"><TrophyOutline /></a>
            <a className="icon-container" title="<TrophySharp />"><TrophySharp /></a>
            <a className="icon-container" title="<Trophy />"><Trophy /></a>
            <a className="icon-container" title="<TvOutline />"><TvOutline /></a>
            <a className="icon-container" title="<TvSharp />"><TvSharp /></a>
            <a className="icon-container" title="<Tv />"><Tv /></a>
            <a className="icon-container" title="<UmbrellaOutline />"><UmbrellaOutline /></a>
            <a className="icon-container" title="<UmbrellaSharp />"><UmbrellaSharp /></a>
            <a className="icon-container" title="<Umbrella />"><Umbrella /></a>
            <a className="icon-container" title="<VideocamOutline />"><VideocamOutline /></a>
            <a className="icon-container" title="<VideocamSharp />"><VideocamSharp /></a>
            <a className="icon-container" title="<Videocam />"><Videocam /></a>
            <a className="icon-container" title="<VolumeHighOutline />"><VolumeHighOutline /></a>
            <a className="icon-container" title="<VolumeHighSharp />"><VolumeHighSharp /></a>
            <a className="icon-container" title="<VolumeHigh />"><VolumeHigh /></a>
            <a className="icon-container" title="<VolumeLowOutline />"><VolumeLowOutline /></a>
            <a className="icon-container" title="<VolumeLowSharp />"><VolumeLowSharp /></a>
            <a className="icon-container" title="<VolumeLow />"><VolumeLow /></a>
            <a className="icon-container" title="<VolumeMediumOutline />"><VolumeMediumOutline /></a>
            <a className="icon-container" title="<VolumeMediumSharp />"><VolumeMediumSharp /></a>
            <a className="icon-container" title="<VolumeMedium />"><VolumeMedium /></a>
            <a className="icon-container" title="<VolumeMuteOutline />"><VolumeMuteOutline /></a>
            <a className="icon-container" title="<VolumeMuteSharp />"><VolumeMuteSharp /></a>
            <a className="icon-container" title="<VolumeMute />"><VolumeMute /></a>
            <a className="icon-container" title="<VolumeOffOutline />"><VolumeOffOutline /></a>
            <a className="icon-container" title="<VolumeOffSharp />"><VolumeOffSharp /></a>
            <a className="icon-container" title="<VolumeOff />"><VolumeOff /></a>
            <a className="icon-container" title="<WalkOutline />"><WalkOutline /></a>
            <a className="icon-container" title="<WalkSharp />"><WalkSharp /></a>
            <a className="icon-container" title="<Walk />"><Walk /></a>
            <a className="icon-container" title="<WalletOutline />"><WalletOutline /></a>
            <a className="icon-container" title="<WalletSharp />"><WalletSharp /></a>
            <a className="icon-container" title="<Wallet />"><Wallet /></a>
            <a className="icon-container" title="<WarningOutline />"><WarningOutline /></a>
            <a className="icon-container" title="<WarningSharp />"><WarningSharp /></a>
            <a className="icon-container" title="<Warning />"><Warning /></a>
            <a className="icon-container" title="<WatchOutline />"><WatchOutline /></a>
            <a className="icon-container" title="<WatchSharp />"><WatchSharp /></a>
            <a className="icon-container" title="<Watch />"><Watch /></a>
            <a className="icon-container" title="<WaterOutline />"><WaterOutline /></a>
            <a className="icon-container" title="<WaterSharp />"><WaterSharp /></a>
            <a className="icon-container" title="<Water />"><Water /></a>
            <a className="icon-container" title="<WifiOutline />"><WifiOutline /></a>
            <a className="icon-container" title="<WifiSharp />"><WifiSharp /></a>
            <a className="icon-container" title="<Wifi />"><Wifi /></a>
            <a className="icon-container" title="<WineOutline />"><WineOutline /></a>
            <a className="icon-container" title="<WineSharp />"><WineSharp /></a>
            <a className="icon-container" title="<Wine />"><Wine /></a>
            <a className="icon-container" title="<WomanOutline />"><WomanOutline /></a>
            <a className="icon-container" title="<WomanSharp />"><WomanSharp /></a>
            <a className="icon-container" title="<Woman />"><Woman /></a>
        </div>
    }
}

let root = document.getElementById("app");

ReactDOM.render(<App />, root);
