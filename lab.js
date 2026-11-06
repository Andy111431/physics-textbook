(()=>{'use strict';
let mode='projectile',t=0,playing=true,raf=0,prev=0;
const $=id=>document.getElementById(id),S={v:20,angle:45,g:9.8,m:2,s:6,r:4,k:12,amp:1.5};
function val(id){let el=document.querySelector('.labpane:not([hidden]) [data-key="'+id+'"]');if(el){S[id]=+el.value;el.parentElement.querySelector('strong').textContent=el.value}}
function read(){Object.keys(S).forEach(val)}
function line(c,x,y,X,Y,color,w=2){c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.strokeStyle=color;c.lineWidth=w;c.stroke()}
function arrow(c,x,y,dx,dy,color){let ex=x+dx,ey=y+dy,a=Math.atan2(dy,dx);line(c,x,y,ex,ey,color,3);c.fillStyle=color;c.beginPath();c.moveTo(ex,ey);c.lineTo(ex-10*Math.cos(a-.45),ey-10*Math.sin(a-.45));c.lineTo(ex-10*Math.cos(a+.45),ey-10*Math.sin(a+.45));c.fill()}
function stats(id,s){$(id).innerHTML=s}
function projectile(){let c=$('proj'),p=c.getContext('2d'),w=c.width,h=c.height,g=S.g,ang=S.angle*Math.PI/180,vx=S.v*Math.cos(ang),vy=S.v*Math.sin(ang),T=2*vy/g,R=vx*T,H=vy*vy/(2*g),tt=Math.min(t,T),x=vx*tt,y=Math.max(0,vy*tt-g*tt*tt/2);
p.clearRect(0,0,w,h);const X=a=>55+a/190*(w-82),Y=a=>h-37-a/90*(h-72);
p.fillStyle='#9fb8d1';p.font='13px system-ui';
for(let i=0;i<=5;i++){let a=i/5;line(p,X(190*a),27,X(190*a),h-37,'#2c445b',1);line(p,55,Y(90*a),w-27,Y(90*a),'#2c445b',1);p.fillText((190*a).toFixed(0),X(190*a)-12,h-14);p.fillText((90*a).toFixed(0),13,Y(90*a)+4)}
p.fillText('x (m)',w-63,h-5);p.fillText('y (m)',10,16);
function path(end){p.beginPath();for(let j=0;j<=120;j++){let u=end*j/120,px=X(vx*u),py=Y(vy*u-g*u*u/2);j?p.lineTo(px,py):p.moveTo(px,py)}}
p.setLineDash([7,7]);path(T);p.strokeStyle='#8ee5c0';p.lineWidth=2;p.stroke();p.setLineDash([]);path(tt);p.strokeStyle='#ffbb86';p.lineWidth=4;p.stroke();
let xx=X(x),yy=Y(y);p.beginPath();p.arc(xx,yy,8,0,7);p.fillStyle='#ffdd96';p.fill();
arrow(p,xx,yy,vx*2,-(vy-g*tt)*2,'#79c8ff');arrow(p,xx,yy,0,40,'#fa9885');
stats('pstats','經過 '+tt.toFixed(2)+' s｜位置 ('+x.toFixed(1)+', '+y.toFixed(1)+') m<br>射程 '+R.toFixed(1)+' m｜最高點 '+H.toFixed(1)+' m｜飛行時間 '+T.toFixed(2)+' s');
if(t>=T)playing=false;
}
function circular(){let c=$('circ'),p=c.getContext('2d'),w=c.width,h=c.height,cx=w*.48,cy=h*.5,rp=89,theta=t*S.s/S.r,x=cx+rp*Math.cos(theta),y=cy-rp*Math.sin(theta),ux=(cx-x)/rp,uy=(cy-y)/rp;
p.clearRect(0,0,w,h);p.beginPath();p.arc(cx,cy,rp,0,7);p.strokeStyle='#486882';p.lineWidth=3;p.stroke();line(p,cx,cy,x,y,'#3b6d84');p.beginPath();p.arc(x,y,9,0,7);p.fillStyle='#ffdc97';p.fill();arrow(p,x,y,-uy*76,ux*76,'#79c8ff');arrow(p,x,y,ux*68,uy*68,'#fa9885');
p.font='15px system-ui';p.fillStyle='#bcd8e9';p.fillText('藍：切向速度',25,30);p.fillText('橘：向心加速度',25,54);
stats('cstats','角速度 '+(S.s/S.r).toFixed(2)+' rad/s｜週期 '+(2*Math.PI*S.r/S.s).toFixed(2)+' s<br>向心加速度 '+(S.s*S.s/S.r).toFixed(2)+' m/s²｜徑向合力 '+(S.m*S.s*S.s/S.r).toFixed(2)+' N');
}
function spring(){let c=$('spr'),p=c.getContext('2d'),w=c.width,h=c.height,om=Math.sqrt(S.k/S.m),x=S.amp*Math.cos(om*t),block=w*.49+x*67;
p.clearRect(0,0,w,h);p.fillStyle='#315066';p.fillRect(45,38,24,141);
p.beginPath();p.moveTo(69,109);for(let i=1;i<=24;i++)p.lineTo(69+(block-69)*i/24,109+(i===24?0:(i%2?20:-20)));p.strokeStyle='#8ee5c0';p.lineWidth=3;p.stroke();
p.fillStyle='#79c8ff';p.fillRect(block,76,62,66);line(p,35,182,w-28,182,'#426178',2);p.setLineDash([4,6]);line(p,w*.49+31,45,w*.49+31,182,'#f9af87');p.setLineDash([]);p.fillStyle='#bcd8e9';p.font='15px system-ui';p.fillText('平衡位置',w*.49-2,210);
stats('sstats','位置 '+x.toFixed(2)+' m｜速度 '+(-S.amp*om*Math.sin(om*t)).toFixed(2)+' m/s<br>角頻率 '+om.toFixed(2)+' rad/s｜週期 '+(2*Math.PI/om).toFixed(2)+' s');
}
function render(){if(!document.getElementById('labv2'))return;if(mode==='projectile')projectile();if(mode==='circular')circular();if(mode==='spring')spring();const b=$('runbtn');if(b)b.textContent=playing?'⏸ 暫停':'▶ 播放'}
function loop(now){if(!$('labv2')){raf=0;return}if(playing)t+=Math.min((now-prev)/1000,.05);prev=now;render();raf=requestAnimationFrame(loop)}
window.labInput=()=>{read();t=0;playing=true;render()};
window.labPick=m=>{mode=m;t=0;playing=true;document.querySelectorAll('.labpane').forEach(e=>e.hidden=e.dataset.mode!==m);document.querySelectorAll('.labtab').forEach(e=>e.classList.toggle('selected',e.dataset.mode===m));read();render()};
window.labPlay=()=>{if(mode==='projectile'){let T=2*S.v*Math.sin(S.angle*Math.PI/180)/S.g;if(t>=T)t=0}playing=!playing;render()};
window.labReset=()=>{t=0;playing=false;render()};
function slider(key,title,min,max,step,value,unit){return '<label>'+title+' <strong>'+value+'</strong> '+unit+'<input data-key="'+key+'" type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'" oninput="labInput()"></label>'}
window.lab=()=>{if(raf){cancelAnimationFrame(raf);raf=0}current=9;menu();t=0;playing=true;mode='projectile';
$('app').innerHTML='<div id="labv2"><div class="eyebrow">REAL-TIME INTERACTIVE PHYSICS LAB</div><h1>讓物理公式真的動起來</h1><p class="muted">動畫持續播放，拖動滑桿會從 t=0 重新模擬。拋體固定座標尺度，便於看出射程差異。</p><nav class="labtabs"><button class="labtab selected" data-mode="projectile" onclick="labPick(&quot;projectile&quot;)">拋體運動</button><button class="labtab" data-mode="circular" onclick="labPick(&quot;circular&quot;)">圓周運動</button><button class="labtab" data-mode="spring" onclick="labPick(&quot;spring&quot;)">簡諧運動</button></nav>'+
'<section class="paper labpane" data-mode="projectile"><h2>拋體運動 · Projectile Motion</h2><p>橘線是走過的路徑，綠色虛線是預測軌跡。藍色箭頭是速度；紅色箭頭是重力加速度方向。</p><div class="labs">'+slider('v','初速度',5,40,1,20,'m/s')+slider('angle','發射角',5,85,1,45,'°')+slider('g','重力加速度',2,20,.2,9.8,'m/s²')+'</div><canvas id="proj" width="850" height="330"></canvas><div id="pstats" class="stats"></div><div class="mathnote"><h3>運動學方程</h3>\[x(t)=v_0\cos\theta\,t\]\[y(t)=v_0\sin\theta\,t-\frac12gt^2\]\[R=\frac{v_0^2\sin(2\theta)}{g}\]<p>適用：忽略空氣阻力、重力加速度不變、起落點等高。</p></div></section>'+
'<section class="paper labpane" data-mode="circular" hidden><h2>圓周運動 · Circular Motion</h2><p>調整速率與半徑會改變旋轉速度和週期；質量改變向心合力，但在速度與半徑固定時不改變加速度。</p><div class="labs">'+slider('m','質量',1,10,1,2,'kg')+slider('s','速率',1,15,1,6,'m/s')+slider('r','半徑',1,12,1,4,'m')+'</div><canvas id="circ" width="850" height="270"></canvas><div id="cstats" class="stats"></div><div class="mathnote"><h3>圓周運動公式</h3>\[\omega=\frac{v}{r},\qquad T=\frac{2\pi r}{v}\]\[a_c=\frac{v^2}{r}=\omega^2r\]\[\sum F_r=m\frac{v^2}{r}\]<p>向心力是徑向合力，不是獨立的新力。</p></div></section>'+
'<section class="paper labpane" data-mode="spring" hidden><h2>彈簧簡諧運動 · Simple Harmonic Motion</h2><p>調整質量、彈簧常數、振幅，觀察週期和最大位移。理想彈簧的週期與振幅無關。</p><div class="labs">'+slider('m','質量',1,10,1,2,'kg')+slider('k','彈簧常數',2,40,1,12,'N/m')+slider('amp','振幅',.2,2,.1,1.5,'m')+'</div><canvas id="spr" width="850" height="250"></canvas><div id="sstats" class="stats"></div><div class="mathnote"><h3>簡諧運動方程</h3>\[m\frac{d^2x}{dt^2}=-kx\]\[\omega=\sqrt{\frac{k}{m}},\qquad T=2\pi\sqrt{\frac{m}{k}}\]\[x(t)=A\cos(\omega t)\]<p>適用：理想線性彈簧，無阻尼，初始位移 A 且初始速度為零。</p></div></section>'+
'<div class="labcontrols"><button class="primary" id="runbtn" onclick="labPlay()">⏸ 暫停</button><button class="secondary" onclick="labReset()">↺ 重設到起點</button></div><p class="footer">理想化教學模擬。畫面為方便觀察的示意比例，數據由公式即時計算。</p></div>';
read();prev=performance.now();render();raf=requestAnimationFrame(loop);if(typeof typesetMath==='function')typesetMath($('labv2'));window.scrollTo(0,0)};
})();