const WA="254117447640";
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];const livestock=[
{name:"Friesian In-Calf Heifer",cat:"dairy",unit:"In-calf heifer",price:165000,img:"product-friesian-cattle.jpg",desc:"Second-lactation Friesian in-calf heifer with excellent conformation; confirm vaccination records and current availability before purchase."},
{name:"Jersey Dairy Cow",cat:"dairy",unit:"Dairy cow",price:135000,img:"product-jersey-dairy-cow.jpg",desc:"Jersey dairy cow known for high butterfat milk and a calm temperament."},
{name:"Ayrshire Pedigree Bull",cat:"dairy",unit:"Pedigree bull",price:280000,img:"product-ayrshire-pedigree-bull.jpg",desc:"Ayrshire pedigree bull with quality genetics for dairy breeding."},
{name:"Friesian Lactating Cow",cat:"dairy",unit:"Lactating cow",price:195000,img:"product-friesian-lactating-cow.jpg",desc:"Freshly calved Friesian cow for commercial dairy production."},
{name:"Sahiwal Cross Heifer",cat:"dairy",unit:"Young heifer",price:95000,img:"product-sahiwal-cross-heifer.jpg",desc:"Heat-tolerant Sahiwal cross heifer suitable for semi-arid and mixed farming regions."},
{name:"Fleckvieh Dairy Cow",cat:"dairy",unit:"Dual-purpose cow",price:180000,img:"product-fleckvieh-dairy-cow.jpg",desc:"Fleckvieh dual-purpose dairy cow with good milk-production potential and strong fertility."},
{name:"Full Blood Boer Goat",cat:"goat",unit:"Pedigree goat",price:5500,img:"product-full-blood-boer-goat.jpg",desc:"Full-blood Boer goat for meat production and breeding."},
{name:"Dorper Sheep",cat:"sheep",unit:"Breeding sheep",price:5500,img:"product-dorper-sheep.jpg",desc:"Dorper sheep known for fast growth, adaptability and meat production."},
{name:"Small Goat (3–5 Months)",cat:"goat",unit:"Young goat",price:6000,img:"small-goats-user.png",desc:"Young goat aged 3–5 months for farmers starting or expanding a goat-rearing project."},
{name:"Mature Goat",cat:"goat",unit:"Mature goat",price:12000,img:"saanen-dairy-goat.jpg",desc:"Mature goat suitable for breeding, herd expansion or other farm needs."},
{name:"Good Breeding Female Goat",cat:"goat",unit:"Breeding female",price:15000,priceText:"From KSh 15,000+",img:"goat1.png",desc:"Selected breeding female goats for farmers improving their breeding herds."},
{name:"Dairy Goat",cat:"goat",unit:"Dairy goat",price:20000,priceText:"From KSh 20,000+",img:"goat2.png",desc:"Dairy goats for farmers establishing or expanding milk production."},
{name:"Improved / Pure Dairy Goat Breeds",cat:"goat",unit:"Dairy breeding goat",price:0,priceText:"KSh 15,000–40,000+",img:"saanen-dairy-goat.jpg",desc:"Improved and pure dairy goat breeds for farmers seeking quality dairy genetics and herd performance."},
{name:"Holstein Friesian Calves",cat:"dairy",unit:"2–4 months calf",price:12000,img:"holstein-friesian-calves.png",desc:"Quality dairy calves from high-yielding dams. Ask about available ages and parentage."},
{name:"Ayrshire Dairy Cow",cat:"dairy",unit:"Dairy cow",price:140000,img:"product-ayrshire-pedigree-bull.jpg",desc:"Ayrshire dairy cow for farmers seeking a productive dairy breed."},
{name:"Girolando Breed",cat:"dairy",unit:"Girolando cow",price:0,img:"product-girolando-cattle.jpg",desc:"Heat-tolerant Gir × Holstein cross option suited to suitable Kenyan farming conditions."},
{name:"Saanen Dairy Goat",cat:"goat",unit:"Dairy goat",price:13500,img:"saanen-dairy-goat.jpg",desc:"Saanen dairy goats for milk production and breeding. Confirm age and availability."},
{name:"Hampshire Down Sheep",cat:"sheep",unit:"Hampshire Down lamb",price:6000,img:"hampshire-down-sheep.jpg",desc:"Hampshire Down sheep with meat-production potential."}
];
const feeds=[
{name:"Lucerne Hay",unit:"25 kg per bale",price:400,img:"feed-lucerne-hay.jpg",group:"hay",desc:"Nutritious lucerne hay suitable for dairy cattle and other livestock."},
{name:"Boma Rhodes Hay",unit:"18 kg per bale",price:200,img:"feed-boma-rhodes-hay.jpg",group:"hay",desc:"Quality Rhodes grass hay for livestock feeding, available in bulk."},
{name:"Barley",unit:"15 kg per bale",price:130,img:"feed-barley.jpg",group:"hay",desc:"Barley fodder supplied in convenient bales for livestock feeding."},
{name:"Lucerne Seeds",unit:"Per kilogram",price:1250,img:"feed-lucerne-seeds.jpg",group:"seed",desc:"Lucerne seeds for establishing productive fodder fields."},
{name:"Boma Rhodes Seeds",unit:"Per kilogram",price:450,img:"feed-boma-rhodes-seeds.jpg",group:"seed",desc:"Rhodes grass seeds for establishing pasture and fodder."},
{name:"Full-Corn Silage",unit:"Per kg (100 kg bale)",price:15,img:"feed-full-corn-silage.jpg",group:"silage",desc:"Full-corn chopped fodder available in bulk for livestock feeding."},
{name:"Non Full-Corn Silage",unit:"Per kg (100 kg bale)",price:10,img:"feed-non-full-corn-silage.jpg",group:"silage",desc:"Chopped fodder available for bulk livestock feeding."},
{name:"Molasses",unit:"20-litre bucket",price:900,img:"feed-molasses.jpg",group:"supp",desc:"Molasses available for livestock feeding and feed supplementation."},
{name:"Dry Maize — 90kg Bag",unit:"90 kg bag",price:3500,img:"dry-maize.jpg",group:"supp",desc:"Dry maize supplied in 90 kg bags for animal feed or milling."}
];
const chicks=[
{name:"1–3 Days Old Chicks",unit:"Per chick",price:110,img:"chick-1-3-days-old.jpg",group:"poultry",desc:"Healthy young chicks for farmers starting a new flock."},
{name:"1 Week Old Chicks",unit:"Per chick",price:150,img:"chick-1-week-old.jpg",group:"poultry",desc:"One-week-old chicks ready for continued brooding and care."},
{name:"2 Weeks Old Chicks",unit:"Per chick",price:190,img:"chick-2-weeks-old.jpg",group:"poultry",desc:"Two-week-old chicks for farmers seeking growing poultry."},
{name:"3 Weeks Old Light Brahma Chicks",unit:"Per chick",price:1250,img:"chicks-day-old-and-growing-1.jpg",group:"poultry",desc:"Three-week-old Light Brahma chicks for poultry enthusiasts and breeders."},
{name:"4 Weeks Old Chicks",unit:"Per chick",price:280,img:"chick-1-month-old.jpg",group:"poultry",desc:"Four-week-old chicks for farmers expanding a poultry flock."},
{name:"3 Months Old Chicks",unit:"Per bird",price:400,img:"chick-3-months-old.jpg",group:"poultry",desc:"Three-month-old birds available for your poultry project."},
{name:"4 Months Old Chicks",unit:"Per bird",price:500,img:"chick-4-months-old.jpg",group:"poultry",desc:"Four-month-old birds for farmers expanding their flock."},
{name:"5 Months Old Chicks",unit:"Per bird",price:700,img:"chick-5-months-old.jpg",group:"poultry",desc:"Five-month-old birds available for poultry farming."},
{name:"Light Brahma Breeding Pair",unit:"Per pair",price:2500,img:"chicks-day-old-and-growing-2.jpg",group:"poultry",desc:"Light Brahma breeding pair for poultry breeders. Request a current photo and confirm availability."},
{name:"Table Eggs",unit:"Per tray",price:800,img:"big-eggs.jpg",group:"poultry",desc:"Fresh farm table eggs for household and commercial use."},
{name:"Fertilized Eggs",unit:"Per tray",price:1000,img:"kienyeji-eggs.jpg",group:"poultry",desc:"Fertilized poultry eggs suitable for incubation. Confirm breed and collection details."}
];
const money=n=>"KSh "+(Number.isFinite(Number(n))?Math.round(Number(n)).toLocaleString("en-KE"):"0");function card(p){return `<article class="product-card" data-cat="${p.cat||''}" itemscope itemtype="https://schema.org/Product"><img class="zoomable-image" loading="lazy" decoding="async" src="${p.img}" alt="${p.name} at Delamare Farm Kenya" itemprop="image"><meta itemprop="name" content="${p.name}"><meta itemprop="description" content="${p.desc}"><div class="card-body"><span class="tag">${(p.cat||p.group||'PRODUCT').toUpperCase()}</span><h3 itemprop="name">${p.name}</h3><p itemprop="description">${p.desc}</p><span class="price">${p.priceText?`${p.priceText}`:p.price>0?`From <span>${money(p.price).split(" ").slice(1).join(" ")}</span>`:`Price on inquiry`}</span><br><button class="btn order-btn" data-name="${p.name}" data-unit="${p.unit}" data-price="${p.price||0}" data-desc="${p.desc}">Inquire About</button></div></article>`}function renderLivestock(filter="all"){const q=(document.querySelector("#product-search")?.value||"").trim().toLowerCase();const list=livestock.filter(p=>(filter==="all"||p.cat===filter)&&(!q||`${p.name} ${p.desc} ${p.cat}`.toLowerCase().includes(q)));const cattle=list.filter(p=>p.cat==="dairy"||p.cat==="beef");const other=list.filter(p=>p.cat!=="dairy"&&p.cat!=="beef");document.querySelector("#cattle-grid").innerHTML=cattle.map(card).join("");document.querySelector("#other-livestock-grid").innerHTML=other.map(card).join("");document.querySelector("#cattle-group").hidden=!cattle.length;document.querySelector("#other-livestock-group").hidden=!other.length;const st=document.querySelector("#catalog-status");if(st)st.textContent=`Showing ${list.length} of ${livestock.length} livestock options${q?` matching “${q}”`:""}.`;bindOrders();bindImageViewer()}function feedCard(p){return `<article class="feed-card" itemscope itemtype="https://schema.org/Product"><img class="zoomable-image" loading="lazy" decoding="async" src="${p.img}" alt="${p.name} for livestock at Delamare Farm Kenya" itemprop="image"><meta itemprop="name" content="${p.name}"><meta itemprop="description" content="${p.desc}"><div class="card-body"><span class="tag">${(p.group||"CHICKS").toUpperCase()}</span><h3 itemprop="name">${p.name}</h3><p itemprop="description">${p.desc}</p><span class="price">${p.priceText?`${p.priceText}`:p.price>0?`<span>${money(p.price).split(" ").slice(1).join(" ")}</span>`:`Price on inquiry`}</span><br><button class="btn order-btn" data-name="${p.name}" data-unit="${p.unit}" data-price="${p.price||0}" data-desc="${p.desc}">Inquire About</button></div></article>`}function renderFeeds(){for(const g of ['hay','seed','silage','supp']){document.querySelector('#'+({hay:'feed-grid',seed:'seed-grid',silage:'silage-grid',supp:'supp-grid'}[g])).innerHTML=feeds.filter(p=>p.group===g).map(feedCard).join('')}bindOrders()}function renderChicks(){document.querySelector('#chick-grid').innerHTML=chicks.map(feedCard).join('');bindOrders()}const modal=document.querySelector('#order-modal'),title=document.querySelector('#modal-title'),unit=document.querySelector('#modal-unit'),description=document.querySelector('#modal-description'),qty=document.querySelector('#quantity'),total=document.querySelector('#modal-total'),send=document.querySelector('#modal-send');let selected={price:0};let lastFocused=null;
function openOrder(p){lastFocused=document.activeElement;selected=p;title.textContent=p.name;unit.textContent=p.unit?`Unit: ${p.unit}`:'';description.textContent=p.desc||'Please contact our team for product details and availability.';qty.value=1;updateTotal();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>qty.focus(),0)}
function updateTotal(){const n=Math.max(1,Math.floor(Number(qty.value)||1));qty.value=n;const price=Math.max(0,Number(selected.price)||0);total.textContent=price?money(price*n):'Price on request';}
function closeOrder(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocused)lastFocused.focus()}
function bindOrders(){document.querySelectorAll('.order-btn').forEach(button=>button.onclick=()=>openOrder({name:button.dataset.name,unit:button.dataset.unit,price:Number(button.dataset.price),desc:button.dataset.desc||''}))}
function sendEnquiry(){const quantity=Math.max(1,Math.floor(Number(qty.value)||1));const price=Math.max(0,Number(selected.price)||0);const lineTotal=price?money(price*quantity):'Price to be confirmed';const message=['Hello Delamare Farm Kenya, I would like to enquire about the following product:','',`Product: ${selected.name}`,`Details: ${selected.desc||'Please share product details.'}`,`Quantity required: ${quantity} ${selected.unit||'units'}`,`Estimated total: ${lineTotal}`,'','Please confirm availability, delivery options, delivery charges and the final amount.'].join('\n');window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');}
document.querySelector('#modal-close').onclick=closeOrder;send.onclick=sendEnquiry;modal.onclick=e=>{if(e.target===modal)closeOrder()};qty.oninput=updateTotal;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOrder()});
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderLivestock(b.dataset.filter)});document.querySelector('#breed-form').onsubmit=e=>{e.preventDefault();const r=document.querySelector('#breed-result');r.textContent='Recommended starting point: Friesian or Ayrshire for strong dairy performance. Our team can tailor the choice to your farm.';r.style.display='block'};document.querySelector('#contact-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const msg=`Hello Delamare Farm Kenya. Name: ${f.get('name')}. Phone: ${f.get('phone')}. Interest: ${f.get('interest')}. Message: ${f.get('message')}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank')};renderLivestock();renderFeeds();renderChicks();bindImageViewer();

