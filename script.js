const CONFIG = {

  // ---------- HERO IMAGE (big arch in the middle of the cover) ----------
  // Put your image in an "images" folder and write its path here.
  // Example: heroImage: "images/hero.jpg"   (tall image, like a portrait, looks best)
  // Leave "" to see the sample artwork.
  // heroImage: "images/hero.webp",

  name: "Alister Lobo",
  role: "Graphic Designer",
  // ---------- COVER PAGE TEXT ----------
  coverTop: "Alister",             // big word behind the image
  coverBottom: "Lobo",             // big outline word in front of the image
  coverSide: "Graphic|Designer, Web Developer",   // small side text ( | = new line )
  coverNote: "Portfolio 2026",     // small text bottom right
  coverBadge: "Graphic Designer • Freelance • Available for work • ",  // spinning circle text
  coverStickers: ["Posters", "Social Media", "Branding", ],              // 3 floating tags
  location: "Mangalore, India",

  // ---------- CONTACT / SOCIAL / RESUME ----------
  email: "alisterlobo9483#gmail.com".replace('#','@'),  // write your email here, but replace @ with # to avoid spam
  // phone: "+91 00000 00000",
  resume: "resume.pdf",                      // put your resume.pdf next to index.html
  socials: [
    { name: "Behance",   
      url: "https://www.behance.net/alisterlobo1",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/behance-color-icon.svg"

     },
    { name: "Instagram", 
      url: "https://www.instagram.com/ux_horizon14", 
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.svg" 
    },

    { name: "LinkedIn",
        url: "https://www.linkedin.com/in/alister-lobo-8406252b5/?isSelfProfile=true", 
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.svg" 
    },

    { name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61572443549804", 
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.svg" }
  ],

  // ---------- ABOUT ----------
  about: "I'm a freelance graphic designer who turns ideas into bold, clear visuals. I work with brands, small businesses and creators to make posters, social media posts, book covers and brand looks that get noticed.",
  whatIDo: [
    "Social media posts & carousels",
    "Ad posters & product campaigns",
    "Brand identity & logos",
    "Book covers",
    "Event & conference banners"
  ],

  // tools: [                                   // level = 0 to 100
  //   { name: "Photoshop",        level: 90 },
  //   { name: "Illustrator",      level: 85 },
  //   { name: "Premiere Pro",     level: 80 },
  //   { name: "Capcut",           level: 80 },
  //   { name: "Canva",            level: 95 }
  // ],
// In CONFIG:
tools: [
  { 
    name: "Photoshop", 
    icon: "https://www.svgrepo.com/show/452149/adobe-photoshop.svg" 
  },
  { 
    name: "Illustrator", 
    icon: "https://www.svgrepo.com/show/452147/adobe-illustrator.svg" 
  },
  { 
    name: "Premiere Pro", 
    icon: "https://www.svgrepo.com/show/452150/adobe-premiere.svg" 
  },
  { 
    name: "CapCut", 
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg" 
  },
  { 
    name: "Canva", 
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png" 
  },

  { 
    name: "Figma", 
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/figma-icon.png" 
  }
],

  stats: [                                   // number counters
    { value: 1.5,   suffix: "+", label: "Years freelancing" },
    { value: 50, suffix: "+", label: "Designs delivered" },
    // { value: 30,  suffix: "+", label: "Happy clients" }
  ],
  experience: [
    { year: "May 2024 — Now", title: "Freelance Graphic Designer", text: "Posters, social media content, branding and editorial work for clients." },
    { year: "Education, 2022-2024",      title: "MCA — St Aloysius (Deemed to be University)", text: "Master of Computer Applications." },
    { year: "Also",           title: "MERN Stack Developer", text: "I design it, and I can code it too." }
  ],

  // ---------- YOUR WORK ----------
  // For every design:  title, img (path to your image), tag (small label)
  // img: ""  shows a sample placeholder. Posters keep their real shape automatically.
  // To add a design: copy one line and change it. To add a new section: add a new category.
  works: [
    { category: "Social Media",
      // desc: "Engaging promotional posts, carousels, and visual campaign creatives.",
       items: [
      { title: "PS5",       tag: "Instagram", img: "images/ps5.webp" , ph: [1080,1080] },
      { title: "Liquor",     tag: "Carousel",  img: "images/pod.webp" , ph: [1080,1350] },
      { title: "Coke",      tag: "Poster",    img: "images/coke.webp" , ph: [1000,1400] },      
      { title: "Nike",       tag: "Poster",    img: "images/nike.webp" , ph: [1000,1500] },
      { title: "Maserati",       tag: "Poster",    img: "images/maserOG1.webp" , ph: [1000,1500] },

      { title: "Jewellary",     tag: "Carousel",  img: "images/jewellery.webp" , ph: [1080,1350] }

    ]},

    
    { category: "Ad Posters", items: [
      { title: "Airpods",      tag: "Poster",    img: "images/ibubs.webp" , ph: [1000,1400] },
      { title: "drill",      tag: "Poster",  img: "images/drill.webp" , ph: [1000,1250] },
      { title: "Nike",       tag: "Poster",    img: "images/nike.webp" , ph: [1000,1500] },
      { title: "Dot & Key",       tag: "Poster",    img: "images/dot.webp" , ph: [1000,1500] },
      { title: "Watch",       tag: "Poster",    img: "images/watch1.webp" , ph: [1000,1500] },
      { title: "Chetak",       tag: "Poster",    img: "images/chetak.webp" , ph: [1000,1500] },
      { title: "sofa",       tag: "Poster",    img: "images/sofa.webp" , ph: [1000,1500] },
      { title: "Shampoo",       tag: "Poster",    img: "images/hair.webp" , ph: [1000,1500] }
    ]},

    { category: "Social Media Campaigns", items: [
      { title: "H&M",      tag: "Poster",    img: "images/hm1.webp" , ph: [1000,1400] },
      { title: "H&M",       tag: "Poster",    img: "images/hm3.webp" , ph: [1000,1500] },
      { title: "H&M",       tag: "Poster",    img: "images/hm5.webp" , ph: [1000,1500] },
      { title: "H&M",       tag: "Poster",    img: "images/hm6.webp" , ph: [1000,1500] },
      { title: "H&M",      tag: "Poster",  img: "images/hm2.webp" , ph: [1000,1250] },
      { title: "H&M",       tag: "Poster",    img: "images/hm4.webp" , ph: [1000,1500] },


     
    ]},


    { category: "Food & Beverage", items: [
      { title: "Burger",       tag: "Poster",    img: "images/burgerkingOSD.webp" , ph: [1000,1400] },
      { title: "Burger",       tag: "Poster",    img: "images/f&b-RecoveredArtboard 4.webp" , ph: [1000,1400] },
      { title: "Noodles",      tag: "Poster",    img: "images/f&b-RecoveredArtboard 1.webp" , ph: [1000,1400] },
      { title: "Cookie",      tag: "Poster",    img: "images/cookie.webp" , ph: [1000,1400] },
      { title: "Energy Drink",       tag: "Poster",    img: "images/f&b-RecoveredArtboard 5.webp" , ph: [1000,1500] },
      { title: "Biryani",      tag: "Poster",    img: "images/biryani.webp" , ph: [1000,1400] },
      { title: "Coffee", tag: "Poster",  img: "images/f&b-RecoveredArtboard 2.webp" , ph: [1000,1250] },
      { title: "Pringles", tag: "Poster",  img: "images/pringles.webp" , ph: [1000,1250] },
      

      
    ]},
    
    { category: "Real Estate", items: [
      { title: "Real Estate Branding", tag: "Logo + Kit",img: "images/estatePSDArtboard 4.jpg" , ph: [1400,1000] },
      { title: "Real Estate Branding",  img: "images/estatePSDArtboard 1.jpg" , ph: [1000,1300] },
      { title: "Real Estate Branding",  img: "images/estatePSDArtboard 2.jpg" , ph: [1000,1300] },
      { title: "Real Estate Branding",  img: "images/estatePSDArtboard 3.jpg" , ph: [1000,1300] },
      { title: "Real Estate Branding",  img: "images/estatePSDArtboard 5.jpg" , ph: [1000,1300] },
    ]},

    { category: "Creative Ads", items: [
      { title: "Creative Ads", img: "images/conceptual adsArtboard 1.jpg" , ph: [1400,1000] },
      { title: "Creative Ads",  img: "images/conceptual adsArtboard 2.jpg" , ph: [1000,1300] },
      { title: "Creative Ads",  img: "images/conceptual adsArtboard 3.jpg" , ph: [1000,1300] },
      { title: "Creative Ads",  img: "images/conceptual adsArtboard 4.jpg" , ph: [1000,1300] },
      { title: "Creative Ads",  img: "images/conceptual adsArtboard 5.jpg" , ph: [1000,1300] },
    ]},

    { category: "Flyers", items: [
      { title: "Flyer Design", img: "images/flyer1.webp" , ph: [1400,1000] },
      { title: "Flyer Design",  img: "images/flyer2.webp" , ph: [1000,1300] },
      { title: "Flyer Design",  img: "images/flyer3.webp" , ph: [1000,1300] },
      { title: "Flyer Design",  img: "images/flyer4.webp" , ph: [1000,1300] },
      { title: "Flyer Design",  img: "images/flyer5.webp" , ph: [1000,1300] },
    ]},

    { category: "Fashion", items: [
      { title: "Fashion Brochure", img: "images/fashion1.webp" , ph: [1400,1000] },
      { title: "Fashion Brochure",  img: "images/fashion2.webp" , ph: [1000,1300] },
      { title: "Fashion Brochure",  img: "images/fashion3.webp" , ph: [1000,1300] },
      { title: "Fashion Brochure",  img: "images/fashion4.webp" , ph: [1000,1300] },
      { title: "Fashion Brochure",  img: "images/fashion5.webp" , ph: [1000,1300] },
    ]},

    

    { category: "Book Covers", items: [
      { title: "The Last Light",    tag: "Cover",     img: "images/bookcover1.webp" , ph: [800,1200] },
      { title: "The Last Light",    tag: "mockup",     img: "images/hardcover_book_mockup.webp" , ph: [800,1200] },
      { title: "The Last Light",    tag: "mockup 2",     img: "images/book_three_quarter_mockup.webp" , ph: [800,1200] },


      { title: "Still Breathing",   tag: "Cover",     img: "images/newBooker333.webp" , ph: [800,1200] },
      { title: "Still Breathing",   tag: "mockup1",     img: "images/floating_paperback_book_1.webp" , ph: [800,1200] },

      { title: "Still Breathing",   tag: "mockup2",     img: "images/cozy_book_flatlay.webp" , ph: [800,1200] },
      // { title: "Still Breathing",   tag: "Cover",     img: "" , ph: [800,1200] }
    ]},

    { category: "Business Cards", items: [
      { title: "Business Card",    tag: "Card",     img: "images/card1.webp" , ph: [800,1200] },
      { title: "Business Card",    tag: "Card",     img: "images/card2.webp" , ph: [800,1200] },
      { title: "Business Card",    tag: "Card",     img: "images/card3.webp" , ph: [800,1200] },
      { title: "Business Card",   tag: "Card",     img: "images/card4.webp" , ph: [800,1200] },
      
    ]},


    { category: "Event Banners", items: [
      { title: "AI Conference",     tag: "Banner",    img: "images/banner3.webp" , ph: [1600,900] },

      { title: "House sale",     tag: "Banner",    img: "images/banner2.webp" , ph: [1600,900] },
      { title: "Tech Summit",       tag: "Banner",    img: "images/banner1.webp" , ph: [300,800] }


    ]}
  ]
};

(()=>{
const $=s=>document.querySelector(s);
const C=CONFIG;

/* ---------- placeholder image (shown when img is empty) ---------- */
const hues=[75,330,215,160,25,280];
function ph(w,h,title,i){
  const a=hues[i%hues.length],b=(a+70)%360;
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${a},85%,55%)'/><stop offset='1' stop-color='hsl(${b},80%,25%)'/></linearGradient></defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <circle cx='${w*0.75}' cy='${h*0.28}' r='${Math.min(w,h)*0.22}' fill='rgba(255,255,255,.18)'/>
  <rect x='${w*0.08}' y='${h*0.62}' width='${w*0.5}' height='${h*0.02}' fill='white' opacity='.8'/>
  <text x='${w*0.08}' y='${h*0.58}' font-family='Arial Black,sans-serif' font-weight='900' font-size='${Math.min(w,h)*0.09}' fill='white'>${title}</text>
  <text x='${w*0.08}' y='${h*0.7}' font-family='monospace' font-size='${Math.min(w,h)*0.035}' fill='white' opacity='.8'>REPLACE WITH YOUR DESIGN</text></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}

/* ---------- basic text ---------- */
document.title=C.name+" — "+C.role;
$('#logo').innerHTML=C.name.split(' ')[0]+'<span>.</span>'+(C.name.split(' ')[1]||'');
$('#cvA').textContent=C.coverTop;
$('#cvB').textContent=C.coverBottom;
$('#cvSide').innerHTML=C.coverSide.split('|').join('<br>');
$('#cvNote').textContent=C.coverNote;
$('#badgeTxt').textContent=(C.coverBadge||'').toUpperCase();
(C.coverStickers||[]).slice(0,3).forEach((t,i)=>{$('#stk'+(i+1)).textContent=t});
$('#aboutText').textContent=C.about;
$('#yr').textContent=new Date().getFullYear();
$('#fName2').textContent=C.name;

/* cover hero image (optional) */
if(C.heroImage){
  const hi=$('#heroImg');
  hi.src=C.heroImage;
  hi.onload=()=>hi.parentElement.classList.add('has-img');
}

/* marquee */
const words=[...C.whatIDo,C.role,'Available for work'];
const mq=words.map(w=>`<span>${w}</span>`).join('');
$('#marq').innerHTML=mq+mq;

/* about */
$('#chips').innerHTML=C.whatIDo.map(x=>`<span class="chip">${x}</span>`).join('');

// $('#tools').innerHTML=C.tools.map(t=>`<div class="tool"><div class="row"><span>${t.name}</span><span class="mono">${t.level}%</span></div><div class="bar"><i data-w="${t.level}"></i></div></div>`).join('');
$('#tools').innerHTML = C.tools.map(t => `
  <div class="tool-item">
    <div class="tool-icon">
      <img src="${t.icon}" alt="${t.name} logo" loading="lazy">
    </div>
    <span class="tool-name">${t.name}</span>
  </div>
`).join('');

$('#stats').innerHTML=C.stats.map(s=>`<div class="stat"><b data-n="${s.value}" data-s="${s.suffix}">0</b><span>${s.label}</span></div>`).join('');
$('#layers').innerHTML=C.experience.map(e=>`<div class="layer"><div class="yr">${e.year}</div><div><h4>${e.title}</h4><p>${e.text}</p></div></div>`).join('');

/* work */
const filters=['All',...C.works.map(c=>c.category)];
$('#filters').innerHTML=filters.map((f,i)=>`<button class="${i?'':'on'}" data-f="${f}">${f}</button>`).join('');
let n=0;

// $('#works').innerHTML=C.works.map(c=>`
//   <div class="cat-block" data-cat="${c.category}">
//     <h3 class="cat-title rv">${c.category} <small>${String(c.items.length).padStart(2,'0')} designs</small></h3>
//     <div class="masonry">
//       ${c.items.map(it=>{
//         const src=it.img||ph(it.ph?it.ph[0]:1000,it.ph?it.ph[1]:1300,it.title,n++);
//         return `<figure class="card rv" tabindex="0" data-src="${src}"><img loading="lazy" src="${src}" alt="${it.title}"><figcaption class="cap"><b>${it.title}</b><span>${it.tag||''}</span></figcaption></figure>`;
//       }).join('')}
//     </div>
//   </div>`).join('');

/* Find where $('#works').innerHTML is created and replace the card markup: */
$('#works').innerHTML=C.works.map(c=>`
  <div class="cat-block" data-cat="${c.category}">
    <h3 class="cat-title rv">${c.category}</h3>
    <div class="masonry">
      ${c.items.map(it=>{
        const src=it.img||ph(it.ph?it.ph[0]:1000,it.ph?it.ph[1]:1300,it.title,n++);
        return `
          <figure class="card rv" tabindex="0" data-src="${src}">
            <img loading="lazy" src="${src}" alt="${it.title}">
            <figcaption class="cap">
              <div class="cap-info">
                <b>${it.title}</b>${it.desc ? `<p class="cap-desc">${it.desc}</p>` : ''}
              </div>
              <span>${it.tag||''}</span>
            </figcaption>
          </figure>`;
      }).join('')}
    </div>
  </div>`).join('');

$('#filters').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.cat-block').forEach(bl=>{
    bl.classList.toggle('hide',b.dataset.f!=='All'&&bl.dataset.cat!==b.dataset.f);
  });
  observe();
});

