# 涓汉浣滃搧闆嗙綉绔?
涓€涓娇鐢℉TML銆丆SS銆丣avaScript鏋勫缓鐨凙I瑙嗛鍒涗綔鑰呬釜浜轰綔鍝侀泦缃戠珯銆?
## 鍔熻兘鐗圭偣

- 馃帹 鐜颁唬鍝嶅簲寮忚璁★紝鏀寔绉诲姩绔拰妗岄潰绔?- 馃幀 AI瑙嗛鐢熸垚鍔熻兘锛堥泦鎴愬厤璐笰PI锛?- 馃搧 浣滃搧闆嗗睍绀猴紝鏀寔鍒嗙被绛涢€?- 馃懁 涓汉浠嬬粛鍜屾妧鑳藉睍绀?- 馃攳 SEO浼樺寲锛屾敮鎸佹悳绱㈠紩鎿庢敹褰?- 馃殌 闈欐€佺綉绔欙紝鍙儴缃插埌GitHub Pages

## 缃戠珯缁撴瀯

```
鈹溾攢鈹€ index.html          # 棣栭〉
鈹溾攢鈹€ portfolio.html      # 浣滃搧闆嗛〉闈?鈹溾攢鈹€ about.html          # 鍏充簬鎴戦〉闈?鈹溾攢鈹€ css/
鈹?  鈹斺攢鈹€ style.css       # 鏍峰紡琛?鈹溾攢鈹€ js/
鈹?  鈹溾攢鈹€ main.js         # 涓昏JavaScript鍔熻兘
鈹?  鈹斺攢鈹€ video-generator.js  # AI瑙嗛鐢熸垚鍣?鈹溾攢鈹€ images/             # 鍥剧墖璧勬簮
鈹溾攢鈹€ videos/             # 瑙嗛璧勬簮
鈹溾攢鈹€ robots.txt          # 鎼滅储寮曟搸鐖櫕閰嶇疆
鈹溾攢鈹€ sitemap.xml         # 缃戠珯鍦板浘
鈹斺攢鈹€ README.md           # 椤圭洰璇存槑
```

## 鏈湴杩愯

1. 鍏嬮殕椤圭洰鍒版湰鍦帮細
```bash
git clone https://github.com/Michael-4753/portfolio.git
cd portfolio
```

2. 浣跨敤鏈湴鏈嶅姟鍣ㄨ繍琛岋紙鎺ㄨ崘锛夛細
```bash
# 浣跨敤Python
python -m http.server 8000

# 鎴栦娇鐢∟ode.js
npx http-server

# 鎴栦娇鐢≒HP
php -S localhost:8000
```

3. 鍦ㄦ祻瑙堝櫒涓闂細`http://localhost:8000`

## 閮ㄧ讲鍒癎itHub Pages

### 姝ラ1锛氬垱寤篏itHub浠撳簱
1. 鐧诲綍GitHub锛屽垱寤烘柊浠撳簱
2. 浠撳簱鍚嶇О寤鸿锛歚yourusername.github.io`锛堢敤浜庝富缃戠珯锛夋垨 `portfolio`锛堢敤浜庨」鐩綉绔欙級

### 姝ラ2锛氫笂浼犱唬鐮?```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Michael-4753/portfolio.git
git push -u origin main
```

### 姝ラ3锛氬惎鐢℅itHub Pages
1. 杩涘叆浠撳簱鐨凷ettings椤甸潰
2. 鎵惧埌Pages閫夐」
3. Source閫夋嫨锛欴eploy from a branch
4. Branch閫夋嫨锛歮ain / (root)
5. 鐐瑰嚮Save

### 姝ラ4锛氳闂綉绔?- 涓荤綉绔欙細`https://michael-4753.github.io/portfolio/`

## 鑷畾涔夐厤缃?
### 鏇存柊涓汉淇℃伅
1. 淇敼HTML鏂囦欢涓殑涓汉淇℃伅锛?   - 閭鍦板潃
   - GitHub閾炬帴
   - Bilibili閾炬帴
   - 涓汉绠€浠?
2. 鏇存柊SEO鍏冩爣绛撅細
   - 鍦ㄦ瘡涓狧TML鏂囦欢鐨刞<head>`閮ㄥ垎鏇存柊`og:url`鍜宍twitter:url`
   - 灏哷yourusername.github.io`鏇挎崲涓轰綘鐨勫疄闄呭煙鍚?
### 娣诲姞鐪熷疄浣滃搧
1. 灏嗚棰戞枃浠舵斁鍏videos/`鐩綍
2. 灏嗗浘鐗囨枃浠舵斁鍏images/`鐩綍
3. 鍦℉TML鏂囦欢涓洿鏂板搴旂殑`src`灞炴€?
### 闆嗘垚鐪熷疄AI瑙嗛API
鍦╜js/video-generator.js`鏂囦欢涓紝鍙栨秷娉ㄩ噴骞堕厤缃互涓婣PI涔嬩竴锛?
1. **Seedance API**锛堝浗鍐呭彲鐢紝姣忔棩鍏嶈垂绉垎锛?2. **娴疯灪AI API**锛堝浗鍐呭彲鐢紝鍏嶈垂鏃犳按鍗帮級
3. **Magic Hour API**锛堝浗闄呭彲鐢紝鏈夊厤璐归搴︼級

鑾峰彇API瀵嗛挜鍚庯紝灏哷apiKey`鏇挎崲涓轰綘鐨勫疄闄呭瘑閽ャ€?
## 鎶€鏈爤

- HTML5
- CSS3锛團lexbox銆丟rid锛?- JavaScript锛圗S6+锛?- 鍝嶅簲寮忚璁?- SEO浼樺寲

## 娴忚鍣ㄦ敮鎸?
- Chrome (鏈€鏂扮増)
- Firefox (鏈€鏂扮増)
- Safari (鏈€鏂扮増)
- Edge (鏈€鏂扮増)

## 璁稿彲璇?
MIT License - 鍙嚜鐢变娇鐢ㄥ拰淇敼

## 鑱旂郴鏂瑰紡

濡傛湁闂鎴栧缓璁紝璇烽€氳繃浠ヤ笅鏂瑰紡鑱旂郴锛?- GitHub锛歡ithub.com/Michael-4753