(function addProductStructuredData(){
  const products=[...livestock,...feeds,...chicks].map((p,i)=>{const item={"@type":"Product","@id":`#product-${i+1}`,"name":p.name,"description":p.desc,"image":new URL(p.img,document.baseURI).href};if(p.price>0)item.offers={"@type":"Offer","priceCurrency":"KES","price":String(p.price)};return item;});
  const script=document.createElement("script");script.type="application/ld+json";script.textContent=JSON.stringify({"@context":"https://schema.org","@graph":products});document.head.appendChild(script);
})();


// Full-screen image viewer: robust event delegation for all current and dynamically rendered images.
let imageViewer=null;
let imageViewerImg=null;
let imageViewerCaption=null;
let imageViewerClose=null;
let lastImageFocus=null;

function ensureImageViewer(){
  if(imageViewer) return;
  imageViewer=document.createElement('div');
  imageViewer.id='image-lightbox-runtime';
  imageViewer.setAttribute('role','dialog');
  imageViewer.setAttribute('aria-modal','true');
  imageViewer.setAttribute('aria-hidden','true');
  imageViewer.innerHTML=`
    <button type="button" id="image-lightbox-runtime-close" aria-label="Close full-screen image">×</button>
    <figure>
      <img id="image-lightbox-runtime-img" src="" alt="">
      <figcaption id="image-lightbox-runtime-caption"></figcaption>
    </figure>`;
  document.body.appendChild(imageViewer);
  imageViewerImg=imageViewer.querySelector('#image-lightbox-runtime-img');
  imageViewerCaption=imageViewer.querySelector('#image-lightbox-runtime-caption');
  imageViewerClose=imageViewer.querySelector('#image-lightbox-runtime-close');
  imageViewerClose.addEventListener('click',closeImageViewer);
  imageViewer.addEventListener('click',e=>{if(e.target===imageViewer) closeImageViewer()});
  imageViewerImg.addEventListener('click',e=>e.stopPropagation());
}