/* lightbox */
const lb=$('#lb'),lbimg=$('#lbimg');
document.addEventListener('click',e=>{
  const c=e.target.closest('.card');
  if(c){lbimg.src=c.dataset.src;lb.classList.add('open');}
  else if(e.target===lb||e.target.id==='lbx')lb.classList.remove('open');
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')lb.classList.remove('open');
  if(e.key==='Enter'&&document.activeElement.classList.contains('card'))document.activeElement.click();
});

/* card tilt */
document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.02)`;
  });
  c.addEventListener('mouseleave',()=>c.style.transform='');
});

/* contact */
$('#mail').textContent=C.email;$('#mail').href='mailto:'+C.email;
$('#phone').textContent=C.phone;
// $('#socials').innerHTML=C.socials.map(s=>`
//   <a href="${s.url}" target="_blank" rel="noopener">
//   ${s.name}</a>`).join('');

$('#socials').innerHTML = C.socials.map(s => `
  <a href="${s.url}" target="_blank" rel="noopener">
    <span class="social-left">
      <img src="${s.icon}" alt="${s.name} logo" class="social-icon">
      <span>${s.name}</span>
    </span>
  </a>
`).join('');

['#resumeBtn','#resumeNav'].forEach(id=>{const a=$(id);a.href=C.resume;a.setAttribute('download','');});

