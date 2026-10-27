const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
document.querySelector('#year').textContent=new Date().getFullYear();

const galleryDialog=document.querySelector('.gallery-dialog');if(galleryDialog){const photo=galleryDialog.querySelector('img'),caption=galleryDialog.querySelector('p');document.querySelectorAll('.gallery-card').forEach(card=>card.addEventListener('click',()=>{photo.src=card.dataset.gallerySrc;photo.alt=card.dataset.galleryTitle;caption.textContent=card.dataset.galleryTitle;galleryDialog.showModal();}));galleryDialog.querySelector('.gallery-close').addEventListener('click',()=>galleryDialog.close());galleryDialog.addEventListener('click',e=>{if(e.target===galleryDialog)galleryDialog.close()});galleryDialog.addEventListener('close',()=>{photo.removeAttribute('src')})}