function openImageViewer(img){
  if(!img || img.id==='image-lightbox-runtime-img') return;
  ensureImageViewer();
  lastImageFocus=document.activeElement;
  const source=img.currentSrc || img.getAttribute('src') || img.src;
  if(!source) return;
  imageViewerImg.src=source;
  imageViewerImg.alt=img.alt || '';
  imageViewerCaption.textContent=img.alt || '';
  imageViewer.setAttribute('aria-hidden','false');
  imageViewer.classList.add('open');
  document.body.classList.add('lightbox-open');
  imageViewerClose.focus();
}

function closeImageViewer(){
  if(!imageViewer) return;
  imageViewer.classList.remove('open');
  imageViewer.setAttribute('aria-hidden','true');
  document.body.classList.remove('lightbox-open');
  imageViewerImg.src='';
  if(lastImageFocus && typeof lastImageFocus.focus==='function') lastImageFocus.focus();
}

function bindImageViewer(){
  document.querySelectorAll('img.zoomable-image').forEach(img=>{
    if(img.id==='image-lightbox-runtime-img') return;
    img.dataset.lightboxPrepared='1';
    img.tabIndex=0;
    img.setAttribute('role','button');
    img.setAttribute('aria-label',`Open ${img.alt || 'image'} full screen`);
  });
}