// $('#form').addEventListener('submit',e=>{
//   e.preventDefault();
//   const body=`Name: ${$('#fName').value}\nEmail: ${$('#fMail').value}\n\n${$('#fMsg').value}`;
//   location.href=`mailto:${C.email}?subject=${encodeURIComponent('Project enquiry from '+$('#fName').value)}&body=${encodeURIComponent(body)}`;
// });

$('#form').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('#form button[type="submit"]');
  const originalText = btn.textContent;
  
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/xjygnbey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: $('#fName').value,
        email: $('#fMail').value,
        message: $('#fMsg').value
      })
    });

    if (res.ok) {
      btn.textContent = 'Message sent! ✓';
      $('#form').reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 4000);
    } else {
      throw new Error();
    }
  } catch (err) {
    btn.textContent = 'Failed to send';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
  }
});

/* thank you (letters) */
$('#thx').innerHTML='Thank<br>'+'you.'.split('').map(l=>`<span>${l}</span>`).join('');

/* nav */
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>60),{passive:true});
$('#burger').onclick=()=>$('#links').classList.toggle('open');
$('#links').addEventListener('click',e=>{if(e.target.tagName==='A')$('#links').classList.remove('open')});

/* cover mouse parallax (each part moves a different amount) */
const layers=document.querySelectorAll('.cover [data-depth]');
addEventListener('mousemove',e=>{
  if(scrollY>innerHeight)return;
  const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  layers.forEach(l=>{const d=+l.dataset.depth;l.style.translate=`${x*d*2}px ${y*d*2}px`});
});

