const chapters=[
  {
    "id": "measurement",
    "part": "數學與力學",
    "title": "測量、向量與數學語言",
    "en": "Measurement & Vectors",
    "goals": [
      "分辨測量不確定度與有效位數",
      "用分量、內積與量綱檢查物理模型"
    ],
    "sections": [
      [
        "測量是一個有範圍的敘述",
        "物理量必須同時給出數值與單位。不確定度描述測量結果的合理分散程度，不等於操作錯誤，也不能在未說明統計模型時直接當成信賴區間。計算過程保留額外位數，最後才依資料精度取位。"
      ],
      [
        "向量把方向寫進方程",
        "選定直角座標後，向量的分量帶正負號；大小則非負。相同幾何向量在旋轉後的座標系中有不同分量。內積量度兩向量沿彼此方向的投影，因此功使用內積；叉積的方向由右手定則決定，因此力矩需要叉積。"
      ],
      [
        "量綱與不確定度傳遞",
        "等式兩側必須具有相同量綱，但量綱正確並不足以證明公式正確。對獨立、小幅隨機不確定度，可將一階泰勒展開後的變異數相加；若有相關性，必須加入共變異數項。"
      ]
    ],
    "eq": "\\mathbf A=A_x\\hat{\\mathbf i}+A_y\\hat{\\mathbf j},\\quad \\mathbf A\\cdot\\mathbf B=AB\\cos\\theta",
    "assume": "歐幾里得空間、正交單位基底。不確定度公式另要求局部線性化有效。",
    "steps": [
      [
        "將函數在測量值附近展開。",
        "df\\simeq \\sum_i\\frac{\\partial f}{\\partial x_i}dx_i"
      ],
      [
        "獨立測量的交叉共變異數為零。",
        "\\sigma_f^2\\simeq\\sum_i\\left(\\frac{\\partial f}{\\partial x_i}\\right)^2\\sigma_i^2"
      ],
      [
        "以面積 A=LW 為例，除以面積平方得到相對形式。",
        "\\left(\\frac{\\sigma_A}{A}\\right)^2\\simeq\\left(\\frac{\\sigma_L}{L}\\right)^2+\\left(\\frac{\\sigma_W}{W}\\right)^2"
      ]
    ],
    "example": "A rectangle has independent measurements L=(2.00±0.01) m and W=(3.00±0.02) m. Estimate its area and standard uncertainty.",
    "solution": [
      "建立模型 A=LW，中心值為 6.00 m²。",
      "σA=√[(WσL)²+(LσW)²]=√(0.03²+0.04²)=0.05 m²。",
      "結果為 (6.00±0.05) m²；這個合成方式依賴兩筆測量互相獨立。"
    ],
    "pitfall": "把系統性偏差當成獨立隨機誤差，用重複測量平均消除。儀器偏移通常需要校正。",
    "quiz": {
      "q": "Which operation gives a scalar?",
      "opts": [
        "Vector addition",
        "Cross product",
        "Dot product",
        "Multiplication of a vector by 2"
      ],
      "a": 2,
      "why": "內積是純量 AB cosθ；叉積與向量相加的結果仍是向量。"
    },
    "problem": "A displacement is 3.0 m east and 4.0 m south. Find its magnitude and direction.",
    "answer": "大小 5.0 m，方向東偏南 53.1°。以東為 +x、北為 +y，分量為 (3.0,−4.0) m。",
    "terms": "量綱 dimension · 不確定度 uncertainty · 內積 dot product"
  },
  {
    "id": "kinematics",
    "part": "數學與力學",
    "title": "運動學：從圖像到微積分",
    "en": "Kinematics",
    "goals": [
      "在位置、速度與加速度之間微分及積分",
      "辨認等加速度公式與拋體模型的限制"
    ],
    "sections": [
      [
        "運動的三層描述",
        "位置說明物體在哪裡；速度說明位置如何改變；加速度說明速度如何改變。位移是終點減起點，路程是速度大小對時間的積分。物體往返原點時，位移可以為零，路程仍大於零。"
      ],
      [
        "斜率與面積是一組互逆語言",
        "位置—時間圖的切線斜率為瞬時速度，速度—時間圖的有號面積為位移。積分求位置時還需要初始位置，因為導數無法決定積分常數。速度與加速度同號時速率增加，異號時速率減小。"
      ],
      [
        "二維運動共享同一個時間",
        "忽略空氣阻力、重力均勻時，水平運動等速，鉛直運動等加速度。兩方向可以分開求解，最後必須使用同一時刻的分量組合。最高點只有鉛直速度為零，重力加速度並未消失。"
      ]
    ],
    "eq": "\\mathbf v=\\frac{d\\mathbf r}{dt},\\quad\\mathbf a=\\frac{d\\mathbf v}{dt},\\quad\\Delta\\mathbf r=\\int_{t_i}^{t_f}\\mathbf v\\,dt",
    "assume": "下面推導要求加速度為常數；拋體公式另外假設忽略阻力、g 均勻。",
    "steps": [
      [
        "將固定加速度積分，使用初始速度。",
        "v(t)=v_0+at"
      ],
      [
        "再次積分，使用初始位置。",
        "x(t)=x_0+v_0t+\\frac12at^2"
      ],
      [
        "以 a=v dv/dx 消去時間，得到第三個關係。",
        "v^2-v_0^2=2a(x-x_0)"
      ]
    ],
    "example": "A ball is launched at 20.0 m/s at 30.0° and lands at its initial height. Find its flight time and range (g=9.80 m/s²).",
    "solution": [
      "選擇向上為 +y：v₀x=17.32 m/s，v₀y=10.0 m/s。",
      "由 0=v₀yT−gT²/2 取非零根 T=2.04 s。",
      "R=v₀xT=35.3 m。若落點高度不同，應重新解鉛直方程。"
    ],
    "pitfall": "把最高點的速度與加速度都設為零；或把曲線下的負面積當作正路程。",
    "quiz": {
      "q": "A particle has v<0 and a>0. Its speed is:",
      "opts": [
        "Increasing",
        "Decreasing",
        "Always zero",
        "Impossible to determine locally"
      ],
      "a": 1,
      "why": "速度與加速度反向，速度大小在該瞬間減小。"
    },
    "problem": "A car brakes uniformly from 20 m/s to rest over 50 m. Find its acceleration and stopping time.",
    "answer": "0−20²=2a(50)，得 a=−4.0 m/s²。由 0=20+at 得 t=5.0 s。負號相對於原行進方向。",
    "terms": "位移 displacement · 速率 speed · 加速度 acceleration"
  },
  {
    "id": "newton",
    "part": "數學與力學",
    "title": "牛頓定律與受力分析",
    "en": "Newton's Laws",
    "goals": [
      "畫出單一物體的完整外力圖",
      "處理支持力、張力與靜／動摩擦"
    ],
    "sections": [
      [
        "先選系統，再寫定律",
        "牛頓第一定律定義慣性參考系：無合外力的自由物體保持等速直線運動。在慣性系中，合外力決定動量的變化率。對固定質量粒子，第二定律化為合力等於 ma。火箭等開放系統要把流出動量列入收支。"
      ],
      [
        "每一張自由體圖只畫一個系統",
        "先圈出研究物體，再畫地球、接觸面、繩索等外界施力。第三定律的力對作用在不同物體上，因此不能在同一張自由體圖中互相抵銷。支持力不必等於 mg，例如電梯加速時 N−mg=ma。"
      ],
      [
        "摩擦是約束，不是固定大小的阻力",
        "靜摩擦在零到最大值 μsN 之間調整以避免相對滑動；只有臨界滑動時才等於 μsN。滑動時以 fk≈μkN 描述乾摩擦，方向反抗接觸面間的相對滑動。這是一個經驗近似，並不適合所有材料與速率。"
      ]
    ],
    "eq": "\\sum\\mathbf F=m\\mathbf a,\\quad |f_s|\\le\\mu_sN,\\quad f_k\\simeq\\mu_kN",
    "assume": "慣性參考系、固定質量。斜面例題採剛性平面與庫侖動摩擦模型。",
    "steps": [
      [
        "沿斜面向下、垂直斜面向外取正軸。",
        "\\sum F_\\perp=N-mg\\cos\\theta=0"
      ],
      [
        "物體向下滑動，摩擦沿斜面向上。",
        "\\sum F_\\parallel=mg\\sin\\theta-\\mu_kN=ma"
      ],
      [
        "代入支持力；結果為負表示下滑過程正在減速。",
        "a=g(\\sin\\theta-\\mu_k\\cos\\theta)"
      ]
    ],
    "example": "A 3.00-kg block slides down a 30.0° incline with μk=0.200. Find its acceleration and normal force.",
    "solution": [
      "畫出重力、支持力與動摩擦力，沒有額外的『下滑力』。",
      "N=3.00×9.80×cos30°=25.5 N；fk=5.09 N。",
      "a=9.80(sin30°−0.200cos30°)=3.20 m/s²，沿斜面向下。"
    ],
    "pitfall": "一看到靜摩擦就使用 fs=μsN，或把重力和支持力稱為作用力與反作用力。",
    "quiz": {
      "q": "A book rests on a table. The reaction to the table's force on the book is:",
      "opts": [
        "Earth's force on the book",
        "The book's force on the table",
        "Zero",
        "The book's weight"
      ],
      "a": 1,
      "why": "第三定律交換施力者與受力者：桌對書的力，配對書對桌的力。"
    },
    "problem": "A 60 kg person accelerates upward at 2.0 m/s² in an elevator. Find the scale reading.",
    "answer": "以向上為正：N−mg=ma，因此 N=60(9.8+2.0)=708 N。秤測量支持力。",
    "terms": "慣性系 inertial frame · 支持力 normal force · 張力 tension"
  },
  {
    "id": "energy",
    "part": "數學與力學",
    "title": "功、位能與能量方法",
    "en": "Work & Energy",
    "goals": [
      "由牛頓定律推導動能定理",
      "根據系統邊界寫出能量收支"
    ],
    "sections": [
      [
        "功是沿路徑的能量傳遞",
        "微小功為力與位移的內積。沿曲線運動時，必須把每一小段的力投影到切線方向再積分。力可以很大但不做功，例如理想固定軌道的支持力總是垂直於瞬間位移。"
      ],
      [
        "位能把保守力寫成地形",
        "保守力作功只由起終點決定，可定義位能差為負的保守力作功。一維中 F=−dU/dx；位能曲線斜率為零是平衡條件，局部極小值對應穩定平衡。位能零點可任選，但同一計算中不能任意更換。"
      ],
      [
        "機械能不是所有能量",
        "摩擦可以把機械能轉成內能。若把物體與粗糙面一起放入系統，應追蹤內能增加；若只研究物體，則外界摩擦作功出現在能量收支中。一定要先界定系統，避免把摩擦的功與同一筆內能增加重複計入。"
      ]
    ],
    "eq": "W_{\\rm net}=\\Delta K,\\quad K=\\frac12mv^2,\\quad \\Delta(K+U)=W_{\\rm nc}",
    "assume": "固定質量、非相對論速度；最後一式把保守力納入位能，其餘做功記為 Wnc。",
    "steps": [
      [
        "由第二定律與速度定義，把時間微分換成位移。",
        "dW=\\mathbf F\\cdot d\\mathbf r=m\\frac{d\\mathbf v}{dt}\\cdot\\mathbf v\\,dt"
      ],
      [
        "積分得到動能定理。",
        "W_{\\rm net}=\\int m\\mathbf v\\cdot d\\mathbf v=\\frac12mv_f^2-\\frac12mv_i^2"
      ],
      [
        "把保守力作功 Wc=−ΔU 移項。",
        "W_{\\rm c}+W_{\\rm nc}=\\Delta K\\Rightarrow \\Delta(K+U)=W_{\\rm nc}"
      ]
    ],
    "example": "A block starts from rest and drops 2.00 m along a frictionless track. Find its final speed.",
    "solution": [
      "系統選物體與地球；支持力不做功，忽略阻力。",
      "設最低點 U=0，初始能量為 mgh，末態為 mv²/2。",
      "v=√(2gh)=6.26 m/s，與質量無關。軌道形狀不影響此結果。"
    ],
    "pitfall": "在有摩擦的過程仍直接令 K+U 不變。總能量守恆不代表機械能守恆。",
    "quiz": {
      "q": "A conservative force does +12 J of work. The potential energy changes by:",
      "opts": [
        "+12 J",
        "−12 J",
        "0 J",
        "It depends on the path"
      ],
      "a": 1,
      "why": "位能差定義為保守力作功的負值，因此 ΔU=−12 J。"
    },
    "problem": "A 2.0 kg block moves at 4.0 m/s on a horizontal surface with μk=0.20. How far does it slide before stopping?",
    "answer": "μkmgd=mv²/2，得 d=v²/(2μkg)=4.08 m，約 4.1 m；停止後不能繼續套用同方向動摩擦。",
    "terms": "功 work · 保守力 conservative force · 位能 potential energy"
  },
  {
    "id": "momentum",
    "part": "數學與力學",
    "title": "動量、質心與碰撞",
    "en": "Momentum & Collisions",
    "goals": [
      "以外衝量判斷動量能否守恆",
      "區分彈性碰撞與完全非彈性碰撞"
    ],
    "sections": [
      [
        "動量守恆來自內力相消",
        "多粒子系統的總動量是每個粒子動量的向量和。成對內力抵銷後，只剩外力改變總動量。因此守恆的判準是外部總衝量可忽略，並不要求各物體不受力。"
      ],
      [
        "質心代表平移運動",
        "質心是位置的質量加權平均。固定總質量時，質心運動遵循 M aCM=ΣFext；系統內部碰撞、爆炸或變形不會自行改變質心動量。這使複雜系統的整體運動可以先與內部運動分開處理。"
      ],
      [
        "碰撞要分開檢查兩種守恆",
        "短時間碰撞中，碰撞力常遠大於重力等外力，故某些方向動量近似守恆。彈性碰撞另有總動能守恆；完全非彈性碰撞後兩物體黏在一起，動能通常降低，轉入形變、熱與聲。"
      ]
    ],
    "eq": "\\mathbf J_{\\rm ext}=\\int\\mathbf F_{\\rm ext}dt=\\Delta\\mathbf P,\\quad \\mathbf r_{\\rm CM}=\\frac{\\sum m_i\\mathbf r_i}{\\sum m_i}",
    "assume": "固定總質量的封閉粒子系統。以下完全非彈性碰撞假設碰撞方向的外衝量可忽略。",
    "steps": [
      [
        "碰撞前後總動量相等。",
        "m_1u_1+m_2u_2=(m_1+m_2)v_f"
      ],
      [
        "求黏合後的共同速度，所有速度均帶方向符號。",
        "v_f=\\frac{m_1u_1+m_2u_2}{m_1+m_2}"
      ],
      [
        "代回動能差，得到轉成其他能量的部分。",
        "K_i-K_f=\\frac12\\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2"
      ]
    ],
    "example": "A 2.0 kg cart moving right at 3.0 m/s sticks to a stationary 1.0 kg cart. Find the final velocity and kinetic energy loss.",
    "solution": [
      "向右為正；初動量為 6.0 kg·m/s。",
      "共同速度 vf=6.0/3.0=2.0 m/s 向右。",
      "初動能 9.0 J，末動能 6.0 J，損失的機械動能為 3.0 J。"
    ],
    "pitfall": "認為動量守恆就表示動能守恆，或把相反方向的速度都填成正值。",
    "quiz": {
      "q": "In an isolated perfectly inelastic collision, which is conserved?",
      "opts": [
        "Kinetic energy only",
        "Momentum only (of these two)",
        "Both kinetic energy and momentum",
        "Neither"
      ],
      "a": 1,
      "why": "總動量守恆，動能通常不守恆；包含內能在內的總能量仍守恆。"
    },
    "problem": "A 0.15 kg ball changes velocity from +20 m/s to −10 m/s in 0.030 s. Find the average net force.",
    "answer": "Δp=0.15(−10−20)=−4.5 N·s；平均合力=−4.5/0.030=−150 N。",
    "terms": "衝量 impulse · 質心 center of mass · 非彈性 inelastic"
  },
  {
    "id": "rotation",
    "part": "數學與力學",
    "title": "轉動、力矩與角動量",
    "en": "Rotation & Angular Momentum",
    "goals": [
      "使用轉動慣量描述質量分布",
      "辨認角動量守恆與純滾動的條件"
    ],
    "sections": [
      [
        "平移的質量對應轉動的慣量",
        "同樣的總質量放在離軸更遠的位置，需要更大的力矩才能產生相同角加速度。轉動慣量 I=∫r⊥²dm 必須相對指定轉軸計算，換軸後通常改變。角度在微積分關係中必須採弧度。"
      ],
      [
        "力矩需要指定參考點",
        "力矩為 r×F，大小是力乘垂直力臂。相對固定慣性原點，總外力矩等於總角動量變化率。L=Iω 只在適當的固定軸情況下可直接用純量形式；一般三維剛體要使用慣量張量。"
      ],
      [
        "滾動同時包含平移與轉動",
        "純滾動的接觸點相對地面瞬間靜止，因此 vCM=ωR。總動能是質心平移與繞質心轉動的總和。理想剛體在固定地面純滾動時，靜摩擦可提供力矩，但接觸點不移動，並不因此耗散機械能。"
      ]
    ],
    "eq": "\\boldsymbol\\tau=\\mathbf r\\times\\mathbf F,\\quad \\frac{d\\mathbf L}{dt}=\\boldsymbol\\tau_{\\rm ext},\\quad K=\\frac12Mv_{\\rm CM}^2+\\frac12I_{\\rm CM}\\omega^2",
    "assume": "下面採固定軸、剛體、轉動慣量不隨時間改變。滾動例題要求足夠靜摩擦且無耗散。",
    "steps": [
      [
        "每個質點的切向加速度為 rα。",
        "\\tau_i=r_i(m_ir_i\\alpha)=m_ir_i^2\\alpha"
      ],
      [
        "加總質點，定義繞該軸的轉動慣量。",
        "\\sum\\tau=I\\alpha,\\quad I=\\sum_i m_ir_i^2"
      ],
      [
        "無外力矩時角動量不變，即使轉動慣量改變。",
        "\\tau_{\\rm ext}=0\\Rightarrow L_i=L_f\\Rightarrow I_i\\omega_i=I_f\\omega_f"
      ]
    ],
    "example": "A uniform solid cylinder rolls without slipping from rest through a vertical drop of 1.00 m. Find its center-of-mass speed.",
    "solution": [
      "實心圓柱 ICM=MR²/2，純滾動 ω=v/R。",
      "Mgh=Mv²/2+(MR²/2)(v/R)²/2=3Mv²/4。",
      "v=√(4gh/3)=3.61 m/s，比同高度無摩擦滑動粒子慢。"
    ],
    "pitfall": "直接把所有剛體都當作 I=MR²，或在滑動時仍使用 v=ωR。",
    "quiz": {
      "q": "A skater reduces her moment of inertia with negligible external torque. Her angular speed:",
      "opts": [
        "Decreases",
        "Increases",
        "Stays constant",
        "Becomes zero"
      ],
      "a": 1,
      "why": "Iω 守恆，I 變小時 ω 增加。轉動動能可因肌肉做功而增加。"
    },
    "problem": "A wheel with I=2.0 kg·m² experiences a constant net torque of 6.0 N·m. Starting from rest, find ω after 4.0 s.",
    "answer": "α=τ/I=3.0 rad/s²；ω=αt=12 rad/s。條件為固定軸且慣量不變。",
    "terms": "力矩 torque · 轉動慣量 moment of inertia · 角動量 angular momentum"
  },
  {
    "id": "gravitation",
    "part": "數學與力學",
    "title": "萬有引力與軌道",
    "en": "Gravitation & Orbits",
    "goals": [
      "區分近地表位能與一般引力位能",
      "由動力學與能量推導圓軌道和逃逸速度"
    ],
    "sections": [
      [
        "反平方律描述中心吸引",
        "球對稱物體在其外部的引力場，等效於全部質量集中於球心。距離 r 必須從中心量起，不能把離地高度 h 直接代入 GM/r²。近地表 g≈常數是 h 遠小於地球半徑時的近似。"
      ],
      [
        "從無窮遠定義位能零點",
        "取無窮遠 U=0，吸引力的位能是負的 −GMm/r。近地表的小高度差展開後，才得到 ΔU≈mgh。負的總軌道能量對應束縛運動，零能量是恰能逃逸到無窮遠且末速為零的臨界情況。"
      ],
      [
        "失重並不代表沒有重力",
        "衛星與艙內物體一起自由落體，因而幾乎不需要支持力。圓軌道中，萬有引力就是徑向合力；不應另外再加一個向心力。一般束縛軌道為橢圓，圓軌道只是特例。"
      ]
    ],
    "eq": "F=\\frac{GMm}{r^2},\\quad U=-\\frac{GMm}{r},\\quad v_c=\\sqrt{\\frac{GM}{r}}",
    "assume": "牛頓引力、球對稱中心天體、軌道物體質量遠小於中心天體；忽略阻力與其他天體。",
    "steps": [
      [
        "圓軌道由引力提供向心加速度。",
        "\\frac{GMm}{r^2}=\\frac{mv_c^2}{r}"
      ],
      [
        "以週期 T=2πr/v 代入。",
        "T^2=\\frac{4\\pi^2}{GM}r^3"
      ],
      [
        "逃逸時最小初始能量為零。",
        "\\frac12mv_e^2-\\frac{GMm}{r}=0\\Rightarrow v_e=\\sqrt{\\frac{2GM}{r}}"
      ]
    ],
    "example": "At a planet's surface g=9.80 m/s² and radius R=6.37×10⁶ m. Estimate the escape speed.",
    "solution": [
      "由表面 g=GM/R² 得 GM=gR²。",
      "ve=√(2GM/R)=√(2gR)。",
      "ve≈1.12×10⁴ m/s=11.2 km/s；此值忽略大氣及行星自轉。"
    ],
    "pitfall": "把太空中的 g 設為零，或在跨越很大高度時仍使用固定 g 的 mgh。",
    "quiz": {
      "q": "Doubling the radius of a circular orbit changes its period by a factor of:",
      "opts": [
        "2",
        "4",
        "√2",
        "2√2"
      ],
      "a": 3,
      "why": "T²∝r³，所以 T∝r^(3/2)，半徑加倍得到 2√2。"
    },
    "problem": "Express the total mechanical energy of a circular satellite orbit of radius r.",
    "answer": "K=GMm/(2r)，U=−GMm/r，故 E=−GMm/(2r)。軌道半徑增加時總能量增加，變得較不負。",
    "terms": "束縛 bound · 逃逸速度 escape speed · 軌道 orbit"
  },
  {
    "id": "fluids",
    "part": "數學與力學",
    "title": "流體靜力與流動",
    "en": "Fluids",
    "goals": [
      "以壓力平衡推導深度壓力",
      "正確使用連續方程與伯努力方程"
    ],
    "sections": [
      [
        "壓力不是總力",
        "靜止流體的壓力在一點各方向相同，作用於表面的力沿局部法線。壓力單位 Pa=N/m²。壓力差可由上下流體微元的重力平衡求出；液體密度近似固定時，深度每增加 h，壓力增加 ρgh。"
      ],
      [
        "浮力來自表面壓力不均",
        "物體下表面通常比上表面受更大的壓力，將整個表面的壓力積分，得到浮力等於排開流體的重量。漂浮平衡時，浮力等於物重；不是所有浸入物體的浮力都自動等於其重量。"
      ],
      [
        "流量與能量需要不同假設",
        "質量守恆給出穩態管流 ρAv 為常數。不可壓縮流體才可化為 Av 常數。伯努力方程則還要求忽略黏滯耗散、沿同一條流線且沒有泵浦或渦輪額外交換功；真實管流常需要加入壓損。"
      ]
    ],
    "eq": "p=p_0+\\rho gh,\\quad F_B=\\rho_{\\rm fluid}gV_{\\rm displaced},\\quad \\rho Av=\\mathrm{constant}",
    "assume": "伯努力推導採穩態、不可壓縮、無黏滯流，沿一條流線，沒有外加軸功。",
    "steps": [
      [
        "壓力對相同小體積流體做的淨功為壓差乘體積。",
        "W_p=(p_1-p_2)\\Delta V"
      ],
      [
        "用動能與重力位能的變化寫能量守恆。",
        "(p_1-p_2)\\Delta V=\\frac12\\rho\\Delta V(v_2^2-v_1^2)+\\rho g\\Delta V(y_2-y_1)"
      ],
      [
        "除以體積並移項，得到每單位體積的能量關係。",
        "p_1+\\frac12\\rho v_1^2+\\rho gy_1=p_2+\\frac12\\rho v_2^2+\\rho gy_2"
      ]
    ],
    "example": "Water flows through a horizontal pipe from area 4.0 cm² at 2.0 m/s into area 2.0 cm². Find the new speed and pressure change (ρ=1000 kg/m³).",
    "solution": [
      "連續方程給 v₂=A₁v₁/A₂=4.0 m/s。",
      "等高度伯努力式：p₂−p₁=ρ(v₁²−v₂²)/2。",
      "壓力變化為 −6000 Pa；流速較大的窄段壓力較低，前提是上述理想流動模型有效。"
    ],
    "pitfall": "在任意兩個流體點間套用伯努力方程，或把表壓與絕對壓力混在同一等式中。",
    "quiz": {
      "q": "A fully submerged object's buoyant force depends directly on:",
      "opts": [
        "Its mass only",
        "Displaced fluid volume and fluid density",
        "Its material density only",
        "Its depth in every incompressible liquid"
      ],
      "a": 1,
      "why": "在均勻不可壓縮流體中 FB=ρgV排，完全浸沒後不因深度直接改變。"
    },
    "problem": "Find the gauge pressure 5.0 m below the surface of freshwater, using ρ=1000 kg/m³.",
    "answer": "表壓 ρgh=4.9×10⁴ Pa。若求絕對壓力，還要加液面大氣壓。",
    "terms": "壓力 pressure · 浮力 buoyancy · 黏滯 viscosity"
  },
  {
    "id": "waves",
    "part": "振動與波",
    "title": "振動、行波與駐波",
    "en": "Oscillations & Waves",
    "goals": [
      "從回復力導出簡諧運動",
      "連結波速、頻率與邊界條件"
    ],
    "sections": [
      [
        "簡諧振動是一種線性模型",
        "穩定平衡附近，位能可近似展開為 U≈U₀+kx²/2，因此回復力近似 −kx。這使許多不同系統在小振幅下都呈現簡諧運動。真實彈簧超出線性範圍後，週期可能依賴振幅。"
      ],
      [
        "波傳遞相位與能量",
        "正弦行波 y=Acos(kx−ωt+φ) 的等相位位置向 +x 前進；波速為 ω/k=fλ。介質粒子的振動速度 ∂y/∂t 與波形前進速度不同。線性介質中的多個波可以疊加形成干涉。"
      ],
      [
        "邊界挑選可存在的模態",
        "兩端固定弦的端點必為波節，因此弦長只能容納整數個半波長。駐波由反向行波疊加形成，節點不振動，腹點振幅最大。阻尼耗散能量；外力頻率接近自然頻率時可共振，其峰值與寬度受阻尼影響。"
      ]
    ],
    "eq": "m\\ddot x=-kx,\\quad x=A\\cos(\\omega_0t+\\phi),\\quad \\omega_0=\\sqrt{k/m},\\quad v=f\\lambda",
    "assume": "線性彈簧、無阻尼的自由振動；弦波採小振幅、均勻線密度與固定張力。",
    "steps": [
      [
        "將正弦試解代入運動方程。",
        "\\ddot x=-\\omega_0^2x\\Rightarrow \\omega_0^2=k/m"
      ],
      [
        "週期為相位增加 2π 所需時間。",
        "T=\\frac{2\\pi}{\\omega_0}=2\\pi\\sqrt{\\frac{m}{k}}"
      ],
      [
        "兩端固定的弦要求 L=nλ/2。",
        "\\lambda_n=\\frac{2L}{n},\\quad f_n=\\frac{nv}{2L},\\quad n=1,2,\\ldots"
      ]
    ],
    "example": "A 0.50 kg mass is attached to a spring of 200 N/m with amplitude 0.10 m. Find its period and maximum speed.",
    "solution": [
      "ω₀=√(200/0.50)=20 rad/s。",
      "T=2π/20=0.314 s。",
      "vmax=Aω₀=2.0 m/s，出現在平衡位置，並非最大位移處。"
    ],
    "pitfall": "把弦上某粒子的上下運動速度當成沿弦波速；或把 rad/s 直接當成 Hz。",
    "quiz": {
      "q": "Doubling the mass on an ideal spring changes the period by:",
      "opts": [
        "2",
        "1/2",
        "√2",
        "No change"
      ],
      "a": 2,
      "why": "T∝√m，因此質量加倍，週期乘上 √2。"
    },
    "problem": "A 1.2 m string fixed at both ends supports waves at 120 m/s. Find its first three resonant frequencies.",
    "answer": "fₙ=nv/(2L)=50n Hz，因此為 50、100、150 Hz。",
    "terms": "相位 phase · 波節 node · 共振 resonance"
  },
  {
    "id": "thermal",
    "part": "熱力學",
    "title": "溫度、熱與第一定律",
    "en": "Thermodynamics I",
    "goals": [
      "分辨狀態量與過程量",
      "用明確正負號慣例處理熱與功"
    ],
    "sections": [
      [
        "溫度與熱是不同概念",
        "溫度表徵熱平衡狀態；熱是因溫差跨越系統邊界傳遞的能量。內能是系統微觀能量的總和，是狀態量。系統『含有熱』的說法容易把過程量誤認為狀態量。"
      ],
      [
        "理想氣體把微觀與宏觀接起來",
        "稀薄氣體在分子間作用能可忽略時，近似滿足 pV=nRT。單原子理想氣體在僅平移自由度有效的溫區，U=3nRT/2。對雙原子氣體或低溫、高溫情形，熱容量的自由度需要重新檢查。"
      ],
      [
        "同一起終態可以經歷不同的熱與功",
        "採 Q>0 為系統吸熱、Wby>0 為系統對外作功，第一定律為 ΔU=Q−Wby。氣體準靜態膨脹時 Wby=∫p dV。等溫不等於無熱交換；絕熱也不等於溫度不變。"
      ]
    ],
    "eq": "\\Delta U=Q-W_{\\rm by},\\quad pV=nRT,\\quad W_{\\rm by}=\\int_{V_i}^{V_f}p\\,dV",
    "assume": "封閉系統，忽略整體動能與位能變化。等溫推導採固定莫耳數理想氣體與準靜態過程。",
    "steps": [
      [
        "理想氣體內能只依賴溫度，等溫時內能不變。",
        "\\Delta T=0\\Rightarrow\\Delta U=0"
      ],
      [
        "以 p=nRT/V 計算準靜態等溫功。",
        "W_{\\rm by}=nRT\\int_{V_i}^{V_f}\\frac{dV}{V}=nRT\\ln\\frac{V_f}{V_i}"
      ],
      [
        "由第一定律得到熱交換量。",
        "Q=W_{\\rm by}\\quad(\\mathrm{isothermal\\ ideal\\ gas})"
      ]
    ],
    "example": "One mole of ideal gas expands reversibly and isothermally at 300 K from 10 L to 20 L. Find work, heat and internal-energy change.",
    "solution": [
      "體積比為 2，對數中的比值無量綱。",
      "Wby=(1)(8.314)(300)ln2=1.73 kJ，膨脹對外作正功。",
      "ΔU=0，因此 Q=+1.73 kJ；熱庫補充氣體作功流出的能量。"
    ],
    "pitfall": "混用『外界對氣體做功』與『氣體對外做功』的正負號，造成第一定律符號反轉。",
    "quiz": {
      "q": "In an adiabatic process:",
      "opts": [
        "ΔT is always zero",
        "Q=0",
        "W=0",
        "ΔU=0"
      ],
      "a": 1,
      "why": "絕熱定義是沒有熱傳遞；系統仍可因作功而改變內能與溫度。"
    },
    "problem": "A gas absorbs 500 J of heat while doing 180 J of work. Find ΔU.",
    "answer": "使用 ΔU=Q−Wby，得 +320 J。內能增加。",
    "terms": "內能 internal energy · 絕熱 adiabatic · 準靜態 quasistatic"
  },
  {
    "id": "entropy",
    "part": "熱力學",
    "title": "熵、熱機與第二定律",
    "en": "Entropy & Heat Engines",
    "goals": [
      "區分能量守恆與過程方向",
      "以可逆路徑計算熵變並求熱機上限"
    ],
    "sections": [
      [
        "第一定律沒有決定過程方向",
        "熱自發由高溫流向低溫，即使反過來也不違反能量守恆，卻違反第二定律。孤立系統總熵不減；可逆理想過程總熵不變，不可逆過程總熵增加。局部系統熵可以下降，只要環境的熵增加更多。"
      ],
      [
        "熵是狀態量",
        "熵差可沿任意連接起終態的可逆路徑積分 δQrev/T 計算。真實過程若不可逆，不能直接將實際熱量除以某一個溫度當作總熵差。溫度必須以 K 表示，且要區分系統與熱庫。"
      ],
      [
        "熱機上限由兩個熱庫決定",
        "循環熱機回到初態，所以一個循環內能變化為零；吸熱的一部分做功，剩餘排到冷熱庫。可逆卡諾熱機在指定高低溫熱庫間效率最高，實際不可逆熱機更低。冷凍機需要外界輸入功才能把熱搬往高溫處。"
      ]
    ],
    "eq": "\\Delta S=\\int_i^f\\frac{\\delta Q_{\\rm rev}}{T},\\quad \\Delta S_{\\rm universe}\\ge0,\\quad \\eta=\\frac{W}{Q_H}=1-\\frac{Q_C}{Q_H}",
    "assume": "兩個溫度固定的熱庫；熱量 QH、QC 以吸收／排出量的正大小表示。",
    "steps": [
      [
        "循環回到初態，內能變化為零。",
        "W=Q_H-Q_C"
      ],
      [
        "可逆循環的熱庫總熵變為零。",
        "-\\frac{Q_H}{T_H}+\\frac{Q_C}{T_C}=0"
      ],
      [
        "代入效率，所有溫度使用絕對溫標。",
        "\\eta_{\\rm Carnot}=1-\\frac{T_C}{T_H}"
      ]
    ],
    "example": "A reversible engine operates between 600 K and 300 K and absorbs 1000 J per cycle. Find its work and rejected heat.",
    "solution": [
      "η=1−300/600=0.50。",
      "W=ηQH=500 J，QC=1000−500=500 J。",
      "兩熱庫熵變為 −1000/600+500/300=0 J/K；可逆循環符合第二定律。"
    ],
    "pitfall": "在卡諾效率使用攝氏溫度，或把『系統熵降低』單獨判定為違反第二定律。",
    "quiz": {
      "q": "For an isolated system undergoing an irreversible process, total entropy:",
      "opts": [
        "Decreases",
        "Increases",
        "Must be zero",
        "Is not a state function"
      ],
      "a": 1,
      "why": "孤立系統沒有熵流出入，不可逆性產生正熵，因此總熵增加。"
    },
    "problem": "Transfer 100 J from a 400 K reservoir to a 300 K reservoir. Find the total entropy change.",
    "answer": "ΔS=−100/400+100/300=+0.0833 J/K，正值表示此有限溫差傳熱不可逆。",
    "terms": "熵 entropy · 可逆 reversible · 熱機 heat engine"
  },
  {
    "id": "electric",
    "part": "電磁學",
    "title": "電場、高斯定律與電勢",
    "en": "Electric Fields & Potential",
    "goals": [
      "以疊加原理建立電場",
      "依對稱性選擇積分或高斯定律"
    ],
    "sections": [
      [
        "場把相隔兩處的作用拆開",
        "電荷產生電場，其他電荷受到 F=qE。測試電荷取足夠小以避免改變原分布。多個電荷的電場做向量相加；電勢則做純量相加。電場方向是正測試電荷受力方向，負電荷受力與場反向。"
      ],
      [
        "高斯定律恆成立，求場卻需要對稱",
        "封閉面的電通量等於內部淨電荷除以 ε₀。外部電荷可改變面上電場，但穿入與穿出的總通量抵銷。只有當對稱性讓場大小可從積分提出時，高斯定律才容易直接求出 E。"
      ],
      [
        "電勢差把場轉成能量",
        "靜電場是保守場，電勢差 ΔV=−∫E·dl，位能為 U=qV。電場沿電勢下降方向，但負電荷未必往較低電勢運動。靜電平衡導體內部 E=0，導體等電勢；這不表示導體電勢必為零。"
      ]
    ],
    "eq": "\\mathbf E=\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\hat{\\mathbf r},\\quad\\oint\\mathbf E\\cdot d\\mathbf A=\\frac{Q_{\\rm enc}}{\\epsilon_0},\\quad\\mathbf E=-\\nabla V",
    "assume": "靜電情況、真空；無限長線電荷是忽略端點效應的理想化。",
    "steps": [
      [
        "選與無限長線電荷同軸、半徑 r 長度 L 的圓柱高斯面。",
        "\\Phi_E=E(2\\pi rL)"
      ],
      [
        "端蓋通量為零，包圍電荷為 λL。",
        "E(2\\pi rL)=\\frac{\\lambda L}{\\epsilon_0}\\Rightarrow E=\\frac{\\lambda}{2\\pi\\epsilon_0r}"
      ],
      [
        "從 r₁ 到 r₂ 積分求電勢差；不可把無窮遠直接設為有限零點。",
        "V(r_2)-V(r_1)=-\\frac{\\lambda}{2\\pi\\epsilon_0}\\ln\\frac{r_2}{r_1}"
      ]
    ],
    "example": "Find the electric field magnitude 0.30 m from a +2.0 μC point charge in vacuum.",
    "solution": [
      "使用點電荷模型，k=8.99×10⁹ N·m²/C²。",
      "E=kq/r²=(8.99×10⁹)(2.0×10⁻⁶)/0.30²=2.00×10⁵ N/C。",
      "方向沿半徑向外；若求負電荷受力，還需乘負的測試電荷。"
    ],
    "pitfall": "認為高斯面包圍淨電荷為零就代表面上每一點的電場皆為零。",
    "quiz": {
      "q": "A closed surface encloses zero net charge. Which must be zero?",
      "opts": [
        "Electric field everywhere",
        "Electric potential everywhere",
        "Net electric flux",
        "All external charges"
      ],
      "a": 2,
      "why": "高斯定律限定淨通量，不限定每點的場。外部電荷仍可產生非零電場。"
    },
    "problem": "A +3.0 μC charge moves through a potential difference Vf−Vi=−20 V. Find ΔU and the electric work.",
    "answer": "ΔU=qΔV=−60 μJ；電場做功 W=−ΔU=+60 μJ。",
    "terms": "通量 flux · 電勢 potential · 疊加 superposition"
  },
  {
    "id": "circuits",
    "part": "電磁學",
    "title": "電容與直流電路",
    "en": "Capacitance & Circuits",
    "goals": [
      "使用電荷與能量守恆建立電路方程",
      "理解 RC 電路的暫態與穩態"
    ],
    "sections": [
      [
        "電容儲存的是分離電荷的能量",
        "電容 C=Q/ΔV 是幾何與介質的性質，線性電容中與所加電壓無關。平行板邊緣效應可忽略時 C=εA/d。將少量電荷搬到板上需要逐步對抗愈來愈大的電勢差，因此能量不是 QV 而是 QV/2。"
      ],
      [
        "電路定律是守恆的集總近似",
        "接點電流和為零來自電荷守恆；無時變穿鏈磁通時，迴路電勢差和為零。歐姆定律 V=IR 適用於電阻近似固定的元件，不是所有材料都線性。串聯同電流，並聯同電壓，辨認連接拓樸比背圖形重要。"
      ],
      [
        "電容的電壓不能無限快跳變",
        "理想電容 i=C dV/dt；若電流有限，電壓連續。RC 充電時初始電流最大，之後隨電容電壓上升而衰減。時間常數 τ=RC 定義衰減尺度；到一個 τ 並未完全充飽，約達最終電壓的 63.2%。"
      ]
    ],
    "eq": "C=\\frac{Q}{\\Delta V},\\quad U_C=\\frac12CV^2,\\quad V_R=IR,\\quad \\tau=RC",
    "assume": "理想固定電阻與線性電容，理想直流電壓源；忽略導線電感與傳播延遲。",
    "steps": [
      [
        "串聯 RC 充電迴路，電容初始未充電。",
        "\\mathcal E-R\\frac{dq}{dt}-\\frac{q}{C}=0,\\quad q(0)=0"
      ],
      [
        "解一階線性微分方程。",
        "q(t)=C\\mathcal E(1-e^{-t/RC})"
      ],
      [
        "微分得到電流，初始值符合未充電電容電壓為零。",
        "i(t)=\\frac{\\mathcal E}{R}e^{-t/RC}"
      ]
    ],
    "example": "A 10 μF capacitor charges through 100 kΩ from a 12 V source. Find its time constant and voltage after one time constant.",
    "solution": [
      "先換算：C=10⁻⁵ F，R=10⁵ Ω，τ=1.0 s。",
      "VC(τ)=12(1−e⁻¹)=7.59 V。",
      "穩態 VC→12 V、i→0；電容儲能最後為 CV²/2=720 μJ。"
    ],
    "pitfall": "把電池的電動勢當成每個元件都相同的電壓降，或把穩態電容視為短路。",
    "quiz": {
      "q": "Two identical resistors R connected in parallel have equivalent resistance:",
      "opts": [
        "2R",
        "R",
        "R/2",
        "R²"
      ],
      "a": 2,
      "why": "1/Req=1/R+1/R，故 Req=R/2。"
    },
    "problem": "A 6.0 Ω resistor carries 2.0 A. Find its voltage and power dissipation.",
    "answer": "V=IR=12 V；P=IV=I²R=24 W。功率是能量轉換速率，單位 J/s。",
    "terms": "電容 capacitance · 電動勢 emf · 時間常數 time constant"
  },
  {
    "id": "magnetism",
    "part": "電磁學",
    "title": "磁場、感應與電磁波",
    "en": "Magnetism & Induction",
    "goals": [
      "用向量方向分析磁力",
      "以磁通變化與楞次定律判斷感應"
    ],
    "sections": [
      [
        "磁力改變運動方向",
        "帶電粒子受磁力 qv×B，方向同時垂直於速度與磁場，所以純磁場對點電荷不做功。垂直磁場的速度分量產生圓周運動，平行分量維持等速，合成螺旋軌跡。磁力方向還要考慮電荷正負。"
      ],
      [
        "感應電場可以不是保守場",
        "閉合迴路的磁通改變會產生電動勢。負號代表感應效應反抗原本磁通的變化，而不是一律反抗原磁場。時變磁場產生的電場線可閉合，繞迴路積分不為零，因此不能只用靜電勢描述。"
      ],
      [
        "場本身攜帶能量",
        "變化的電場與磁場互相耦合，真空中形成速度 c=1/√(μ₀ε₀) 的電磁波。平面波的 E、B 與傳播方向互相垂直，E=cB。能量流方向由坡印廷向量 E×B/μ₀ 決定，真空不需要物質介質。"
      ]
    ],
    "eq": "\\mathbf F=q(\\mathbf E+\\mathbf v\\times\\mathbf B),\\quad\\mathcal E=-\\frac{d\\Phi_B}{dt},\\quad\\Phi_B=\\int\\mathbf B\\cdot d\\mathbf A",
    "assume": "圓軌道推導採均勻磁場、非相對論速度且 v⊥B。感應迴路的正向由面法向右手定則決定。",
    "steps": [
      [
        "磁力作為圓周運動的徑向合力。",
        "|q|vB=\\frac{mv^2}{r}"
      ],
      [
        "求半徑及週期；方向另由 qv×B 判斷。",
        "r=\\frac{mv}{|q|B},\\quad T=\\frac{2\\pi m}{|q|B}"
      ],
      [
        "固定面積、均勻垂直磁場的 N 匝線圈。",
        "\\mathcal E=-N A\\frac{dB}{dt}"
      ]
    ],
    "example": "A 100-turn coil of area 0.020 m² experiences a perpendicular field increasing from 0.10 T to 0.40 T in 0.50 s. Find the average induced emf magnitude.",
    "solution": [
      "每匝磁通變化 ΔΦ=AΔB=0.020×0.30=0.0060 Wb。",
      "|平均電動勢|=N|ΔΦ|/Δt=1.2 V。",
      "若場指向紙內且增加，感應電流應產生紙外磁場，即由讀者看為逆時針。"
    ],
    "pitfall": "認為磁力可以直接增加粒子速率，或只看 B 大小而忽略磁通中的面積與夾角。",
    "quiz": {
      "q": "A charge moves parallel to a uniform magnetic field. Its magnetic force is:",
      "opts": [
        "qvB",
        "Zero",
        "qB/v",
        "mv²/r"
      ],
      "a": 1,
      "why": "v×B 的大小為 vB sinθ，平行時 θ=0，磁力為零。"
    },
    "problem": "Find the wavelength of a 100 MHz electromagnetic wave in vacuum, taking c=3.00×10⁸ m/s.",
    "answer": "f=1.00×10⁸ Hz；λ=c/f=3.00 m。",
    "terms": "磁通 magnetic flux · 感應 induction · 楞次定律 Lenz's law"
  },
  {
    "id": "optics",
    "part": "光與近代物理",
    "title": "幾何光學與波動光學",
    "en": "Optics",
    "goals": [
      "區分光線近似與干涉模型",
      "使用明確符號慣例處理成像與繞射"
    ],
    "sections": [
      [
        "光線是波長很短時的近似",
        "當障礙物與曲率尺度遠大於波長，可用光線描述傳播。折射率 n=c/v，介面上頻率保持不變，波速與波長改變。斯涅耳定律連結入射與折射角，兩者皆從介面法線量起。"
      ],
      [
        "成像公式要先聲明符號",
        "本章使用實物距 do>0、實像距 di>0、會聚薄透鏡 f>0 的慣例。薄透鏡式適用近軸小角度光線，放大率 m=−di/do。虛像 di<0，不代表不能被眼睛看見，而是光線反向延長線相交。"
      ],
      [
        "干涉與繞射顯示光的波動性",
        "兩個相干波的光程差決定明暗。雙狹縫亮紋近似滿足 d sinθ=mλ；單狹縫暗紋滿足 a sinθ=mλ（m非零）。狹縫有限寬時，雙縫干涉條紋還會受單縫繞射包絡調制。"
      ]
    ],
    "eq": "n_1\\sin\\theta_1=n_2\\sin\\theta_2,\\quad \\frac1f=\\frac1{d_o}+\\frac1{d_i},\\quad d\\sin\\theta=m\\lambda",
    "assume": "薄透鏡與近軸近似；雙縫採單色相干光、遠場與小角度 y≪L。",
    "steps": [
      [
        "雙狹縫到遠處觀察點的路徑差。",
        "\\Delta \\ell=d\\sin\\theta"
      ],
      [
        "同相疊加要求路徑差為整數個波長。",
        "d\\sin\\theta=m\\lambda"
      ],
      [
        "遠處小角度 sinθ≈tanθ≈y/L。",
        "y_m\\simeq\\frac{m\\lambda L}{d},\\quad\\Delta y\\simeq\\frac{\\lambda L}{d}"
      ]
    ],
    "example": "A converging lens with f=10 cm has an object 30 cm in front of it. Find image distance and magnification.",
    "solution": [
      "1/di=1/10−1/30=1/15 cm⁻¹，因此 di=+15 cm。",
      "m=−15/30=−0.50：倒立、縮小為一半的實像。",
      "檢查物距大於 2f，像應落在 f 與 2f 之間，與結果一致。"
    ],
    "pitfall": "把角度從介面量起，或混用單狹縫的暗紋條件與雙狹縫的亮紋條件。",
    "quiz": {
      "q": "Light enters glass from air. Which quantity remains unchanged?",
      "opts": [
        "Speed",
        "Wavelength",
        "Frequency",
        "All three"
      ],
      "a": 2,
      "why": "介面處振動頻率連續；速度降為 c/n，波長也相應縮短。"
    },
    "problem": "Double slits separated by 0.50 mm illuminate a screen 2.0 m away with 500 nm light. Find fringe spacing.",
    "answer": "Δy=λL/d=(500×10⁻⁹)(2.0)/(0.50×10⁻³)=0.0020 m=2.0 mm。",
    "terms": "折射 refraction · 實像 real image · 繞射 diffraction"
  },
  {
    "id": "relativity",
    "part": "光與近代物理",
    "title": "狹義相對論",
    "en": "Special Relativity",
    "goals": [
      "辨認固有時間與固有長度",
      "用相對論能量與動量檢查高速極限"
    ],
    "sections": [
      [
        "同時性需要操作定義",
        "狹義相對論以慣性系中的物理定律相同、真空光速對所有慣性觀察者相同為出發點。遠處事件是否同時，依賴同一參考系中同步的時鐘；不同慣性系不必同意同時性。這不是光傳到眼睛的延遲錯覺。"
      ],
      [
        "固有量要由事件判認",
        "固有時間是兩事件發生在同一位置的參考系中，由同一時鐘量到的間隔。固有長度是在物體靜止系中測得的長度；運動系測長必須同時記錄兩端位置。時間膨脹與長度收縮各有不同的測量條件。"
      ],
      [
        "能量與動量形成共同關係",
        "高速粒子動量為 γmv，總能量 γmc²。靜止質量 m 保持不變，動能為 (γ−1)mc²。低速展開回到 mv 與 mv²/2，提供檢查相對論公式的經典極限。光子靜止質量為零，但具有能量與動量。"
      ]
    ],
    "eq": "\\gamma=\\frac1{\\sqrt{1-v^2/c^2}},\\quad \\Delta t=\\gamma\\Delta\\tau,\\quad E^2=p^2c^2+m^2c^4",
    "assume": "平直時空、慣性系間相對速度固定；長度收縮只作用於沿相對運動方向的分量。",
    "steps": [
      [
        "光鐘靜止時，一次往返路程為 2L。",
        "\\Delta\\tau=\\frac{2L}{c}"
      ],
      [
        "運動系中半程光路為斜邊，使用畢氏定理。",
        "\\left(\\frac{c\\Delta t}{2}\\right)^2=L^2+\\left(\\frac{v\\Delta t}{2}\\right)^2"
      ],
      [
        "整理並代入固有時間。",
        "\\Delta t=\\frac{2L/c}{\\sqrt{1-v^2/c^2}}=\\gamma\\Delta\\tau"
      ]
    ],
    "example": "A spacecraft moves at 0.80c relative to Earth. Its onboard clock measures 3.0 years between two events at that clock. What interval does Earth assign?",
    "solution": [
      "γ=1/√(1−0.80²)=1/0.60=1.667。",
      "船上同一時鐘記錄兩事件，3.0 年是固有時間。",
      "地球系時間間隔為 γΔτ=5.0 年。此題未包含掉頭或重逢的加速過程。"
    ],
    "pitfall": "只憑『誰在動』判斷時間，沒有先確認兩事件及固有時間由哪個時鐘量到。",
    "quiz": {
      "q": "For a photon in vacuum, the energy-momentum relation is:",
      "opts": [
        "E=mc² with nonzero rest mass",
        "E=pc",
        "E=p²/2m",
        "E=0"
      ],
      "a": 1,
      "why": "由 E²=p²c²+m²c⁴ 且光子 m=0 得 E=pc。"
    },
    "problem": "A rod has proper length 5.0 m and moves along its length at 0.60c. Find its measured length.",
    "answer": "γ=1.25；L=L₀/γ=4.0 m。量測者須在自身參考系同時記錄棒的兩端。",
    "terms": "固有時間 proper time · 同時性 simultaneity · 靜止質量 rest mass"
  },
  {
    "id": "quantum",
    "part": "光與近代物理",
    "title": "量子物理與原子",
    "en": "Quantum & Atomic Physics",
    "goals": [
      "以光子解釋光電效應",
      "連結波函數、邊界條件與能階"
    ],
    "sections": [
      [
        "光的能量交換具有量子性",
        "單一光子的能量為 hf。光電效應中，若頻率低於金屬臨界頻率，再增加理想單光子照明的強度也不會產生逸出電子。高於臨界頻率後，強度主要影響逸出電子數，頻率影響最大動能。"
      ],
      [
        "物質波不是粒子的經典軌道",
        "德布羅意波長 λ=h/p 將動量與波動性連結。量子態由波函數描述，|ψ|² 是位置機率密度。機率總和必須歸一化；不確定關係涉及同一量子態中測量分布的標準差，不只是儀器技術不夠好。"
      ],
      [
        "能階由方程與邊界共同決定",
        "一維無限深方井中，井外波函數為零、井壁上連續為零，因此只容許整數個半波長。最低能量不為零，否則無法同時滿足侷限與非零歸一化。真實原子使用庫侖位能，不能直接套方井能階。"
      ]
    ],
    "eq": "E_\\gamma=hf,\\quad K_{\\max}=hf-\\phi,\\quad \\lambda=\\frac hp,\\quad \\Delta x\\,\\Delta p_x\\ge\\frac{\\hbar}{2}",
    "assume": "光電公式採單光子、忽略其他能量損失；方井採非相對論粒子及無限高位能牆。",
    "steps": [
      [
        "井內定態薛丁格方程。",
        "-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2}=E\\psi"
      ],
      [
        "由 ψ(0)=ψ(L)=0 選出允許波數。",
        "\\psi_n=\\sqrt{\\frac2L}\\sin\\frac{n\\pi x}{L},\\quad k_n=\\frac{n\\pi}{L}"
      ],
      [
        "代入 E=ℏ²k²/(2m)，n 從 1 開始。",
        "E_n=\\frac{n^2\\pi^2\\hbar^2}{2mL^2},\\quad n=1,2,\\ldots"
      ]
    ],
    "example": "Photons of energy 3.0 eV illuminate a metal with work function 2.0 eV. Find the maximum photoelectron kinetic energy and stopping potential.",
    "solution": [
      "光子能量高於功函數，能逸出電子。",
      "Kmax=3.0−2.0=1.0 eV=1.602×10⁻¹⁹ J。",
      "遏止電壓的大小滿足 eVs=Kmax，因此 Vs=1.0 V。"
    ],
    "pitfall": "把機率密度當成機率本身；連續位置的區間機率必須積分 |ψ|²dx。",
    "quiz": {
      "q": "In a one-dimensional infinite well, E₂/E₁ equals:",
      "opts": [
        "2",
        "4",
        "1/2",
        "√2"
      ],
      "a": 1,
      "why": "能階 Eₙ∝n²，因此 E₂/E₁=4。"
    },
    "problem": "An electron has momentum 6.63×10⁻²⁴ kg·m/s. Find its de Broglie wavelength using h=6.63×10⁻³⁴ J·s.",
    "answer": "λ=h/p=1.00×10⁻¹⁰ m=0.100 nm，與原子尺度相近。",
    "terms": "波函數 wavefunction · 功函數 work function · 能階 energy level"
  },
  {
    "id": "nuclear",
    "part": "光與近代物理",
    "title": "原子核、衰變與能量",
    "en": "Nuclear Physics",
    "goals": [
      "以質量差計算核反應能量",
      "分辨半衰期、平均壽命與活度"
    ],
    "sections": [
      [
        "束縛能衡量核的穩定程度",
        "原子核由質子與中子組成，核力在短距離內克服質子間的庫侖斥力。束縛核的靜止質量小於分開核子的質量和，差額對應形成時釋出的束縛能。比較每核子束縛能，可理解輕核融合與重核分裂為何可能釋能。"
      ],
      [
        "半衰期描述大量粒子的統計",
        "單一核何時衰變不可預先指定，但大量相同且互不影響的核，在固定衰變常數下服從指數律。半衰期是數目減半的時間；不是每個核都在半衰期那一刻衰變，也不會在兩個半衰期後全部消失。"
      ],
      [
        "反應能量需要一致的質量資料",
        "Q=(反應物總質量−生成物總質量)c²。正 Q 表示可釋放能量，仍須同時滿足動量、電荷與其他量子數守恆。使用中性原子質量或裸核質量必須一致，尤其 β 衰變需仔細處理電子質量。"
      ]
    ],
    "eq": "N(t)=N_0e^{-\\lambda t},\\quad A=\\lambda N,\\quad t_{1/2}=\\frac{\\ln2}{\\lambda},\\quad Q=\\Delta mc^2",
    "assume": "單一核種、固定衰變常數、沒有額外生成或補充；例題不考慮子核再衰變。",
    "steps": [
      [
        "每個尚未衰變的核在單位時間有相同衰變機率。",
        "\\frac{dN}{dt}=-\\lambda N"
      ],
      [
        "分離變數並以初始數目積分。",
        "\\ln\\frac{N}{N_0}=-\\lambda t\\Rightarrow N=N_0e^{-\\lambda t}"
      ],
      [
        "令 N/N₀=1/2，得到半衰期。",
        "t_{1/2}=\\frac{\\ln2}{\\lambda},\\quad \\tau_{\\rm mean}=\\frac1\\lambda"
      ]
    ],
    "example": "A sample has initial activity 800 Bq and half-life 6.0 hours. Find its activity after 18 hours.",
    "solution": [
      "經過 18/6=3 個半衰期。",
      "活度與未衰變核數成正比，因此 A=800×(1/2)³=100 Bq。",
      "Bq 表示每秒衰變次數；不是單次衰變能量，也不是生物效應的單位。"
    ],
    "pitfall": "把活度 Bq 與吸收劑量 Gy 或等效劑量 Sv 當成相同物理量。",
    "quiz": {
      "q": "After two half-lives, the fraction of original undecayed nuclei remaining is:",
      "opts": [
        "0",
        "1/2",
        "1/4",
        "1/8"
      ],
      "a": 2,
      "why": "每個半衰期乘上 1/2，兩次後為 (1/2)²=1/4。"
    },
    "problem": "A nuclear reaction loses 0.0020 u of rest mass. Estimate Q using 1 u·c²=931.5 MeV.",
    "answer": "Q=0.0020×931.5=1.863 MeV，依有效位數約 1.9 MeV。質量減少對應釋能。",
    "terms": "束縛能 binding energy · 活度 activity · 半衰期 half-life"
  }
];