document.addEventListener('click',e=>{
  const img=e.target.closest?.('img.zoomable-image');
  if(img && img.id!=='image-lightbox-runtime-img') openImageViewer(img);
});

document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ') && document.activeElement?.matches?.('img.zoomable-image') && document.activeElement.id!=='image-lightbox-runtime-img'){
    e.preventDefault();
    openImageViewer(document.activeElement);
  }
  if(e.key==='Escape' && imageViewer?.classList.contains('open')) closeImageViewer();
});


// Mobile navigation
const mobileToggle=$(".mobile-menu-toggle"), mobileNav=$("#mobile-nav");
if(mobileToggle&&mobileNav){mobileToggle.addEventListener("click",()=>{const open=mobileToggle.getAttribute("aria-expanded")==="true";mobileToggle.setAttribute("aria-expanded",String(!open));mobileToggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");mobileNav.hidden=open;});mobileNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobileNav.hidden=true;mobileToggle.setAttribute("aria-expanded","false");mobileToggle.setAttribute("aria-label","Open navigation")}));}
// Live product search
$("#product-search")?.addEventListener("input",()=>{const active=$(".filters button.active")?.dataset.filter||"all";renderLivestock(active)});
// Customer reviews are displayed as an accessible, responsive card grid.

// Appointment request: the transaction code is passed to staff for manual review; no payment is processed here.
(()=>{
  const form=document.querySelector('#appointment-form');
  if(!form)return;
  const dateInput=document.querySelector('#appointment-date');
  const now=new Date();
  const localToday=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  dateInput.min=localToday;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const clean=value=>String(value||'').trim();
    const message=[
      'Hello Delamare Farm Kenya, I would like to request a farm appointment.',
      '',
      `Full name: ${clean(data.get('fullname'))}`,
      `Phone: ${clean(data.get('phone'))}`,
      `Email: ${clean(data.get('email'))||'Not provided'}`,
      `Appointment purpose: ${clean(data.get('purpose'))}`,
      `Preferred date: ${clean(data.get('date'))}`,
      `Preferred time: ${clean(data.get('time'))}`,
      `Number of visitors: ${clean(data.get('visitors'))}`,
      `Payment transaction code: ${clean(data.get('transaction'))}`,
      `Additional details: ${clean(data.get('details'))||'None'}`,
      '',
      'I have read the required Farm Visit & Appointment Guidebook and understand the booking terms. Please verify my payment transaction code and confirm whether the requested appointment time is available.',
      '',
      'I understand this is an appointment request, not a confirmed booking.'
    ].join('\n');
    const link=`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
    const opened=window.open(link,'_blank','noopener,noreferrer');
    const status=document.querySelector('#appointment-status');
    if(opened){status.textContent='WhatsApp opened with your booking details. Send the message there, then wait for staff to verify payment and confirm your appointment.';}
    else {status.textContent='Your browser blocked the WhatsApp window. Please allow pop-ups and submit again, or contact the farm directly at +254 117 447 640.';}
  });
})();