/* custom cursor */
const dot=$('#dot'),ring=$('#ring'),xy=$('#xy');
let rx=0,ry=0,mx=0,my=0;
addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
  xy.style.transform=`translate(${mx+24}px,${my+22}px)`;
  xy.textContent=Math.round(mx)+', '+Math.round(my);
});
(function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;
  ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop)})();
document.addEventListener('mouseover',e=>{
  ring.classList.toggle('big',!!e.target.closest('a,button,.card,.chip'));
});

/* scroll reveal + bars + counters + export */
let io;
function observe(){
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting)return;
    const el=en.target;el.classList.add('in');
    el.querySelectorAll&&el.querySelectorAll('.bar i[data-w]').forEach(b=>b.style.width=b.dataset.w+'%');
    el.querySelectorAll&&el.querySelectorAll('[data-n]').forEach(count);
    io.unobserve(el);
  }),{threshold:.12});
  document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
}
function count(el){
  const end=+el.dataset.n,suf=el.dataset.s||'';let v=0;
  const step=Math.max(1,Math.ceil(end/50));
  const t=setInterval(()=>{v=Math.min(end,v+step);el.textContent=v+suf;if(v>=end)clearInterval(t)},30);
}
observe();

/* export animation + confetti when Thank you appears */
let done=false;
new IntersectionObserver((es,o)=>{
  if(!es[0].isIntersecting||done)return;done=true;
  const bar=$('#expBar'),txt=$('#expTxt');
  requestAnimationFrame(()=>bar.style.width='100%');
  let p=0;const t=setInterval(()=>{
    p+=2;txt.textContent='Exporting… '+Math.min(p,100)+'%';
    if(p>=100){clearInterval(t);txt.textContent='✓ Export complete — thanks for visiting!';burst();}
  },48);
},{threshold:.5}).observe($('#thanks'));

function burst(){
  const sec=$('#thanks'),cols=['#c8ff3d','#ff3d81','#3d7bff','#f3efe6'];
  for(let i=0;i<60;i++){
    const d=document.createElement('i');d.className='confetti';
    d.style.left=Math.random()*100+'%';
    d.style.background=cols[i%4];
    d.style.animationDuration=(2+Math.random()*2.5)+'s';
    d.style.animationDelay=Math.random()*.6+'s';
    sec.appendChild(d);setTimeout(()=>d.remove(),5500);
  }
}
})();
