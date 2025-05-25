'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"flutter_bootstrap.js": "2682cd4d3bb5c0653fdab2c6badafb6f",
"version.json": "be1ee0506b23a7c2a6f54e19181b6d0a",
"favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"index.html": "eb936bba07ece36d12ed2ecea148b00f",
"/": "eb936bba07ece36d12ed2ecea148b00f",
"apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"CNAME": "b6e84f69d70e95265b73a11c9428f38d",
"main.dart.js": "8e3773aca43d8b8a5b6b0cb5cc8909c8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"README.md": "ff79713314808b5a254272d7820c5d85",
"favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"icons/Icon-192.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"icons/Icon-maskable-192.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"icons/Icon-maskable-512.png": "36b20785aec13f898f21370d408be4bc",
"icons/Icon-512.png": "36b20785aec13f898f21370d408be4bc",
"manifest.json": "4ea07cbc0e769b3e340fafb72e104860",
".git/ORIG_HEAD": "ac2827ec0aded2e9a59ebab76131bb81",
".git/config": "6086072c6fa8f15179420d6c3f4a2c9a",
".git/objects/59/33140f9be7a1ac5de50e930fe68bed3e0292b3": "e868a02730f5db44fa165bdc6ffdba41",
".git/objects/59/3db4aa3b1d9e8fb2b95a1b7bfe8beb8748883c": "1b87059f2972f63b9605dcc8909e1776",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/900ac4cfc48c0c7dab99dd079d269c8320dcd3": "9f78b6c84227a7fd626ec32359efb390",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/937dd407029cf11edf907cb68b20e8b22451e2": "004bfb4f49d1fd9ecf36d4f5c07b861b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/8fab49f063de991a7fe1bb9e641bdf9954e123": "c534dc1c5120b8bc8434ec521253db07",
".git/objects/51/cfb380e9f26d1bbc0b6951049e26d076006275": "e600af0a13a9e53fe974aec21fcfe809",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/94/67fc5b4f4555ed93fd4ca9adba4d60b1dc036d": "403565dc68daee910ab74962a502df89",
".git/objects/0e/4aad3f58ea546277b73c9660adc1a03b02c544": "dac9006383bfc137044caf40a932d41d",
".git/objects/34/65a4c8e9865bbe84b8a570bace659653649413": "7188a9017e9008e4e55ad4a42067e93b",
".git/objects/9c/29a4f9cab241f9bc05075608021465bfd61a1c": "1071e5ee9b1fe981c9e892f16879b460",
".git/objects/a4/454bb3af3b738710317491252207174f198b84": "4ba38be6c4c676d83860df4ecc9334c0",
".git/objects/d9/e8320e42b9bfe99321e729917a9ce85ff92422": "88f97b652a2988e74d24a36590a94600",
".git/objects/ac/03e47af03bda0682663839c0ea0aa75605cfe8": "eadc628a7197bbeb2f59e7654f7c2f2c",
".git/objects/ac/a4c469342760f6ad6bf60dd1fc590adfd6babf": "e76cc2d7228819eb8f460d0b27c7b705",
".git/objects/bb/138a4ec00aecd72b6c910149b6e6325e81b6d8": "2ab5d15069b8d64cfb4494842b549f47",
".git/objects/d7/bb02efe750ab629a79042a8b1a982fe5d5cb31": "07d96d22e59ab62e1346140ba4b61190",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/ba67316dbdf36430c9687e801812de68be3866": "7ecd10cecae1fe4934795931526b0298",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/feea42a354cd98d57a69bbcb664559129da824": "01825cea630d70144464461448c9f8eb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a5cb2e14dd69efd207e94cd9005928bfb4fb95": "832baf0e4d0194508130ee654018c200",
".git/objects/bc/78cb57e2ae7c5ca31491d1de6d4220d7ce7e48": "9101007acab76857d92166f436979442",
".git/objects/ae/fc3f18c446fbdee1dd89dadba2069ecc533663": "89525a06ce192b8deaf05bdc0110026f",
".git/objects/d8/da21b68903f06558e7e2afc1d36dc1c888389f": "3a94e214eacc22f5df03dfd469d1ace0",
".git/objects/d8/1d366453d211afef8b32c2aee5d79f6fccf698": "7774c503335d368bb6eb5a908e8912a2",
".git/objects/e2/3fea400b9c1c1d5a7f84f8b1bc5eb1461202ea": "7a3c248972b378f351b67d7f6f0d7183",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/de4092cf1821a0236c17f75ebeb7c5a60fa36f": "7e28c7151b63a059130cc411c39c8799",
".git/objects/ee/22a4718f0e9470826c7877610608e4a27f5d3a": "7bd11219fb59e546ebecc02c67567b4d",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ae345d8930703ea928017e55d70bca66fb5764": "6a44401f1aa5e605d69f4ae39e220bc5",
".git/objects/f5/8ea53c8b3dab620192a41c7d96769ff114df7d": "e7dc6d43ce01670f7c4058bbfe8087b3",
".git/objects/e4/89d5106d2dffe52c93f51eb0b9b9b6602c9525": "53fab45bdaaac51b5607fd86a8d54c68",
".git/objects/fb/499a7762d7250aabd165f89f9a7c008ff394ad": "bc7c114eee2faa860a0111b8ece4864a",
".git/objects/fb/a16771ae8349a3d59981035f6091c8807861ac": "5854fb3d3283aeb3c73875ae532c27ed",
".git/objects/ed/142c6e2d6344cb0415ae68049639ea781616cc": "da836885b96c78c8c737fbeb06e400fa",
".git/objects/c1/e3ee9386c026913eb5a7c980fcff6a8c185ab4": "dc02d73d5a712832f073f97db244b0c8",
".git/objects/c6/65094e9c368081268820c1c69c1f6ce2f9adcf": "08736939fd9bbffd3e967b1747012a6b",
".git/objects/c6/7fed878907ab45e58d0f357f1e9107bf66582d": "aa71d5a7715cbd4b77f15220b40dbdfd",
".git/objects/ec/9147eb50161a83f53229821788b5337ebaff91": "f863a15c949615b588eee47381497144",
".git/objects/4e/5e63ebe1cc3fe7f8a6ab4d2ea88c164153709b": "38d260f7d2034091a16a3daf06758fe8",
".git/objects/20/c2ae7f63b2f0e27eb7823b672d2e103980c2da": "bd806a18fa2d54c40d3077b6a9252021",
".git/objects/27/64b679ebfa0b7a1eaf1ca716dbe3bf28d73871": "520a00e5a5f588dca14a0a6f4c91ecdb",
".git/objects/4b/d5efc47c11b5de55cf1b286322875b67f0e9a0": "8d3e75abb21d9519d332947478d9dacd",
".git/objects/42/8befdcee56b927be1378c3b8ad144e8a409a10": "9eb6118280c6901f4e3e3b762d13e840",
".git/objects/42/a4bf4b1bd81d7ca4982a20aacc7cf39e8988b8": "1c8c1b60d0be16daabd5e82e0c2e86a2",
".git/objects/45/215945294537e07dbb54700d5ab6157d08881c": "3a2f733eed86bf6865122d97838ea612",
".git/objects/45/7c284379fad98f5055db49c43ff43147bb564f": "4b2fbf42ae9066ed0077cab5f5defdf3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/f769f2db9444da262ddb6a637fcb1bf14e1382": "e6ef37c5b6e0e0d427776ee765e1b167",
".git/objects/87/964d9ce3209ff93b7ac380b811b51991bea745": "34d41774a8c18e966053a284a29981e1",
".git/objects/1a/bc9c1165544c16524639be6e96f02401804692": "6a3c1eb572c36aac671cc017cc1f9e83",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/533f87f64d88d9d7ee85a8ae6c0646be6c873b": "4d645006c073704d5911eb25fc103055",
".git/objects/26/bb253fee19fe357c321f47177cb6ae913e749f": "cc60f1491e6b3f9ff8054b8b80795961",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/21/885e04de4415299a50fc95f0b5ad305d3fbc1b": "6bd3e17450beea5e42986b969c2c1079",
".git/objects/4d/38068e61a35ae3f29e1d7e236a721a1ef110ce": "994d00f9213cf6d9d65a0755780cd46f",
".git/objects/86/260ebb7672b2637dac9e77cf8545b1c572bb42": "4d8c81d6f40e44dc80397e064afcf65f",
".git/objects/72/4eea6528a4597f651135ef6c395c9fcd9b7af5": "0aaa3a25e6674466c1e0fde6ba4b9c1b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/1c76b3a548ca885e6ada8a5ee8d429829bd190": "8570f3df5ceb7b1096dc8731704298e8",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f9a88ee6a432fa06ebdc82146c0390510f524a": "049cfd875adbdb7296699547ed6ccda7",
".git/objects/9f/04272733e36d2011e0bc78d544a062267417d5": "0af30058e5b527748c8cf2fb32130b3a",
".git/objects/9f/64e814f2571287d64ab25cf5c5b1dee58e1ad3": "2ed4de06cf0ba9894f427e1c4bef3312",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/e7e349038dd3958da58e46d41b30a380187664": "28db3b4d9698a9ed14af987d6d9c5a15",
".git/objects/6e/a26ad5ac066f0a36f2f12f9f0b3258e5551579": "6aa89ea19cd311ca9c4c7a21163e7df7",
".git/objects/9a/05af0d0b968f9c0570875489444abc7fdd9044": "7c1a8e5d5a1168132db128bd2fb9f4b4",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/09/8949ba7e9042ad6e6dcc6bf3c9f002b153f531": "b5f8bce4b201683469a0fdc7b0b3bbd9",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/62/e31cd693ccf00703298f20707851a5dc0959db": "f093bee8a260966347ce0fc307d58cbe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/29a737ba35caf01c5443d2aa2caa2ce1fb69e5": "7f5a88819d43df9cca1c75e0cca63504",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/137c41809af44703fa2fd672c726d99010bd7c": "7db5b440ad5ac401ea646b7bc70a5f83",
".git/objects/30/7530840b9a6c1d2c34cb07b4da14d898c85774": "caff228a8c0b5de231eba517f837cc48",
".git/objects/5e/0e68e0f7a4c61576e6c30352b4e53eee7978b1": "ea901e909fe1cb6f0dee5013cc86c840",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/27a7863841026d78e1af8c764b1495bf2726c3": "a05a81fbf29f15aa19f1565c7089c42a",
".git/objects/55/a80a513510e0e8488d2d8cde86dc5cd3d24dcb": "88951de314d0e329f49aed225be87851",
".git/objects/63/5a95e83597fbfd038d70a5d6448ee9efb5b697": "7d3dd3bb6314d969429a4bc495dc21c5",
".git/objects/0f/53e07c3ef17c157cd4ee7990bd34ca44082f5a": "f57481142c8796021be9dafe9111d754",
".git/objects/0a/55674ddd12fbfb6e4a828aebdf62f374bf4d06": "ae24b5bb30063d7c554bd565b4726dfa",
".git/objects/64/070b3d38afc269f0ff85d92ec1616d361ad818": "c5cdde8c74d8e7d26c4efc1df47efa3b",
".git/objects/64/1749bc17111bb0b1bc663a1a41381959b87ece": "ca5f6109521615ad747dcbbefcdebcd6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e27d13cd77abf68eed9c5953e24ad281dc9890": "fb64703ec63edaff140926e818512384",
".git/objects/ba/c99546c072ea8740947d04ae30216ff495925b": "0c24218322cae9469754626e34b28d69",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/06b1412425166f3e820062e127821f5324b52a": "936c432b654d55819c13a60580a108d2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/c2a1af34e54640c32cc6ce41dd5a5259ad137c": "8947b186a5d9d995706be6373de5dbb2",
".git/objects/b6/2da926b5fe198ccb26ce90783b977bc5bc2f95": "1386559f2993a19f43415371c473a65d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9a47a78b6a4eda8e2a9d88982e7cd1f88f9f3": "25e1ab17a8c68fe302b974ba230d8862",
".git/objects/db/8a1616e3df070a6d241f0bcf107a518fccd205": "50a8b41b14db2a94feca19ae64b650fc",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/de/929b200a300148066bc84f81b6c6966dc88764": "699ed991c790e08bb1f9b37fd4ca5fd2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/e1/68d8801d31f6f7646d6cc26d689a0f30ceecfa": "19854a42d0080a4c744255d3329a3680",
".git/objects/f9/8330440d9eecc7a6abb46524bcdcd320bdba50": "c5a9bf61f461022fabc865b8fc622dd1",
".git/objects/f0/c04c9319e7e94dc65289bb727ad866d6f49cc5": "1bbb7bf02cf307ca7cdd88b497cc2f73",
".git/objects/ff/8f96b9c3739df825284eed13f8bf6042c7c961": "331a28a63f157044c2541bef5ffce735",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9f4f05e4fcea16c02cc4d49b450d8c96c84203": "7b13b3a6c03ab24e81180f3e97e9e146",
".git/objects/2c/33852391daebe5b9cb7c3d769a79f41fe76174": "c465758f6f20286e98685d207b003a57",
".git/objects/41/d4d994c3e1af20b186cc769a1d7a1d98d4929e": "473a48689626b20d5f1b4616b721e2af",
".git/objects/83/85bea4b120eee20ef828a672115f6149959960": "93aa9bcf3e428b9189671e9e71a56d15",
".git/objects/77/a706d5d1e524127762258d64b226547e3a8153": "4e511461a4e294d2d4c934cd23cfa68a",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/e45711e4c946e4d6117b750e1ccd7b5ad29c90": "4cd600939ef36292fd4720359cf5888b",
".git/objects/23/d6d7a939a86a45131427145f1d4a290c79fafc": "968891c92def7d5f562a5952f8eeb6e1",
".git/objects/8c/f96a63b7380c113462adb73ff441834f52af76": "a436da5a6728cfe396223f282afa229a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/55d43bc7a33df150a2e7579077e97ef2a24a19": "0e464f68694025e32e1d75d8b7c3a7cd",
".git/objects/1d/ad3a35289591cfbb5d9c13adc764bfefbcbf4f": "8a162cf1f6e823f2d9db42db0d342415",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/2e/7b82c7ec1e8fef48b28058948beeae7fee5f33": "13e55713590d85f8239058264ee508ca",
".git/objects/2e/ab986a3f86bebc0e02a156d89d8c532c8d3026": "cb121310fa4f398655a5a80fdf0ca20a",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/b8e4156966357c83000bf720797f876409e3b4": "d7a608e06d6f2202d0b0fef4867d889a",
".git/objects/78/b471ef47344a638295fa942e12edc04001aa00": "82e60edf262cc7b634000179b0072b6b",
".git/objects/8b/125dd7f5fae448029d2bc9dd10805b4799926a": "13683412939b894aba17b00ce5eb8ce0",
".git/objects/7f/bbd1598129b92e4c06493682100b546d3cad26": "a3c7face0f768d05f4511d427af63cd1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb0514e1037f671a113489e2eb3a9b91",
".git/logs/refs/heads/main": "8413bda51a6a9452002959d9f91fb588",
".git/logs/refs/remotes/origin/HEAD": "c92eff80adb953b0bd49cfd0e180d236",
".git/logs/refs/remotes/origin/main": "baa81584341b1fd6d848809318c1a45e",
".git/logs/refs/stash": "a99cbad41d3d57278e70b0593699d2e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3a40d15e88358bb80e84655f81b8b0f0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3a40d15e88358bb80e84655f81b8b0f0",
".git/refs/stash": "10e5157b374e3c7b53978c98bc905e6e",
".git/index": "66dfaa5a871e0a6688d1b87320852355",
".git/COMMIT_EDITMSG": "43546a59813b5b1fc1336f5465d5820f",
".git/FETCH_HEAD": "9a7bf9e4b9115570b2dcdff49b6751b7",
"assets/AssetManifest.json": "38f0a6798ec5f1ff09a84ee81b7f0adf",
"assets/NOTICES": "df2b0d50c73dde22f7970f33e101ac22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0fdb46fbf4c841190abe96b07c58f461",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "58b2f39fc2ec7dfcf16dcd8e83e5a738",
"assets/fonts/MaterialIcons-Regular.otf": "aeb1434462f3947343d21c93bd3e5776",
"assets/assets/images/favicon-16x16.png": "66ec57ab1ec4802e3fdae3dfecf89be3",
"assets/assets/images/favicon.ico": "f3b092fc05e49f362641fe2ec06877a4",
"assets/assets/images/apple-touch-icon.png": "a9bf783aeeaad5e5214d2b8fed9dc949",
"assets/assets/images/favicon.png": "cd24758046fb73821a6971d5e4c7bfc3",
"assets/assets/images/logo.png": "6ecc05d5b5d2fab3b45b7e5bc13bb89b",
"assets/assets/images/favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"favicon-32x32.png": "36b20785aec13f898f21370d408be4bc",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
